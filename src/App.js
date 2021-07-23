
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';

import About from './components/About';
import Groceries from './components/Groceries';
import Homeneeds from './components/Homeneeds';
import Fashion from './components/Fashion';
import Footwear from './components/Footwear';
import Sportstoys from './components/Sportstoys';
import Luggage from './components/Luggage';
import Electronics from './components/Electronics';

function App() {

  const location = window.location.pathname;
  console.log(location);
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <Switch>
        
          <Route path="/" exact>
              <h1>this is Home</h1>
              <Content />
          </Route>
          <Route path="/About" exact>
              <h1>this is About</h1>
              <About />
          </Route>
          <Route path="/Groceries" exact>
              <h1>this is Groceries</h1>
              <Groceries />
          </Route>
          <Route path="/Fashion" exact>
              <h1>this is Fashion</h1>
              <Fashion />
          </Route>
          <Route path="/Footwear" exact>
              <h1>this is Home</h1>
              <Footwear />
          </Route>
          <Route path="/Sportstoys" exact>
              <h1>this is Home</h1>
              <Sportstoys />
          </Route>
          <Route path="/Luggage" exact>
              <h1>this is Home</h1>
              <Luggage />
          </Route>
          <Route path="/Electronics" exact>
              <h1>this is Home</h1>
              <Electronics />
          </Route>
          

          <Route path="/Homeneeds" exact>
              <h1>this is Homeneeds</h1>
              <Homeneeds />
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
=======
      
>>>>>>> 655d6e3b57322e45f6ea2b355f28bd61e338069c
    </div>
  );
}

export default App;
