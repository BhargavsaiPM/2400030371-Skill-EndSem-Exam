import React from "react";

export default function Card({ title, children, style = {}, headerStyle = {}, footer, className = "", bg, padding = 16 }) {
    return (
        <div
            className={className}
            style={{
                background: bg || "#fff",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(15,23,42,0.06)",
                padding,
                boxSizing: "border-box",
                ...style,
            }}
        >
            {title && <div style={{ marginBottom: 10, fontWeight: 600, fontSize: 16, ...headerStyle }}>{title}</div>}
            <div>{children}</div>
            {footer && <div style={{ marginTop: 12 }}>{footer}</div>}
        </div>
    );
}