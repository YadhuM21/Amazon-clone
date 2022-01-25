import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from './Checkout';
import SignIn from './SignIn';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import Footer from './Footer';

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('The User is ----->>', authUser);

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/login">
            {/* <Header/> */}
            {/* <h1>Login Page</h1> */}
            <SignIn/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home />
            <Footer/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
