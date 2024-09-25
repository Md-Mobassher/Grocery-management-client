import { LuPhoneCall } from "react-icons/lu";
import logo from "../../assets/logo/logo.png";
import playstore from "../../assets/footer/google-play.png";
import applestore from "../../assets/footer/app-store.png";
import payments from "../../assets/footer/payments.jpg";
import Container from "../common/Container";
import Section from "../common/Section";
import { Link } from "react-router-dom";
import ListSection from "../ui/ListSection";
import { footerData } from "./footerData";

const Footer = () => {
  return (
    <footer className="">
      {/* footer-1 */}
      <div className="bg-green-50">
        <Section>
          <Container>
            <div className="flex flex-wrap gap-4 justify-between">
              {footerData.map((section, index) => (
                <ListSection
                  key={index}
                  title={section.title}
                  items={section.items}
                />
              ))}
            </div>
          </Container>
        </Section>
      </div>
      {/* footer-2 */}
      <Container>
        <div className="pt-7 pb-5">
          <div className="flex flex-wrap lg:justify-between md:justify-between items-center justify-center gap-3">
            <div className="flex flex-col lg:justify-start md:justify-start justify-center">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <p className="mt-4 lg:text-start md:text-start text-center">
                {" "}
                24/A - Tograihat, Rajarhat, Kurigram
              </p>
              <p className="lg:text-start md:text-start text-center">
                Email: mdmobassherhossain1@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-5">
              <LuPhoneCall className="size-10 text-green-500" />
              <div>
                <p className="text-lg  mb-2"> +88 01706060647</p>
                <p>Working 8:00 - 22:00</p>
              </div>
            </div>
            <div>
              <p className=" text-center ">Download App on Mobile</p>
              <div className="flex gap-3 mt-5">
                <a href="https://mobassher.vercel.app" target="_blank">
                  <img src={playstore} alt="" />
                </a>
                <a href="https://mobassher.vercel.app" target="_blank">
                  <img src={applestore} alt="" />
                </a>
              </div>
            </div>
          </div>

          <hr className="mt-5" />

          {/* footer-3 */}
          <div className="lg:mt-5 mt-3 lg:flex md:flex  lg:justify-between md:justify-center justify-center items-center">
            <div>
              <p className="text-center">
                Copyright &copy; {new Date().getFullYear()} All right regerved
                to Developer{" "}
                <a
                  href="https://mobassher.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500"
                >
                  Md Mobassher Hossain
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:mt-0 mt-2">
              <div className="flex gap-5">
                <a
                  href="https://mobassher.vercel.app"
                  target="_blank"
                  className="text-green-500"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://mobassher.vercel.app"
                  target="_blank"
                  className="text-green-500"
                >
                  Terms & Conditions
                </a>
              </div>
              <img src={payments} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
