
'use client';

import styles from './login.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP LOGIN (we will connect backend later)
    if (email && password) {
      router.push('/dashboard');
    } else {
      alert('Please enter login details');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleLogin}>
        <h2 className={styles.title}>Hospital Management System</h2>

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
}
