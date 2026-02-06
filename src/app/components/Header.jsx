
export default function Header(){
    return(
        <div className="w-full border-2 flex justify-between px-10 bg-foreground shadow-xl">
            <div className="m-3 flex items-center">
                <img src="/menulogo.svg" width={25}></img>
            </div>
            <div className="m-3">
                <img src='/favicon.ico' width={40} className=""></img>
            </div>
        </div>
    );
}