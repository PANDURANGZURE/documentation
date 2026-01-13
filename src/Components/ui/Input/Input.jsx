import styles from "./input.module.css";

export const Input = ({
  label,
  value,
  onChange,
  placeholder = " ",
  type = "text",
  size = "md",
  variant = "default",
  disabled = false,
  error = false,
  color = "black",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={{ "--zure-color": error ? "red" : color }}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error}
        className={`${styles.input} ${styles[variant]} ${styles[size]}`}
        {...props}
      />
      {label && <label className={styles.label}>{label}</label>}
    </div>
  );
};
