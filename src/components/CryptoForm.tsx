import {FormEvent} from 'react';
import {currencies} from '../data';
import {useCryptoStore} from '../store/store';

export const CryptoForm = () => {
  const cryptoCurrencies = useCryptoStore(state => state.cryptocurrencies);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        {' '}
        <label htmlFor="currency">Currency:</label>{' '}
        <select name="currency" id="currency">
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
        <label htmlFor="Crypto">Crypto:</label>{' '}
        <select name="Crypto" id="Crypto">
          <option value="">--Select Crypto--</option>
          {cryptoCurrencies.map(crypto => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {' '}
              {crypto.CoinInfo.FullName}{' '}
            </option>
          ))}
        </select>
        <input type="submit" value="Check it" />
      </div>
    </form>
  );
};
