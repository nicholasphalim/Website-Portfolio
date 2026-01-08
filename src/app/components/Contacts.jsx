import Image from "next/image";

export default function Contacts({href, src}){
    return(
        <a href={href} className="p-2 hover:bg-gray-100 hover:rounded-lg active:bg-white active:rounded-lg">
            <Image src={src} width={30} height={30}/>
        </a>
    );
}