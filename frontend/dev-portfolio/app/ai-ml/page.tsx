import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function AI_ML(){

    return(
        <div>
            <Navbar />

            <div className="flex flex-col gap-10 lg:gap-24 pb-32 pt-16">
                {/* HERO SECTION */}
                <div className="flex gap-2 pt-20 pb-4">
                    <div className="h-[50vh] flex flex-col py-20 gap-4 px-12 lg:w-1/2">
        
                        <div className="flex flex-col w-[95%] gap-4">
                            <p className="text-5xl font-bold">Innovating with Intelligence: AI & Machine Learning</p>
                            <p className="text-[1.2rem] text-gray-400">Harnessing the power of artificial intelligence and machine learning to build intelligent systems that learn, adapt, and drive impactful solutions across various domains.</p>
                        </div>
            
                        <div className="flex gap-2 lg:gap-6">
                            <button className="bg-personalpurple text-white px-4 py-1 rounded">View Fullstack projects</button>
                            <button className="px-6 py-1 shadow rounded">Contact Me</button>
                        </div>
                    </div>
                    
                    <div className="flex justify-end pr-32 items-center lg:w-1/2">
                        <div className="relative w-[90%] h-[80%]">
                            <Image className="rounded-xl" src="/personal/photo_2025-08-13_19-33-12.jpg" alt="My picture" fill />
                        </div>
                    </div>
                </div>

                {/* MAIN SECTION */}
                <div className="flex flex-col gap-8 lg:gap-20 items-center">
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

                     {/* Skills */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">Our AI/ML Impact & Metrics</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 xl:gap-4">
                            <Skills />
                            <Skills />
                            <Skills />
                            <Skills />
                            <Skills />
                            <Skills />
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