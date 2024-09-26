import { TCategory } from "@/types/category.types";

const CategoryCard = ({ imageUrl, name }: TCategory) => {
  return (
    <div className="relative bg-green-50  rounded-lg overflow-hidden group h-[340px]">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-contain bg-white group-hover:scale-110 transition-all duration-500"
      />
      <div className="bg-green-50">
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          {/* <p className="text-gray-500">({itemCount})</p> */}
        </div>

        <div className="absolute bottom-10 left-0 right-0 text-center opacity-90 bg-green-50 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300">
          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 w-full">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
