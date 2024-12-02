import Link from "next/link"
import { useEffect, useRef } from "react"

interface Props {
    openSideBar: boolean,
    setOpenSideBottom: (value: boolean) => void
}
export default function SideBarBottom({ openSideBar, setOpenSideBottom }: Props) {
    const asideRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        asideRef.current?.addEventListener("click", (e) => {
            if (e.target === asideRef.current)
                setOpenSideBottom(false)
        })
    }, [])
    return (
        <div ref={asideRef} className={` ${!openSideBar ? "opacity-0 -z-10 " : " opacity-100 z-[999]"} fixed inset-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`}>
            <div className={`rounded-t-3xl absolute overflow-y-auto bg-white transition-all   ${openSideBar ? "bottom-0" :"-bottom-full"} right-0 left-0 h-96 text-zinc-800 `}>
                <div className="flex flex-col">
                    {[21, 34, ,312,3123,21321,31,31,3,3,13,1,3212].map((value, index) => (
                        <Link key={index} href="#">
                            <div className="flex flex-col px-4 py-4 bg-zinc-50 border-b ">
                                <span>Uma notificacao</span>
                                <span className="text-zinc-600 font-bold text-xs">ha 5 minutos</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}