// libs
import Image from "next/image";
import Link from "next/link";

import api from "@/utils/api";
import { myExpertiseType } from "@/types/myExpertiseType";

// Components
import Navbar from "@/components/Navbar";
import Expertise from "@/components/Expertise";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";


const getProgrammingLanguages = async () => {
    try{
      const response = await api.get('/api/programminglanguage')
      return response.data
    }
    catch (error) {
      console.error(error)
    }
  }

const getExpertise = async () => {
    try{
      const response = await api.get('/api/expertises')
      return response.data
    }
    catch (error) {
      console.error(error)
    }
  }

export default async function Home() {

  const myProgrammingLanguages = await getProgrammingLanguages();
  const myExpertises:myExpertiseType[] = await getExpertise()

  return (
    <div>
      <Navbar />

      {/* MAIN PAGE CONTENT */}
      <div className="flex flex-col gap-32 pb-32 lg:pt-12">
        {/* HERO SECTION */}
        <div className="flex gap-20 pt-20 pb-4">
          <div className="h-[50vh] flex flex-col py-24 gap-4 lg:pl-10 xl:pl-24 lg:w-1/2">

            <div className="flex flex-col w-[80%] gap-4">
              <p className="text-5xl font-bold">Samuel Adeyemo</p>
              <p className="text-personalpurple">Full Stack Engineer & AI Enthusiast</p>
              <p className="text-[1.2rem]">Bringing innovative ideas to life with robust backend systems, intuitive frontend interfaces, and cutting-edge AI/ML solutions. Passionate about building scalable and impactful digital experiences.</p>
            </div>

            <div className="flex gap-2 lg:gap-6">
              <button className="flex items-center gap-1 bg-personalpurple text-white px-4 py-1 rounded">Explore My Work 
                <span><i><Image className="text-white text-bold" src={"/icons/lucide-ArrowRight-Outlined.svg"} alt="" width={10} height={10} /></i></span>
              </button>
              <button className="px-6 py-1 shadow rounded">Get In Touch</button>
            </div>
          </div>
          
          <div className="flex justify-end pr-32 items-center lg:w-1/2">
            <div className="relative w-[60%] h-[80%]">
              <Image className="rounded-xl" src="/personal/photo_2025-08-13_19-33-12.jpg" alt="My picture" fill />
            </div>
          </div>
        </div>

        {/* MY EXPERTISE */}
        <div className="flex flex-col gap-2 lg:gap-10">
          <p className="text-2xl font-bold text-center">My Expertise</p>

          <div className="flex flex-col px-10 xl:px-20 lg:gap-10 lg:flex-row lg:justify-between">
            {
              myExpertises.map((myExpertise: myExpertiseType, index:number) => (
                <Expertise key={index} id={myExpertise.id} name ={myExpertise.name} description={myExpertise.description} icon={myExpertise.icon} image={myExpertise.image} />
              ))
            }
            
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="flex flex-col px-10 xl:px-20 gap-4">
          <div className="flex justify-between">
            <p className="font-bold text-2xl">Featured Projects</p>
            <Link className="flex items-center gap-1 text-personalpurple" href="#">View All Projects 
              <span><i><Image className="text-white text-bold" src={"/icons/lucide-ArrowRight-Outlined (2).svg"} alt="" width={10} height={10} /></i></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <FeaturedProject />
            <FeaturedProject />
            <FeaturedProject />
            <FeaturedProject />
            <FeaturedProject />
            <FeaturedProject />
          </div>
        </div>

        {/* CONCLUSION */}
        <div className="h-[30vh] w-full px-10 xl:px-20">
          <div className="flex flex-col gap-4 items-center justify-center rounded-xl outline-1 outline-gray-200 shadow w-full h-full">
            <p className="font-semibold text-3xl space-x-4">Ready to Transform Your Ideas into Reality?</p>
            <p className="text-center w-[30%]">Whether you have a complex challenge or a groundbreaking concept, let&apos;s connect and build something extraordinary together. Your next big project starts here.</p>
            <div className="flex gap-4">
              <button className="bg-personalpurple text-white px-4 py-2 rounded">Schedule a consultation</button>
              <button className="outline-1 outline-gray-200 px-4 py-2 rounded">View All Projects</button>
            </div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}
