"use client"
import Image from "next/image";
import { BackgroundBeams } from "./components/background";
import { Header } from "./components/Header";
import { Button } from "@nextui-org/button";
import { LucideListStart, Rocket } from "lucide-react";
import SideBar from "./components/Sidebar";
import MainContent from "./components/Main";
import React, { useEffect, useState } from "react";
import Notify from "./components/Notify";
import SideBarBottom from "./components/SideBottom";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { cn } from "./lib/utils";
import { LOGIN } from "./lib/API";
import { useUser } from "./lib/Context/UserContext";

export default function Home({searchParams}: {searchParams:  { [key: string]: string | string[] | undefined }}) {
  const [openSideBar, setOpenSideBar] = useState(false)
  const [openNotify, setOpenNotify] = useState(false)
  const [openSideBarBotton, setOpenSideBottom] = useState(false)
  const param = React.use<{ [key: string]: string}>(searchParams)
  const {setUser, user} = useUser()
  const router = useRouter()
  useEffect(() => {
    if (param.code) 
       (async () => {
          const data = await LOGIN({code: param.code})
          setUser({name: data.user.name, username: data.user.Username, image: data.user.image})
          console.log(data)
          window.localStorage.setItem("token", data.token)
          router.push("/")
       }) () 
  }, [param])
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
