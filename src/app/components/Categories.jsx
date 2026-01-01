
export default function Categories({category, description}){
    return (
        <div className="border border-gray-400 text-black rounded-2xl font-sans m-3 p-3.5 flex flex-col justify-center items-center shadow-xl">
            <img alt="Category Picture" src='/nimonscooked.png' className="w-50 rounded-xl"></img>
            <h1 className="text-md font-medium text-center mt-2">{category}</h1>
        </div>
    );
}