import React from 'react';
import { CarouselAds } from '../../components/Carousel/Carousel';
import { Product } from '../../components/Product/Product';
import { useStateValue } from '../../components/StateProvider';

const Home = () => {

  const [{computers}] = useStateValue();

  return (
    <article>
      <CarouselAds />
      <section className="container">
        <div className="row">
          {computers.map((item => (
            <Product key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              category={item.category}
            />
          )))}
        </div>
      </section>
    </article>
  );
};

export { Home };
