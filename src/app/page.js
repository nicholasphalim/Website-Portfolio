import Image from "next/image";
import Categories from "./components/Categories"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#F8F7F3] font-sans p-15">
      <main className="gap-y-8 flex flex-col">
        {/* Intro */}
        <div className="text-shadow-lg text-black flex-col flex gap-y-5">
          <h1 className="text-3xl font-bold ">Welcome to Nicho's Personal Website!</h1>
          <p className="">Nicholas Putra Halim, a second year ITB student studying Information Systems and Technology, with a high interest in Software Development.</p>
        </div>

        {/* Cards */}
        <div className="flex-col flex items-center justify-center">
          <Categories category="Projects"/>
          <Categories category="Skills"/>
          <Categories category="Get To Know Me!"/>
        </div>
      </main>
    </div>
  );
}
