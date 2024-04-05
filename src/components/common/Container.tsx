import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" max-w-7xl mx-auto lg:mt-28 md:mt-20 mt-14 lg:px-3 md:px-5 px-4 ">
      {children}
    </div>
  );
};

export default Container;
