import React from 'react';
import star from '../../static/star-emoji.png';
import './Product.css';
import { useStateValue } from '../StateProvider';

const Product = ({ id, title, image, price, category, rating}) => {
  const [{ cart }, dispatch] = useStateValue();

  console.log(cart);
  const addToCart = () => {
    // console.log('clic')
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        category: category,
      }
    });
  };

  return (
    <section className="product col-11 col-md-5 col-lg-3 card" >
      <img className="product__img card-img-top" src={image} alt="Computer" />
      <div className="card-body pt-1">
        <h5 className="product__price text-center">${price}</h5>
        <p className="card-text"><strong>{title}</strong></p>
        <p className="card-text"><small className="text-muted">Shipping Free</small></p>
        {
          Array(rating).fill().map((_, i) =>(
            <img key={i} className="product__rating pe-1" src={star} alt="star" />
          ))
        }
        <div className="product__button">
          <button className="btn product__cart px-5 py-1" onClick={() => addToCart()} >Add to Cart</button>
        </div>
      </div>
    </section>

  );
}

export { Product };
