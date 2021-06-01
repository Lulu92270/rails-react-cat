import React, { useState, useEffect } from 'react';
import './styles/App.scss';

const App = ({catList}) => {

  return (
    <div className="App">
      <div className='cats-container'>
        {catList.map((cat, index) => {
          return (
            <div className='cat-card' key={index} style={{backgroundImage: `url(${cat.url})`}}>
            </div> 
          );
        })}
      </div>
    </div>
  );
}

export default App;
