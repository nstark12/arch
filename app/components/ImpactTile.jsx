import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const ImpactTile = ({ title, src, description, link }) => {
  return (
    <div>
      <div className="border-4 border-primary rounded-xl">
        <div className="flex justify-center mb-2 mt-6 md:mt-0">
          <Image
            src={src}
            alt={title}
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="p-6 ">
          <h1 className="text-2xl mb-4">{title}</h1>
          <p className="leading-7">{description}</p>
          <div className="mt-6">
            <Link href={link}>
              <button className="bg-primary text-white py-2 px-4 rounded-full mr-4 md:text-lg hover:bg-primaryHov cursor-pointer border border-white flex items-center">
                Learn More <ArrowRightCircleIcon className="w-8 h-8 pl-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactTile;
