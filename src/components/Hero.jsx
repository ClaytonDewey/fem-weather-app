export const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__header'>
        <h2>Berlin, Germany</h2>
        <p>Tuesday, Aug 5, 2025</p>
      </div>
      <div className='hero__body'>
        <img src='/images/icon-sunny.webp' alt='Sunny' className='icon' />
        <span className='temp'>20&deg;</span>
      </div>
    </div>
  );
};
