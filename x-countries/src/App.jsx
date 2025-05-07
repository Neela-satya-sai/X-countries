import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card.jsx'
import axios from "axios";


function App() {
  let [countries, setCountries] = useState([]);
  const ENDPOINT = "https://xcountries-backend.azurewebsites.net/all"
  // let arr = [1,2,3,4,5,6];
 
  async function performApiCall(){
     try {
        let data = await axios.get(ENDPOINT);
        console.log(data.data)
        setCountries(data.data);

     } catch (error) {
      console.error(`Error fetching data:${error} `);
      
     }
  }

  useEffect( ()=>{
    performApiCall();
  }, []);

  return (
    <>
   
      <h1>X-countries</h1> 
      <div className="card-wrap">
          {countries.map((country)=> <Card flag={country.flag} name={country.name} abbr ={country.abbr} /> )}
      </div>
       
     
    </>
  ) 
}

export default App
