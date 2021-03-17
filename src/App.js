import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Womens from './pages/Womens/Womens'
import Product from './pages/Product/Product';
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
          <Route path="/cart" component={Cart} />
          <Route path="/womens" component={Womens} />
          <Route path="/product/:id" component={Product} />
          {/* ERROR EINA PASKUTINIS */}
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
