import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { removeItemFromCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ImCross } from "react-icons/im";

const Cart = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();

  const handleRemoveItemFromCart = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative  cursor-pointer hover:text-green-500 transition-all duration-300">
          <p className="absolute -top-3 -right-3 text-xl font-semibold text-green-500 ">
            {cartItems.length}
          </p>
          <MdOutlineShoppingCart className="size-8 hover:text-green-500 transition-all duration-300" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl text-center font-bold pb-5 text-green-500">
            Cart
          </SheetTitle>
        </SheetHeader>

        {(cartItems.length > 0 &&
          cartItems.map((item) => (
            <>
              <hr />
              <div className="flex justify-between items-center gap-3 py-2">
                <div className="flex gap-5">
                  <div className="w-[70px]">
                    {item.product.imageUrl &&
                      item.product.imageUrl.length > 0 && (
                        <img src={item.product.imageUrl[0]} alt="" />
                      )}
                  </div>
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="font-semibold text-green-500">
                        {item.product.name}
                      </p>
                      <p className="font-semibold">
                        Price -{" "}
                        <span className="text-green-500 font-semibold">
                          {item.product.price * item.quantity}
                        </span>
                      </p>
                      <p className="font-semibold">
                        Quantity -{" "}
                        <span className="text-green-500 font-semibold">
                          {item.quantity}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <ImCross
                    className="text-red-600 hover:text-white hover:bg-red-700 size-5 hover:size-6 transition-all duration-300 hover:border rounded"
                    onClick={() => handleRemoveItemFromCart(item.product._id)}
                  ></ImCross>
                </div>
              </div>
            </>
          ))) || (
          <div className="text-center">
            <hr />
            <p className=" mt-5">No Cart Found</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
