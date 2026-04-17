import { Menu } from '../../components/Menu/index.jsx'
import { Tablehistory } from '../../components/TableHistory/index.jsx'
import './index.modules.css';

export function HistoryPage() {
    return (
        <div className="history-page">
            <Menu />
            <h1>Histórico de tarefas.</h1>
            <Tablehistory />
        </div>
    )
}   
