import './types/interfaces/registry';
import './types/interfaces/lookup';
import './types/interfaces/types-lookup';
import './types/interfaces/augment-api';
import './types/interfaces/augment-types';
import './types/interfaces/index';

import * as definitions from './types/interfaces/definitions';

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
