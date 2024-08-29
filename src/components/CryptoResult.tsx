import {useMemo} from 'react';
import {useCryptoStore} from '../store/store';
import {Spinner} from './Spinner';
import {SocialMedia} from './SocialMedia';

export const CryptoResult = () => {
  const result = useCryptoStore(state => state.result);
  const loading = useCryptoStore(state => state.loading);

  const hasResult = useMemo(() => Object.keys(result).length > 0, [result]);
  return (
    <div className="result-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2> Quote </h2>

            <div className="result">
              <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt={`Crypto Image`}
              />
              <div>
                <p>
                  {' '}
                  Price: <span>{result.PRICE} </span>{' '}
                </p>
                <p>
                  {' '}
                  High Day Price: <span>{result.HIGHDAY} </span>{' '}
                </p>
                <p>
                  {' '}
                  Low Day Price: <span>{result.LOWDAY} </span>{' '}
                </p>
                <p>
                  {' '}
                  24h variation: <span>{result.CHANGEPCT24HOUR} </span>{' '}
                </p>
                <p>
                  {' '}
                  Last Update: <span>{result.LASTUPDATE} </span>{' '}
                </p>
              </div>
            </div>
          </>
        )
      )}
      <SocialMedia />
    </div>
  );
};
