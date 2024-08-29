import {z} from 'zod';
import {
  CryptoCurrencyAPISchema,
  CurrencySchema,
  PairAPISchema,
  PairSchema,
} from '../schema/cryptoSchema';

export type Currency = z.infer<typeof CurrencySchema>;

export type CryptoCurrency = z.infer<typeof CryptoCurrencyAPISchema>;

export type Pair = z.infer<typeof PairSchema>;

export type CryptoPrice = z.infer<typeof PairAPISchema>;
