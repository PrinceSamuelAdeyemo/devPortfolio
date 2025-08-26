// libs
import Image from "next/image";
import Link from "next/link";

import api from "@/utils/api";
import { myExpertiseType, myProgrammingLanguagesType, myProjectsType } from "@/types/myExpertiseType";

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

const getProjects = async () => {
    try{
      const response = await api.get('/api/projects')
      console.log(response.data);
      return response.data
    }
    catch (error) {
      console.error(error)
    }
  }

export default async function AI_ML() {

  const myProgrammingLanguages:myProgrammingLanguagesType[] = await getProgrammingLanguages();
  const myExpertises:myExpertiseType[] = await getExpertise();
  const myProjects:myProjectsType[] = await getProjects();

  return (
    <div>
      <Navbar />

      {/* MAIN PAGE CONTENT */}
      <div className="flex flex-col gap-16 lg:gap-32 pb-32 lg:pt-12">
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-20 pt-4 lg:pt-20 pb-4">

          <div className="order-2 lg:order-1 lg:h-[50vh] flex flex-col items-center lg:items-start pt-4 pb-10 lg:py-24 gap-4 lg:pl-10 xl:pl-24 lg:w-1/2">
            <div className="flex flex-col w-[85%] xl:w-[80%] gap-4">
              <p className="text-2xl font-bold text-center lg:text-start lg:text-5xl">Innovating with Intelligence: AI & Machine Learning</p>
              <p className="text-center lg:text-start lg:text-[1.2rem]">Harnessing the power of artificial intelligence and machine learning to build intelligent systems that learn, adapt, and drive impactful solutions across various domains.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
              <button className="flex items-center gap-1 bg-personalpurple text-white px-4 py-1 rounded">View Fullstack Projects</button>
              <button className="px-6 py-1 shadow rounded">Contact Me</button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:items-center lg:w-1/2 xl:justify-end xl:pr-32">
            <div className="relative w-3/4 h-[30vh] lg:w-[80%] lg:h-[80%] x:w-[60%]">
              <Image className="rounded-xl" src="/AI_ML page image.jpg" alt="My picture" fill />
            </div>
          </div>
        </div>

        {/* MY EXPERTISE */}
        <div className="flex flex-col gap-2 lg:gap-10">
          <p className="text-2xl font-bold text-center">My Expertise</p>

          <div className="flex flex-col px-5 gap-6 lg:gap-10 lg:flex-row lg:justify-between xl:px-20">
            
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="flex flex-col px-10 xl:px-20 gap-4">
          <div className="flex flex-col gap-2 md:gap-0 md:justify-between md:flex-row">
            <p className="font-bold text-lg lg:text-2xl">Featured Projects</p>
            <Link className="flex items-center gap-1 text-personalpurple" href="#">View All Projects 
              <span><i><Image className="text-white text-bold" src={"/icons/lucide-ArrowRight-Outlined (2).svg"} alt="" width={10} height={10} /></i></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            
            
          </div>
        </div>

        {/* CONCLUSION */}
        <div className="min-h-[30vh] lg:h-[30vh] w-full px-4 lg:px-10 xl:px-20">
          <div className="flex flex-col gap-4 py-6 lg:py-0 items-center justify-center rounded-xl outline-1 outline-gray-200 shadow w-full h-full">
            <p className="font-semibold text-center lg:text-start w-[95%] text-xl lg:text-3xl lg:space-x-4">Ready to Transform Your Ideas into Reality?</p>
            <p className="text-center w-[95%]">Whether you have a complex challenge or a groundbreaking concept, let&apos;s connect and build something extraordinary together. Your next big project starts here.</p>
            <div className="flex flex-col lg:flex-row gap-4">
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
