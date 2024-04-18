import { Pagination } from "antd";
import Filter from "./Filter";
import { useGetAllProductsQuery } from "@/redux/features/admin/productManagement.api";
import ProductCard from "../Product/ProductCard";
import { TProduct } from "@/types/product.type";
import Loading from "@/components/common/Loading";

const ShopPage = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllProductsQuery(undefined);
  console.log(products);
  return (
    <div className="max-w-7xl mx-auto py-5 lg:px-3 md:px-6 px-4 pb-10">
      <div className="lg:flex md:flex gap-5 lg:mt-8 md:mt-6 mt-4">
        {/* filters */}
        <div className="lg:w-1/5 md:w-1/4 w-full border rounded p-4">
          <div className="border-b pb-2 mb-3">
            <h3>Filter</h3>
          </div>
          <Filter name="Sub Category" />
          <Filter name="Price" />
          <Filter name="Discount" />
        </div>

        {/* products */}
        <div className="lg:w-4/5 md:w-3/4 w-full p-4 border rounded">
          <div className="pb-5">
            <h2 className="text-xl text-green-400 font-bold ml-1">
              {products?.data?.length || 0}
              <span className="text-black"> - Product Found</span>
            </h2>
          </div>
          {isLoading && <Loading />}
          <div className="min-h-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {isSuccess &&
              products.data.map((product: TProduct) => (
                <ProductCard key={product._id} {...product} />
              ))}

            {isError && (
              <div className="flex justify-center items-center">
                <p className="text-center">No Product Found.</p>
              </div>
            )}
          </div>
          {/* pagination */}
          <div className="lg:mt-12 md:mt-10 mt-8 flex justify-center">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
