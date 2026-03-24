import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import MenuPage from "./MenuPage";
import GamePage from "./GamePage";

function App() {
    const [stringNow, setStringNow] = useState<number | "all">();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MenuPage setStringNow={setStringNow} />}
                />

                <Route
                    path="/game"
                    element={
                        stringNow
                            ? <GamePage stringNow={stringNow} />
                            : <Navigate to="/" />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;