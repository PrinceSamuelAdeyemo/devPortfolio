import Image from "next/image"
import Link from "next/link"

export default function Footer() {

    return (
        <footer className="flex flex-col gap-20">
            <div>
                <p className="font-semibold text-2xl text-center">My Portfolio</p>
            </div>

            <div className="flex lg:justify-between px-10 lg:px-20">
                <button>English</button>
                <p>C 2024</p>
                <div className="flex gap-4">
                    <Link href={"#"}>
                        <Image src={null} alt="github-link" width={10} height={10} />
                    </Link>
                    <Link href={"#"}>
                        <Image src={null} alt="linkedin-link" width={10} height={10} />
                    </Link>
                    <Link href={"#"}>
                        <Image src={null} alt="x-link" width={10} height={10} />
                    </Link>
                </div>
            </div>
            
        </footer>
    )
}