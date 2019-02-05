import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

function Board(props) {
    return <div id="board">
    {props.images.map(image => (
      <div style={{backgroundColor: image.color}} className="image" id={"image-" + image} key={image.index} onClick={() => {props.clickHandler(image.index)}} ></div>
    ))}
  </div>
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
