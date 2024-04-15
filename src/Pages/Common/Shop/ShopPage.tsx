import Filter from "./Filter";
import NewProducts from "./NewProducts";

const ShopPage = () => {
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
        <div className="lg:w-4/5 md:w-3/4 w-full py-4 border rounded">
          <div>
            <NewProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
