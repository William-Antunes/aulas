import './index.modules.css'
import { api } from '../../services/api.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function FormSignUp() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({ email: '', password: '' })

    function validateForm({ email, password }) {
        const nextErrors = { email: '', password: '' }

        if (!EMAIL_REGEX.test(email)) {
            nextErrors.email = 'Digite um e-mail valido.'
        }

        if (String(password || '').length < 8) {
            nextErrors.password = 'A senha deve ter pelo menos 8 caracteres.'
        }

        setErrors(nextErrors)
        return !nextErrors.email && !nextErrors.password
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const formValues = Object.fromEntries(formData.entries())

        const payload = {
            nome: String(formValues.username || '').trim(),
            email: String(formValues.email || '').trim().toLowerCase(),
            senha: formValues.password,
        }

        if (!validateForm({ email: payload.email, password: payload.senha })) {
            return
        }

        try {
            await api.post('/usuarios', payload)
            navigate('/login')
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error)
            const message = error.response?.data?.error || 'Nao foi possivel cadastrar. Tente novamente.'
            alert(message)
        }
    }

    return (
        <form className="form-signup" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                required
                className={errors.email ? 'input-error' : ''}
                onChange={() => {
                    if (errors.email) {
                        setErrors((prev) => ({ ...prev, email: '' }))
                    }
                }}
            />
            {errors.email ? <p className="form-error">{errors.email}</p> : null}

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                required
                minLength={8}
                className={errors.password ? 'input-error' : ''}
                onChange={() => {
                    if (errors.password) {
                        setErrors((prev) => ({ ...prev, password: '' }))
                    }
                }}
            />
            {errors.password ? <p className="form-error">{errors.password}</p> : null}

            <button type="submit">Sign Up</button>
        </form>
    )
}