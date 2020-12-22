import React from "react";

interface Props {
  key: string;
  category: string;
}

class ProductCategoryRow extends React.Component<Props> {
  render() {
    const { category } = this.props;
    return (
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
