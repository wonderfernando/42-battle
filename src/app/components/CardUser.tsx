
import { Card, CardHeader } from "@nextui-org/react";
interface Props{
    img: string,
    level:string,
    userName:string
}
export default function CardUser({img, level, userName}: Props) {
    return (
        <Card>
        <CardHeader className="flex gap-1  items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={img} className="rounded-full w-8 h-8" />
                <span className="font-semibold">{userName}</span>
                <div className="rounded-full bg-green-800 w-2 h-2"/>
            </div>
           <span className="font-bold">{level}</span>
        </CardHeader>
    </Card>
    )
}