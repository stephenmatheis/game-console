import styles from './background.module.scss';

export function Background() {
    return (
        <div className={styles.background}>
            <div className={styles.sky} />
            <div className={styles.ground} />
            <div className={styles.dirt} />
        </div>
    );
}
