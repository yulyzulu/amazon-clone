import React from 'react';
import './Order.css';
import moment from 'moment';
import { SelectedProduct } from '../SelectedProduct/SelectedProduct';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {

  return (
    <section className="order">
      <div className="row">
        <h3 className="col-12 col-md-7 col-xl-9">Order</h3>
        <p className="col-12 col-md-3 ">{order.id}</p>
      </div>
      <p className="order__date">{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <div className="order__items">
        {order.data.cart.map((item) => (
          <SelectedProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            category={item.category}
            hideButton
          />
        ))}
      </div>
      <div className="order__total">
        <CurrencyFormat
          renderText= {(value) => (
            <h4>Order Total: {value}</h4>
          )}
          decimalScale={2}
          value={order.data.amount/100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          />
      </div>
    </section>
  )
}

export { Order };
