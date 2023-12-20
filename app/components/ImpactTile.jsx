import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const ImpactTile = ({ title, src, description }) => {
  return (
    <div className="border-4 border-primary p-6 rounded-xl">
      <div className="flex justify-center mb-8">
        <Image
          src={src}
          alt={title}
          width={400}
          height={300}
          className="rounded-xl"
        />
      </div>
      <h1 className="text-2xl mb-4">{title}</h1>
      <p>{description}</p>
      <div className="mt-6">
        <Link href={"/about"}>
          <button className="bg-primary text-white py-2 px-4 rounded-full mr-4 md:text-lg hover:bg-primaryHov cursor-pointer border border-white flex items-center">
            Learn More <ArrowRightCircleIcon className="w-8 h-8 pl-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImpactTile;
