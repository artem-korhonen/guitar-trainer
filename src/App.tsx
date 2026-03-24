import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { useRef, useState } from "react";

import MenuPage from "./MenuPage";
import GamePage from "./GamePage";

function App() {
    const [stringNow, setStringNow] = useState<number | "all">();

    const audioRef = useRef<HTMLAudioElement>(null);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MenuPage setStringNow={setStringNow} playSound={playSound} />}
                />

                <Route
                    path="/game"
                    element={
                        stringNow
                            ? <GamePage stringNow={stringNow} playSound={playSound} />
                            : <Navigate to="/" />
                    }
                />
            </Routes>

            <audio ref={audioRef} src="/guitar-trainer/click.mp3"></audio>
        </HashRouter>
    );
}

export default App;