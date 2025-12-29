import Image from "next/image";
import Categories from "./components/Categories"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F7F3] font-sans p-9">
      <main>
        {/* Intro */}
        <div className="text-shadow-lg text-black ">
          <h1 className="text-3xl font-bold ">Welcome to Nicho's Personal Website!</h1>
          <p className="mt-2">This website showcases my projects, skills, and hobbies.</p>
        </div>

      </main>
    </div>
  );
}
