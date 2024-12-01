"use client"
import { X } from "lucide-react"

interface Props{
    state: boolean,
    setState: (value: boolean) => void,
    classNameProps?: string
}

export default function CloseButton({state, setState, classNameProps}: Props) {
  function handleClick() {
    setState(false)
}
    return  <button onClick={handleClick} className={`absolute top-1 right-1 ${classNameProps}`}><X/></button>
}