import React, { useState, useEffect } from 'react';
import './Orders.css';
import { useStateValue } from '../../components/StateProvider';
import { db } from '../../firebase';
import { collection, getDocs } from '@firebase/firestore';
import { Order } from '../../components/Order/Order';

const Orders = () => {
  const [{user}] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const getOrders = async () =>{
        const userRef = await getDocs(collection(db, "users", user?.uid, "orders"));
        console.log('user', userRef);
        userRef.forEach((doc) => {
          setOrders(orders => [...orders, {
            id: doc.id,
            data: doc.data()
          }])
          console.log(doc.id, doc.data());
          console.log('orders', orders);
        })
      }
      getOrders();
    } else {
      setOrders([]);
    }
  }, [orders, user])
  console.log('orders', orders)

  return (
    <article className="orders">
      <h1 className="orders__title">Your Orders</h1>
      <div>
        {
          orders ? orders.map((order) => (
            <Order order={order} />
          )): <p>You don't have orders</p>
        }
      </div>
    </article>
  );
};

export { Orders };
