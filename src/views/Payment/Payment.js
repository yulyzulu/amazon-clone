import React, { useState, useEffect } from 'react';
import './Payment.css';
import axios from 'axios';
import { useStateValue } from '../../components/StateProvider';
import { SelectedProduct } from '../../components/SelectedProduct/SelectedProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../reducer/reducer';


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
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?total=${getCartTotal(cart) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart])

  const handleSubmit = async (e) => {
    //do all the fancy stripe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      //paymentIntent = payment confirmation
      setSuccessful(true);
      setError(null);
      setProcessing(false);
      history.replace('/orders')
    })
  };

  const handleChange = (e) => {
    // Listhen changes in the CardElement
    //and display any errors as the customer types their card details
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
        <div className="payment__section row">
          <h3 className="payment__subtitle col-2 ">Delivery Address</h3>
          <div className="col-8">
            <p className="payment__address">{user ? user.email.split('@')[0] : ''}</p>
            <p className="payment__address">123 React Lane</p>
            <p className="payment__address">Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
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
        </div>
        <div className="payment__section row">
          <h3 className="payment__subtitle col-2">Payment Method</h3>
          <div className="payment__details col-8">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText= {(value) => (
                    <h4>Order Total: {value}</h4>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  />
                <button disabled={processing || disabled || successful}>
                  <span>{processing ? <p>Processing...</p>: "Buy Now" }</span>
                </button>
              </div>
              {
                error && <span>{error}</span>
              }
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export { Payment };
