"use client"
import Image from "next/image";
import { BackgroundBeams } from "./components/background";
import { Header } from "./components/Header";
import { Button } from "@nextui-org/button";
import { LucideListStart, Rocket } from "lucide-react";
import SideBar from "./components/Sidebar";
import MainContent from "./components/Main";
import { useState } from "react";
import Notify from "./components/Notify";
import SideBarBottom from "./components/SideBottom";

export default function Home() {
  const [openSideBar, setOpenSideBar] = useState(false)
  const [openNotify, setOpenNotify] = useState(false)
  const [openSideBarBotton, setOpenSideBottom] = useState(false)

  return (
    <div className="relative overflow-hidden bg-[#1C0A00] grid grid-rows-[80px_1fr] items-center  justify-items-center min-h-screen">
      <Header setOpenNotify={setOpenNotify} setOpenSideBar={setOpenSideBar} />
      <MainContent setOpenSideBottom={setOpenSideBottom}/>
      <BackgroundBeams />
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <Notify openNotify={openNotify} setOpenNotify={setOpenNotify} />
      <SideBarBottom openSideBar={openSideBarBotton} setOpenSideBottom={setOpenSideBottom} />
    </div>
  );
}
