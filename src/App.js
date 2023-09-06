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

  // const handleValueChange = (event) => {
        
  // }

  return (
    <>
      <h1>Countries</h1>
      {/* <div class="countries"> */}
        {countries ? <CountryList countries={countries}/> : <p>loading...</p>}
      {/* </div> */}
      {/* <div class="visitedCountries"> */}
        {/* {countries ? <CountryList visitedCountries={visitedCountries}/> : <p>You haven't visited any countries yet</p>} */}
      {/* </div> */}
    </>
  );
}

export default App;
