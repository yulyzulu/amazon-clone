import React from 'react';
import './Checkout.css';
import { Subtotal } from '../../components/Subtotal/Subtotal';
import { useStateValue } from '../../components/StateProvider';
import { SelectedProduct } from '../../components/SelectedProduct/SelectedProduct';

const Checkout = () => {
  const [{ cart, user }] = useStateValue();

  return (
    <article className="checkout row">
      <section className="col-12 col-md-8 col-lg-9">
        {
          user && <h5 className="checkout__greeting">Hello, {user.email.split('@')[0]} </h5>
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
          cart.length <= 0 && <p className="checkout__emptyCart">Your Amazon Cart is empty.</p>
        }
      </section>
      <section className="col-12 col-md-4 col-lg-3">
        <Subtotal />
      </section>
    </article>
  );
};

export { Checkout };