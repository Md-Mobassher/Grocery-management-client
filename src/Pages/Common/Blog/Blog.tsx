import { LuAlarmClock } from "react-icons/lu";
import blogimg from "../../../assets/banner/banner1.jpg";
import blogimg2 from "../../../assets/banner/banner2.jpg";
import { FaRegBookmark } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

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
const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 lg:px-3 md:px-6 px-4 pb-20">
      <h2 className="text-2xl font-bold text-center">Blog Details</h2>

      <div className="lg:flex md:flex lg:gap-10 md:gap-6 gap-5 lg:mt-10 md:mt-8 mt-6">
        <div className=" w-full">
          {blogsData &&
            blogsData.map((blog) => (
              <div
                className="border rounded-lg flex-col flex mb-5 p-5"
                key={blog.id}
              >
                <h1 className="text-3xl font-bold mb-8 mt-2">{blog.title}</h1>
                <div className="flex lg:gap-5 md:gap-3 gap-2 mb-5">
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

                <img className="flex justify-stretch" src={blog.img} alt="" />
                <div className="mt-7">
                  <p className="mb-5">{blog.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
