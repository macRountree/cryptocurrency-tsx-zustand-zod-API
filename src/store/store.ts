import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {CryptoCurrency} from '../interfaces';
import {getCryptos} from '../services/CryptoService';

interface CryptoStore {
  cryptocurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
}

export const useCryptoStore = create<CryptoStore>()(
  devtools(set => ({
    cryptocurrencies: [],

    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos(); //*If uses await, it will return a promise
      set(() => ({cryptocurrencies: cryptoCurrencies}));
    },
  }))
);
