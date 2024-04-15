/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Filter = ({ name }: any) => {
  const [filter, setFilter] = useState(false);
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{name}</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-2 ">
            {filter ? (
              <MdOutlineCheckBoxOutlineBlank
                onClick={() => setFilter(!filter)}
                className="size-5 cursor-pointer"
              />
            ) : (
              <IoMdCheckbox
                onClick={() => setFilter(!filter)}
                className="size-5 cursor-pointer text-green-500"
              />
            )}
            <p>Mobassher</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
