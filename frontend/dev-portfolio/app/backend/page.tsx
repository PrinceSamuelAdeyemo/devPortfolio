import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

import api from "@/utils/api";
import { myExpertiseSkillsType } from "@/types/myExpertiseType";


const getBackendSkills = async () =>{
    try{
      const response = await api.get('/api/expertise-skills/backend')
      return response.data
    }
    catch (error) {
      console.error(error)
    }
}

export default async function Backend(){
    const myBackendSkills = await getBackendSkills();

    return(
        <div>
            <Navbar />

            <div className="flex flex-col gap-10 lg:gap-24 pb-32 pt-16">
                {/* HERO SECTION */}
                <div className="py-28 bg-gradient-to-r from-white via-personalpurple via-50% to-white to-95%">
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-5xl font-bold">Backend Development</p>
                        <p className="text-base text-gray-400 text-center w-[30%]">Crafting robust, scalable, and secure server-side solutions that power modern applications. Explore my deep understanding of backend systems and architecture.</p>
                    </div>
                </div>

                {/* MAIN SECTION */}
                <div className="flex flex-col gap-8 lg:gap-20 items-center">
                    {/* Skills */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">Core Backend Skills</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 xl:gap-4">
                            {
                                myBackendSkills.map((skill: myExpertiseSkillsType) => (
                                    <Skills key={skill.id} {...skill} />
                                ))
                                
                            }
                            
                        </div>
                        
                    </div>


                    {/* featured frontend projects */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">Featured Backend Projects</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                        </div>
                    </div>

                    {/* Articles/Writeups */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">Backend Architecture Spotlights</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                        </div>
                    </div>


                </div>
            


            </div>

            <Footer />
        </div>
    )
}