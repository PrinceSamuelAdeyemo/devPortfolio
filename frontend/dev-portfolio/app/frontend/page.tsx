import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";

import api from "@/utils/api";
import { myExpertiseSkillsType, myToolsType, myProjectsType, myArticlesType } from "@/types/myExpertiseType";

const getFrontendTools = async () =>{
    try{
      const response = await api.get('/api/tools/frontend')
      return response.data
    }
    catch (error) {
      console.error(error)
    }
}

const getProjects = async () => {
    try{
      const response = await api.get('/api/projects/frontend')
      console.log(response.data);
      return response.data
    }
    catch (error) {
      console.error(error)
    }
  }

const getArticles = async () => {
    try{
      const response = await api.get('/api/articles/frontend')
      console.log(response.data);
      return response.data
    }
    catch (error) {
      console.error(error)
    }
}

export default async function Frontend(){
    const myFrontendTools:myToolsType[] = await getFrontendTools();
    const myProjects:myProjectsType[] = await getProjects();
    const myArticles:myArticlesType[] = await getArticles();

    return(
        <div>
            <Navbar />

            <div className="flex flex-col gap-10 lg:gap-24 pb-32 pt-16">
                {/* HERO SECTION */}
                <div className="pt-20">
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-5xl font-bold">Frontend Development</p>
                        <p className="text-base text-gray-400 text-center w-[30%]">{myFrontendTools[0].expertise?.description}</p>
                    </div>
                </div>

                {/* MAIN SECTION */}
                <div className="flex flex-col gap-8 lg:gap-20 items-center">
                    {/* Skills */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">Core Frontend Skills & Technologies</p>
                        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {
                                myFrontendTools.map((frontend_tool:myToolsType, index) => (
                                    <p key={index} className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">{frontend_tool.name}</p>
                                ))
                            }
                        </div>
                    </div>

                    {/* featured frontend projects */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">Featured Frontend Projects</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {
                                myProjects.map((featured_project, index) => (
                                    <FeaturedProject key={index} {...featured_project} />
                                ))
                            }
                        </div>
                    </div>

                    {/* Articles/Writeups */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">Frontend Trends & Insights</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject /> */}
                        </div>
                    </div>


                </div>
            


            </div>

            <Footer />
        </div>
    )
}