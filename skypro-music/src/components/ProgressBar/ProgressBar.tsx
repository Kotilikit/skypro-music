import React from "react";
import styles from "./ProgressBar.module.css";
import { ProgressBarType } from "@/types";

const ProgressBar = React.memo(({ 
  max = 0, 
  value, 
  step, 
  onChange }: ProgressBarType) => {
  return (
    <input
      className={styles.styledProgressInput} 
      type="range" 
      min="0" 
      max={max} 
      value={value} 
      step={step} 
      onChange={onChange} 
    />
  );
});
ProgressBar.displayName = "ProgressBar";
export default ProgressBar;