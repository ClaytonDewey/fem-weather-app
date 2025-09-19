import { useState } from 'react';
import { Header, Error, Main, Footer } from './components';

function App() {
  const [isError, setIsError] = useState(false);

  return (
    <div className='container'>
      <Header />
      {isError ? <Error /> : <Main />}
      <Footer />
    </div>
  );
}

export default App;
