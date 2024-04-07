import { LuPhoneCall } from "react-icons/lu";
import logo from "../../assets/logo/logo.png";
import playstore from "../../assets/footer/google-play.png";
import applestore from "../../assets/footer/app-store.png";
import payments from "../../assets/footer/payments.jpg";
import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="">
      {/* footer-1 */}
      <div className="bg-slate-100 py-10">
        <Container>
          <div className="flex flex-wrap gap-2 justify-between -mt-28">
            <div>
              <h4 className="lg:text-2xl md:text-2xl text-xl font-bold mt-5 mb-1">
                Categories
              </h4>
              <ul>
                <li>Bevarage</li>
                <li>Fruits & Vegetables</li>
                <li>Household</li>
                <li>Home & kitchen</li>
                <li>Biscuits & Snacks</li>
                <li>Meat & Fish</li>
              </ul>
            </div>
            <div>
              <h4 className="lg:text-2xl md:text-2xl text-xl font-bold mt-5 mb-1">
                Categories
              </h4>
              <ul>
                <li>Bevarage</li>
                <li>Fruits & Vegetables</li>
                <li>Household</li>
                <li>Home & kitchen</li>
                <li>Biscuits & Snacks</li>
                <li>Meat & Fish</li>
              </ul>
            </div>

            <div className="">
              <div>
                <h4 className="lg:text-2xl md:text-2xl text-xl font-bold mt-5 mb-1">
                  Help
                </h4>
                <ul>
                  <li>Search</li>
                  <li>Help</li>
                  <li>Information</li>
                  <li>Privacy Policy</li>
                  <li>Shipping Information</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div>
                <h4 className="lg:text-2xl md:text-2xl text-xl font-bold mt-5 mb-1">
                  Help
                </h4>
                <ul>
                  <li>Search</li>
                  <li>Help</li>
                  <li>Information</li>
                  <li>Privacy Policy</li>
                  <li>Shipping Information</li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <div>
                <h4 className="lg:text-2xl md:text-2xl text-xl font-bold mt-5 mb-1">
                  Support
                </h4>
                <ul>
                  <li>Contact</li>
                  <li>About Us</li>
                  <li>Carrers</li>
                  <li>Refund & Returns</li>
                  <li>Deliveries</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* footer-2 */}
      <div className="max-w-7xl mx-auto px-5 py-5 mb-5">
        <div className="flex flex-wrap lg:justify-between md:justify-between items-center justify-center gap-3">
          <div>
            <img src={logo} alt="logo" />
            <p className="mt-4"> 24/A - Tograihat, Rajarhat, Kurigram</p>
            <p>Email: mdmobassherhossain1@gmail.com</p>
          </div>
          <div className="flex items-center gap-5">
            <LuPhoneCall className="size-8 " />
            <div>
              <p className="text-lg font-semibold"> +88 01706060647</p>
              <p>Working 8:00 - 22:00</p>
            </div>
          </div>
          <div>
            <p>Download App on Mobile</p>
            <div className="flex gap-3 mt-3">
              <img src={playstore} alt="" />
              <img src={applestore} alt="" />
            </div>
          </div>
        </div>

        <hr className="mt-5" />

        {/* footer-3 */}
        <div className="lg:mt-5 mt-3 lg:flex md:flex  lg:justify-between md:justify-center justify-center items-center">
          <div>
            <p className="text-center">
              Copyright &copy; {new Date().getFullYear()} All right regerved to
              Developer{" "}
              <a
                href="https://dev-mobassher.web.app"
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
                href="https://dev-mobassher.web.app"
                target="_blank"
                className="text-green-500"
              >
                Privacy Policy
              </a>
              <a
                href="https://dev-mobassher.web.app"
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
    </footer>
  );
};

export default Footer;
