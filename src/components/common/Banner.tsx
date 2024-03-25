import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import banner4 from "../../assets/banner/sidebar-banner.gif";
const bannerImage = [banner1, banner2, banner3];

const Banner = () => {
  return (
    <div className="flex gap-5 h-4/6">
      <Carousel>
        {bannerImage &&
          bannerImage.map((item) => (
            <div>
              <img className="rounded-md border" src={item} />
              <p className="legend">Legend 1</p>
            </div>
          ))}
      </Carousel>

      <div className="flex max-w-sm">
        <img className="rounded-md border" src={banner4} />
      </div>
    </div>
  );
};

export default Banner;
