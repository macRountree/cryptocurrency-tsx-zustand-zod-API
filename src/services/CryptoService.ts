import axios from 'axios';
import {CryptoCurrenciesAPISchema} from '../schema/cryptoSchema';

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
