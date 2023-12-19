"use client";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

const resourceLinks = [
  {
    title: "Personal Future Plans",
    path: "/personal-future-plans",
  },
  {
    title: "ARCh Life Needs Trust",
    path: "/life-needs-trust",
  },
  {
    title: "Transition Resources",
    path: "/transition-resources",
  },
  {
    title: "I.E.P.s",
    path: "/ieps",
  },
];

const eventLinks = [
  {
    title: "GAINS",
    path: "/gains",
  },
  {
    title: "Teen Times",
    path: "/teen-times",
  },
  {
    title: "Youth Team",
    path: "/youth-team",
  },
];

const presLinks = [
  {
    title: "Stop Bullying",
    path: "/stop-bullying",
  },
  {
    title: "Youth Team",
    path: "/youth-team",
  },
];

const prevLinks = [
  {
    title: "Child Safety",
    path: "/child-safety",
  },
  {
    title: "Shaken Baby Syndrome",
    path: "/shaken-baby-syndrome",
  },
  {
    title: "Early Childhood Brain Development",
    path: "/brain-development",
  },
  {
    title: "Fetal Alcohol Syndrome",
    path: "/fetal-alcohol-syndrome",
  },
  {
    title: "Lead Poisoning",
    path: "/lead-poisoning",
  },
];

const NavLinks = () => {
  const [linkName, setLinkName] = useState("");

  const handleMouseLeave = () => {
    setLinkName("");
  };

  const handleResourcesHover = () => {
    setLinkName("resources");
  };

  const handleEventsHover = () => {
    setLinkName("events");
  };

  const handlePresHover = () => {
    setLinkName("presentations");
  };

  const handlePrevHover = () => {
    setLinkName("prevention");
  };

  return (
    <>
      <div
        onMouseEnter={handleResourcesHover}
        onMouseLeave={handleMouseLeave}
        className="w-full text-center md:w-auto md:text-left"
      >
        <button className="py-2 px-4 rounded-lg hover:bg-primaryHov">
          Resources
        </button>
        <div className="md:absolute md:text-left text-center bg-secondary md:bg-primary rounded-lg m-2 md:m-0">
          {linkName === "resources" &&
            resourceLinks.map((link, index) => (
              <div
                key={index}
                className="py-2 px-4 rounded-lg hover:bg-secondaryHov md:hover:bg-primaryHov my-2 cursor-pointer"
              >
                <li key={index}>
                  <DropdownMenu href={link.path} title={link.title} />
                </li>
              </div>
            ))}
        </div>
      </div>
      <div
        onMouseEnter={handleEventsHover}
        onMouseLeave={handleMouseLeave}
        className="w-full text-center md:w-auto md:text-left"
      >
        <button className="py-2 px-4 rounded-lg hover:bg-primaryHov">
          Events
        </button>
        <div className="md:absolute md:text-left text-center bg-secondary md:bg-primary rounded-lg m-2 md:m-0">
          {linkName === "events" &&
            eventLinks.map((link, index) => (
              <div
                key={index}
                className="py-2 px-4 rounded-lg hover:bg-secondaryHov md:hover:bg-primaryHov my-2 cursor-pointer"
              >
                <li key={index}>
                  <DropdownMenu href={link.path} title={link.title} />
                </li>
              </div>
            ))}
        </div>
      </div>
      <div
        onMouseEnter={handlePresHover}
        onMouseLeave={handleMouseLeave}
        className="w-full text-center md:w-auto md:text-left"
      >
        <button className="py-2 px-4 rounded-lg hover:bg-primaryHov">
          Presentations
        </button>
        <div className="md:absolute md:text-left text-center bg-secondary md:bg-primary rounded-lg m-2 md:m-0">
          {linkName === "presentations" &&
            presLinks.map((link, index) => (
              <div
                key={index}
                className="py-2 px-4 rounded-lg hover:bg-secondaryHov md:hover:bg-primaryHov my-2 cursor-pointer"
              >
                <li key={index}>
                  <DropdownMenu href={link.path} title={link.title} />
                </li>
              </div>
            ))}
        </div>
      </div>
      <div
        onMouseEnter={handlePrevHover}
        onMouseLeave={handleMouseLeave}
        className="w-full text-center md:w-auto md:text-left"
      >
        <button className="py-2 px-4 rounded-lg hover:bg-primaryHov">
          Prevention
        </button>
        <div className="md:absolute md:text-left text-center bg-secondary md:bg-primary rounded-lg m-2 md:m-0">
          {linkName === "prevention" &&
            prevLinks.map((link, index) => (
              <div
                key={index}
                className="py-2 px-4 rounded-lg hover:bg-secondaryHov md:hover:bg-primaryHov my-2 cursor-pointer"
              >
                <li key={index}>
                  <DropdownMenu href={link.path} title={link.title} />
                </li>
              </div>
            ))}
        </div>
      </div>
      <Link className="py-2 px-4 rounded-lg hover:bg-primaryHov" href={"/"}>
        Employment
      </Link>
      <Link className="py-2 px-4 rounded-lg hover:bg-primaryHov" href={"/"}>
        Testimonials
      </Link>
    </>
  );
};

export default NavLinks;
