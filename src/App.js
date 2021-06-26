import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Register from './pages/register/Register';
import Kegiatan from './pages/kegiatan/Kegiatan';
import ScrollToTop from './components/scrolltotop/ScrollToTop';

const Pages = ({ children }) => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="App font-roboto" style={{ height: 'auto' }}>
      <Router>
        <Switch>
          <Route path="/blog">
            <Pages>
              <Blog />
            </Pages>
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/register">
              <Register />
          </Route>
          <Route path="/kegiatan">
            <Pages>
              <Kegiatan />
            </Pages>
          </Route>
          <Route path="/about">
            <Pages>
              <About />
            </Pages>
          </Route>
          <Route path="/">
            <Pages>
              <Home />
            </Pages>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
