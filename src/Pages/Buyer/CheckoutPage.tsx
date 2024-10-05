import Container from "@/components/common/Container";
import { useCreateOrderMutation } from "@/redux/features/buyer/orderManagement.api";
import {
  addToCart,
  decreaseQuantityFromCart,
  removeItemFromCart,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { TProduct } from "@/types/product.type";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const [order, { isLoading, isError }] = useCreateOrderMutation();
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

  const handleCreateOrder = async () => {
    console.log("order");
    const data = {
      items: cartItems.map((item) => ({
        productId: item.product._id,
        quantity: item.quantity,
        totalPrice: item.product.price * item.quantity,
      })),
      totalAmount: total,
    };
    console.log(data);
    try {
      const response = await order(data);
      console.log(response);
      if (isLoading) {
        toast.success("Creating order");
      } else if (isError) {
        toast.error(response?.data?.message || "Failed to create order");
      }
      toast.success("Order created successfully");
    } catch (error) {
      toast.error("Error creating order");
    }
  };
  return (
    <Container>
      <div className="flex lg:flex-row md:flex-row flex-col lg:gap-10 md:gap-8 gap-6 lg:my-10 md:my-8 my-6">
        <div className="lg:w-2/3 md:w-2/3 w-full ">
          <div className="bg-green-50 dark:bg-slate-800 rounded-xl p-4 md:p-6 mb-4">
            <h6 className="text-2xl font-bold ">Order Review</h6>
          </div>
          <div className="border rounded-lg p-5">
            {(cartItems.length > 0 &&
              cartItems?.map((item) => (
                <>
                  <div
                    className="flex justify-between items-start gap-5 p-3 border-b"
                    key={item?.product?._id}
                  >
                    <div className="flex gap-5 justify-start items-start">
                      <div className="lg:w-56 md:w-52 w-28 md:p-4 p-2 flex justify-start items-start">
                        {item.product.imageUrl &&
                          item.product.imageUrl.length > 0 && (
                            <img
                              src={item.product.imageUrl[0]}
                              alt=""
                              className=""
                            />
                          )}
                      </div>
                      <div className="flex justify-center gap-3">
                        <div>
                          <p className="text-lg">{item?.product?.name}</p>
                          <p className="font-semibold text-2xl mt-2">
                            <span className="text-green-500 font-semibold">
                              $ {item.product.price}
                            </span>
                          </p>
                          <div className=" flex justify-between items-center border rounded-full gap-3 overflow-hidden mt-4">
                            <div
                              onClick={() =>
                                dispatch(
                                  decreaseQuantityFromCart(
                                    item.product as TProduct
                                  )
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
                      <RiDeleteBin6Fill
                        className="text-green-500 hover:text-red-600 size-8 hover:size-9 transition-all duration-300 "
                        onClick={() =>
                          handleRemoveItemFromCart(item.product._id)
                        }
                      ></RiDeleteBin6Fill>
                    </div>
                  </div>
                </>
              ))) || (
              <div className="text-center">
                <hr />
                <p className=" mt-5">No Cart Found</p>
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/3 w-full">
          {cartItems.length > 0 && (
            <div className="bg-green-50 dark:bg-slate-800 rounded-xl flex flex-col gap-4 p-4 md:p-5">
              <div className="">
                <h6 className="text-2xl font-bold mb-6">Order Summary</h6>

                <div className="flex justify-between items-center">
                  <span>Sub total</span>
                  <span className="font-bold">${subTotal}</span>
                </div>
                <hr className="my-3 dark:border-slate-700" />
                <div className="flex justify-between items-center">
                  <span>Shipping Fee</span>
                  <span className="font-bold">${shippingFee || 99}</span>
                </div>
                <hr className="my-3 dark:border-slate-700" />
                <div className="flex justify-between items-center">
                  <span>Tax</span>
                  <span className="font-bold">${tax || 168}</span>
                </div>
                <hr className="my-3 dark:border-slate-700" />
                <div className="flex justify-between items-center">
                  <span className="fs-5 font-bold">Total</span>
                  <span className="font-bold">${total}</span>
                </div>
              </div>
              <div className="mt-5">
                <button
                  onClick={handleCreateOrder}
                  className="w-full bg-green-400 rounded-md text-white hover:bg-green-500 py-2.5"
                >
                  Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
