import { LuPhoneCall } from "react-icons/lu";
import logo from "../../assets/logo/logo.png";
import playstore from "../../assets/footer/google_play.png";
import applestore from "../../assets/footer/app_store.png";
import payments from "../../assets/footer/payments.png";
import Container from "../common/Container";
import Section from "../common/Section";
import { Link } from "react-router-dom";
import ListSection from "../ui/ListSection";
import { footerData } from "./footerData";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#E0FFC0]">
      {/* footer-1 */}
      <Section>
        <Container>
          <div className="flex flex-wrap gap-5 justify-between">
            {footerData.map((section, index) => (
              <div key={index} className="flex-1">
                <ListSection title={section.title} items={section.items} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* footer-2 */}
      <Container>
        <div className="py-5">
          <div className="flex flex-wrap lg:justify-between md:justify-between justify-center items-start gap-3">
            <div className="flex flex-col lg:justify-start md:justify-start justify-center">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <p className="mt-4 lg:text-start md:text-start text-center mb-2">
                {" "}
                24/A - Tograihat, Rajarhat, Kurigram
              </p>
              <p className="lg:text-start md:text-start text-center">
                Email: mdmobassherhossain1@gmail.com
              </p>
            </div>
            <div className="flex items-start gap-5">
              <LuPhoneCall className="size-14 text-green-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">NEED HELP?</h3>
                <p className="text-2xl  mb-2 font-semibold text-green-500">
                  {" "}
                  +88 01706060647
                </p>

                <div className="flex gap-5 justify-start items-center mt-4">
                  <a href="https://github.com/md-mobassher" target="_blank">
                    <FaGithub className="size-7  text-[#253237] hover:text-green-500 mt-1 hover:scale-125 transition-all duration-200" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-mobassher"
                    target="_blank"
                  >
                    <FaLinkedin className="size-7  text-[#253237] hover:text-green-500 mt-1 hover:scale-125 transition-all duration-200" />
                  </a>
                  <a href="https://wa.me/+8801773381807" target="_blank">
                    <FaWhatsapp className="size-7  text-[#253237] hover:text-green-500 mt-1 hover:scale-125 transition-all duration-200" />
                  </a>
                  <a
                    href="https://www.facebook.com/mdmobassherf"
                    target="_blank"
                  >
                    <FaFacebook className="size-7  text-[#253237] hover:text-green-500 mt-1 hover:scale-125 transition-all duration-200" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className=" text-center text-xl font-semibold mb-2 uppercase">
                Download App on Mobile
              </h3>
              <div className="flex gap-5 mt-5">
                <a href="https://mobassher.vercel.app" target="_blank">
                  <img
                    src={playstore}
                    alt="playstore"
                    className="hover:scale-110 transition-all duration-300"
                  />
                </a>
                <a href="https://mobassher.vercel.app" target="_blank">
                  <img
                    src={applestore}
                    alt="applestore"
                    className="hover:scale-110 transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          <hr className="mt-5 border-white" />

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
                  className=""
                >
                  Privacy Policy
                </a>
                <a
                  href="https://mobassher.vercel.app"
                  target="_blank"
                  className=""
                >
                  Terms & Conditions
                </a>
              </div>
              <img src={payments} alt="" className="" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
