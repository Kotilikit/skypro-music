'use client';

import { useEffect } from 'react';
import styles from "./error.module.css";

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.block}>
      <h2 className={styles.blink}>Что-то пошло не так!</h2>
      <button className={styles.button} onClick={reset}>Попробовать снова</button>
    </div>
  );
}