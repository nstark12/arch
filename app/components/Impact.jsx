import ImpactTile from "./ImpactTile";

const Impact = () => {
  return (
    <section className="mx-4 md:mx-0">
      <div className="mt-12">
        <h1 className="text-6xl text-primary font-semibold mb-6">What We Do</h1>
        <div className="grid md:grid-cols-2">
          <p className="text-lg">
            Lives are changed. ARCh offers one-of-a-kind programs that make a
            difference for everyone in our communities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-8 text-black">
          <ImpactTile
            title={"GAINS"}
            src={"/image/gains-staff.jpg"}
            description={
              "An outdoor summer goal-focused program featuring music gardening, hiking, fitness, crafts, games, and more. Open to individuals ages six and up who have disabilities."
            }
          />
          <ImpactTile
            title={"Teen Time"}
            src={"/image/gains-staff.jpg"}
            description={
              "Teens with and without disabilities come together to do community service and build social skills through sports, cooking, games and crafts. "
            }
          />
          <ImpactTile
            title={"ARCh Youth Team"}
            src={"/image/gains-staff.jpg"}
            description={
              "The ARCh Youth Team is a unique group of teens from different schools whose goal is to replace bullying with respect. We do this by performing skits, songs, and personal stories for people of all ages. Everyone has the opportunity to act, sing, or even dance. "
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Impact;
