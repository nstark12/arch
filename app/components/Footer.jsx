import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="mt-36 bg-primary text-white p-16 mx-auto grid grid-cols-4">
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
          <h3 className="footer-head">Follow Us</h3>
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
        &copy; 2023 by ARCh, All Rights Reserved{" "}
      </div>
    </>
  );
};

export default Footer;
