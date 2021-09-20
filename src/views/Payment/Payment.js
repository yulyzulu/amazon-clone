import React, { useState, useEffect } from 'react';
import './Payment.css';
import axios from '../../axios';
import { useStateValue } from '../../components/StateProvider';
import { SelectedProduct } from '../../components/SelectedProduct/SelectedProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../reducer/reducer';
import { db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";

const Payment = () => {
  const history = useHistory();
  const [{cart, user}, dispatch] = useStateValue();
  console.log(cart, dispatch);

  const stripe = useStripe();
  const elements = useElements();

  const [successful, setSuccessful] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [ disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(cart) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // eslint-disable-next-line
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      const userRef = doc(db, "users", user?.uid, "orders", paymentIntent.id);
      setDoc(userRef, {
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })
      setSuccessful(true);
      setError(null);
      setProcessing(false);
      dispatch({
        type: 'EMPTY_CART'
      })
      history.replace('/orders')
    })
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  }

  return (
    <article className="payment" >
      <div className="payment__container">
        <h1 className="payment__title">
          Checkout (
            <Link to="/checkout" className="payment__items">{cart.length} {cart.length === 1 ? 'item' : 'items'}</Link>
          )
        </h1>
        <section className="payment__section row">
          <h3 className="payment__subtitle col-2 ">Delivery Address</h3>
          <div className="col-8">
            <p className="payment__address">{user ? user.email.split('@')[0] : ''}</p>
            <p className="payment__address">410 Terry Ave N</p>
            <p className="payment__address">Seattle 98109, WA</p>
          </div>
        </section>
        <section className="payment__section">
          <h3 className="payment__subtitle">Review items and delivery</h3>
          <div>
            {
              cart.map((item) => (
                <SelectedProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  category={item.category}
                />
              ))
            }
          </div>
        </section>
        <section className="payment__section row">
          <h3 className="payment__subtitle col-2">Payment Method</h3>
          <div className="payment__details col-8">
            <form onSubmit={handleSubmit}>
              <div className="payment__card">
                <CardElement onChange={handleChange} />
              </div>
              <div className="payment__price">
                <CurrencyFormat
                  renderText= {(value) => (
                    <h3>Payment Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  />
                <button className="payment__button" disabled={processing || disabled || successful}>
                  <span>{processing ? "Processing" : "Buy Now" }</span>
                </button>
              </div>
              {
                error && <span>{error}</span>
              }
            </form>
          </div>
        </section>
      </div>
    </article>
  );
};

export { Payment };
