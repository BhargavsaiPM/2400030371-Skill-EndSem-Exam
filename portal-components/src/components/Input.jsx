import React from "react";

export default function Input({
    label,
    value,
    onChange,
    placeholder = "",
    type = "text",
    width = "100%",
    style = {},
    inputStyle = {},
    error,
    id,
    ...rest
}) {
    return (
        <div style={{ marginBottom: 12, width, ...style }}>
            {label && <label htmlFor={id} style={{ display: "block", marginBottom: 6, fontSize: 14 }}>{label}</label>}
            <input
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: 6,
                    border: `1px solid ${error ? "#e53e3e" : "#cbd5e0"}`,
                    outline: "none",
                    boxSizing: "border-box",
                    ...inputStyle,
                }}
                {...rest}
            />
            {error && <div style={{ color: "#e53e3e", marginTop: 6, fontSize: 13 }}>{error}</div>}
        </div>
    );
}