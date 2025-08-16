import Image from "next/image";

export default function Skills()  {

    return (
        <div className="flex flex-col items-center p-6 gap-3 w-full rounded shadow-xs shadow-gray-600">
            <Image className="rounded" src="/personal/photo_2025-08-13_19-33-12.jpg" alt="Frontend icon" width={40} height={40} />
            <p className="font-bold md:text-xl">Frontend Development</p>
            <p className="text-gray-500 text-base text-center">Crafting intuitive and responsive user interfaces with modern frameworks like React and Next.js.</p>
        </div>
    )
}