import React from 'react';
import { CarouselProm } from '../components/Carousel/Carousel';
import { Product } from '../components/Product/Product';

const Home = () => {
  return (
    <div>
      <CarouselProm />
      <Product
        id="123"
        category="computers"
        title='ASUS VivoBook 2021 15.6" FHD Business Laptop, 10ª generación Intel i3-1005G1 (hasta 3.4GHz Beat i5-8250U), 20 GB RAM 1TB PCIE SSD, retroiluminado KB, huella digital'
        price={679}
        rating={4}
        image="https://m.media-amazon.com/images/I/51xnB8izcVS._AC_SX425_.jpg"
      />
    </div>
  );
};

export { Home };
