import Carousel from "../components/Carousel";

const images = [
  "/image/gains-77.jpg",
  "/image/gains-65.jpg",
  "/image/gains-33-min.jpg",
  "/image/gains-staff.jpg",
  "/image/gains-44.jpg",
];

const gainsPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-2 my-8">
        <h1 className="text-6xl text-primary font-semibold">GAINS</h1>
        {/* <h3 className="text-2xl mt-2">Respect, Friendship, &amp; Inclusion</h3> */}
      </div>
      <Carousel images={images} />
      <div className="flex flex-col justify-center items-center mx-2 my-8">
        <h1 className="text-3xl text-primary font-semibold">
          Now Hiring for Summer 2024!
        </h1>
      </div>
    </>
  );
};

export default gainsPage;
