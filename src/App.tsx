import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { useState } from "react";

import MenuPage from "./MenuPage";
import GamePage from "./GamePage";

function App() {
    const [stringNow, setStringNow] = useState<number | "all">();

    return (
        <HashRouter>
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
        </HashRouter>
    );
}

export default App;