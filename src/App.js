import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Womens from './pages/Womens/Womens'
import Mens from './pages/Mens/Mens'
import Product from './pages/Product/Product';
import Sneekers from './pages/Sneekers/Sneeker';
import SingleSneeker from './pages/Sneekers/SingleSneeker';
// import components
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer'
import Error from './components/Error'
import Loading from './components/Loading';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path={["/", "/React_Kedai", "/React_Kedai/"]} exact component={Home} />
          <Route path="/loading" component={Loading} />
          <Route path="/kedai/pages/cart" component={Cart} />
          <Route path="/kedai/pages/womens" component={Womens} />
          <Route path="/kedai/pages/mens" component={Mens} />
          <Route path="/kedai/pages/product/:id" component={Product} />
          <Route path="/kedai/pages/sneekers" component={Sneekers} />
          <Route path="/kedai/pages/sneeker/:id" component={SingleSneeker} />
          {/* ERROR EINA PASKUTINIS */}
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
