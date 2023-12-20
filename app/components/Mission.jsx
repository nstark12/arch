import Link from "next/link";
import Image from "next/image";

const Mission = () => {
  return (
    <section>
      <div className=" -mt-14  grid md:grid-cols-2">
        <div className="items-center flex flex-col justify-center m-4">
          <div>
            <Image
              src={"/image/gains-baking-2.jpg"}
              alt="gains image"
              width={450}
              height={450}
              className="rounded-lg border-4 border-primary mb-4"
            />
          </div>
        </div>
        <div>
          <div className="bg-primary p-4 rounded-lg text-white flex flex-col justify-center m-4">
            <h1 className="text-5xl font-semibold mb-8 px-2">Our Mission</h1>
            <p className="text-xl px-2">
              ARCh was founded in 1952 by parents who dreamed of a world where
              their children with disabilities would not be discarded or
              disregarded.
            </p>

            <div className="mt-4">
              <Link href={"/about"}>
                <button className="bg-secondary text-white py-2 px-4 rounded-full mr-4 md:text-lg hover:bg-secondaryHov cursor-pointer border border-white">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-secondary p-4 rounded-lg text-white flex flex-col justify-center m-4">
            <h1 className="text-5xl font-semibold mb-8 px-2">Our History</h1>
            <p className="text-xl px-2 mb-2">
              We strive to empower children and adults with disabilities to
              reach their full potential, and to increase prevention and
              awareness in the community.
            </p>
            <p className="text-xl px-2 mb-4">
              Today we remain focused on our vision of building a world where
              all people are valued and encouraged to contribute.
            </p>
            <p className="text-xl px-2">
              ARCh promotes the health, safety and achievement of children and
              adults with disabilities.
            </p>
            <div className="mt-4">
              <Link href={"/about"}>
                <button className="bg-primary text-white py-2 px-4 rounded-full mr-4 md:text-lg hover:bg-primaryHov cursor-pointer border border-white">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
