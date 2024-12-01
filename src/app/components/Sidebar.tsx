"use client"
import { Bell, Sword } from "lucide-react";
import CloseButton from "./CloseButton";
import { useEffect, useRef, useState } from "react";
import { div } from "framer-motion/client";
import { Card, CardHeader } from "@nextui-org/react";
import CardUser from "./CardUser";
interface Props {
    openSideBar: boolean,
    setOpenSideBar: (value: boolean) => void
}
export default function SideBar({ openSideBar, setOpenSideBar }: Props) {
    const asideRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        asideRef.current?.addEventListener("click", (e) => {
            if (e.target === asideRef.current)
                setOpenSideBar(false)
        })
    }, [])
    return (
        <div ref={asideRef} className={` ${!openSideBar ? "opacity-0 -z-10 " : " opacity-100 z-[999]"} fixed inset-0 backdrop-blur-[3px]  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`}>
            <div className={`absolute transition-all overflow-y-scroll right-0 ${!openSideBar && "translate-x-full"} h-screen grid grid-rows-[80px_1fr] w-96 text-zinc-800 `}>
                <header className="relative bg-white border-b px-4">
                    <h1 className="font-6 text-lg mt-6 whitespace-nowrap text-nowrap flex items-center font-mono font-bold">GUERREIROS <Sword fill="blue" /> </h1>
                    <CloseButton state={openSideBar} classNameProps="text-zinc-800" setState={setOpenSideBar} />
                </header>
                <div className="bg-white px-4 py-4 flex flex-col gap-2 ">
                    {
                        [1,2,3,4,5,6,7,8,9,12,21,13,3,39,23].map((value,index) => (
                            <CardUser key={index} img="./user.jpg" level="LV 5" userName="ferda-si"/>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}