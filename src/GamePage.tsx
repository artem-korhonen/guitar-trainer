import { useEffect, useState } from "react";
import { GUITARS, NOTES } from "./guitarsData";
import { useNavigate } from "react-router-dom";

function shuffle(arr: string[]): string[] {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function GamePage({ stringNow }: { stringNow: number | "all" }) {
    const navigate = useNavigate();

    const [actualString, setActualString] = useState<number>();
    const [lad, setLad] = useState<number>();
    const [answer, setAnswer] = useState<string>();
    const [variants, setVariants] = useState<string[]>([]);

    const [selected, setSelected] = useState<string>();
    const [repeatActive, setRepeatActive] = useState<boolean>(false);

    const updateData = () => {
        const newActualString = stringNow === "all" ? Math.floor(Math.random() * 6) + 1 : stringNow;
        const newLad = Math.floor(Math.random() * GUITARS[newActualString - 1].length);
        const newAnswer = GUITARS[newActualString - 1][newLad];
        const newVariants = shuffle([...shuffle(NOTES.filter(n => n !== newAnswer)).slice(0, 5), newAnswer]);

        setSelected(undefined);
        setRepeatActive(false);
        setActualString(newActualString);
        setLad(newLad);
        setAnswer(newAnswer);
        setVariants(newVariants);
    }

    useEffect(() => {
        updateData()
    }, [])

    return (
        <div className="p-6 min-h-screen bg-[#050505] bg-[radial-gradient(circle_at_50%_50%,#191919_0%,#050505_100%)] w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl md:text-6xl text-center p-2 font-extrabold bg-gradient-to-b from-[#fff] to-[#888] bg-clip-text text-transparent">Струна {actualString}, лад {lad}</h1>
            <div className="flex flex-wrap justify-center gap-10 items-center">
                {variants.map((text) => (
                    <button className={`${selected ? (answer === text ? "bg-[#0f0]" : "bg-[#300]") : "bg-[#222]"} min-w-30 min-h-20 font-bold text-white text-md md:text-2xl cursor-pointer p-5 border border-[#888] shadow-white shadow-sm hover:shadow-lg inset-shadow-white inset-shadow-lg transition-all pos-0 hover:-translate-y-1 rounded rounded-2xl`} onClick={() => {
                        setSelected(text);
                        setRepeatActive(true);
                    }}>{text}</button>
                ))}
            </div>
            <div className="flex flex-wrap gap-10">
                <button className={`min-h-20 min-w-30 font-bold text-lg md:text-2xl cursor-pointer p-5 border ${repeatActive ? "text-white border-[#888] bg-[#222] shadow-white shadow-sm hover:shadow-lg" : "text-[#888] border-[#333] bg-[#111]"} inset-shadow-white inset-shadow-lg transition-all pos-0 hover:-translate-y-1 rounded rounded-2xl`} onClick={() => {
                    if (repeatActive) {
                        updateData();
                    }
                }}>Ещё раз</button>
                <button className="min-h-20 min-w-30 font-bold text-[#f00] text-lg md:text-2xl cursor-pointer p-5 border border-[#f00] shadow-[#a00] shadow-sm hover:shadow-lg transition-all pos-0 hover:-translate-y-1 rounded rounded-2xl bg-[#222]" onClick={() => {
                    navigate("/")
                }}>Назад</button>
            </div>
        </div>
    )
}


export default GamePage;