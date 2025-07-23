import Link from "next/link";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Log In</h1>
        <p className={styles.subtitle}>Access your To-Do List</p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={styles.input}
              required
            />
          </div>

          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </form>

        <p className={styles.signupLink}>
          Don’t have an account?{" "}
          <Link href="/register" className={styles.link}>
            Sign Up
          </Link>
        </p>
      </main>
    </div>
  );
}