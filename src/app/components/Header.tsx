"use client"
import { Button } from "@nextui-org/button";
import SideBar from "./Sidebar";
import { useState } from "react";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "../lib/Context/UserContext";

interface Props {
    setOpenSideBar: (value: boolean) => void,
    setOpenNotify: (value: boolean) => void,
}
export function Header({ setOpenSideBar, setOpenNotify }: Props) {
    const {user} = useUser()
   const router  = useRouter()
    function handleClickLogin(){     
        router.push("https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-ca0ce8fa093e07ecc0143382966aa08f3f1c457a88c0fc5ca1b301ccf506b45f&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code")
    }
    return <div className="flex items-center justify-between px-4 h-20 bg-black/10 text-white w-full z-40">
        <div className="flex gap-1">
            <h1 className="font-mono font-extrabold">42BATTLE</h1>
            <span className="font-thin">NIVEL 8</span>
        </div>
        <div className="flex gap-2">
            <button onClick={() => setOpenNotify(true)}><Bell fill="#fff" /></button>
            <Button onClick={() => setOpenSideBar(true)} radius="sm" variant="bordered" className="text-white">Guerreiros</Button>
            <Button onClick={handleClickLogin} variant="solid" color="primary" radius="sm">Entrar</Button>
            <img width={0} className="w-10  h-10 rounded-full" src={user?.image??"https://img.freepik.com/free-vector/question-mark-sign-concept-background-mental-health-awareness_1017-52818.jpg?t=st=1733705351~exp=1733708951~hmac=4f601fb5c1d3eb2aa8f401e7c569905090cf970f02175b423f380e4b36cc0915&w=740"} alt="" />
        </div>
    </div>
}