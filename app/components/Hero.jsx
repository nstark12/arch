import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center">
      <h4 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold text-center mx-4">
        Where Abilities &amp; Disabilities Become Possibilities
      </h4>
      <div className="mt-12">
        <Link href={"/contact"}>
          <button className="bg-secondary text-white py-2 px-6 rounded-full mr-4 md:text-2xl hover:bg-secondaryHov cursor-pointer border border-white">
            Contact Us
          </button>
        </Link>
        <a
          target="_blank"
          href={
            "https://archchangeslives.networkforgood.com/projects/128949-every-day-giving"
          }
        >
          <button className="bg-primary text-white py-2 px-6 rounded-full md:text-2xl hover:bg-primaryHov cursor-pointer border border-white">
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
