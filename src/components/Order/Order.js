import React from 'react';
import './Order.css';

const Order = ({ order }) => {
  console.log(order);
  return (
    <section className="order">
      <h2>Order</h2>
      <p>{}</p>
    </section>
  )
}

export { Order };
