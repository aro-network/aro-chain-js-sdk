/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
      EpochInfo: {
        number: 'u64',
        startTime: 'u64',
        startBlock: 'BlockNumber',
        endTime: 'u64',
        endBlock: 'Option<BlockNumber>'
      },
      
      EraInfo: {
        number: 'u64',
        startTime: 'u64',
        startBlock: 'BlockNumber',
        endTime: 'u64',
        endBlock: 'Option<BlockNumber>'
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
        createAt: 'BlockNumber',
        updateAt: 'BlockNumber'
      },

      NodeWorkload: {
        score: 'u64',
        createAt: 'BlockNumber'
      },

      WorkreportProcessData: {
        epoch: 'u64',
        totalNodesCount: 'u64',
        processedNodesCount: 'u64',
        startAt: 'BlockNumber',
        updateAt: 'BlockNumber',
        status: 'ProcessStatus',
        pageNextKey: 'Option<Vec<u8>>'
      },

      ManagerWRWorkload: {
        epoch: 'u64',
        managerAccount: 'AccountId',
        reportedNodesCount: 'u64',
        score: 'u64',
        createAt: 'BlockNumber',
        updateAt: 'BlockNumber'
      },

      // ---------------------------
      // Reputation Points related
      ReputationPointChangeRequest: {
        deltaPoint: 'i64',
        createAt: 'BlockNumber',
        updateAt: 'BlockNumber'
      },

      ReputationDeltaPoint: {
        deltaPoint: 'i64',
        createAt: 'BlockNumber'
      },

      ReputationPointProcessData: {
        era: 'u64',
        totalNodesCount: 'u64',
        processedNodesCount: 'u64',
        startAt: 'BlockNumber',
        updateAt: 'BlockNumber',
        status: 'ProcessStatus',
        pageNextKey: 'Option<Vec<u8>>'
      },

      ManagerRPWorkload: {
        era: 'u64',
        managerAccount: 'AccountId',
        reportedNodesCount: 'u64',
        score: 'u64',
        createAt: 'BlockNumber',
        updateAt: 'BlockNumber'
      },

      // ---------------------------
      // Cheat Status related
      CheatStatusChangeRequest: {
        cheatStatus: 'CheatStatus',
        createAt: 'BlockNumber',
        updateAt: 'BlockNumber'
      },

      CheatStatusResult: {
        cheatStatus: 'CheatStatus',
        createAt: 'BlockNumber'
      },

      CheatStatusProcessData: {
        era: 'u64',
        totalNodesCount: 'u64',
        processedNodesCount: 'u64',
        startAt: 'BlockNumber',
        updateAt: 'BlockNumber',
        status: 'ProcessStatus',
        pageNextKey: 'Option<Vec<u8>>'
      },

      ManagerCSWorkload: {
        era: 'u64',
        managerAccount: 'AccountId',
        reportedNodesCount: 'u64',
        score: 'u64',
        createAt: 'BlockNumber',
        updateAt: 'BlockNumber'
      }
    }
};
