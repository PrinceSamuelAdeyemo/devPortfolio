import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

import api from "@/utils/api";
import { myExpertiseSkillsType } from "@/types/myExpertiseType";


const getBlockchainSkills = async () =>{
    try{
      const response = await api.get('/api/expertise-skills/blockchain')
      return response.data
    }
    catch (error) {
      console.error(error)
    }
}


export default async function Blockchain(){
    const myBlockchainSkills = await getBlockchainSkills();

    return(
        <div>
            <Navbar />

            <div className="flex flex-col gap-10 lg:gap-24 pb-32 pt-16">
                {/* HERO SECTION */}
                <div className="flex justify-center py-8">
                    <div className="flex flex-col items-center gap-4 py-10 bg-personallightblue rounded-xl w-[95%]">
                        <p className="text-4xl text-center font-bold w-[50%]">Blockchain & Smart Contracts Development</p>
                        <p className="text-base text-gray-400 text-center w-[30%]">Leveraging cutting-edge decentralized technologies to build secure, transparent, and innovative blockchain solutions, from smart contracts to full-scale dApps.</p>
                        <Image src={"/blockchain page image.jpg"} alt="Blockchain intro image" width={700} height={300} />
                        <button className="text-white text-sm font-semibold px-3 py-1 bg-personalpurple rounded">Explore My Blockchain Projects</button>
                    </div>
                </div>

                {/* MAIN SECTION */}
                <div className="flex flex-col gap-8 lg:gap-20 items-center">
                    {/* Skills */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">My Core Blockchain Competencies</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 xl:gap-4">
                            {
                                myBlockchainSkills.map((skill: myExpertiseSkillsType) => (
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
                        <p className="font-semibold text-2xl text-center ">My contributions & Resources</p>
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