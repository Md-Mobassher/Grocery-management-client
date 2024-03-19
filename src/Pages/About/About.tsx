import myPic from "@/assets/about/mobassher.png";

const About = () => {
  return (
    <div className="mb-5 mt-4 ">
      <h1 className="text-center mb-5 ">
        About <span className="fw-bold text-success"> Mobassher</span>
      </h1>
      <div className="row border rounded shadow p-md-5 p-sm-4 d-flex  justify-content-center  align-items-center h-100">
        <div className="col-lg-7 col-md-6 col-sm-12  ">
          <h2 className="mb-3">
            <span className="text-success ">Md Mobassher Hossain</span>
          </h2>
          <h3 className="mb-4">
            <span className="fst-italic text-success">
              Junior Full Stack Developer
            </span>
          </h3>

          <hr />

          <br />
          <h6 className="mb-4">
            I am Md Mobassher Hossain a Full-Stack developer from Bangladesh.{" "}
            <br /> <br />
            <span className="fs-5 text-warning">Front-end skills: </span>HTML5,
            CSS3, Bootstrap, Tailwind, JavaScript, React. <br /> <br />
            <span className="fs-5 text-warning">Back-end skills: </span> APIs,
            Database, Server configuration, Nodejs, Expressjs, MongoDB. <br />{" "}
            <br />
            <span className="fs-5 text-warning">Database skill: </span>Basic
            database functionalities. <br /> <br />
          </h6>
        </div>

        <div className="col-lg-5 col-md-6 col-sm-reverse col-sm-12 d-flex align-items-end ">
          <img className="img-fluid ms-auto" src={myPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
