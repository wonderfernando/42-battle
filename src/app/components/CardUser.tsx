
import { Button, Card, CardHeader } from "@nextui-org/react";
import { Send } from "lucide-react";
interface Props {
    img: string,
    level: string,
    userName: string,
    classNameProp?: string
}
export default function CardUser({ img, level, userName , classNameProp}: Props) {
    return (
        <Card className={`w-full rounded-sm ${classNameProp}`}>
            <CardHeader className="flex gap-1 items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={img} className="rounded-full w-8 h-8" />
                    <span className="font-semibold">{userName}</span>
                    <div className="rounded-full bg-green-800 w-2 h-2" />
                </div>
                 <span className="font-bold">{level}</span>
                 
            </CardHeader>
        </Card>
    )
}

export  function CardUserInvite({ img, level, userName , classNameProp}: Props) {
    return (
        <Card className={`w-full rounded-sm ${classNameProp}`}>
            <CardHeader className="flex gap-1 items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={img} className="rounded-full w-8 h-8" />
                    <span className="font-semibold">{userName}</span>
                    <div className="rounded-full bg-green-800 w-2 h-2" />
                </div>
                <div className="flex items-center gap-1">
                    <span className="font-bold">{level}</span>
                    <Button size="sm" variant="bordered"><Send /></Button>
                </div>
            </CardHeader>
        </Card>
    )
}

