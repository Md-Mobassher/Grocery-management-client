import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return <div className="lg:py-14 md:py-10 py-7">{children}</div>;
};

export default Section;
