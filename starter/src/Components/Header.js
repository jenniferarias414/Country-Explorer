import axios from "axios";
import React, { useState } from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePotentialCountries,
  setPotentialCountries,
} from "../redux/slices/potentialCountriesSlice";
import {
  selectDisplay,
  deleteDisplayCountry,
} from "../redux/slices/displayCountrySlice";
import { setLoading } from "../redux/slices/loadingSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const currentDisplay = useSelector(selectDisplay);
  const isLoading = useSelector((state) => state.loading.isLoading);

  const handleSearch = () => {
    dispatch(setLoading(true)); // Set loading state to true when search is initiated
    axios
      .get(`https://restcountries.com/v3.1/name/${input}`)
      .then((res) => {
        dispatch(deletePotentialCountries());
        dispatch(setPotentialCountries(res.data));
        dispatch(deleteDisplayCountry());
        console.log(res.data);
      })
      .catch((err) => {
        alert("No countries found that match your search!");
      })
      .finally(() => {
        setTimeout(() => {
        dispatch(setLoading(false)); // Reset loading state when search completes
        }, 800);
      });
  };

  return (
    <div className="header">
      <div className="home">
        <BsFillFlagFill style={{ marginRight: "10px" }} fontSize="1.6em" />
        <h3 className="home-country">
          {currentDisplay && currentDisplay.name.common}
        </h3>
      </div>
      {isLoading && <div>Loading...</div>}
      <div className="country-input">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={handleSearch}>search</button>
      </div>
      
    </div>
  );
};

export default Header;
