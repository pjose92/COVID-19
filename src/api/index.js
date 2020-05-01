import axios from "axios";

// const newsUrl = 
//   "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=d6267d68d70b48f9b357ce1c4cec5e14"

//   export const fetchNews = async () => {
//     try {
//       const {
//         data: { articles }
//       } = await axios.get(newsUrl)

//       return { articles };
//     } catch (error) {
//       console.log("jp: line 14 api.js there is an error", error.message );
//     }
//   }


const url = "https://covid19.mathdro.id/api";

export const fetchData = async country => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log("line 23 index.js in api folder", data);
    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);
    return countries.map(country => country.name);
  } catch (error) {
    console.log(error);
  }
};