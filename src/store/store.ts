import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {CryptoCurrency, Pair, CryptoPrice} from '../interfaces';
import {fetchCurrentCryptoPrice, getCryptos} from '../services/CryptoService';

interface CryptoStore {
  cryptocurrencies: CryptoCurrency[];
  result: CryptoPrice;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
}

export const useCryptoStore = create<CryptoStore>()(
  devtools(set => ({
    cryptocurrencies: [],
    result: {} as CryptoPrice,
    loading: false,

    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos(); //*If uses await, it will return a promise
      set(() => ({cryptocurrencies: cryptoCurrencies}));
    },
    fetchData: async pair => {
      set(() => ({loading: true}));
      const result = await fetchCurrentCryptoPrice(pair);
      set(() => ({result, loading: false}));
    },
  }))
);
