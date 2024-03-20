import logo from "../../../Images/logo/logo.png";
import FooterImage from "../../../Images/footer.webp";

const Footer = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7) ), url(${FooterImage})`,
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container py-4 text-white d-flex flex-column justify-content-center h-100">
        <div className="row my-4 ">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div>
              <img src={logo} alt="" />
              <p className="mt-4"> 24/A - Tograihat, Rajarhat, Kurigram</p>
              <p>Mobile: +88 0170 606 0647</p>
              <p>Email: mdmobassherhossain1@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div>
              <h4 className="ms-5 mb-4">Help</h4>
              <ul>
                <li>Search</li>
                <li>Help</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Shipping Information</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div>
              <h4 className="ms-5 mb-4">Support</h4>
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
        <div className="d-flex justify-content-center align-items-center mt-4">
          <p className="">
            Copyright &copy; {new Date().getFullYear()} All right regerved to
            Developer{" "}
            <a
              href="https://dev-mobassher.web.app"
              target="_blank"
              rel="noreferrer"
            >
              Md Mobassher Hossain
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
