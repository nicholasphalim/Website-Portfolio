
export default function Projects({title, src, alt, width}){
    return(
        <div className="border border-dashed rounded-lg p-3">
            <img src={src} alt={alt} width={width}></img>
            <h1 className="font-light">{title}</h1>
        </div>
    );
}