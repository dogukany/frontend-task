import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../stores";
import SearchBar from "../searchbar";
import CardContainer from "./CardContainer";

interface FilterByCardProps {
  filterType: "brand" | "model";
}

const FilterByCard = ({ filterType }: FilterByCardProps) => {
  const { products, setFilters, filteredProducts } = useContext(StoreContext);
  const [checkBoxList, setCheckBoxList] = useState<{ name: string }[]>([]);

  const setDefaultCheckBoxList = () => {
    const getItems = products
      .map((product) => {
        return { name: product[filterType] };
      })
      .filter((item, index, self) => {
        return self.findIndex((i) => i.name === item.name) === index;
      });
    setCheckBoxList(getItems);
  };
  useEffect(() => {
    setDefaultCheckBoxList();
    // eslint-disable-next-line
  }, [products]);

  useEffect(() => {
    if (filterType === "model") {
      const items = filteredProducts
        .map((product) => {
          return { name: product[filterType] };
        })
        .filter((item, index, self) => {
          return self.findIndex((i) => i.name === item.name) === index;
        });
      setCheckBoxList(items);
    }
  }, [filteredProducts, filterType]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const filterTypeForState = filterType === "model" ? "models" : "brands";

    if (checked) {
      setFilters((prev) => {
        return {
          ...prev,
          [filterTypeForState]: [...prev[filterTypeForState], id],
        };
      });
    } else {
      setFilters((prev) => {
        return {
          ...prev,
          [filterTypeForState]: prev[filterTypeForState].filter(
            (item) => item !== id
          ),
        };
      });
    }
  };

  const onSearch = (value: string) => {
    if (value.length === 0) {
      setDefaultCheckBoxList();
    } else {
      const items = checkBoxList.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      setCheckBoxList(items);
    }
  };

  return (
    <CardContainer title={filterType === "brand" ? "Brands" : "Models"}>
      <>
        <div className="bg-white pb-4">
          <SearchBar onSearch={onSearch} />
        </div>
        <div className="overflow-y-auto">
          <ul>
            {checkBoxList?.map((item) => {
              return (
                <li key={item.name}>
                  <label
                    className="p-2 label cursor-pointer"
                    htmlFor={item.name}
                  >
                    <input
                      type="checkbox"
                      id={item.name}
                      name={item.name + Math.random()}
                      className="checkbox checkbox-primary border-2"
                      onChange={handleFilter}
                    />

                    <span className=" ml-4 w-full">{item.name}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    </CardContainer>
  );
};

export default FilterByCard;
