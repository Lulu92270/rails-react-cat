import React from 'react';
import './styles/Score.scss';

const Score = ({catList}) => {
  const listSize = 9;
  const bestCatList = catList.sort((a, b) => (a.score < b.score) ? 1 : -1).slice(0, listSize)

  return (
    <div className="score-main">
      <p>{`And the ${listSize} winners are 😻`}</p>
      <div className="score">
        {bestCatList.map((cat, index) => {
          return (
            <div key={index} className="cat-container">
              <img src={`${cat.url}`} />
              <div id="score-value">
                <p>{`Score: ${cat.score}`}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Score;
