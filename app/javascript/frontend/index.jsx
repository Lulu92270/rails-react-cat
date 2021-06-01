import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App.jsx';
import Nav from './components/Nav.jsx';
import axios from 'axios';
import './index.scss';

const Index = () => {
  const [catList, setCatList] = useState();
  // const url = "https://latelier.co/data/cats.json"
  const url = "/api/v1/cats"

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
          </Switch>
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
