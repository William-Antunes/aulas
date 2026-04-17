import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import https from 'node:https';
import db, { runWithRetry } from './utis.js';
import usuariosRoutes from './src/routes/usuarios.js';
import tarefasRoutes from './src/routes/tarefas.js';

const app = express();
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());

function serializeSupabaseError(error) {
  if (!error) {
    return null;
  }

  return {
    message: error.message || 'Erro desconhecido',
    name: error.name || null,
    code: error.code || error.cause?.code || null,
    causeMessage: error.cause?.message || null,
  };
}

function testHttps(url, timeoutMs = 10000) {
  return new Promise((resolve) => {
    const startedAt = Date.now();

    const req = https.get(url, (res) => {
      res.resume();
      resolve({
        ok: true,
        statusCode: res.statusCode,
        elapsedMs: Date.now() - startedAt,
      });
    });

    req.setTimeout(timeoutMs, () => {
      req.destroy(new Error('timeout'));
    });

    req.on('error', (error) => {
      resolve({
        ok: false,
        code: error.code || null,
        message: error.message || 'Erro de rede',
        elapsedMs: Date.now() - startedAt,
      });
    });
  });
}

app.get('/', (_req, res) => {
  res.send('Servidor da API rodando. Use /usuarios ou /tarefas.');
});

app.get('/health/db', async (_req, res) => {
  const [usuariosResult, tarefasResult] = await Promise.all([
    runWithRetry(() => db.from('usuarios').select('id').limit(1)),
    runWithRetry(() => db.from('tarefas').select('id').limit(1)),
  ]);

  const error = usuariosResult.error || tarefasResult.error;

  if (error) {
    const usuariosError = serializeSupabaseError(usuariosResult.error);
    const tarefasError = serializeSupabaseError(tarefasResult.error);

    return res.status(500).json({
      connected: false,
      error: serializeSupabaseError(error),
      usuariosError,
      tarefasError,
      hint:
        error.cause?.code === 'UND_ERR_CONNECT_TIMEOUT'
          ? 'Timeout de conexao HTTPS. Verifique firewall, VPN, proxy corporativo e acesso de saida para *.supabase.co na porta 443.'
          : null,
    });
  }

  return res.json({
    connected: true,
    usuariosCount: usuariosResult.data?.length ?? 0,
    tarefasCount: tarefasResult.data?.length ?? 0,
  });
});

app.get('/health/network', async (_req, res) => {
  const [supabaseNetwork, genericHttps] = await Promise.all([
    testHttps('https://onwqnktdgviszhdnktkk.supabase.co/rest/v1/', 10000),
    testHttps('https://api.github.com', 10000),
  ]);

  return res.json({
    timestamp: new Date().toISOString(),
    supabaseNetwork,
    genericHttps,
    note:
      !supabaseNetwork.ok && !genericHttps.ok
        ? 'Falha geral de saida HTTPS no ambiente (firewall, proxy, VPN ou rede bloqueada).'
        : null,
  });
});

app.use('/usuarios', usuariosRoutes);
app.use('/tarefas', tarefasRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});