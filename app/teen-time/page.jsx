import Carousel from "../components/Carousel";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-2 my-8">
        <h1 className="text-6xl text-primary font-semibold">Teen Time</h1>
        <h3 className="text-2xl mt-2">Respect, Friendship, &amp; Inclusion</h3>
      </div>
      <Carousel />
      <section className="container mx-auto">
        <div className="flex flex-col justify-center items-center mx-4 mb-12">
          <h2 className="text-5xl text-primary mt-10 font-semibold">
            What is Teen Time?
          </h2>
          <h3 className="text-2xl mt-10 w-8/12 text-center font-semibold">
            Teens with and without disabilities come together to do community
            service and build social skills through sports, cooking, games, and
            crafts.
          </h3>
        </div>
        <div className="flex justify-center">
          <div>
            <iframe
              src="https://www.youtube.com/embed/grslfzvg304?si=NMOGb-oB7dF6pppy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
