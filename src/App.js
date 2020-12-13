import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Produto from './pages/Produto';
import Suporte from './pages/Suporte';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/produto" component={Produto} />
        <Route path="/suporte" component={Suporte} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
