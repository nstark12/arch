const page = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-4 my-12">
        <h1 className="text-6xl text-primary font-semibold">Teen Time</h1>
        <h3 className="text-2xl mt-2">Respect, Friendship, &amp; Inclusion</h3>
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
  );
};

export default page;
