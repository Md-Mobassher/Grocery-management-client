import Banner from "@/pages/Common/Home/Banner";
import Categories from "@/pages/Common/Shop/Categories";
import Client from "@/pages/Common/Home/Client";
import Offer from "@/pages/Common/Home/Offer";
import NewProducts from "../Shop/NewProducts";
import BestSeller from "../Shop/BestSeller";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />

      <NewProducts />

      <BestSeller />
      <Offer />
      <Client />
    </>
  );
};

export default Home;
