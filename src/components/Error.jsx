import { Button } from '.';
import iconError from '../icons/icon-error.svg';
import iconRetry from '../icons/icon-retry.svg';

const handleRefresh = () => {
  window.location.reload();
};

export const Error = () => {
  return (
    <div className='error'>
      <img src={iconError} alt='' className='error__img' />
      <h1>Something went wrong</h1>
      <p>
        We couldn&rsquo;t connect to the server (API error). Please try again in
        a few moments.
      </p>
      <Button className='btn btn-secondary' onClick={handleRefresh}>
        <img src={iconRetry} alt='' role='presentation' />
        Retry
      </Button>
    </div>
  );
};
