import React, { useState, useEffect } from 'react';
import './Orders.css';
import { useStateValue } from '../../components/StateProvider';
import { db } from '../../firebase';
import { collection, doc, getDocs } from '@firebase/firestore';
//import { Order } from '../../components/Order/Order';

const Orders = () => {
  const [{user}] = useStateValue();

  const userRef = doc(db, `/users/${user?.uid}/orders/pi_3JaR5cFBgCFnV3Pv0tRLkY1y`);
  const docSnap = getDocs(userRef)
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  // // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const userRef = getDocs(db, "users", user?.uid, "orders");
  //   console.log('ref', userRef)

  // },[])
  // const userRef = getDocs(db, "users", user?.uid, "orders");
  //   console.log('ref', userRef)

  return (
    <article className="orders">
      <h1>Orders</h1>
      <div>
        {/* {
          orders.map((order) => (
            <Order order={order} />
          ))
        } */}
      </div>
    </article>
  );
};

export { Orders };
