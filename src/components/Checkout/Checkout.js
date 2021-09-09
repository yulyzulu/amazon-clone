import React from 'react';
import './Checkout.css';
import { Subtotal } from '../Subtotal/Subtotal';

const Checkout = () => {
  return (
    <div className="checkout row">
      <div className="chec kout__left">
        <h2>Your Amazon Cart is empty</h2>
        <p>You have no items in your cart. Buy one</p>

      </div>
    <div className="checkout__rigth">
      <Subtotal />
    </div>
    </div>
  );
};

export { Checkout };