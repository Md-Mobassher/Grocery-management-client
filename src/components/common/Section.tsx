import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" max-w-7xl mx-auto lg:px-3 md:px-5 px-4 ">{children}</div>
  );
};

export default Section;
