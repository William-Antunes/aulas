import { Menu } from '../../components/Menu/index.jsx'
import { Form } from '../../components/Form/index.jsx'
import { Table } from '../../components/Table/index.jsx'
import './index.modules.css';

export function HomePage() {
    return (
        <div className="home-page">
            <Menu />
            <h1>Bem-vindo à sua To-Do List</h1>
            <Form />
            <Table />
        </div>
    )
}   
