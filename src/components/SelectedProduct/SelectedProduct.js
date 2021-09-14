import React from 'react';
import { useStateValue } from '../StateProvider';
import './SelectedProduct.css';

const SelectedProduct = ({ id, title, image, price, category, rating}) => {
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart);

  const removeProduct = () => {
    dispatch({
      type: 'REMOVE_PRODUCT_FROM_CART',
      id: id,
    });
  };
  return (
    <div className="selected row">
      <img className="col-12 col-md-2 col-lg-2 selected__image" src={image} alt={title} />
      <div className="col-12 col-md-7 col-lg-9">
        <p className="selected__title my-0">{title}</p>
        <p className="my-0 ">Price: $<strong>{price}</strong></p>
        <p className="text-success mt-0 mb-3"><small>In Stock</small></p>
        <button className="my-0 selected__delete-button " type="button" onClick={() => removeProduct()} >Delete</button>
      </div>
    </div>
  );
};

export { SelectedProduct };
