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
  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
  const { data: categories, isLoading } = useGetAllCategoriesQuery(undefined);

  useEffect(() => {
    if (categories && categories.data) {
      setCategoryOptions(
        categories.data.map((category: { name: string }) => category.name)
      );
    }
  }, [categories]);

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
            options={categoryOptions}
            value={value}
            onChange={(checkedValues: CheckboxValueType[]) =>
              onChange(checkedValues)
            }
          />
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Filter;
