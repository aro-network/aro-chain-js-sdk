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
        node_id: 'string',
        node_pubkey: 'Vec<u8>',
        user_id: 'string',
        device_type: 'string',
        region_code: 'string',
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
