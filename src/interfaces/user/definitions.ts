/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        UserIdType: 'BoundedVec<u8>',
        User: {
          user_id: 'UserIdType',
          evm_account: 'Option<H160>',
          creator: 'AccountId',
          create_at: 'BlockNumber',
          updator: 'AccountId',
          update_at: 'BlockNumber'
        }
    }
};
