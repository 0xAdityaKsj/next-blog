"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/create-post", label: "Create post" }
];
const Header = () => {

    const pathname = usePathname()

    return (
        <header className="bg-slate-200">
            <div className="flex justify-between pl-10 pr-10 pt-5 pb-5 border">
                <Link href="/">
                    <Image
                        src="https://bytegrad.com/course-assets/youtube/example-logo.png"
                        alt="Login Icon"
                        className="w-[35px] h-[35px]"
                        width={35}
                        height={35}
                    />
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        {navItems.map((item) => (
                            <li key={item.href} className="relative group">
                                <Link href={item.href} className={`text-zinc-700 group-hover:text-gray-900 transition duration-300 ease-in-out ${pathname === item.href ? 'text-violet-500' : ''}`}>
                                    {item.label}
                                </Link>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;