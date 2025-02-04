import styles from './HydrateFallback.module.css';

export function HydrateFallback() {
  return (
    <div className={styles['loading-splash']}>
      <div className={styles['loading-splash-spinner']} />
      <p>Loading, please wait...</p>
    </div>
  );
}
