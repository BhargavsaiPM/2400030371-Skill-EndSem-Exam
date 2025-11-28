import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";

export default function Showcase() {
    return (
        <div style={{ padding: 20 }}>
            <h2>Showcase — Variations</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Card title="Buttons" padding={18} bg="#fff8f0">
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <Button bg="#e53e3e">Danger</Button>
                        <Button bg="#805ad5">Purple</Button>
                        <Button bg="#ed8936">Orange</Button>
                        <Button variant="outline" color="#ed8936">Orange Outline</Button>
                        <Button variant="ghost" color="#805ad5">Ghost Purple</Button>
                    </div>
                </Card>

                <Card title="Inputs" padding={18} bg="#f0fff4">
                    <Input label="Small width" placeholder="Small" width="200px" />
                    <Input label="With error" placeholder="Invalid" error="Invalid value" />
                </Card>

                <Card title="Custom Styled Card" padding={18} bg="#ffffff">
                    <div style={{ padding: 12, border: "1px dashed #cbd5e0", borderRadius: 6 }}>
                        This card shows custom background, border and padding passed via props.
                    </div>
                </Card>

                <Card title="Action Row" padding={18} bg="#f7fafc">
                    <div style={{ display: "flex", gap: 8 }}>
                        <Button bg="#2b6cb0">Primary</Button>
                        <Button bg="#63b3ed" color="#000">Light</Button>
                        <Button variant="outline" color="#2b6cb0">More</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}