import Title from "@/components/common/Title";
import profile from "@/assets/about/mobassher.png";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto py-5 lg:px-3 md:px-6 px-4 pb-10"
    >
      <Title title="About Me" />
      <div className="lg:flex sm:flex-row-reverse  md:flex  items-center justify-between">
        <div className="flex-row flex-1">
          <div className=" flex  justify-center lg:mt-0 mt-0">
            <img
              className="w-[320px] rounded-xl transform scale-[0.95] filter grayscale hover:scale-[1] hover:grayscale-0 transition-all duration-1000 z-0"
              alt="profile"
              src={profile}
            />
          </div>
        </div>
        <div className="flex-row flex-1 md:mt-0 mt-2">
          <p className="lg:text-start md:text-start text-center">
            Hello! I'm Md Mobassher Hossain, a passionate Full-stack developer.
            I develop web applications. My core skill is based on JavaScript and
            I love to do most of the things using JavaScript. I love to make the
            web more open to the world. I have graduated with a bachelor's
            degree in Textile Engineering from Primeasia University at Banani,
            Bangladesh in 2021. I am available for any kind of job opportunity
            that suits my interests.
          </p>
          <div className="lg:mt-10 md:mt-8 mt-5 flex lg:justify-start md:justify-start justify-center gap-5">
            <a href="https://mobassher.vercel.app" target="__blank">
              <Button className="bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-3xl px-8">
                Portfolio
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1lrAMInBo2I610RC-oMsihi2_Tt2sZW7j/view?usp=sharing"
              target="__blank"
            >
              <Button className="bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-3xl px-8">
                Get Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
