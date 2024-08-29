import {ChangeEvent, FormEvent, useState} from 'react';
import {currencies} from '../data';
import {useCryptoStore} from '../store/store';
import {Pair} from '../interfaces';
import {ErrorMessage} from './ErrorMessage';

export const CryptoForm = () => {
  //*Store States
  const cryptoCurrencies = useCryptoStore(state => state.cryptocurrencies);
  const fetchData = useCryptoStore(state => state.fetchData);

  //*Local States
  const [pair, setPair] = useState<Pair>({currency: '', crypto: ''});
  const [error, setError] = useState('');

  //*Handle Forms
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes('')) {
      setError('All fields are required');
      return;
    }
    setError('');
    fetchData(pair);

    //*Query the API
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        {' '}
        <label htmlFor="currency">Currency:</label>{' '}
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">--Select Currency--</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        {' '}
        <label htmlFor="crypto">Crypto:</label>{' '}
        <select
          name="crypto"
          id="crypto"
          onChange={handleChange}
          value={pair.crypto}
        >
          <option value="">--Select Crypto--</option>
          {cryptoCurrencies.map(crypto => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {' '}
              {crypto.CoinInfo.FullName}{' '}
            </option>
          ))}
        </select>
        <input type="submit" value="Check Quote" />
      </div>
    </form>
  );
};
