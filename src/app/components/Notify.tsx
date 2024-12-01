import Link from "next/link"
import { useEffect, useRef } from "react"

interface Props {
    openNotify: boolean,
    setOpenNotify: (value: boolean) => void
}
export default function Notify({ openNotify, setOpenNotify }: Props) {
    const asideRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        asideRef.current?.addEventListener("click", (e) => {
            if (e.target === asideRef.current)
                setOpenNotify(false)
        })
    }, [])
    return (
        <div ref={asideRef} className={` ${!openNotify ? "opacity-0 -z-10 " : " opacity-100 z-[999]"} fixed inset-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`}>
            <div className={`absolute overflow-y-auto bg-white transition-all  top-20 right-28 rounded-lg h-96  w-96 text-zinc-800 `}>
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