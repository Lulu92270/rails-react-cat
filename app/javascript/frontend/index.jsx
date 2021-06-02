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

  const fetchCats = () => {
    axios.get(url, { withCredentials: true })
         .then(response => {setCatList(response.data), console.log("Cat List Fetched :)")})
         .catch(error => console.log("Check fetch cat error",error))
  }
  useEffect(() => {
    fetchCats()
  }, []);

  const handleUpdate = (cat) => {
    catList.find(object => object.id === cat.id).score++;
    setCatList(catList)
  }
  
  return (
    <Router>
      {catList &&
        <div className='cat-background'>
          <Nav />
          <Switch>
            <Route path="/" exact render={props => (<App {...props} catList={catList} updateCatList={handleUpdate} />)} />
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
