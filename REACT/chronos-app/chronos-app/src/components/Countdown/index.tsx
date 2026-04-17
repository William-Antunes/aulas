import styles from './styles.module.css';
import { useContext } from 'react';
import { useTaskContext } from '../../contexts/TaskContext';


export function Countdown() {
  const taskContext = useTaskContext();
  return (
    <div className={styles.container}>00:00</div>
  );
}
