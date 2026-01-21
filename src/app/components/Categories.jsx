
export default function Categories({category, image, alt, className}){
    return (
        <div className="relative border rounded-2xl p-4 text-center text-xl border-dashed mx-17 bg-[#D2D4C2]">
            <img src={image} alt={alt} className={`absolute  ${className}`}></img>
            <img src="photography.jpg" alt="Category Image"></img>
            <h1 className="mt-2">{category}</h1>
        </div>
    );
}