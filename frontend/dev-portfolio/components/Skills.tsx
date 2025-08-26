import Image from "next/image";
import { myExpertiseSkillsType } from "@/types/myExpertiseType";
import { baseUrl } from "@/utils/api";

export default function Skills(skill: myExpertiseSkillsType)  {

    return (
        <div className="flex flex-col items-center py-6 px-2 lg:p-6 gap-3 w-full rounded shadow-xs shadow-gray-600">
            <Image className="rounded" src={`${baseUrl}${skill.icon}`} alt="Frontend icon" width={30} height={30} />
            <p className="font-bold text-center md:text-xl">{skill.name}</p>
            <p className="text-gray-500 text-base text-center">{skill.description}</p>
        </div>
    )
}