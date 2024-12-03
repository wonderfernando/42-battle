"use client"
import { Button } from "@nextui-org/button";
import SideBar from "./Sidebar";
import { useState } from "react";
import { Bell } from "lucide-react";

interface Props {
    setOpenSideBar: (value: boolean) => void,
    setOpenNotify: (value: boolean) => void,
}
export function Header({ setOpenSideBar, setOpenNotify }: Props) {

    return <div className="flex items-center justify-between px-4 h-20 bg-black/10 text-white w-full z-40">
        <div className="flex gap-1">
            <h1 className="font-mono font-extrabold">42BATTLE</h1>
            <span className="font-thin">NIVEL 8</span>
        </div>
        <div className="flex gap-2">
            <button onClick={() => setOpenNotify(true)}><Bell fill="#fff" /></button>
            <Button onClick={() => setOpenSideBar(true)} radius="sm" variant="bordered" className="text-white">Guerreiros</Button>

            {/*             <Button  variant="solid" color="primary" radius="sm">Entrar</Button>
 */}        </div>
    </div>
}