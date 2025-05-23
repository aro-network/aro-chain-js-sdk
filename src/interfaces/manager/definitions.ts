/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
      HostAddressType: 'BoundedVec<u8>',
      OperatorNameType: 'BoundedVec<u8>',
      OperatorDescType: 'BoundedVec<u8>',
      OperatorUrlType: 'BoundedVec<u8>',
      ManagerRegisterStatus: {
        _enum: ['RsPendingBind', 'RsPendingConfig', 'RsPendingActivate', 'RsActivate']
      },
      ManagerWorkingStatus: {
        _enum: ['WsWorking', 'WsOffline', 'WsBlock']
      },
      Manager: {
        manager_account: 'AccountId',
        operator_account: 'Option<AccountId>',
        host_address: 'HostAddressType',
        manager_http_port: 'u16',
        manager_ws_port: 'u16',
        chain_api_port: 'u16',
        chain_rpc_port: 'u16',
        region_code: 'RegionCodeType',
        register_status: 'ManagerRegisterStatus',
        working_status: 'ManagerWorkingStatus',
        creator: 'AccountId',
        create_at: 'BlockNumber',
        updator: 'AccountId',
        update_at: 'BlockNumber'
      },
      Operator: {
        operator_account: 'AccountId',
        manager_account: 'Option<AccountId>',
        evm_account: 'Option<H160>',
        name: 'OperatorNameType',
        description: 'OperatorDescType',
        website: 'OperatorUrlType',
        creator: 'AccountId',
        create_at: 'BlockNumber',
        updator: 'AccountId',
        update_at: 'BlockNumber'
      }
    }
};
