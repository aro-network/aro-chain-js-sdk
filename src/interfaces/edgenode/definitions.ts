/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
      NodeRegisterStatus: {
        _enum: ['RsPendingBind', 'RsPendingActivate', 'RsActivate']
      },
      CheatStatus: {
        _enum: ['CsNormal', 'CsSuspicious', 'CsBlacklist']
      },
      Node: {
        node_id: 'Vec<u8>',
        node_pubkey: 'Vec<u8>',
        user_id: 'Vec<u8>',
        device_type: 'Vec<u8>',
        region_code: 'Vec<u8>',
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
