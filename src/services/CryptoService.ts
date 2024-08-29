import axios from 'axios';
import {CryptoCurrenciesAPISchema, PairAPISchema} from '../schema/cryptoSchema';
import {Pair} from '../interfaces';

export const getCryptos = async () => {
  const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
  const {
    data: {Data},
  } = await axios(url);
  //   console.log(Data);
  const res = CryptoCurrenciesAPISchema.safeParse(Data);
  if (res.success) {
    return res.data;
  }
};

export const fetchCurrentCryptoPrice = async (pair: Pair) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.crypto}&tsyms=${pair.currency}`;
  const {
    data: {DISPLAY},
  } = await axios(url);
  console.log(DISPLAY[pair.crypto][pair.currency]); //*Access the object structure to get the price
  const res = PairAPISchema.safeParse(DISPLAY[pair.crypto][pair.currency]);
  if (res.success) {
    return res.data;
  }
};
