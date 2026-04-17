import './index.modules.css'

export function CreateTaskForm() {
    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            const task = e.target.elements.task.value;
            console.log('Tarefa adicionada:', task);
            e.target.reset();
        }}>
            <label htmlFor="task">Criar tarefa</label>
            <textarea id="task" name="task" rows="3" required />
            <label htmlFor="description">Descrição</label>
            <textarea id="description" name="description" rows="4" />
            <label htmlFor="priority">Prioridade</label>
            <select id="priority" name="priority">
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>
    )
}