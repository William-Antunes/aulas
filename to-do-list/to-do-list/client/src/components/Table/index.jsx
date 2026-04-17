import './index.modules.css';

export function Table() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tarefa</th>
                    <th>Status</th>
                    <th>Prioridade</th>
                    <th>Data de Criação</th>
                </tr>
            </thead>
            <tbody>
                {/* Aqui você pode mapear os dados das tarefas */}
                <tr>
                    <td>1</td>
                    <td>Exemplo de tarefa</td>
                    <td>Pendente</td>
                    <td>Média</td>
                    <td>2023-01-01</td>
                </tr>
            </tbody>
        </table>
    )
}