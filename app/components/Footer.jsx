import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="mt-36 bg-primary text-white md:p-16 pb-10 lg:px-40 xl:px-60 grid md:grid-cols-3 justify-evenly ">
        <div className="flex flex-col">
          <h3 className="footer-head">Resources</h3>

          <a
            target="_blank"
            href={
              "https://archchangeslives.networkforgood.com/projects/128949-every-day-giving"
            }
            className="footer-li"
          >
            Donate
          </a>
          <Link href={"/"} className="footer-li">
            Employment
          </Link>
          <Link href={"/"} className="footer-li">
            Testimonials
          </Link>
          <div className="flex gap-2 items-center mt-2">
            <a
              href={"https://www.facebook.com/ARChchangeslives/"}
              target="_blank"
            >
              <Image
                src={"/image/facebook.png"}
                alt="facebook logo"
                width={25}
                height={25}
              />
            </a>
            <a
              href={"https://www.instagram.com/archyouthteamofficial/"}
              target="_blank"
            >
              <Image
                src={"/image/insta.png"}
                alt="instagram logo"
                width={25}
                height={25}
              />
            </a>
            <a href={"https://twitter.com/ARChYouthTeam"} target="_blank">
              <Image
                src={"/image/logo-white.png"}
                alt="x logo"
                width={22}
                height={22}
              />
            </a>
            <a
              href={"https://www.youtube.com/watch?v=LkbfLKyZEN8"}
              target="_blank"
            >
              <Image
                src={"/image/youtube2.png"}
                alt="youtube logo"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="footer-head">Events</h3>
          <Link href={""} className="footer-li">
            GAINS
          </Link>
          <Link href={""} className="footer-li">
            Teen Times
          </Link>
          <Link href={""} className="footer-li">
            Youth Team
          </Link>
        </div>
        <div>
          <h3 className="footer-head">Reach Out</h3>
          <p className="footer-li">419 Frederick Street</p>
          <p className="footer-li">Waukesha, WI 53186 USA</p>
          <p className="footer-li">Phone: 1 (262) 542-9811</p>
          <p className="footer-li">Fax: 1 (262) 542-5280</p>
          <p className="footer-li">archoffice@archchangeslives.org</p>
        </div>
      </footer>
      <div className="bg-primaryHov p-4 text-center text-white">
        &copy; 2024 by ARCh, All Rights Reserved{" "}
      </div>
    </>
  );
};

export default Footer;
