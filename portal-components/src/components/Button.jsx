import React from "react";

export default function Button({
    children,
    onClick,
    style = {},
    color,
    bg,
    size = "md",
    variant = "solid",
    className = "",
    ...rest
}) {
    const sizes = {
        sm: { padding: "6px 10px", fontSize: "0.85rem" },
        md: { padding: "8px 14px", fontSize: "1rem" },
        lg: { padding: "12px 18px", fontSize: "1.1rem" },
    };
    const base = {
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        display: "inline-block",
        textAlign: "center",
        ...sizes[size],
    };
    const computed =
        variant === "outline"
            ? { background: "transparent", border: `1px solid ${color || bg || "#333"}`, color: color || bg || "#333" }
            : variant === "ghost"
            ? { background: "transparent", color: color || bg || "#333" }
            : { background: bg || "#2b6cb0", color: color || "#fff" };

    return (
        <button onClick={onClick} className={className} style={{ ...base, ...computed, ...style }} {...rest}>
            {children}
        </button>
    );
}