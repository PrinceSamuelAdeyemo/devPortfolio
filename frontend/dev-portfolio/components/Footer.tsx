import Image from "next/image"
import Link from "next/link"

export default function Footer() {

    return (
        <footer className="flex flex-col gap-20 py-2">
            <div>
                <p className="font-semibold text-2xl text-center">My Portfolio</p>
            </div>

            <div className="flex lg:justify-between px-10 lg:px-20">
                <button>English</button>
                <p>C 2024</p>
                <div className="flex gap-4">
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
                </div>
            </div>
            
        </footer>
    )
}