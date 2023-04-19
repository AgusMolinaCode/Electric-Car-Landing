import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import Cars from "@/sections/Cars";
import Power from "@/sections/Power";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <div className="bg-black">
        <div className='bg-[url("/Background.png")] bg-cover bg-center h-screen w-full]'>
          <Navbar />
          <Hero />       
        </div>
        <div className="w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black ">
          <About />
        </div>
        <div className="bg-black w-full">
          <Benefits />
          <div className="">
            <Cars />
          </div>
          <Power />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  )
}
