import React from 'react';
import ProductRow from './ProductRow';
import { Product } from '../../http/Api';
import ProductCategoryRow from './ProductCategoryRow';

type Props = {
  products: Product[];
  stockFilter: boolean;
  searchFilter: string;
};

const ProductTable: React.FC<Props> = ({ products, stockFilter, searchFilter }) => {
  let lastCategory: string | null = null;

  const rows: JSX.Element[] = [];

  const valid = (p: Product) =>
    (!stockFilter || p.stocked === stockFilter) && (!searchFilter || p.name.indexOf(searchFilter) !== -1);

  products.forEach((product) => {
    if (valid(product)) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow key={product.category} category={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
