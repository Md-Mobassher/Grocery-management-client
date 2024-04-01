//
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaCartPlus } from "react-icons/fa";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <FaCartPlus className="size-6 cursor-pointer rounded-3xl hover:bg-green-500 hover:text-white  transition-all duration-300" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl text-center font-bold mb-5">
            Cart
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="text-center mt-5">
            <p>No Cart Found</p>
          </div>
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>  */}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
