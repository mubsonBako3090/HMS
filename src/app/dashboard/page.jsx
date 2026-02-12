        import styles from './dashboard.module.css';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>

      <div className={styles.grid}>
        <Link href="/patients" className={styles.card}>Patients</Link>
        <Link href="/doctors" className={styles.card}>Doctors</Link>
        <Link href="/appointments" className={styles.card}>Appointments</Link>
        <Link href="/billing" className={styles.card}>Billing</Link>
        <Link href="/reports" className={styles.card}>Reports</Link>
      </div>
    </div>
  );
}
