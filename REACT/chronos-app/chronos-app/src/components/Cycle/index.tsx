import styles from './styles.module.css';

export function Cycle() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.restTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.restTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.restTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.longRestTime}`}></span>
      </div>
    </div>
  );
}
