import Link from "next/link";
import Image from "next/image";

const Mission = () => {
  return (
    <section>
      <div className="-mt-14 grid md:grid-cols-2">
        <div className="bg-primary rounded-lg text-white p-4">
          <h1 className="md:text-5xl text-3xl font-semibold mb-8 px-2">
            Our Mission &amp; History
          </h1>
          <p className="md:text-xl text-lg px-2">
            ARCh was founded in 1952 by parents who dreamed of a world where
            their children with disabilities would not be discarded or
            disregarded.
          </p>
          <p className="md:text-xl text-lg px-2 mb-2">
            We strive to empower children and adults with disabilities to reach
            their full potential, and to increase prevention and awareness in
            the community.
          </p>
          <p className="md:text-xl text-lg px-2 mb-4">
            Today we remain focused on our vision of building a world where all
            people are valued and encouraged to contribute.
          </p>
          <p className="md:text-xl text-lg px-2">
            ARCh promotes the health, safety and achievement of children and
            adults with disabilities.
          </p>
          <div className="mt-4">
            <Link href={"/about"}>
              <button className="bg-secondary text-white py-2 px-4 rounded-full mr-4 md:text-lg hover:bg-secondaryHov cursor-pointer border border-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex mx-6 md:ml-16 gap-4 mt-20">
          {/* <div>
            <h2 className="text-primary text-4xl font-semibold mb-4">
              Our Impact
            </h2>
            <p className="md:text-xl text-lg px-2 mb-4">
              Lives are changed. ARCh offers one-of-a-kind programs that make a
              difference for everyone in our communities.
            </p>
            <ul className="list-disc ml-8 text-lg">
              <li>
                Children and adults with disabilities experience summer
                recreation
              </li>
              <li>Parents&apos; anxiety is reduced</li>
              <li>Adults with disabilities become more independent</li>
              <li>Families have peace of mind for the future</li>
              <li>
                The community becomes more accepting of differences through
                educational presentations
              </li>
              <li>Teens learn to be leaders</li>
              <li>Adults with disabilities experience community life</li>
              <li>Lives and money are saved</li>
            </ul>
          </div> */}
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
