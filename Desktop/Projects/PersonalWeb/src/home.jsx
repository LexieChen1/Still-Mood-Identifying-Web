import { useState, useEffect } from "react";

export default function Home() {
  const items = [
    <>
      <h1 className="text-4sm font-savate animate-fade-in">HEY THERE</h1>
      <h1 className="text-9xl font-savate font-bold animate-fade-in">Welcome</h1>
      <h1 className="text-3xl font-marker animate-fade-in">to Lexie's page</h1>
    </>
  ]; 

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-background text-white flex items-center justify-center overflow-hidden">
      {/* Spotlight Cone Beam */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[20vw] h-[150vh] bg-gradient-to-b from-white/100 via-white/10 to-transparent rounded-full blur-[90px] opacity-80 pointer-events-none"></div>

      {/* Ground Light Circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40vw] h-[15vh] bg-white rounded-full blur-[30px] opacity-90 pointer-events-none"></div>

      {/* Text in the spotlight */}
      <div className="z-10 text-xl text-center space-y-4">
        {items[index]}
      </div>
    </div>
  );
}