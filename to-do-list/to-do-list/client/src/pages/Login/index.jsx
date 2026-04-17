import './index.modules.css';
import { Menu } from '../../components/Menu/index.jsx'
import { FormLogin } from '../../components/FormLogin/index.jsx';

export function LoginPage() {
    return (
        <div className="login-page">
            <Menu />
            <h1>Entrar</h1>
            <FormLogin />

            
            <a href="/signup">Ainda não tem uma conta? Cadastre-se aqui.</a>
        </div>
    )
}   
