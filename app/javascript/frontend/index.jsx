import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './index.scss';

import App from './components/App.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Score from './components/Score.jsx';

const Index = () => {
  const [catList, setCatList] = useState();
  const url = "/api/v1/cats";

  useEffect(() => {
    axios.get(url, { withCredentials: true })
         .then(response => setCatList(response.data))
         .catch(error => console.log("Check fetch cat error",error))
  }, []);
  
  return (
    <Router>
      {catList &&
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact render={props => (<App {...props} catList={catList} />)} />
            <Route path="/score" render={props => (<Score {...props} catList={catList} />)} />
          </Switch>
          <Footer />
        </div>
      }
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
