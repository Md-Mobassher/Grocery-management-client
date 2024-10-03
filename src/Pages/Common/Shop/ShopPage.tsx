/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Pagination } from "antd";
import Filter from "./Filter";
import { useGetAllProductsQuery } from "@/redux/features/admin/productManagement.api";
import ProductCard from "../Product/ProductCard";
import { TProduct } from "@/types/product.type";
import Loading from "@/components/common/Loading";

const ShopPage = () => {
  // Filters with default values
  const [selectedFilters, setSelectedFilters] = useState({
    category: undefined,
    priceRange: [0, 100000],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const queryParams = [
    { name: "category", value: selectedFilters.category },
    { name: "minPrice", value: selectedFilters.priceRange[0] },
    { name: "maxPrice", value: selectedFilters.priceRange[1] },
    { name: "page", value: currentPage },
    { name: "limit", value: limit },
  ];
  // Get all products with selected filters and pagination
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllProductsQuery(queryParams);

  // Handle filter change
  const handleFilterChange = (name: string, value: any) => {
    setSelectedFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto py-5 lg:px-3 md:px-6 px-4 pb-10">
      <div className="lg:flex md:flex gap-5 lg:mt-8 md:mt-6 mt-4">
        {/* filters */}
        <div className="lg:w-1/5 md:w-1/4 w-full border rounded p-4">
          <div className="border-b pb-2 mb-3">
            <h3 className="text-2xl font-semibold">Filter</h3>
          </div>
          <Filter
            name="Category"
            value={selectedFilters.category}
            onChange={(value) => handleFilterChange("category", value)}
          />
          <Filter
            name="Price"
            value={selectedFilters.priceRange}
            onChange={(value) => handleFilterChange("priceRange", value)}
          />
        </div>

        {/* products */}
        <div className="lg:w-4/5 md:w-3/4 w-full p-4 border rounded">
          <div className="pb-5">
            <h2 className="text-xl text-green-400 font-bold ml-1">
              {products?.data?.length || 0}
              <span className="text-black"> - Product(s) Found</span>
            </h2>
          </div>
          {isLoading && <Loading />}
          {isError && (
            <div className="flex justify-center items-center h-[300px]">
              <p className="text-center">No Product Found.</p>
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {isSuccess &&
              products?.data?.map((product: TProduct) => (
                <ProductCard key={product._id} {...product} />
              ))}
          </div>

          {/* pagination */}
          <div className="lg:mt-12 md:mt-10 mt-8 flex justify-center">
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              total={products?.total || 0}
              pageSize={products?.pageSize || 10} // Ensure pageSize is handled
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
