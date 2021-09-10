import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Home } from '../views/Home';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Login } from '../components/Login/Login';
import { NotFound } from '../components/NotFound/NotFound';
import { Checkout } from '../components/Checkout/Checkout';
// import Layout from '../components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Switch>
          <Route exact path="/" >
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
