import Image from "next/image"
import Link from "next/link"

export default function FeaturedProject() {

    return (
    <div className="shadow">
            <div className="relative w-full h-[35vh]">
            <Image className="" src="/personal/photo_2025-08-13_19-33-12.jpg" alt="Frontend Card Picture" fill />
            <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-b from-transparent to-white">

            </div>
            </div>
            <div className="flex flex-col gap-3 py-4 px-6">
            <p className="font-bold">E-commerce Analytics Dashboard</p>
            <p className="text-gray-500 text-base">A comprehensive dashboard for tracking sales, managing inventory, and visualizing customer data. Built with React and Node.js.</p>
            <div className="flex gap-4">
                <p className="bg-gray-100 text-xs font-semibold rounded w-fit px-2">React</p>
                <p className="bg-gray-100 text-xs font-semibold rounded w-fit px-2">React</p>
                <p className="bg-gray-100 text-xs font-semibold rounded w-fit px-2">React</p>
                <p className="bg-gray-100 text-xs font-semibold rounded w-fit px-2">React</p>
            </div>
            <Link className="text-personalpurple text-sm" href={"#"}>View Project</Link>
            </div>
        </div>
    )
}