import { IoStar } from "react-icons/io5";
import { Progress } from "../ui/progress";

const Ratings = ({ value }: { value: number }) => {
  return (
    <div className="flex justify-start items-center gap-5">
      <div className="flex gap-1 py-2">
        <IoStar className="text-orange-500 size-3" />
        <IoStar className="text-orange-500 size-3" />
        <IoStar className="text-orange-500 size-3" />
        <IoStar className="text-orange-500 size-3" />
        <IoStar className="text-orange-500 size-3" />
      </div>
      <Progress
        className="w-28 h-2 text-green-400 bg-slate-300"
        value={value}
      />

      <h5 className="text-md">{value}%</h5>
    </div>
  );
};

export default Ratings;
