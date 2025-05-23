/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
      RegionCodeType: 'BoundedVec<u8>',
      RegionNameType: 'BoundedVec<u8>',
      RegionDescType: 'BoundedVec<u8>',
      Region: {
        code: 'RegionCodeType',
        name: 'RegionNameType',
        description: 'RegionDescType',
        creator: 'AccountId',
        create_at: 'BlockNumber',
        updator: 'AccountId',
        update_at: 'BlockNumber'
      }
    }
};
