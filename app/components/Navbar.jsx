import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="flex sm:flex-row justify-between items-center flex-col">
        <Link href={"/"}>
          <Image
            src={"/image/logo.png"}
            alt="ARCh logo"
            width={350}
            height={350}
          />
        </Link>
        <div className="m-4">
          <button className="bg-secondary text-white py-2 px-4 rounded-full mr-4 md:text-lg hover:bg-secondaryHov cursor-pointer">
            Contact Us
          </button>
          <button className="bg-primary text-white py-2 px-4 rounded-full md:text-lg hover:bg-primaryHov cursor-pointer">
            Donate
          </button>
        </div>
      </header>
      <nav className="bg-primary text-white py-2">
        <ul className="flex justify-center md:gap-10 lg:gap-24 xl:gap-32">
          <Link className="hover:text-gray-300" href={"/"}>
            Resources
          </Link>
          <Link className="hover:text-gray-300" href={"/"}>
            Events
          </Link>
          <Link className="hover:text-gray-300" href={"/"}>
            Presentations
          </Link>
          <Link className="hover:text-gray-300" href={"/"}>
            Prevention
          </Link>
          <Link className="hover:text-gray-300" href={"/"}>
            Employment
          </Link>
          <Link className="hover:text-gray-300" href={"/"}>
            Testimonials
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
