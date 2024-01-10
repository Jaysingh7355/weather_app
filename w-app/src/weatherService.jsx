
import axios from 'axios';

const API_KEY = 'feb440e5441020d961d5ff345daabc66'; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // You can change the unit if you prefer Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
