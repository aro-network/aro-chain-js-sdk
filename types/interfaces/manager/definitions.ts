/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
      ManagerRegisterStatus: {
        _enum: ['RsPendingBind', 'RsPendingConfig', 'RsPendingActivate', 'RsActivate']
      },
      ManagerWorkingStatus: {
        _enum: ['WsWorking', 'WsOffline', 'WsBlock']
      },
      Manager: {
        managerAccount: 'AccountId',
        operatorAccount: 'Option<AccountId>',
        hostAddress: 'string',
        managerHttpPort: 'u16',
        managerWsPort: 'u16',
        chainApiPort: 'u16',
        chainRpcPort: 'u16',
        regionCode: 'string',
        registerStatus: 'ManagerRegisterStatus',
        workingStatus: 'ManagerWorkingStatus',
        creator: 'AccountId',
        createAt: 'BlockNumber',
        updator: 'AccountId',
        updateAt: 'BlockNumber'
      },
      Operator: {
        operatorAccount: 'AccountId',
        managerAccount: 'Option<AccountId>',
        evmAccount: 'Option<H160>',
        name: 'string',
        description: 'string',
        website: 'string',
        creator: 'AccountId',
        createAt: 'BlockNumber',
        updator: 'AccountId',
        updateAt: 'BlockNumber'
      }
    }
};
