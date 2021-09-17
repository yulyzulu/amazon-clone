import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../../reducer/reducer';
import { useHistory } from 'react-router-dom';

const Subtotal = () => {
  const history = useHistory();
  const [{ cart }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText= {(value) => (
          <>
            <p className="mb-0">Subtotal ({cart?.length} {cart.length === 1 ? 'item': 'items'}): <strong>{value}</strong></p>
            <small className="subtotal__gift ">
              <input type="checkbox" className="me-1" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotal__button" onClick={(e) => history.push('/payment')} disabled={cart.length < 1} >Proceed to Checkout</button>
    </div>
  );
};

export { Subtotal };
