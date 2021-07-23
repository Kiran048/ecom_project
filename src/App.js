
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

import About from './components/About';
import Groceries from './components/Groceries';
import Homeneeds from './components/Homeneeds';
import Fashion from './components/Fashion';
import Footwear from './components/Footwear';
import Sportstoys from './components/Sportstoys';
import Luggage from './components/Luggage';
import Electronics from './components/Electronics';
import Login from './components/Login';
import Logout from './components/logout';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const location = window.location.pathname;
  console.log(location);
  return (
    <div className="App">
      <Header />
      <Switch>
        
          <PrivateRoute path="/Home" exact>
              <h1>this is Home</h1>
              <Home />
          </PrivateRoute>
          <Route path="/About" exact>
              <h1>this is About</h1>
              <About />
          </Route>
          <PrivateRoute path="/Groceries" exact>
              <h1>this is Groceries</h1>
              <Groceries />
          </PrivateRoute>
          <PrivateRoute path="/Fashion" exact>
              <h1>this is Fashion</h1>
              <Fashion />
          </PrivateRoute>
          <PrivateRoute path="/Footwear" exact>
              <h1>this is Footwear</h1>
              <Footwear />
          </PrivateRoute>
          <PrivateRoute path="/Sportstoys" exact>
              <h1>this is Sportstoys</h1>
              <Sportstoys />
          </PrivateRoute>
          <PrivateRoute path="/Luggage" exact>
              <h1>this is Luggage</h1>
              <Luggage />
          </PrivateRoute>
          <PrivateRoute path="/Electronics" exact>
              <h1>this is Electronics</h1>
              <Electronics />
          </PrivateRoute>
          

          <PrivateRoute path="/Homeneeds" exact>
              <h1>this is Homeneeds</h1>
              <Homeneeds />
          </PrivateRoute>
          <Route path="/Login" exact>
              <h1>this is Login</h1>
              <Login />
          </Route>
          <Route path="/logout" exact>
              <h1>this is Logout</h1>
              <Redirect to="/login" />
              
          </Route>
        
        </Switch>
      {/* {location==="/" && <Content /> }
      {location==="/about" && <About />}
      {location==="/Groceries" && <Groceries />} */}
      {/* {location==="/Homeneeds" && <Homeneeds />} */}
      {/* {location==="/Fashion" && <Fashion />}
      {location==="/Footwear" && <Footwear />}
      {location==="/Sportstoys" && <Sportstoys />}
      {location==="/Luggage" && <Luggage />}
      {location==="/Electronics" && <Electronics />} */}

      

    </div>
  );
}

export default App;
