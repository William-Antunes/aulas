import './index.modules.css';
import { Menu } from '../../components/Menu/index.jsx'
import { FormSignUp } from '../../components/FormSignUp/index.jsx';

export function SignUpPage() {
    return (
        <div className="signup-page">
            <Menu />
            <h1>Sign Up Page</h1>
            <FormSignUp />

            
            <a href="/login">Já tem uma conta? Faça login aqui.</a>
        </div>
    )
}   
