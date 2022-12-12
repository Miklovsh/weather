import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c843569ad23fdc5c81afc253dbd52740&lang=ua`;

  const search = (event) => {
    if (event) {
      axios.get(url).then((response) => {
        setData(response.data)
      }, (error) => {
        setError('По вашому запиту нічого не знайдено!')
      })
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <main className="main">
            <h1 className="main__title">Погода</h1>
            <div className="main__search">
              <input className="main__search-input" onChange={event => setLocation(event.target.value)} type="text" value={location} placeholder="Введіть місто" />
              <input className="main__search-btn" onClick={search} type="button" value="Пошук" />
              <h4 className="main__error">{error}</h4>
            </div>
            <div className='main__developer'>
              <p className='main__developer-label'>Розробник - </p>
              <a className='main__developer-name' href="https://www.linkedin.com/in/viktor-miklovsh-aa61b9205/" target="_blank">Мікловш Віктор</a>
            </div>
          </main>
          <aside className="details">
            <h2 className="details__title">Детальний опис погоди</h2>
            <div className="details__box">
              <p className="details__info">Погода</p>
              {data.weather ? <p className="details__indicator">{data.weather[0].description}</p> : null}
            </div>
            <div className="details__box">
              <p className="details__info">Температура</p>
              {data.main ? <p className="details__indicator">{Math.round(data.main.temp - 273)}°</p> : null}
            </div>
            <div className="details__box">
              <p className="details__info">Відчувається</p>
              {data.main ? <p className="details__indicator">{Math.round(data.main.feels_like - 273)}°</p> : null}
            </div>
            <div className="details__box">
              <p className="details__info">Швидкість вітру</p>
              {data.wind ? <p className="details__indicator">{data.wind.speed} м/сек</p> : null}
            </div>
            <div className="details__box">
              <p className="details__info">Вологість</p>
              {data.main ? <p className="details__indicator">{data.main.humidity}%</p> : null}
            </div>
            <div className="details__box">
              <p className="details__info">Тиск</p>
              {data.main ? <p className="details__indicator">{Math.round(data.main.pressure / 1.333)} мм</p> : null}
            </div>
            <div className="details__box">
              <p className="details__info">Схід сонця</p>
              {data.sys ? <p className="details__indicator">{new Date(data.sys.sunrise * 1000).toLocaleTimeString('ua-IN')}</p> : null}
            </div>
            <div className="details__box">
              <p className="details__info">Захід сонця</p>
              {data.sys ? <p className="details__indicator">{new Date(data.sys.sunset * 1000).toLocaleTimeString('ua-IN')}</p> : null}
            </div>
          </aside>
          <div className='main__developer  main__developer-mobile'>
            <p className='main__developer-label'>Розробник - </p>
            <a className='main__developer-name' href="https://www.linkedin.com/in/viktor-miklovsh-aa61b9205/" target="_blank">Мікловш Віктор</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
