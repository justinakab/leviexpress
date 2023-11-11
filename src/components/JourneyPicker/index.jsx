import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  // useStates
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  // useEffect

  useEffect(() => {
    const handleUseEffect = async () => {
      // API cities
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const data = await response.json();
      const cityunits = data.results;

      // API dates
      const response2 = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/dates',
      );
      const data2 = await response2.json();
      const dateunits = data2.results;

      setCities(cityunits);
      setDates(dateunits);
    };
    handleUseEffect();
  }, []);

  // components

  const DatesOptions = ({ dates }) => {
    return (
      <>
        <option value={''}>Vyberte</option>
        {dates.map((date) => (
          <option key={date.dateBasic} value={date.dateBasic}>
            {date.dateCs}
          </option>
        ))}
      </>
    );
  };

  const CityOptions = ({ cities }) => {
    return (
      <>
        <option value={''}>Vyberte</option>
        {cities.map((city) => (
          <option key={city.code} value={city.code}>
            {city.name}
          </option>
        ))}
      </>
    );
  };

  // functions
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response3 = await fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    );
    const data3 = await response3.json();
    console.log(data3);
    onJourneyChange(data3);
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
              <DatesOptions dates={dates}></DatesOptions>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              disabled={date === '' || toCity === '' || fromCity === ''}
              className="btn"
              type="submit"
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
