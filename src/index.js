import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/FilterableProductTable';
import PRODUCTS from './Products';



ReactDOM.render(
 <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);









