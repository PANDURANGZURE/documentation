"use client"; // Required for Next.js App Router

import React from "react";
import Link from "next/link"; // Use Next.js Link
import styles from "./button.module.css";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  to,
  bg,
  color,
  style,
  ...props
}) => {
  const isLink = Boolean(to);
  
  // If it's a link, use Next.js Link component, otherwise use 'button'
  const Tag = isLink ? Link : "button";

  const customStyles = {
    ...style,
    backgroundColor: bg,
    color: color,
  };

  const combinedClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <Tag
      // Next.js Link uses 'href', not 'to'
      href={isLink ? to : undefined} 
      className={combinedClasses}
      // Only 'button' tag supports 'disabled' attribute
      disabled={!isLink && (disabled || loading) ? true : undefined}
      style={customStyles}
      {...props}
    >
      {loading ? "Loading..." : children}
    </Tag>
  );
};