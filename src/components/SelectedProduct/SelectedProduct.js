import React from 'react';

import './SelectedProduct.css';

const SelectedProduct = ({ item }) => {
  console.log('selected', item);
  return (
    <div className="selected row">
      <img className="col-12 col-md-3 selected__image" src={item.image} alt={item.title} />
      <div className="col-12 col-md-9">
        <h5 className="col-11 col-md-11">{item.title}</h5>
        <p className="col-1">${item.price}</p>
        <button className="col-2 " type="button">Delete</button>
      </div>
    </div>
  );
};

export { SelectedProduct };
