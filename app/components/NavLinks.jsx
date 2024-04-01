"use client";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

const programsLinks = [
  {
    title: "GAINS",
    path: "/gains",
  },
  {
    title: "Teen Time",
    path: "/teen-time",
  },
  {
    title: "Strong Girls",
    path: "/strong-girls",
  },
  {
    title: "Upcoming Events",
    path: "/upcoming-events",
  },
];

const caregiverLinks = [
  {
    title: "IEP Advocacy",
    path: "/iep-advocacy",
  },
  {
    title: "Advocacy for Adults",
    path: "/adult-advocacy",
  },
  {
    title: "ARCh Life Needs Trust",
    path: "/life-needs-trust",
  },
  {
    title: "Personal Futures Plan",
    path: "/personal-futures/plan",
  },
  {
    title: "Transition Resources",
    path: "/transition-resources",
  },
];

const communityLinks = [
  {
    title: "Youth Team",
    path: "/youth-team",
  },
  {
    title: "Presentations",
    path: "/presentations",
  },
];

const eventLinks = [
  {
    title: "Support our Events",
    path: "/support-us",
  },
  {
    title: "Upcoming Events",
    path: "/upcoming-events",
  },
  {
    title: "Past Events",
    path: "/past-events",
  },
];

const resourcesLinks = [
  {
    title: "ADRC (Aging Disability Right)",
    path: "https://www.dhs.wisconsin.gov/adrc/index.htm",
  },
  {
    title: "DRW (Disability Rights WI)",
    path: "https://disabilityrightswi.org/",
  },
  {
    title: "DPI (Dept. of Public Instruction)",
    path: "https://dpi.wi.gov/",
  },
];

const NavLinks = () => {
  const [linkName, setLinkName] = useState("");

  const handleMouseLeave = () => {
    setLinkName("");
  };

  const handleResourcesHover = () => {
    setLinkName("programs");
  };

  const handleEventsHover = () => {
    setLinkName("caregivers");
  };

  const handlePresHover = () => {
    setLinkName("community");
  };

  const handlePrevHover = () => {
    setLinkName("events");
  };

  const handleResourceHover = () => {
    setLinkName("resources");
  };

  return (
    <>
      <div
        onMouseEnter={handleResourcesHover}
        onMouseLeave={handleMouseLeave}
        className="w-full text-center md:w-auto md:text-left"
      >
        <button className="py-2 px-4 rounded-lg hover:bg-primaryHov">
          Programs
        </button>
        <div className="md:absolute md:text-left text-center bg-secondary md:bg-primary rounded-lg m-2 md:m-0">
          {linkName === "programs" &&
            programsLinks.map((link, index) => (
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
          Caregiver Support
        </button>
        <div className="md:absolute md:text-left text-center bg-secondary md:bg-primary rounded-lg m-2 md:m-0">
          {linkName === "caregivers" &&
            caregiverLinks.map((link, index) => (
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
          Community
        </button>
        <div className="md:absolute md:text-left text-center bg-secondary md:bg-primary rounded-lg m-2 md:m-0">
          {linkName === "community" &&
            communityLinks.map((link, index) => (
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
        onMouseEnter={handleResourceHover}
        onMouseLeave={handleMouseLeave}
        className="w-full text-center md:w-auto md:text-left"
      >
        <button className="py-2 px-4 rounded-lg hover:bg-primaryHov">
          Resources
        </button>
        <div className="md:absolute md:text-left text-center bg-secondary md:bg-primary rounded-lg m-2 md:m-0">
          {linkName === "resources" &&
            resourcesLinks.map((link, index) => (
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
    </>
  );
};

export default NavLinks;
