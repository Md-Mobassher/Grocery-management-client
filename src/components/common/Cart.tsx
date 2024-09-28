import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  addToCart,
  decreaseQuantityFromCart,
  removeItemFromCart,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { TProduct } from "@/types/product.type";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();

  const handleRemoveItemFromCart = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const subTotal = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
  const shippingFee = 5;
  const tax = subTotal * 0.01;
  const total = subTotal + shippingFee + tax;

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
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl text-center font-bold pb-3 text-green-500">
            Cart
          </SheetTitle>
        </SheetHeader>

        {(cartItems.length > 0 &&
          cartItems.map((item) => (
            <>
              <hr />
              <div
                className="flex justify-between items-center gap-3 pt-2 pb-3"
                key={item?.product?._id}
              >
                <div className="flex gap-5">
                  <div className="w-[70px]">
                    {item.product.imageUrl &&
                      item.product.imageUrl.length > 0 && (
                        <img src={item.product.imageUrl[0]} alt="" />
                      )}
                  </div>
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="">{item?.product?.name}</p>
                      <p className="font-semibold text-lg">
                        <span className="text-green-500 font-semibold">
                          $ {item.product.price}
                        </span>
                      </p>
                      <div className=" flex justify-between items-center border rounded-full gap-3 overflow-hidden mt-2">
                        <div
                          onClick={() =>
                            dispatch(
                              decreaseQuantityFromCart(item.product as TProduct)
                            )
                          }
                          className="border-r px-3 pl-4 pb-1 cursor-pointer text-xl font-semibold flex-1 bg-green-50"
                        >
                          -
                        </div>
                        <p className="bg-white flex-1 text-center px-1">
                          {item?.quantity || 0}
                        </p>
                        <div
                          onClick={() =>
                            dispatch(addToCart(item.product as TProduct))
                          }
                          className="border-l px-3 pr-4 pb-1 cursor-pointer text-xl flex-1 bg-green-50"
                        >
                          +
                        </div>
                      </div>
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

        {cartItems.length > 0 && (
          <div className="bg-green-50 dark:bg-slate-800 rounded-xl flex flex-col gap-4 p-4 md:p-5">
            <div className="">
              <h6 className="font-medium mb-5  ">Order Summary</h6>

              <div className="flex justify-between items-center">
                <span>Sub total</span>
                <span className="font-bold">${subTotal}</span>
              </div>
              <hr className="my-2 dark:border-slate-700" />
              <div className="flex justify-between items-center">
                <span>Shipping Fee</span>
                <span className="font-bold">${shippingFee || 99}</span>
              </div>
              <hr className="my-2 dark:border-slate-700" />
              <div className="flex justify-between items-center">
                <span>Tax</span>
                <span className="font-bold">${tax || 168}</span>
              </div>
              <hr className="my-2 dark:border-slate-700" />
              <div className="flex justify-between items-center">
                <span className="fs-5 font-bold">Total</span>
                <span className="font-bold">${total}</span>
              </div>
            </div>
            <div className="">
              <Link to={"/checkout"}>
                <button className="w-full bg-green-400 rounded-md text-white hover:bg-green-500 py-2.5">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
