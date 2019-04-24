import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
class FilterableProductTable extends Component {
    render() {
        return (
            <div>
              <SearchBar product_Search={this.props.products}/>
              <ProductTable products={this.props.products} />
            </div>
          );
    }
}

export default FilterableProductTable;