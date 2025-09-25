import { Button, Card, Dropdown } from '.';

export const ForecastHourly = ({ weather }) => {
  console.log(weather);
  return (
    <div className='col-right'>
      <Card
        type='hourly'
        content={
          <>
            <div className='card__header'>
              <h2>Hourly Forecast</h2>
              <Dropdown
                buttonText='Tuesday'
                content={({ closeDropdown }) => (
                  <div className='btn-container'>
                    <Button
                      onClick={() => closeDropdown()}
                      type='button'
                      className='btn active'>
                      Wednesday
                    </Button>
                    <Button
                      onClick={() => closeDropdown()}
                      type='button'
                      className='btn'>
                      Thursday
                    </Button>
                    <Button
                      onClick={() => closeDropdown()}
                      type='button'
                      className='btn'>
                      Friday
                    </Button>
                    <Button
                      onClick={() => closeDropdown()}
                      type='button'
                      className='btn'>
                      Saturday
                    </Button>
                    <Button
                      onClick={() => closeDropdown()}
                      type='button'
                      className='btn'>
                      Sunday
                    </Button>
                    <Button
                      onClick={() => closeDropdown()}
                      type='button'
                      className='btn'>
                      Monday
                    </Button>
                  </div>
                )}
              />
            </div>
            <div className='card__block'>
              <div className='time'>
                <img src='/images/icon-overcast.webp' alt='' className='icon' />
                3 pm
              </div>
              <div>68&deg;</div>
            </div>
            <div className='card__block'>
              <div className='time'>
                <img src='/images/icon-overcast.webp' alt='' className='icon' />
                3 pm
              </div>
              <div>68&deg;</div>
            </div>
            <div className='card__block'>
              <div className='time'>
                <img src='/images/icon-overcast.webp' alt='' className='icon' />
                3 pm
              </div>
              <div>68&deg;</div>
            </div>
            <div className='card__block'>
              <div className='time'>
                <img src='/images/icon-overcast.webp' alt='' className='icon' />
                3 pm
              </div>
              <div>68&deg;</div>
            </div>
            <div className='card__block'>
              <div className='time'>
                <img src='/images/icon-overcast.webp' alt='' className='icon' />
                3 pm
              </div>
              <div>68&deg;</div>
            </div>
            <div className='card__block'>
              <div className='time'>
                <img src='/images/icon-overcast.webp' alt='' className='icon' />
                3 pm
              </div>
              <div>68&deg;</div>
            </div>
            <div className='card__block'>
              <div className='time'>
                <img src='/images/icon-overcast.webp' alt='' className='icon' />
                3 pm
              </div>
              <div>68&deg;</div>
            </div>
            <div className='card__block'>
              <div className='time'>
                <img src='/images/icon-overcast.webp' alt='' className='icon' />
                3 pm
              </div>
              <div>68&deg;</div>
            </div>
          </>
        }
      />
    </div>
  );
};
