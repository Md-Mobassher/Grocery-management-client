import { LuAlarmClock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import blogimg from "../../../assets/banner/banner1.jpg";
import blogimg2 from "../../../assets/banner/banner2.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FiLink, FiSearch } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import Title from "@/components/common/Title";

const blogsData = [
  {
    id: 1,
    img: blogimg,
    title: "English Breakfast Tea With Tasty Donut Desserts",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem a neque, molestias consequuntur pariatur reprehenderit harum, fugiat beatae, dolore facilis impedit quia. Sit unde, illo perspiciatis eveniet delectus labore deleniti error. A, natus. Fuga a incidunt, consequatur aliquam sequi animi ipsum fugiat esse est iure eveniet facilis blanditiis? Velit veritatis et atque quam nesciunt quidem quod temporibus voluptate natus? Cupiditate totam sed esse labore tenetur magni sit pariatur a voluptatum nihil, suscipit commodi praesentium quo obcaecati vero vel eaque delectus incidunt error et numquam laborum tempora voluptatem. Autem, natus est, dolores quisquam dicta aspernatur optio amet, eaque omnis qui assumenda!",
    tags: "Tips & Tricks",
    author: "Md Mobassher",
    createdAt: "April 1, 2024",
  },
  {
    id: 2,
    img: blogimg2,
    title: "The Problem With Typefaces on the Web",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem a neque, molestias consequuntur pariatur reprehenderit harum, fugiat beatae, dolore facilis impedit quia. Sit unde, illo perspiciatis eveniet delectus labore deleniti error. A, natus. Fuga a incidunt, consequatur aliquam sequi animi ipsum fugiat esse est iure eveniet facilis blanditiis? Velit veritatis et atque quam nesciunt quidem quod temporibus voluptate natus? Cupiditate totam sed esse labore tenetur magni sit pariatur a voluptatum nihil, suscipit commodi praesentium quo obcaecati vero vel eaque delectus incidunt error et numquam laborum tempora voluptatem. Autem, natus est, dolores quisquam dicta aspernatur optio amet, eaque omnis qui assumenda!",
    tags: "Grocery",
    author: "Rashed",
    createdAt: "April 3, 2024",
  },
];
const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto py-5 lg:px-3 md:px-6 px-4 pb-10">
      <Title title="Our Blogs" />

      <div className="lg:flex md:flex lg:gap-8 md:gap-6 gap-5  lg:mt-8 md:mt-6 mt-4">
        <div className="lg:w-3/4 md:w-2/3 w-full">
          {blogsData &&
            blogsData.map((blog) => (
              <div
                className="border rounded-lg flex-col flex mb-5"
                key={blog.id}
              >
                <img className="flex justify-stretch" src={blog.img} alt="" />
                <div className="p-5">
                  <div className="flex flex-wrap lg:gap-5 md:gap-3 gap-2">
                    <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1">
                      <LuAlarmClock />
                      <p>{blog.createdAt}</p>
                    </div>
                    <div>|</div>
                    <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1">
                      <FaRegBookmark />
                      <p>{blog.tags}</p>
                    </div>
                    <div>|</div>
                    <div>
                      <a
                        className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1"
                        href="https://dev-mobassher.web.app"
                        target="_blank"
                      >
                        <FiLink /> <p>{blog.author}</p>
                      </a>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h1 className="text-3xl font-bold mb-5">{blog.title}</h1>
                    <p className="mb-5">{blog.description}</p>
                    <Button
                      onClick={() => navigate(`/blogs/${blog.title}`)}
                      className="bg-green-400 hover:bg-green-500 transition-all duration-300"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="lg:w-1/4 md:w-1/3 w-full lg:pt-0 md:pt-0 pt-5 lg:block md:block hidden">
          <div className="flex items-center">
            <Input type="text" placeholder="Search" />
            <Button
              className="bg-green-400 hover:bg-green-500 transition-all duration-300 text-white border "
              type="submit"
            >
              <FiSearch className="w-7" />
            </Button>
          </div>
          <div>
            <h4>Popular Post</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
