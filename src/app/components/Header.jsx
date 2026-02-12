'use client'
import { useState } from "react";

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)
    function headerDropdown() {
        setIsOpen(!isOpen);
    }

    return(
        <div className="w-full flex flex-col bg-foreground shadow-xl px-2 font-mono">

            {/* Main Header */}
            <div className="flex justify-between px-8">
                <div className="m-2 flex items-center">
                    <img onClick={headerDropdown} src="/menulogo.svg" width={25}  className="transition-transform duration-500"></img>
                </div>
                <div className="m-2">
                    <img src='/favicon.ico' width={40} className=""></img>
                </div>

            </div>
            {/* Dropdown */}    
            {isOpen && (
                <div className="text-background">
                    <ul className="p-2 pb-5 text-xl/12 flex flex-col gap-y-2">
                        <li className="border px-2  rounded-xl">Home</li>
                        <li className="border px-2 rounded-xl">About Me</li>
                        <li className="border px-2 rounded-xl">Projects</li>
                    </ul>
                </div>
            )}
        </div>

    );
}