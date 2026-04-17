import './index.modules.css'

import { api } from '../../services/api.js';
import { useNavigate } from 'react-router-dom';
import { setLoggedUser } from '../../utils/auth.js';


export function FormLogin() {

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData.entries());

        const payload = {
            email: String(formValues.email || '').trim().toLowerCase(),
            senha: formValues.password,
        }

        try { 
            const response = await api.post('/usuarios/login', payload)
            setLoggedUser(response.data.user)
            navigate('/')
        } catch(error) {
            console.error('Erro ao fazer login:', error)
            const message = error.response?.data?.error || 'Falha ao conectar com o servidor de login.'
            alert(message)
        }
    }

    return (
        

        <form className="form-login" onSubmit={handleSubmit}>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Login</button>
        </form>
    )
}