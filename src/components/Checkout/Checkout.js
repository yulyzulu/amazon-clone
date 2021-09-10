import React from 'react';
import './Checkout.css';
import { Subtotal } from '../Subtotal/Subtotal';
import { useStateValue } from '../StateProvider';
import { SelectedProduct } from '../SelectedProduct/SelectedProduct';

const Checkout = () => {
  const [{ cart }] = useStateValue();
  console.log(cart)
  return (
    <div className="checkout row">
      <div className="col-12 col-md-8 col-xl-9 checkout__left">
        {/* <h2>Your Amazon Cart is empty</h2>
        <p>You have no items in your cart. Buy one</p> */}
        <h2 className="checkout__title">Shopping Cart</h2>
        {
          cart.map(item => (
            <SelectedProduct item={item} />
          ))
        }
      </div>
    <div className=" col-12 col-md-4 col-xl-3 checkout__rigth">

      <Subtotal />
    </div>
    </div>
  );
};

export { Checkout };