/* checkbox.tsx */
"use client";
import React, { useId } from "react";
import styles from "./checkbox.module.css";

export const Checkbox = ({
  label,
  checked,
  onChange,
  size = "md",
  variant = "default", // default | outline | ghost
  disabled = false,
  error = false,
  color = "#2563eb", 
  className = "",
  ...props
}) => {
  const id = useId();

  return (
    <div 
      className={`${styles.container} ${className}`}
      style={{ "--zure-color": color }}
    >
      <label className={`${styles.wrapper} ${disabled ? styles.disabled : ""}`}>
        <div className={styles.inputWrapper}>
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={styles.input}
            {...props}
          />
          {/* The box that changes based on variant */}
          <div className={`${styles.checkmark} ${styles[variant]} ${styles[size]} ${error ? styles.error : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
        
        {label && <span className={styles.label}>{label}</span>}
      </label>
    </div>
  );
};