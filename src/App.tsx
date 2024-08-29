import {useEffect} from 'react';
import {CryptoForm} from './components/CryptoForm';
import {useCryptoStore} from './store/store';
import {CryptoResult} from './components/CryptoResult';
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

          <CryptoResult />
        </div>
      </div>
    </>
  );
}

export default App;
