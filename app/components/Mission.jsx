import Link from "next/link";
import Image from "next/image";

const Mission = () => {
  return (
    <section className="mx-4 md:mx-4">
      <div className="-mt-14 grid lg:grid-cols-2">
        <div className="bg-primary rounded-lg text-white p-4">
          <h1 className="md:text-5xl text-3xl font-semibold mb-8 px-2">
            Our Mission &amp; History
          </h1>
          <p className="md:text-xl text-md px-2 mb-4">
            ARCh was founded in 1952 by parents who dreamed of a world where
            their children with disabilities would not be discarded or
            disregarded.
          </p>
          <p className="md:text-xl text-md px-2 mb-4">
            We strive to empower children and adults with disabilities to reach
            their full potential, and to increase prevention and awareness in
            the community.
          </p>
          <p className="md:text-xl text-md px-2 mb-4">
            Today we remain focused on our vision of building a world where all
            people are valued and encouraged to contribute.
          </p>
          <p className="md:text-xl text-md px-2">
            ARCh promotes the health, safety and achievement of children and
            adults with disabilities.
          </p>
          <div className="mt-8">
            <Link href={"/about"}>
              <button className="bg-secondary text-white py-2 px-4 rounded-full mr-4 md:text-xl hover:bg-secondaryHov cursor-pointer border border-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex mx-6 lg:ml-16 gap-4 mt-10 lg:mt-20">
          <div>
            <Image
              src={"/image/gains-baking-2.jpg"}
              alt="gains image"
              width={350}
              height={350}
              className="rounded-lg mb-4"
            />
          </div>
          <div>
            <Image
              src={"/image/gains-science.jpg"}
              alt="gains image"
              width={350}
              height={350}
              className="rounded-lg mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
