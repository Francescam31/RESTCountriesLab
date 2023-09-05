import './App.css';
import { useState, useEffect } from 'react';
import Country from './components/Country';
import CountryList from './components/CountriesList';

function App() {

  const [countries, setCountries] = useState(null);
  const [visitedCountries, setVisitedCountries] = useState(null);

  const loadData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    setCountries(jsonData);
 }

  useEffect((() => {
    console.log("loading data");
    loadData();
  }), []);

  return (
    <>
      <h1>Countries</h1>
      {countries ? <CountryList countries={countries}/> : <p>loading...</p>}
    </>
  );
}

export default App;
