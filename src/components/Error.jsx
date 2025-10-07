import { Button } from '.';
import { Icon } from '../svg';

const handleRefresh = () => {
  window.location.reload();
};

export const Error = () => {
  return (
    <div className='error'>
      <Icon name='error' />
      <h1>Something went wrong</h1>
      <p>
        We couldn&rsquo;t connect to the server (API error). Please try again in
        a few moments.
      </p>
      <Button
        type='button'
        className='btn btn-secondary'
        onClick={handleRefresh}>
        <Icon name='retry' />
        Retry
      </Button>
    </div>
  );
};
