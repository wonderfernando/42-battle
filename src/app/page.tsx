import Image from "next/image";
import { BackgroundBeams } from "./components/background";
import { Header } from "./components/Header";
import { Button } from "@nextui-org/button";
import { LucideListStart, Rocket } from "lucide-react";
 
export default function Home() {
  return (
    <div className="bg-[#1C0A00] grid grid-rows-[80px_1fr] items-center justify-items-center min-h-screen">
    <Header/>
      <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
       
        <h1 className="text-4xl font-bold text-white text-center">42 Battle</h1>
        <p className="text-white text-6xl font-extrabold  capitalize"><span className="text-blue-400">CODIFIQUE</span>, COMPITA, EVOLUA!</p>
       <Button  className="bg-gradient-to-tr from-blue-800 to-blue-400 text-white font-extrabold" variant="flat" radius="sm" color="primary">Iniciar Batalha! <Rocket/></Button>
      </div>
   <BackgroundBeams/>
    </div>
  );
}
