import Image from "next/image"
import Link from "next/link"

import { myToolsType, myProjectsType } from "@/types/myExpertiseType"

export default function FeaturedProject(featured_project: myProjectsType) {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
    const tools:myToolsType[] = featured_project.tools
    
    return (
        <div className="shadow">
            <div className="relative w-full h-[35vh]">
                <Image className="" src={featured_project.image ? `${BASE_URL}${featured_project.image}`: ''} alt="Frontend Card Picture" fill />
                <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-b from-transparent to-white">

                </div>
            </div>
            <div className="flex flex-col gap-4 py-4 px-6">
                <p className="font-bold">{featured_project.name}</p>
                <p className="text-gray-500 text-base">{featured_project.description}</p>
                <div className="flex gap-4">
                    {
                        tools.map((tool, index) => (
                            <p key={index} className="bg-gray-100 text-xs font-semibold rounded w-fit px-2">{tool.name}</p>
                        ))
                    }
                </div>
                <Link className="flex items-center gap-1 text-personalpurple text-sm" target="_blank" href={`${featured_project.live_url ? featured_project.live_url : featured_project.github_url}`}>
                    {featured_project.live_url ? 'View Project' : 'View Code'}
                    <span><i><Image className="text-white text-bold" src={"/icons/lucide-ArrowRight-Outlined (2).svg"} alt="" width={10} height={10} /></i></span>
                </Link>
            </div>
        </div>
    )
}