import React from "react";
import { IProduct } from "../../../util/types";
import Producttem from "./ProductItem";

interface ProductsListProps {
  items: IProduct[];
  itemsPerPage: number;
}

const ProductsList = ({ items, itemsPerPage }: ProductsListProps) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  React.useEffect(() => {
    setTotalPages(Math.ceil(items.length / itemsPerPage));
  }, [items, itemsPerPage]);

  const renderProducts = (product: IProduct) => {
    return <Producttem product={product} key={product.id + Math.random()} />;
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
  };

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number) => {
      return (
        <li
          key={number}
          className={`cursor-pointer text-gray-500 font-medium ${
            currentPage === number ? "text-blue-600" : ""
          }`}
          onClick={() => handlePage(number)}
        >
          {number}
        </li>
      );
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full lg:w-3/6 ">
      <div className="px-4 grid grid-cols-2 2xl:grid-cols-4">
        {currentItems.map(renderProducts)}
      </div>
      <div
        className="flex flex-row space-x-4 justify-center items-center"
        data-testid="pagination"
      >
        <button onClick={handleFirst}>
          <p>{"<<"}</p>
        </button>
        <button onClick={handlePrev}>
          <p>{"<"}</p>
        </button>
        <ul className="flex flex-row space-x-2">{renderPageNumbers()}</ul>
        <button onClick={handleNext}>
          <p>{">"}</p>
        </button>
        <button onClick={handleLast}>
          <p> {">>"}</p>
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
