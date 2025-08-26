import Image from "next/image"
import Link from "next/link"

export default function Footer() {

    return (
        <footer className="flex flex-col py-2 gap-8 lg:gap:14 xl:gap-20">
            <div>
                <p className="font-semibold text-2xl text-center">My Portfolio</p>
            </div>

            <div className="flex flex-col items-center gap-4 lg:justify-between px-10 lg:flex-row lg:px-20">
                <button className="order-3 lg:order-1 hidden">English</button>
                <p className="order-2">&copy; 2025</p>
                <div className="flex gap-4 order-1 lg:order-3">
                    <Link href={"https://github.com/PrinceSamuelAdeyemo"} target="_blank">
                        <Image src={"../icons/lucide-Github-Outlined-black.svg"} alt="github-link" width={20} height={20} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/samueladeyemo/"} target="_blank">
                        <Image src={"../icons/lucide-Linkedin-Outlined.svg"} alt="linkedin-link" width={20} height={20} />
                    </Link>
                    <Link href={"https://medium.com/@princesamuelaadeyemo"} target="_blank">
                        <Image src={"../icons/icons8-medium.svg"} alt="linkedin-link" width={20} height={20} />
                    </Link>
                    <Link href={"https://x.com/PrinceSamuel_A"} target="_blank">
                        <Image src={"../icons/icons8-x - normal.svg"} alt="linkedin-link" width={20} height={20} />
                    </Link>
                    <Link href={"https://github.com/PrinceSamuelAdeyemo"} target="_blank">
                        <Image src={"../icons/icons8-linktree (1).svg"} alt="github-link" width={20} height={20} />
                    </Link>
                </div>
            </div>
            
            <p className="text-[70%]">Social icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
        </footer>
    )
}