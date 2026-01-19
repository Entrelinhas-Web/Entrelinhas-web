import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header
            className="flex w-full flex-col gap-4 p-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6"
        >
            <nav className="flex w-full justify-between py-2">
                <div className="flex flex-col">
                    <Link href="./" className="text-foreground text-lg no-underline sm:text-xl">
                        Entrelinhas
                    </Link>
                </div>

                <button id="menu-btn" className="cursor-pointer">
                    <Image
                        src="/menu.png"
                        alt="Menu"
                        width={30}
                        height={20}
                        className="pixel h-5 object-contain"
                    />
                </button>
            </nav>
        </header>
    )
}