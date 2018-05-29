import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = process.env.API_KEY


const App = () => {
  return <div>{API_KEY}</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
