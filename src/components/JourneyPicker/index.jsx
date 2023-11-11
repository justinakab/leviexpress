import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  // useStates
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);

  // useEffect

  useEffect(() => {
    const handleUseEffect = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const data = await response.json();
      const cityunits = data.results;

      setCities(cityunits);
    };
    handleUseEffect();
  }, []);

  // components

  const CityOptions = ({ cities }) => {
    return (
      <>
        <option value={''}>Vyberte</option>
        {cities.map((city) => (
          <option key={city.code} value={city.name}>
            {city.name}
          </option>
        ))}
      </>
    );
  };

  // functions
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fromCity, toCity, date);
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form
          id="spojeni"
          onSubmit={handleSubmit}
          className="journey-picker__form"
        >
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              onChange={(event) => {
                setFromCity(event.target.value);
              }}
              value={fromCity}
            >
              <CityOptions cities={cities}></CityOptions>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              onChange={(event) => {
                setToCity(event.target.value);
              }}
              value={toCity}
            >
              <CityOptions cities={cities}></CityOptions>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              onChange={(event) => {
                setDate(event.target.value);
              }}
              value={date}
            >
              <option value="">Vyberte</option>
              <option value="datum01">Datum 01</option>
              <option value="datum02">Datum 02</option>
              <option value="datum03">Datum 03</option>
              <option value="datum04">Datum 04</option>
              <option value="datum05">Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
