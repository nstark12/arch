import Link from "next/link";

const NavLinks = () => {
  return (
    <>
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
    </>
  );
};

export default NavLinks;
