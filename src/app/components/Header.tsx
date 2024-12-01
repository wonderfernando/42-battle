import { Button } from "@nextui-org/button";

 export function Header() {
    return <div className="flex items-center justify-between px-4 h-20 bg-black/10 text-white w-full">
        <h1>42BATTLE</h1>
        <div className="flex gap-2">
            <Button radius="sm" variant="bordered" className="text-white">Guerreiros</Button>
            <Button variant="solid" color="primary" radius="sm">Entrar</Button>
        </div>
    </div>
}