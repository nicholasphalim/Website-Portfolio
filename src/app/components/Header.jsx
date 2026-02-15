'use client'
import { useState } from "react";
import Image from "next/image";

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="w-full flex flex-col bg-foreground shadow-xl px-2 font-mono">

            {/* Main Header */}
            <div className="flex justify-between px-8">
                <div className="m-2 flex items-center">
                    <img onClick={() => setIsOpen(!isOpen)} src="/menulogo.svg" width={25}  className="transition-transform duration-500"></img>
                </div>
                <div className="m-2">
                    <img src='/favicon.ico' width={40} className=""></img>
                </div>

            </div>
            {/* Dropdown */}    
            <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-fit opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"}`}>
                <div className="text-background">
                    <ul className="p-2 pb-5 text-lg/10 flex flex-col gap-y-2">
                        <li className="border-3 px-3 rounded-xl flex"><Image src="/homeIcon.svg" width={18} height={18} alt="Home Icon"/>&nbsp;Home</li>
                        <li className="border-3 px-3 rounded-xl flex"><Image src="/userIcon.svg" width={18} height={18} alt="User Icon"/>&nbsp;About Me</li>
                        <li className="border-3 px-3 rounded-xl flex"><Image src="/projectsIcon.svg" width={18} height={18} alt="Curly Brackets Icon"/>&nbsp;Projects</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}