import Image from "next/image";
import Categories from "./components/Categories"
import Contacts from "./components/Contacts"
import Email from "./components/Email"
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans px-6 mt-50">
      <main className="flex flex-col font-mono">

        {/* Intro */}
        <div className="h-screen flex flex-col justify-center items-center mb-30">
          <h1 className="text-2xl text-center font-medium mb-2 ml-5 text-shadow-lg">Hello World 👋!</h1>
          <div className="text-shadow-md flex-col flex p-5 border-5 border-double rounded-xl">
            <img src='/fotodiri.jpeg' alt="Foto Diri" width={250} className="rounded-3xl my-3 mx-auto shadow-md"></img>
            <h2 className="text-3xl font-bold leading-13"><span className="text-2xl font-medium text-shadow-none">I'm</span> Nicholas Halim</h2>
            <p className="text-gray-400 text-shadow-none">📍Bandung, Indonesia</p>
            <p className="text-tertiary mt-3">A second year ITB student studying <b>Information Systems and Technology</b>, with a high interest in Software Engineering.</p>
          </div>

          {/* Contacts */}
          <div className="flex p-3 justify-center items-center">
            <Email></Email>
            <Contacts href="https://github.com/nicholasphalim" src="/github.svg" alt="Github Icon" width={30} height={30}/>
            <Contacts href="https://instagram.com/nicholasphalim" src="/instagram.svg" alt="Instagram Icon" width={30} height={30}/>
            <Contacts href="https://www.linkedin.com/in/nicholasphalim" src="/linkedin.svg" alt="LinkedIn Icon" width={30} height={30}/>
          </div>
          
          {/* Featured Projects */}
          <div className="w-full p-4">
            <h1 className="text-lg font-medium underline underline-offset-3">Featured Projects</h1>
            <div className="flex flex-col items-center text-center mt-3 gap-5">
              <Projects title="NimonsCooked" width={230} src='/nimonscooked.png' alt="NimonsCooked Image"/>
              <Projects title="ILCSense" width={230} src='/ilcsense.png' alt="ILCSence Image"/>
            </div>
          </div>

          {/* <div className="flex flex-col items-center justify-center bottom-0 absolute animate-bounce pb-5">
            <p>Know more about me!</p>
            <Image src="/pointing.png" alt="Pointing Finger Image" height={50} width={50}></Image>
          </div> */}
        </div>


        {/* Cards */}
        <div className="flex-col flex items-center justify-center gap-y-10 mt-10">
          <h1 className="text-2xl font-bold mb-15 underline-offset-6 underline">Activities I Do:</h1>
          <Categories category="Photography" image="fujifilm1.png" alt="Fujifilm Camera Image" className="w-48 -top-25 -left-20"/>
          <Categories category="Music" image="guitar.png" alt="Electric Guitar Image" className="w-30 -right-17 top-0"/>

        </div>
      </main>
    </div>
  );
}
