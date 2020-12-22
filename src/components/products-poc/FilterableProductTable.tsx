import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { GetProducts, Product } from "../../http/Api";

const FilterableProductTable: React.FC = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [stockFilter, setStockFilter] = useState(false);
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    GetProducts().then((res) => setProducts(res.data.products));
  }, []); // run once

  return (
    <div>
      <SearchBar
        stockFilter={stockFilter}
        onStockFilterChange={setStockFilter}
        searchFilter={searchFilter}
        onSearchFilterChange={setSearchFilter}
      />
      <ProductTable
        products={products}
        stockFilter={stockFilter}
        searchFilter={searchFilter}
      />
    </div>
  );
};

export default FilterableProductTable;
