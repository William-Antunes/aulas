import { Menu } from '../../components/Menu/index.jsx'
import { Form } from '../../components/Form/index.jsx'
import { CreateTaskForm } from '../../components/FormTask/index.jsx';
import './index.modules.css';

export function CreateTaskPage() {
    return (
        <div className="create-task-page">
            <Menu />
            <h1>Adicione a sua nova tarefa</h1>
            <CreateTaskForm />
        </div>
    )
}   
