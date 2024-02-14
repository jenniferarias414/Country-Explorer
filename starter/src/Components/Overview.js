import React from 'react';
import { useSelector } from 'react-redux';
import {selectDisplay} from '../redux/slices/displayCountrySlice';

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay);

    return (
      <div className="stack">
        <h1>{currentDisplay.name.official}</h1>
        <h2>AKA: {currentDisplay.name.common}</h2>

        <table className="overview-table">
          <tr>
            <td>Continent: </td>
            {currentDisplay.continents.map((e) => (
              <td>{e}</td>
            ))}
          </tr>
          <tr>
            <td>Population: </td>
            <td>{currentDisplay.population}</td>
          </tr>
          <tr>
            <td>Capital City: </td>
            {currentDisplay.capital.map((e) => (
              <td>{e}</td>
            ))}
          </tr>
          <tr>
            <td>Languages Spoken: </td>
            {/* {currentDisplay.languages.map((e) => (<td>{e}</td>))} */}
            <td>{Object.values(currentDisplay.languages).join(", ")}</td>
          </tr>
          <tr>
            <td>Currency: </td>
            {/* {currentDisplay.currencies.map((e) => (<td>{e}</td>))} */}
            <td>
              {Object.entries(currentDisplay.currencies).map(
                ([currencyCode, currencyInfo]) => (
                  <span key={currencyCode}>
                    {currencyInfo.name} ({currencyInfo.symbol})
                  </span>
                )
              )}
            </td>
          </tr>
          <tr>
            <td>Independent: </td>
            <td>{currentDisplay.independent ? 'true' : 'false'}</td>
          </tr>
          <tr>
            <td>Member of UN: </td>
            <td>{currentDisplay.unMember ? 'true' : 'false'}</td>
          </tr>
        </table>
      </div>
    );
};

export default Overview;