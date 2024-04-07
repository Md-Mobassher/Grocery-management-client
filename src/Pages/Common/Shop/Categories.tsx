import img1 from "../../../assets/category/baverages-1.jpg";
import img2 from "../../../assets/category/biscuitssnacks-1.jpg";
import img3 from "../../../assets/category/breadbakery-1.jpg";
import img4 from "../../../assets/category/dairy-1.jpg";
import img5 from "../../../assets/category/fruitvegetables-1.jpg";
import img6 from "../../../assets/category/household-1.jpg";
import img7 from "../../../assets/category/meat-1.jpg";
import img8 from "../../../assets/category/image2.png";
import img9 from "../../../assets/category/image4.png";
import Title from "../../../components/common/Title";
import Container from "../../../components/common/Container";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../../../components/ui/button";
import Section from "../../../components/common/Section";

const Categories = () => {
  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center mb-5">
          <Title title="Categories" />
          <div>
            <Button className="bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-3xl px-6 flex gap-2">
              View All <FaArrowRight />
            </Button>
          </div>
        </div>

        <div className="border rounded lg:flex md:flex ">
          <div className="flex flex-col justify-center items-center border pb-4  hover:border-green-400 rounded p-5 hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 ">
            <img className=" mx-auto" src={img1} alt="" />
            <p className="font-bold">Beverages</p>
            <p className="text-sm text-slate-600">11 items</p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
            <div className="lg:flex md:flex justify-center items-center p-2 border box-border  hover:border-green-400 rounded hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 ">
              <div>
                <img className=" mx-auto" src={img2} alt="" />
              </div>
              <div className="flex flex-col lg:items-start md:items-start items-center">
                <p className="font-bold">Beverages</p>
                <p className="text-sm text-slate-600">11 items</p>
              </div>
            </div>
            <div className="lg:flex md:flex justify-center items-center p-2 border box-border  hover:border-green-400 rounded hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 ">
              <div>
                <img className=" mx-auto" src={img3} alt="" />
              </div>
              <div className="flex flex-col lg:items-start md:items-start items-center">
                <p className="font-bold">Beverages</p>
                <p className="text-sm text-slate-600">11 items</p>
              </div>
            </div>
            <div className="lg:flex md:flex justify-center items-center p-2 border box-border  hover:border-green-400 rounded hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 ">
              <div>
                <img className=" mx-auto" src={img4} alt="" />
              </div>
              <div className="flex flex-col lg:items-start md:items-start items-center">
                <p className="font-bold">Beverages</p>
                <p className="text-sm text-slate-600">11 items</p>
              </div>
            </div>
            <div className="lg:flex md:flex justify-center items-center p-2 border box-border  hover:border-green-400 rounded hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 ">
              <div>
                <img className="mx-auto" src={img5} alt="" />
              </div>
              <div className="flex flex-col lg:items-start md:items-start items-center">
                <p className="font-bold">Beverages</p>
                <p className="text-sm text-slate-600">11 items</p>
              </div>
            </div>
            <div className="lg:flex md:flex justify-center items-center p-2 border box-border  hover:border-green-400 rounded hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 ">
              <div>
                <img className=" mx-auto" src={img6} alt="" />
              </div>
              <div className="flex flex-col lg:items-start md:items-start items-center">
                <p className="font-bold">Beverages</p>
                <p className="text-sm text-slate-600">11 items</p>
              </div>
            </div>
            <div className="lg:flex md:flex justify-center items-center p-2 border box-border  hover:border-green-400 rounded hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 ">
              <div>
                <img className=" mx-auto" src={img7} alt="" />
              </div>
              <div className="flex flex-col lg:items-start md:items-start items-center">
                <p className="font-bold">Beverages</p>
                <p className="text-sm text-slate-600">11 items</p>
              </div>
            </div>
            <div className="lg:flex md:flex justify-center items-center p-2 border box-border  hover:border-green-400 rounded hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 ">
              <div>
                <img className="mx-auto" src={img8} alt="" />
              </div>
              <div className="flex flex-col lg:items-start md:items-start items-center">
                <p className="font-bold">Beverages</p>
                <p className="text-sm text-slate-600">11 items</p>
              </div>
            </div>
            <div className="lg:flex md:flex justify-center items-center p-2 border box-border  hover:border-green-400 rounded hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 ">
              <div>
                <img className=" mx-auto" src={img9} alt="" />
              </div>
              <div className="flex flex-col lg:items-start md:items-start items-center">
                <p className="font-bold">Beverages</p>
                <p className="text-sm text-slate-600">11 items</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Categories;
