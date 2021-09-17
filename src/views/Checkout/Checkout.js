import React from 'react';
import './Checkout.css';
import { Subtotal } from '../../components/Subtotal/Subtotal';
import { useStateValue } from '../../components/StateProvider';
import { SelectedProduct } from '../../components/SelectedProduct/SelectedProduct';

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  //console.log(cart)
  console.log(dispatch);

  return (
    <article className="checkout row">
      <div className="col-12 col-md-8 col-lg-9 checkout__left">
        {/* <h2>Your Amazon Cart is empty</h2>
        <p>You have no items in your cart. Buy one</p> */}
        {
          user && <h5>Hello, {user.email.split('@')[0]} </h5>
        }
        <h2 className="checkout__title">Shopping Cart</h2>
        {
          cart.map(item => (
            <SelectedProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              category={item.category}
            />
          ))
        }
        {
          cart.length <= 0 && <p className="ms-2">Your Amazon Cart is empty.</p>
        }
      </div>
      <div className=" col-12 col-md-4 col-lg-3 checkout__rigth">
        <Subtotal />
      </div>
    </article>
  );
};

export { Checkout };