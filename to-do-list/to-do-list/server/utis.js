import process from 'node:process';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseAnonKey =
  process.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Variaveis de ambiente do Supabase ausentes. Defina VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY (ou equivalentes SUPABASE_*).'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function serializeDbError(error) {
  if (!error) {
    return null
  }

  return {
    message: error.message || 'Erro desconhecido',
    name: error.name || null,
    code: error.code || error.cause?.code || null,
    causeMessage: error.cause?.message || null,
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function isTransientSupabaseError(error) {
  if (!error) {
    return false
  }

  const message = String(error.message || '').toLowerCase()
  const code = error.code || error.cause?.code || null

  return (
    message.includes('fetch failed') ||
    message.includes('timeout') ||
    code === 'UND_ERR_CONNECT_TIMEOUT'
  )
}

export async function runWithRetry(operation, options = {}) {
  const retries = options.retries ?? 4
  const baseDelayMs = options.baseDelayMs ?? 800

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const result = await operation()

      if (!result?.error) {
        return result
      }

      if (!isTransientSupabaseError(result.error) || attempt === retries) {
        return result
      }
    } catch (error) {
      if (!isTransientSupabaseError(error) || attempt === retries) {
        throw error
      }
    }

    await sleep(baseDelayMs * (attempt + 1))
  }

  return { data: null, error: { message: 'Erro desconhecido em retry' } }
}

export default supabase
