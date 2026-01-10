import Image from "next/image";
import Categories from "./components/Categories"
import githubLogo from "../../public/github.svg"
import linkedInLogo from "../../public/linkedin.svg"
import instagramLogo from "../../public/instagram.svg"
import Contacts from "./components/Contacts"
import Email from "./components/Email"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans px-6">
      <main className="flex flex-col font-mono">

        {/* Intro */}
        <div className="h-screen flex flex-col justify-center ">
          <h1 className="text-2xl text-center font-medium mb-2 ml-5">Hello World 👋</h1>
          <div className="text-shadow-md flex-col flex p-5 border border-dashed rounded-xl">
            <h2 className="text-3xl font-bold leading-13"><span className="text-2xl font-medium text-shadow-none">I'm</span> Nicholas Halim</h2>
            <p className="text-gray-400 text-shadow-none">📍Bandung, Indonesia</p>
            <p className="text-tertiary mt-3">A second year ITB student studying <b>Information Systems and Technology</b>, with a high interest in Software Development.</p>
          </div>
          

          <div className="flex p-3 justify-center items-center ">
            <Email></Email>
            <Contacts href="https://github.com/nicholasphalim" src="/github.svg" alt="Github Icon" width={30} height={30}/>
            <Contacts href="https://instagram.com/nicholasphalim" src="/instagram.svg" alt="Instagram Icon"  width={30} height={30}/>
            <Contacts href="https://www.linkedin.com/in/nicholasphalim" src="/linkedin.svg" alt="LinkedIn Icon"  width={30} height={30}/>
          </div>
          <Image src="/pointing.png" height={50} width={50} className="opacity-80 right-5 bottom-0 absolute animate-bounce scr"></Image>
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
