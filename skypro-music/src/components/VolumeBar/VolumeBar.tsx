import { ChangeEvent } from "react";
import styles from "./VolumeBar.module.css";

type VolumeBarType = {
  volume: number;
  step: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function VolumeBar({ volume, step, onChange }: VolumeBarType) {
  return (
    <input
      className={styles.styledProgressInput} 
      type="range" 
      min="0" 
      max="1" 
      value={volume} 
      step={step} 
      onChange={onChange} 
    />
  );
}