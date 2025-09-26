import { Card, SearchBox } from '.';
import iconLoading from '../icons/icon-loading.svg';
import iconDropdown from '../icons/icon-dropdown.svg';

export const Loading = () => {
  const today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
  return (
    <>
      <div>
        <SearchBox />
        <section className='grid results'>
          <div className='col-left'>
            <div className='hero__wrapper'>
              <div className='hero loading'>
                <img src={iconLoading} alt='' />
                <p>Loading...</p>
              </div>
              <div className='hero__info'>
                <Card
                  content={
                    <>
                      <p className='title'>feels like</p>
                      <p className='info'>&mdash;</p>
                    </>
                  }
                />
                <Card
                  content={
                    <>
                      <p className='title'>humidity</p>
                      <p className='info'>&mdash;</p>
                    </>
                  }
                />
                <Card
                  content={
                    <>
                      <p className='title'>wind</p>
                      <p className='info'>&mdash;</p>
                    </>
                  }
                />
                <Card
                  content={
                    <>
                      <p className='title'>precipitation</p>
                      <p className='info'>&mdash;</p>
                    </>
                  }
                />
              </div>
            </div>

            <h2>Daily forecast</h2>
            <div className='grid grid__daily'>
              <div className='card card__daily'></div>
              <div className='card card__daily'></div>
              <div className='card card__daily'></div>
              <div className='card card__daily'></div>
              <div className='card card__daily'></div>
              <div className='card card__daily'></div>
              <div className='card card__daily'></div>
            </div>
          </div>

          <div className='col-right'>
            <div className='card card__hourly'>
              <div className='card__header'>
                <h2>Hourly Forecast</h2>
                <div className='dropdown'>
                  <button className='btn btn-secondary'>
                    {today}
                    <img src={iconDropdown} alt='' />
                  </button>
                </div>
              </div>
              <div className='card__scroll'>
                <div className='card__block'></div>
                <div className='card__block'></div>
                <div className='card__block'></div>
                <div className='card__block'></div>
                <div className='card__block'></div>
                <div className='card__block'></div>
                <div className='card__block'></div>
                <div className='card__block'></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
