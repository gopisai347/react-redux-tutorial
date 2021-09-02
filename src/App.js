
import './App.css';

import {BrowserRouter as Router, Switch,Route
} from 'react-router-dom';
import Header from './containers/Header';

import ProductListing from './containers/productListing';
import ProductDetails from './containers/productDetails';
// import ProductSampleListing from './containers/productSampleListing';
 
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      {/* <Header  /> */}
      {/* <Route path="/" exact component={ProductSampleListing} /> */}
      <Route exact path="/"  component={ProductListing} />
      <Route path="/product/:productId" exact component={ProductDetails}/>
      <Route>404 Not Found</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
