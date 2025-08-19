import Image from "next/image";
import { myExpertiseType } from "@/types/myExpertiseType";
import {baseUrl} from "@/utils/api";

export default function Expertise({name, description, icon, image}: myExpertiseType)  {
    console.log(`${baseUrl}${icon}`)
    return (
        <div className="flex flex-col p-4 gap-2 w-1/5 rounded shadow-xs shadow-gray-600">
            <Image className="rounded" src={icon ? `${baseUrl}${icon}`: ''} alt="Frontend icon" width={30} height={30} />
            <p className="font-bold md:text-xl">{name} Development</p>
            <p className="text-gray-500 text-base">{description? description : 'Crafting intuitive and responsive user interfaces with modern frameworks like React and Next.js.'}</p>
        </div>
    )
}