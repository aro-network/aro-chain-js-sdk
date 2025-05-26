/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        User: {
          userId: 'string',
          evmAccount: 'Option<H160>',
          creator: 'AccountId',
          createAt: 'BlockNumber',
          updator: 'AccountId',
          updateAt: 'BlockNumber'
        }
    }
};
