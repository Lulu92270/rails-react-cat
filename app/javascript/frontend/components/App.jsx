import React, { useState } from 'react';
import './styles/App.scss';
import { twoRandomItemsFromArray } from '../functions/twoRandomItemsFromArray';
import axios from 'axios';

import Cat from './Cat.jsx'

const App = ({catList}) => {
  const [twoCats, setTwoCats] = useState(twoRandomItemsFromArray(catList));

  const handleClick = (cat) => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const newScore = cat.score + 1
    axios.patch(
      `/api/v1/cats/${cat.id}`,
      { score: newScore },
      { headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        } 
      }).then(response => {
        console.log("Cat Updated", response, "His score is now", response.data.score)
        setTwoCats(false) // Required to trigger spring animation
        setTwoCats(twoRandomItemsFromArray(catList))
      })
  }

  return (
    <div className="App">
      <div className='cats-container'>
        {twoCats && 
          twoCats.map((cat, index) => {
            return (
              <Cat key={index} image={cat.url} clicked={() => handleClick(cat)} />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
