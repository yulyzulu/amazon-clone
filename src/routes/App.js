import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Home } from '../views/Home';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Login } from '../components/Login/Login';
import { NotFound } from '../components/NotFound/NotFound';
import { Checkout } from '../components/Checkout/Checkout';
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from '../components/StateProvider';
// import Layout from '../components/Layout/Layout';

function App() {

  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...
    onAuthStateChanged(auth, (user) => {
      console.log('The user is', user);
      if (user) {
        //
        //const uid = user.uid;
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      } else {
        //user is signed out
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
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" >
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route component={NotFound} />
        </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
