import Image from "next/image";
import Categories from "./components/Categories"
import githubLogo from "../../public/github.svg"
import linkedInLogo from "../../public/linkedin.svg"
import instagramLogo from "../../public/instagram.svg"
import Contacts from "./components/Contacts"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans px-10">
      <main className="flex flex-col">

        {/* Intro */}
        <div className="h-screen flex flex-col justify-center ">
          <div className="text-shadow-lg flex-col flex px-5 text-center">
            <h1 className="text-2xl font-bold mb-5">Hello World 👋,</h1>
            <h2 className="text-5xl font-bold leading-13"> <span className="text-2xl">I'm</span> Nicholas Putra Halim</h2>
            <p className="text-gray-400 mt-3 text-center text-shadow-none">📍Bandung, Indonesia</p>
          </div>
          <hr className=" w-full mt-2 transparent border-tertiary"></hr>
          
          <div className="flex p-3 justify-items-center ">
            <Contacts href="https://github.com/nicholasphalim" src="/github.svg" alt="Github Icon"/>
            <Contacts href="https://instagram.com/nicholasphalim" src="/instagram.svg" alt="Instagram Icon"/>
            <Contacts href="https://www.linkedin.com/in/nicholasphalim" src="/linkedin.svg" alt="LinkedIn Icon"/>
          </div>
          <div className="">
            <p className="text-center text-tertiary mt-10">A second year ITB student studying <b>Information Systems and Technology</b>, with a high interest in Software Development.</p>
          </div>
        </div>

        <div className="mt-10">
          <p>Let's Connect!</p>
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
