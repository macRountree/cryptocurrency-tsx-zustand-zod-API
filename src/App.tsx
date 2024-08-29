import {useEffect} from 'react';
import {CryptoForm} from './components/CryptoForm';
import {useCryptoStore} from './store/store';
function App() {
  const fetchCryptos = useCryptoStore(state => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  }, [fetchCryptos]);
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          <span>Crypto</span>
          Currency Prices{' '}
        </h1>
        <div className="content">
          <CryptoForm />
        </div>
      </div>
    </>
  );
}

export default App;
