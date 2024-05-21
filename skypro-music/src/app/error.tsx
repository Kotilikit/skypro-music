'use client';

import { useEffect } from 'react';
import styles from "./error.module.css";

type ErrorType = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorType) {
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