import styles from "./switch.module.css";

export const Switch = ({
  checked = false,
  onChange,
  label,
  size = "md",
  variant = "solid",
  color = "#000",
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <label
      className={`${styles.wrapper} ${className}`}
      style={{ "--zure-color": color }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        role="switch"
        aria-checked={checked}
        {...props}
      />

      <span
        className={`${styles.track} ${styles[size]} ${styles[variant]}`}
      >
        <span className={styles.thumb} />
      </span>

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
