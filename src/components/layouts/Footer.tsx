import logo from "../../assets/logo/logo.png";
import FooterImage from "../../assets/footer.webp";

const Footer = () => {
  return (
    <footer
      className=" text-white"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7) ), url(${FooterImage})`,
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="lg:flex md:flex justify-between ">
          <div className="mt-5">
            <div>
              <img src={logo} alt="logo" />
              <p className="mt-4"> 24/A - Tograihat, Rajarhat, Kurigram</p>
              <p>Mobile: +88 01706060647</p>
              <p>Email: mdmobassherhossain1@gmail.com</p>
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

        <hr />

        <div className="mt-6">
          <p className="text-center">
            Copyright &copy; {new Date().getFullYear()} All right regerved to
            Developer{" "}
            <a
              href="https://dev-mobassher.web.app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              Md Mobassher Hossain
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
