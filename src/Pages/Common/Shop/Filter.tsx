/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, Slider } from "antd";
import { useEffect, useState } from "react";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useGetAllCategoriesQuery } from "@/redux/features/admin/categoryManagement.api";

interface FilterProps {
  name: string;
  value: any;
  onChange: (value: any) => void;
}

const Filter: React.FC<FilterProps> = ({ name, value, onChange }) => {
  const [categoryOptions, setCategoryOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const { data: categories, isLoading } = useGetAllCategoriesQuery(undefined);

  useEffect(() => {
    if (categories && categories.data) {
      const options = categories.data.map(
        (category: { name: string; _id: string }) => {
          return {
            label: category.name, // Use label for display
            value: category._id, // Use _id as value
          };
        }
      );
      setCategoryOptions(options);
    }
  }, [categories]);

  const handleCategoryChange = (checkedValues: CheckboxValueType[]) => {
    onChange(checkedValues); // Call onChange with the updated values
  };

  if (name === "Price") {
    return (
      <div className="mb-5">
        <h4 className="text-xl font-semibold mb-2">{name}</h4>
        <Slider
          className="text-green-500 border-green-500"
          range
          defaultValue={value}
          max={100000}
          onChange={(val) => onChange(val)}
        />
      </div>
    );
  } else if (name === "Category") {
    return (
      <div className="mb-5">
        <h4 className="text-xl font-semibold mb-2">{name}</h4>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Checkbox.Group
            className="-green-500"
            options={categoryOptions}
            value={value} // Ensure value is an array of selected IDs
            onChange={handleCategoryChange} // Handle change properly
          />
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Filter;
