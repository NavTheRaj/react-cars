import logo from './logo.svg';
import './App.css';
import Header from './containers/Header/Header';
import CurrencyContext from './context/CurrencyContext';
import { useReducer, useState } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  // const reducer = (state, action) => {
  //   if (state.currency === "USD") {
  //     return {
  //       currency: "EURO"
  //     }
  //   } else {
  //     return {
  //       currency: "USD"
  //     }
  //   }
  // }

  const [currency, setCurrency] = useState("USD")

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      <div className="App">
        <BrowserRouter>
          <h1> WAA 2nd Exam </h1>
          <Dashboard />
        </BrowserRouter>

      </div>
    </CurrencyContext.Provider>
  );
}

export default App;
