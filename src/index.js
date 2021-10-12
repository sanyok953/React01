import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

//let rendererEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
//}
//rendererEntireTree() // Первая отрисовка
// Вызвали функцию от state и передали текущую функцию для перерисовки, state может вызвать эту функцию когда ему будет нужно
/*store.subscribe(() => {
  //let state = store.getState()
  rendererEntireTree()
})*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
