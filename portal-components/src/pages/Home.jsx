import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";

export default function Home() {
    const [name, setName] = useState("");
    return (
        <div style={{ padding: 20 }}>
            <h2>Home — Form Card</h2>

            <Card title="Sign up" bg="#f7fafc" padding={20}>
                <Input label="Full name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
                <Input label="Email" placeholder="you@example.com" style={{ marginTop: 8 }} />
                <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                    <Button bg="#2b6cb0">Primary</Button>
                    <Button variant="outline" color="#2b6cb0">Outline</Button>
                    <Button variant="ghost" color="#2b6cb0">Ghost</Button>
                </div>
            </Card>

            <div style={{ height: 16 }} />

            <Card title="Profile Preview" padding={16}>
                <div style={{ marginBottom: 10 }}>Name: <strong>{name || "—"}</strong></div>
                <Button bg="#48bb78">Save</Button>
            </Card>
        </div>
    );
}