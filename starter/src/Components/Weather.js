import axios from "axios";
import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const [weather, setWeather] = useState();
    const display = useSelector(selectDisplay);
    const latitude = display.capitalInfo.latlng[0];
    const longitude = display.capitalInfo.latlng[1];

    useEffect(() => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: `${latitude}, ${longitude}` },
        headers: {
          "X-RapidAPI-Key":
            "ba51804b49msh3efad5633803093p15df5cjsn41170afaa6bd",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      // try {
      //     const response = await axios.request(options);
      //     console.log(response.data);
      // } catch (error) {
      //     console.error(error);
      // }
      axios
        .request(options)
        .then(function (res) {
          console.log(res.data);
          setWeather(res.data);
        })
        .catch(function (err) {
          console.error(err);
        });
    }, []);

    // ------------------------------------
    // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
    // ------------------------------------

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current?.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>{weather?.current?.wind_mph} mph{" "}
                    {weather?.current?.wind_dir}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
