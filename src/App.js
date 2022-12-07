import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <main className="main">
            <input className="main__search" type="text" placeholder="Введіть місто" />
            <div className='main__inner'>
              <h1 className="main__city">Місто</h1>
              <p className="main__temp">40°</p>
            </div>
            <div className='main__developer'>
              <p className='main__developer-label'>Розробник - </p>
              <a className='main__developer-name' href="https://www.instagram.com/miklovsh_viktor/" target="_blank">Мікловш Віктор</a>
            </div>
          </main>
          <aside className="details">
            <h2 className="details__title">Детальний опис погоди</h2>
            <div className="details__box">
              <p className="details__info">Відчувається</p>
              <p className="details__indicator">44°</p>
            </div>
            <div className="details__box">
              <p className="details__info">Швидкість вітру</p>
              <p className="details__indicator">1км/г</p>
            </div>
            <div className="details__box">
              <p className="details__info">Вологість</p>
              <p className="details__indicator">10%</p>
            </div>
            <div className="details__box">
              <p className="details__info">Тиск</p>
              <p className="details__indicator">80</p>
            </div>
            <div className="details__box">
              <p className="details__info">Схід сонця</p>
              <p className="details__indicator">7:20</p>
            </div>
            <div className="details__box">
              <p className="details__info">Захід сонця</p>
              <p className="details__indicator">7:40</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
