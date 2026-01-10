import Image from "next/image";

export default function Contacts({href, src, alt, width, height}){
    return(
        <a href={href} className="p-2 hover:bg-gray-100 hover:rounded-lg active:bg-white active:rounded-lg items-center justify-center flex">
            <Image src={src} alt={alt} width={width} height={height}/>
        </a>
    );
}