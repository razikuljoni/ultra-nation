import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Country from "./components/Country/Country";
import logo from "./logo.svg";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const handleCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    <div className="App">
      <h3> Added Countries: {cart.length} </h3>
      <Cart cart={cart}></Cart>
      <ul>
        {countries.map((country) => (
          <Country
            country={country}
            handleCountry={handleCountry}
            key={country.alpha3Code}
          ></Country>
        ))}
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
