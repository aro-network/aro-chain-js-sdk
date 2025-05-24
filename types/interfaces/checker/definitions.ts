/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
      CheckerRegisterStatus: {
        _enum: ['RsPendingActivate', 'RsActivate']
      },
      Checker: {
        checker_account: 'AccountId',
        checker_pubkey: '[u8;32]',
        region_code: 'string',
        host_address: 'string',
        http_port: 'u16',
        perf_ports: 'Vec<u16>',
        register_status: 'CheckerRegisterStatus',
        creator: 'AccountId',
        create_at: 'BlockNumber',
        updator: 'AccountId',
        update_at: 'BlockNumber'
      },
      Scheduler: {
        scheduler_account: 'AccountId',
        scheduler_pubkey: '[u8;32]',
        host_address: 'string',
        http_port: 'u16',
        creator: 'AccountId',
        create_at: 'BlockNumber',
        updator: 'AccountId',
        update_at: 'BlockNumber'
      }
    }
};
