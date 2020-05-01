import React from 'react';
import styles from "./App.module.css";
// import News from "./components/News/News"
// import axios from "axios";
// import Search from './components/Search'
// import Countries from './components/Countries'
// import Worldcases from './components/Worldcases'
import './App.css';

import { fetchData } from './api/index'

import { Cards, CountryPicker } from './components'


class App extends React.Component {
  state = {
    data: {},
    country: ""
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    });
  }
  handleCountryChange = async country => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://www.naceweb.org/uploadedimages/images/2019/nace-store-launch/2020/nace-town-halls-covid-19.png"
          alt="COVID-19"
        />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        {/* <Chart data={data} country={country} /> */}
      </div>
    );
  }
}

export default App;

//   const [latest, setLatest] = React.useState([]);
//   const [results, setResults] = React.useState([]);
//   const [searchCountry, setSearchCountry] = React.useState('')
//   const [typedCountry, setTypedCountry] = React.useState('')


//   const handleSearch = (e) =>{
//     setTypedCountry(e.target.value)
//   }



//   useEffect(() =>{
//     axios
//       .all([
//         axios.get("https://corona.lmao.ninja/all"),
//         axios.get("https://corona.lmao.ninja/countries")
//       ])
//       .then(responseArr => {
//         setLatest(responseArr[0].data);
//         setResults(responseArr[1].data);
//       })
//   }, []);

//   const lastUpdated = new Date(parseInt(latest.updated)).toUTCString();

//   const filterCountry = results.filter(item => {
//     return searchCountry !== '' ? item.country.toLowerCase() === searchCountry.toLowerCase() : item
//   });

//   const typedSearch = () => {
//     setSearchCountry(typedCountry)
//   };

//   const reset = () => {
//     setSearchCountry('');
//     setTypedCountry('');
//   }

//   const countries = filterCountry.map(result => {
//     return(
//       <Countries 
//         src={result.countryInfo.flag} 
//         country={result.country} 
//         cases = {result.cases} 
//         recovered = {result.recovered} 
//         deaths = {result.deaths}
//         active = {result.active}
//         critical = {result.critical}
//       />
//     )
//   })

//   return (
//     <div className="App">
//       <h1 className= "title">COVID-19 Live Tracker</h1>
//       <Worldcases cases = {latest.cases} recoveries = {latest.recovered} deaths = {latest.deaths} updated = {lastUpdated} />
//       <Search onChange = {handleSearch} value = {typedCountry} onClick = {typedSearch} onDoubleClick = {reset} />
//       <div className= 'worldstats'>{countries}</div>
//     </div>
//   );
// }

