import { Button, Card, SearchBox } from '.';
import iconLoading from '../icons/icon-loading.svg';
import iconDropdown from '../icons/icon-dropdown.svg';

export const Loading = () => {
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
            <Card
              type='hourly'
              content={
                <>
                  <div className='card__header'>
                    <h2>Hourly Forecast</h2>
                    <Button className='btn btn-secondary'>
                      &nbsp;
                      <img src={iconDropdown} alt='' />
                    </Button>
                  </div>
                  <div className='card__block'></div>
                  <div className='card__block'></div>
                  <div className='card__block'></div>
                  <div className='card__block'></div>
                  <div className='card__block'></div>
                  <div className='card__block'></div>
                  <div className='card__block'></div>
                  <div className='card__block'></div>
                </>
              }
            />
          </div>
        </section>
      </div>
    </>
  );
};
