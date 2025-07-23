import Link from "next/link";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.subtitle}>Create your To-Do List account</p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className={styles.input}
              required
            />
          </div>

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

          <button type="submit" className={styles.signupButton}>
            Sign Up
          </button>
        </form>

        <p className={styles.loginLink}>
          Already have an account?{" "}
          <Link href="/login" className={styles.link}>
            Log In
          </Link>
        </p>
      </main>
    </div>
  );
}