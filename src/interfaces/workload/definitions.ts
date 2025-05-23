/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
      EpochInfo: {
        number: 'u64',
        start_time: 'u64',
        start_block: 'BlockNumber',
        end_time: 'u64',
        end_block: 'Option<BlockNumber>'
      },
      
      EraInfo: {
        number: 'u64',
        start_time: 'u64',
        start_block: 'BlockNumber',
        end_time: 'u64',
        end_block: 'Option<BlockNumber>'
      },

      ParamKey: {
        _enum: [
          'EpochLength',
          'EraLength',
          'WorkreportProcessBatchSize',
          'ReputationPointProcessBatchSize',
          'CheatStatusProcessBatchSize',
          'HistoryEpochDataDepth',
          'HistoryEraDataDepth'
        ]
      },

      ProcessStatus: {
        _enum: ['Init', 'Processing', 'Done']
      },

      // ---------------------------
      // Workreport related
      Workreport: {
        score: 'u64',
        create_at: 'BlockNumber',
        update_at: 'BlockNumber'
      },

      NodeWorkload: {
        score: 'u64',
        create_at: 'BlockNumber'
      },

      WorkreportProcessData: {
        epoch: 'u64',
        total_nodes_count: 'u64',
        processed_nodes_count: 'u64',
        start_at: 'BlockNumber',
        update_at: 'BlockNumber',
        status: 'ProcessStatus',
        page_next_key: 'Option<Vec<u8>>'
      },

      ManagerWRWorkload: {
        epoch: 'u64',
        manager_account: 'AccountId',
        reported_nodes_count: 'u64',
        score: 'u64',
        create_at: 'BlockNumber',
        update_at: 'BlockNumber'
      },

      // ---------------------------
      // Reputation Points related
      ReputationPointChangeRequest: {
        delta_point: 'i64',
        create_at: 'BlockNumber',
        update_at: 'BlockNumber'
      },

      ReputationDeltaPoint: {
        delta_point: 'i64',
        create_at: 'BlockNumber'
      },

      ReputationPointProcessData: {
        era: 'u64',
        total_nodes_count: 'u64',
        processed_nodes_count: 'u64',
        start_at: 'BlockNumber',
        update_at: 'BlockNumber',
        status: 'ProcessStatus',
        page_next_key: 'Option<Vec<u8>>'
      },

      ManagerRPWorkload: {
        era: 'u64',
        manager_account: 'AccountId',
        reported_nodes_count: 'u64',
        score: 'u64',
        create_at: 'BlockNumber',
        update_at: 'BlockNumber'
      },

      // ---------------------------
      // Cheat Status related
      CheatStatusChangeRequest: {
        cheat_status: 'CheatStatus',
        create_at: 'BlockNumber',
        update_at: 'BlockNumber'
      },

      CheatStatusResult: {
        cheat_status: 'CheatStatus',
        create_at: 'BlockNumber'
      },

      CheatStatusProcessData: {
        era: 'u64',
        total_nodes_count: 'u64',
        processed_nodes_count: 'u64',
        start_at: 'BlockNumber',
        update_at: 'BlockNumber',
        status: 'ProcessStatus',
        page_next_key: 'Option<Vec<u8>>'
      },

      ManagerCSWorkload: {
        era: 'u64',
        manager_account: 'AccountId',
        reported_nodes_count: 'u64',
        score: 'u64',
        create_at: 'BlockNumber',
        update_at: 'BlockNumber'
      }
    }
};
