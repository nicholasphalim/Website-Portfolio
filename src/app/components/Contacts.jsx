import Image from "next/image";

export default function Contacts({href, src, alt}){
    return(
        <a href={href} className="p-2 hover:bg-gray-100 hover:rounded-lg active:bg-white active:rounded-lg">
            <Image src={src} alt={alt} width={30} height={30}/>
        </a>
    );
}