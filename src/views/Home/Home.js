import React from 'react';
import { CarouselProm } from '../../components/Carousel/Carousel';
import { Product } from '../../components/Product/Product';
import { useStateValue } from '../../components/StateProvider';

const Home = () => {

  const [{computers}] = useStateValue();

  return (
    <article>
      <CarouselProm />
      <div className="container">
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
      </div>
    </article>
  );
};

export { Home };
