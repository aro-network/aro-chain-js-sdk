import './interfaces/augment-api';
import './interfaces/augment-types';
import './interfaces/index';
import './interfaces/types-lookup';
import * as definitions from './interfaces/definitions';

// extract all types from definitions - fast and dirty approach, flatted on 'types'
const enreachTypes = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

export const typesBundleForAroNetwork = {
  spec: {
    aro: {
      types: [
        {
          minmax: [0, undefined],
          types: enreachTypes
        }
      ]
    },
  }
};