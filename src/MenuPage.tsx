import { GUITARS } from "./guitarsData"
import { useNavigate } from "react-router-dom";

function MenuPage({ setStringNow }: { setStringNow: React.Dispatch<React.SetStateAction<number | "all" | undefined>> }) {
    const navigate = useNavigate();

    return (
        <div>
            <div className="p-6 min-h-screen bg-[#050505] bg-[radial-gradient(circle_at_50%_50%,#191919_0%,#050505_100%)] w-full flex flex-col items-center justify-center gap-10">
                <h1 className="text-4xl md:text-6xl p-2 font-extrabold bg-gradient-to-b from-[#fff] to-[#888] bg-clip-text text-transparent">Guitar Trainer</h1>
                <div className="flex items-center justify-center flex-wrap gap-10">
                    {Object.keys(GUITARS).map((_, index) => (
                        <button className="font-bold text-white text-lg md:text-2xl min-h-20 min-w-30 cursor-pointer p-7 border border-[#888] shadow-white shadow-sm hover:shadow-lg inset-shadow-white inset-shadow-lg transition-all pos-0 hover:-translate-y-1 rounded rounded-2xl bg-[#222]" onClick={() => {
                            setStringNow(index + 1);
                            navigate("/game");
                        }}>Струна {index + 1}</button>
                    ))}
                </div>
                <button className="font-bold text-white text-lg md:text-2xl cursor-pointer p-10 border border-[#00f] shadow-[#00f] shadow-[0_0_20px_rgba(66,165,245,0.2)] hover:shadow-[0_0_35px_rgba(66,165,245,0.6)] transition-all hover:scale-105 rounded rounded-2xl bg-[#42A5F5]" onClick={() => {
                    setStringNow("all");
                    navigate("/game");
                }}>Все вместе</button>
            </div>
        </div>
    )
}


export default MenuPage;
