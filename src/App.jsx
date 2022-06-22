
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Basket from './Basket';
import Checkout from './Checkout';
import React, { useEffect } from 'react';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './footer';

const promise = loadStripe('pk_test_51LD45yLQbvmYq4O1qmiRzHtDDOTaOioIMev9xxqepUtMvr7wMwIPNYf6qkwoh7vZ0qZ0EpojqnSURUDV5bPGWY4b00tFp1RXhW')

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //run once 
    auth.onAuthStateChanged(authUser => {
      console.log("user is here", authUser);

      if (authUser) {
        //user is loged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });

      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/orders" element={<><Header /><Orders /></>} />

          <Route path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>

              </>} />

        </Routes>

      </Router>

    </div>

  );
}

export default App;
