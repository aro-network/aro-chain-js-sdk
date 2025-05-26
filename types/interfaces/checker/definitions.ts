/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
      CheckerRegisterStatus: {
        _enum: ['RsPendingActivate', 'RsActivate']
      },
      Checker: {
        checkerAccount: 'AccountId',
        checkerPubkey: '[u8;32]',
        regionCode: 'string',
        hostAddress: 'string',
        httpPort: 'u16',
        perfPorts: 'Vec<u16>',
        registerStatus: 'CheckerRegisterStatus',
        creator: 'AccountId',
        createAt: 'BlockNumber',
        updator: 'AccountId',
        updateAt: 'BlockNumber'
      },
      Scheduler: {
        schedulerAccount: 'AccountId',
        schedulerPubkey: '[u8;32]',
        hostAddress: 'string',
        httpPort: 'u16',
        creator: 'AccountId',
        createAt: 'BlockNumber',
        updator: 'AccountId',
        updateAt: 'BlockNumber'
      }
    }
};
