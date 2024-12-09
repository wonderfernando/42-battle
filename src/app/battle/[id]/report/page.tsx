"use client"
import { Settings2, X } from "lucide-react";
import { Button, Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"
import Link from "next/link";

export default function ReportPage({ params }) {
    return (
        <div className="bg-white flex max-w-[600px] w-full rounded-lg shadow mx-auto mt-32 p-8 flex-col">
            <h1>Resultado <Link href={"/"}><Button size="sm" variant="bordered">voltar</Button></Link></h1>
            <div className="flex flex-col gap-2 w-full">
                <Table className="my-6 overflow-y-auto text-zinc-800 ">
                    <TableHeader>
                        <TableColumn>
                            #
                        </TableColumn>
                        <TableColumn>
                            user
                        </TableColumn>
                        <TableColumn>
                            Score
                        </TableColumn>
                        <TableColumn>
                            Tempo
                        </TableColumn>
                    </TableHeader>

                    <TableBody className="font-bold" emptyContent="Nenhum guerreiro convocado">
                        <TableRow>
                             <TableCell><img src="/user.jpg" className="w-8 h-8 rounded-full" alt="" /></TableCell>
                            <TableCell className="font-bold">ferda-si</TableCell>
                            <TableCell><Chip color="success" ><span className="text-white font-bold">120 xp</span></Chip></TableCell>
                            <TableCell className="font-bold">10 segundos</TableCell>
                        </TableRow>
                         <TableRow>
                             <TableCell><img src="/user.jpg" className="w-8 h-8 rounded-full" alt="" /></TableCell>
                            <TableCell className="font-bold">ferda-si</TableCell>
                            <TableCell className="font-bold"><Chip color="warning" ><span className="text-white font-bold">120 xp</span></Chip></TableCell>
                            <TableCell className="font-bold">10 segundos</TableCell>
                        </TableRow>
                        <TableRow>
                             <TableCell><img src="/user.jpg" className="w-8 h-8 rounded-full" alt="" /></TableCell>
                            <TableCell className="font-bold">ferda-si</TableCell>
                            <TableCell><Chip color="warning" ><span className="text-white font-bold">120 xp</span></Chip></TableCell>
                            <TableCell className="font-bold">10 segundos</TableCell>
                        </TableRow>
                   
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}