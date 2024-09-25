import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto lg:px-10 md:px-7 px-4 ">{children}</div>
  );
};

export default Container;
