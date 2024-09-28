import { useState } from "react";
import { Link } from "react-router-dom";

export type SubItem = {
  title: string;
  link: string;
};

export type Post = {
  title: string;
  img: string;
  link: string;
};

export type TabPost = {
  title: string;
  link: string;
  post: Post[];
};

export type Item = {
  title: string;
  link: string;
  option?: "sub" | "post" | "tab";
  subItems?: SubItem[];
  post?: Post[];
  limit?: string;
  postTabs?: TabPost[];
};

export type MenuProps = {
  items: Item[];
};

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="z-50 block sticky top-0">
      <div className="">
        <div className="flex lg:flex-row md:flex-row flex-col lg:justify-center lg:items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={` ${item.option === "sub" ? "relative" : ""}`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <Link
                to={item.link}
                className="p-2 px-5  block hover:bg-green-400 hover:text-white text-black font-semibold"
              >
                {item.title}
              </Link>
              {hoverIndex === index &&
                item.option === "sub" &&
                item.subItems && (
                  <div className="absolute lg:left-0 md:left-0 left-28 bg-gray-200 shadow-lg w-52 border border-[#F7F3E7] z-50">
                    <div className="flex flex-col">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          className="p-2 hover:bg-green-400 hover:text-white"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              {hoverIndex === index && item.option === "post" && item.post && (
                <div className="absolute w-full left-0">
                  <div className="container">
                    <div className="w-full bg-white grid grid-cols-5 gap-2 p-2">
                      {item.post
                        .slice(0, Number(item.limit))
                        .map((postItem, postIndex) => (
                          <Link
                            to={postItem.link}
                            key={postIndex}
                            className="p-2 border"
                          >
                            <img
                              src={postItem.img}
                              width={300}
                              height={300}
                              alt={postItem.title}
                              className="w-full max-h-32 h-full object-cover"
                            />
                            {postItem.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {hoverIndex === index &&
                item.option === "tab" &&
                item.postTabs && (
                  <div className="absolute w-full left-0">
                    <div className="container">
                      <div className="flex w-full bg-white">
                        <div className="w-1/5 flex flex-col">
                          {item.postTabs.map((tab, tabIndex) => (
                            <Link
                              key={tabIndex}
                              to={tab.link}
                              onMouseEnter={() => setActiveTab(tabIndex)}
                              className={`p-2 block ${
                                tabIndex === activeTab
                                  ? "bg-main text-white"
                                  : ""
                              }`}
                            >
                              {tab.title}
                            </Link>
                          ))}
                        </div>
                        <div className="w-4/5">
                          {item.postTabs.map((tab, tabIndex) => (
                            <div
                              key={tabIndex}
                              onMouseEnter={() => setActiveTab(tabIndex)}
                            >
                              {activeTab === tabIndex && (
                                <div className="w-full bg-white grid grid-cols-5 gap-2 p-2">
                                  {tab.post.map((tabPost, tabPostIndex) => (
                                    <Link
                                      to={tabPost.link}
                                      key={tabPostIndex}
                                      className="p-2 border"
                                    >
                                      <img
                                        src={tabPost.img}
                                        alt={tabPost.title}
                                        width={300}
                                        height={300}
                                        className="w-full max-h-32 h-full object-cover"
                                      />
                                      {tabPost.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
