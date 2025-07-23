"use client"; // Required for Client Components in Next.js

import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Main content (left side) */}
        <main className={styles.main}>
          {/* Title with animation */}
          <h1 className={styles.logoText}>To-Do List</h1>

          {/* Subtitle */}
          <p className={styles.tagline}>
            Organize your tasks with ease and boost your productivity!
          </p>

          {/* Buttons */}
          <div className={styles.ctas}>
            <Link href="/register" className={styles.primary}>
              Sign Up
            </Link>
            <Link href="/login" className={styles.secondary}>
              Log In
            </Link>
          </div>
        </main>

        {/* Lottie animation (right side) */}
        <div className={styles.animationWrapper}>
          <DotLottieReact
            src="/background.lottie" // Path to the file in the public folder
            loop
            autoplay
            className={styles.lottie}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>© 2025 To-Do List App</span>
      </footer>
    </div>
  );
}