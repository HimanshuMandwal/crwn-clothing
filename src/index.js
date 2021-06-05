import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

//for access to reducers and store we need a component Provider from react-redux

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><React.StrictMode>
      <PersistGate persistor = {persistor}>
        <App />
      </PersistGate>
    </React.StrictMode></BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
// we have put whole of the code inside provider to have access redux and once the store is passed as attribute to this then it gets the redux store context to whole of the application
//we have put the whole of the app inside the BrowserRouter so that Our App gets All the functionality of the react-router-dom

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
