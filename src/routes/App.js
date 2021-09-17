import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Home } from '../views/Home/Home';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Login } from '../views/Login/Login';
import { NotFound } from '../components/NotFound/NotFound';
import { Checkout } from '../views/Checkout/Checkout';
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from '../components/StateProvider';
import { Payment } from '../views/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Orders } from '../views/Orders/Orders';
// import Layout from '../components/Layout/Layout';

const promise = loadStripe('pk_test_51Ja5WUFBgCFnV3Pv7RV0Nsw6bts0bYaoF91IjEjExJUAsU35Dj4ZLqzmVEaxbPso4CCCF29Kx9GW3Il6PU2uLOnB00e3HhvpC6');

function App() {

  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('The user is', user);
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Switch>
          <Route exact path="/" >
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route>
            <Header />
            <Orders />
          </Route>
          <Route component={NotFound} />
        </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
