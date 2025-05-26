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
        nodeId: 'string',
        nodePubkey: 'Vec<u8>',
        userId: 'string',
        deviceType: 'string',
        regionCode: 'string',
        trafficType: 'u32',
        registerStatus: 'NodeRegisterStatus',
        cheatStatus: 'CheatStatus',
        reputationPoint: 'i64',
        creator: 'AccountId',
        createAt: 'BlockNumber',
        updator: 'AccountId',
        updateAt: 'BlockNumber'
      }
    }
};
