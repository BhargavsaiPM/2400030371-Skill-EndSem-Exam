import React, { useState } from "react";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Button from "./components/Button";
import "./styles/globals.css";

export default function App() {
    const [page, setPage] = useState("home");
    return (
        <div>
            <header className="app-header">
                <div style={{ display: "flex", gap: 8 }}>
                    <Button variant={page === "home" ? "solid" : "outline"} onClick={() => setPage("home")}>Home</Button>
                    <Button variant={page === "showcase" ? "solid" : "outline"} onClick={() => setPage("showcase")}>Showcase</Button>
                </div>
            </header>
            <main>{page === "home" ? <Home /> : <Showcase />}</main>
        </div>
    );
}