import { Router } from 'express';
import bcrypt from 'bcryptjs';
import db, { runWithRetry, serializeDbError } from '../../utis.js';

const router = Router();
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.get('/', async (_req, res) => {
	const { data, error } = await runWithRetry(() =>
		db.from('usuarios').select('*').order('id', { ascending: true })
	);

	if (error) {
		return res.status(500).json({ error: serializeDbError(error) });
	}

	return res.json(data);
});

// Cadastro
router.post('/', async (req, res) => {
	const { nome, email, senha } = req.body;
	const normalizedEmail = String(email || '').trim().toLowerCase();
	const normalizedNome = String(nome || '').trim();

    if (!normalizedNome || !normalizedEmail || !senha) {
        return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
    }

    if (!EMAIL_REGEX.test(normalizedEmail)) {
        return res.status(400).json({ error: 'Email inválido.' });
    }

    if (String(senha).length < 8) {
        return res.status(400).json({ error: 'A senha deve ter pelo menos 8 caracteres.' });
    }

    const { data: existingUser, error: existingUserError } = await runWithRetry(() =>
        db.from('usuarios').select('id').eq('email', normalizedEmail).maybeSingle()
    );

    if (existingUserError) {
        return res.status(500).json({ error: serializeDbError(existingUserError) });
    }

    if (existingUser) {
        return res.status(400).json({ error: 'Email já cadastrado.' });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);


	const { data, error } = await runWithRetry(() =>
        db.from('usuarios').insert({ nome: normalizedNome, email: normalizedEmail, senha: hashedPassword }).select('id, nome, email').single()
	);

	if (error) {
		return res.status(500).json({ error: serializeDbError(error) });
	}

	return res.status(201).json(data);
});

// Login

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const normalizedEmail = String(email || '').trim().toLowerCase();

    if (!normalizedEmail || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    const { data: user, error: userError } = await runWithRetry(() =>
        db.from('usuarios').select('*').eq('email', normalizedEmail).maybeSingle()
    );

    if (userError) {
        return res.status(500).json({ error: serializeDbError(userError) });
    }

    if (!user) {
        return res.status(401).json({ error: 'Email ou senha inválidos.' });
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha);

    if (!passwordMatch) {
        return res.status(401).json({ error: 'Email ou senha inválidos.' });
    }

    return res.json({ message: 'Login bem-sucedido', user: { id: user.id, nome: user.nome, email: user.email } });

});

export default router;