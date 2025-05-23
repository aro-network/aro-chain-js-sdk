/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
      NodeIdType: 'BoundedVec<u8>',
      NodePubkeyType: 'BoundedVec<u8>',
      DeviceType: 'BoundedVec<u8>',
      NodeRegisterStatus: {
        _enum: ['RsPendingBind', 'RsPendingActivate', 'RsActivate']
      },
      CheatStatus: {
        _enum: ['CsNormal', 'CsSuspicious', 'CsBlacklist']
      },
      Node: {
        node_id: 'NodeIdType',
        node_pubkey: 'NodePubkeyType',
        user_id: 'UserIdType',
        device_type: 'DeviceType',
        region_code: 'RegionCodeType',
        traffic_type: 'u32',
        register_status: 'NodeRegisterStatus',
        cheat_status: 'CheatStatus',
        reputation_point: 'i64',
        creator: 'AccountId',
        create_at: 'BlockNumber',
        updator: 'AccountId',
        update_at: 'BlockNumber'
      }
    }
};
