import { Card } from '.';

export const Hero = () => {
  return (
    <section className='hero__wrapper'>
      <div className='hero'>
        <div className='hero__header'>
          <h2>Berlin, Germany</h2>
          <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div className='hero__body'>
          <img src='/images/icon-sunny.webp' alt='' className='icon' />
          <div className='temp'>68&deg;</div>
        </div>
      </div>
      <div className='hero__info'>
        <Card
          content={
            <>
              <p className='title'>feels like</p>
              <p className='info'>64&deg;</p>
            </>
          }
        />
        <Card
          content={
            <>
              <p className='title'>humidity</p>
              <p className='info'>46%</p>
            </>
          }
        />
        <Card
          content={
            <>
              <p className='title'>wind</p>
              <p className='info'>9 mph</p>
            </>
          }
        />
        <Card
          content={
            <>
              <p className='title'>precipitation</p>
              <p className='info'>0 in</p>
            </>
          }
        />
      </div>
    </section>
  );
};
