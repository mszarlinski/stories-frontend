import React from "react";
import { Product } from "../../http/Api";

interface Props {
  product: Product;
}

class ProductRow extends React.Component<Props> {
  render() {
    const { product } = this.props;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
