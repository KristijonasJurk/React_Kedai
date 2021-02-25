import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import Cart from './pages/Cart'
// import components
import Navbar from './components/Navbar'
import Error from './components/Error'
import Loading from './components/Loading'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/loading" component={Loading} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
