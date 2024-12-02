import { Button } from "@nextui-org/button";
import { Rocket } from "lucide-react";
interface Props {
    setOpenSideBottom: (value: boolean) => void
}
export default function MainContent({setOpenSideBottom}: Props) {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-4 text-center z-40">
       
        <h1 className="text-4xl font-bold text-white text-center">42 Battle</h1>
        <p className="text-white text-6xl font-extrabold  capitalize"><span className="text-blue-400">CODIFIQUE</span>, COMPITA, EVOLUA!</p>
        <Button onClick={() => setOpenSideBottom(true)} className="bg-gradient-to-tr from-blue-800 to-blue-400 text-white font-extrabold" variant="flat" radius="sm" color="primary">Iniciar Batalha! <Rocket/></Button>

     </div>
    )
}