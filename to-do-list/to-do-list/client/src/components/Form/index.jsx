import './index.modules.css'
import { useNavigate } from 'react-router-dom';

export function Form() {
    const navigate = useNavigate();

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            navigate('/create-task');
        }}>
            <button type="submit">Criar nova tarefa</button>
        </form>
    )
}