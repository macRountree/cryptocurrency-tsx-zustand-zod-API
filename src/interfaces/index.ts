import {z} from 'zod';
import {CryptoCurrencyAPISchema, CurrencySchema} from '../schema/cryptoSchema';

export type Currency = z.infer<typeof CurrencySchema>;

export type CryptoCurrency = z.infer<typeof CryptoCurrencyAPISchema>;
