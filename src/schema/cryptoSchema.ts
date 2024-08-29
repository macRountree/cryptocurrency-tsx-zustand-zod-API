import {z} from 'zod';

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});
//*Object schema have to be defined in Data Api request
export const CryptoCurrencyAPISchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

export const CryptoCurrenciesAPISchema = z.array(CryptoCurrencyAPISchema);
