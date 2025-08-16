import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex p-4 gap-10 border-b-1 border-gray-200">
      <h1>My Portfolio</h1>
      <div className="flex">
        <ul className="nav-links flex gap-10 lg:w-1/2">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/frontend"}>Frontend</Link></li>
            <li><Link href={"/backend"}>Backend</Link></li>
            <li><Link href={"/fullstack"}>Fullstack</Link></li>
            <li><Link href={"/blockchain"}>Blockchain</Link></li>
            <li><Link href={"/ai-ml"}>AI/ML</Link></li>
        </ul>  
      </div>
    </nav>
  );
}