/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        User: {
          user_id: 'string',
          evm_account: 'Option<H160>',
          creator: 'AccountId',
          create_at: 'BlockNumber',
          updator: 'AccountId',
          update_at: 'BlockNumber'
        }
    }
};
