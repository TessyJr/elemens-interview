import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="absolute w-full top-0 left-0 px-[8%] py-4 z-50">
      <nav className="flex items-center justify-between">
        <Link
          href={"/"}
          className="lg:w-[207px] lg:h-[50px] relative flex-none w-[150px] h-[36]"
        >
          <Image
            src={"/images/logos/elemens/elemens-logo.png"}
            alt="Elemens Group logo"
            fill
            className="object-fill w-full h-full"
          />
        </Link>

        <ul className="hidden justify-center items-center gap-8 text-sm font-medium text-light-gray transition lg:flex">
          <li>
            <Link href={"/"} className="hover:text-moss-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-moss-500 transition">
              About
            </Link>
          </li>
          <li className="relative">
            <Link href={"/"} className="hover:text-moss-500 transition">
              Promotions
            </Link>

            <span className=" flex justify-center items-center rounded-lg bg-dark-orange absolute bottom-[100%] left-[80%] text-[0.5rem] text-white px-2 py-1 font-bold">
              HOT
            </span>
          </li>
          <li>
            <Link href={"/"} className="hover:text-moss-500 transition">
              Blogs
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-moss-500 transition">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex gap-6 justify-center items-center">
          <Link
            href={"/"}
            className="font-medium text-sm text-black hover:text-moss-500 transition hidden lg:inline"
          >
            Masuk
          </Link>

          <Link href={"/"}>
            <Button variant="primary" size="md">
              Daftar Sekarang
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
