import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let rendererEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
      {/* т к addPost колбек значит байндим его и назначает владельца store этого метода */}
    </React.StrictMode>,
    document.getElementById('root')
  )
}
rendererEntireTree(store.getState()) // Первая отрисовка
// Вызвали функцию от state и передали текущую функцию для перерисовки, state может вызвать эту функцию когда ему будет нужно
store.subscribe(rendererEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
