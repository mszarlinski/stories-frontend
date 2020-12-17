import React from 'react';

type Props = {
  stockFilter: boolean;
  onStockFilterChange(filter: boolean): void;
  searchFilter: string;
  onSearchFilterChange(filter: string): void;
};

const SearchBar: React.FC<Props> = ({ stockFilter, onStockFilterChange, searchFilter, onSearchFilterChange }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={searchFilter}
        onChange={(e) => onSearchFilterChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={stockFilter}
          onChange={(e) => onStockFilterChange(e.target.checked)}
        />
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
