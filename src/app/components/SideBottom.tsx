import { useEffect, useRef } from "react"
import  { CardUserInvite } from "./CardUser"
import { Button } from "@nextui-org/button"
import { AlertCircle, Rocket, Settings2, X } from "lucide-react"
import {  Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"
import Link from "next/link"

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
            <div className={`rounded-t-3xl absolute overflow-hidden bg-white transition-all   ${openSideBar ? "bottom-0" : "-bottom-full"} right-0 left-0 h-96 text-zinc-800 `}>
                <div className="grid grid-cols-2 overflow-hidden">
                    <div className=" overflow-y-auto h-96">
                        {[21, 34, , 312, 3123, 21321, 31, 31, 3, 3, 13, 1, 3212].map((value, index) => (
                            <CardUserInvite classNameProp="mb-1" key={index} img="./user.jpg" level="LV2" userName="ferda-si" />
                        ))}
                    </div>
                    <div className="p-4">
                        <div className="flex gap-1">
                            <Link href={"/battle/432"}><Button size="sm" className="bg-gradient-to-tr from-blue-800 to-blue-400 text-white font-extrabold" variant="flat" radius="sm" color="primary">Iniciar Batalha!<Rocket /></Button></Link>
                            <Link href="teste"><Button className=" bg-gradient-to-tr from-red-700 to-red-600 text-white font-extrabold" variant="flat" size="sm" radius="sm" color="danger">Cancelar<AlertCircle /></Button></Link>
                        </div>
                        <div className="">
                            <Table className="my-6 overflow-y-scroll h-72">
                                <TableHeader>
                                    <TableColumn>
                                        #
                                    </TableColumn>
                                    <TableColumn>
                                        status
                                    </TableColumn>
                                    <TableColumn>
                                        <Settings2 />
                                    </TableColumn>
                                </TableHeader>

                                <TableBody emptyContent="Nenhum guerreiro convocado">
                                    <TableRow>
                                        <TableCell>ferda-si</TableCell>
                                        <TableCell><Chip color="warning" ><span className="text-white font-bold">Pendente</span></Chip></TableCell>
                                        <TableCell><button><X className="text-red-500" /></button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>cgouveia</TableCell>
                                        <TableCell><Chip color="success" className="text-white"><span className="text-white font-bold">Aceite</span></Chip></TableCell>
                                        <TableCell><button><X className="text-red-500" /></button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>cgouveia</TableCell>
                                        <TableCell><Chip color="success" className="text-white"><span className="text-white font-bold">Aceite</span></Chip></TableCell>
                                        <TableCell><button><X className="text-red-500" /></button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>cgouveia</TableCell>
                                        <TableCell><Chip color="success" className="text-white"><span className="text-white font-bold">Aceite</span></Chip></TableCell>
                                        <TableCell><button><X className="text-red-500" /></button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>cgouveia</TableCell>
                                        <TableCell><Chip color="success" className="text-white"><span className="text-white font-bold">Aceite</span></Chip></TableCell>
                                        <TableCell><button><X className="text-red-500" /></button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>cgouveia</TableCell>
                                        <TableCell><Chip color="success" className="text-white"><span className="text-white font-bold">Aceite</span></Chip></TableCell>
                                        <TableCell><button><X className="text-red-500" /></button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>cgouveia</TableCell>
                                        <TableCell><Chip color="success" className="text-white"><span className="text-white font-bold">Aceite</span></Chip></TableCell>
                                        <TableCell><button><X className="text-red-500" /></button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>cgouveia</TableCell>
                                        <TableCell><Chip color="success" className="text-white"><span className="text-white font-bold">Aceite</span></Chip></TableCell>
                                        <TableCell><button><X className="text-red-500" /></button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>cgouveia</TableCell>
                                        <TableCell><Chip color="success" className="text-white"><span className="text-white font-bold">Aceite</span></Chip></TableCell>
                                        <TableCell><button><X className="text-red-500" /></button></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}