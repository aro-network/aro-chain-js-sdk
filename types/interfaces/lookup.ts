// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup9: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup10: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup15: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup17: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup20: frame_system::EventRecord<aro_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup22: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSystemDispatchEventInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSystemDispatchEventInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256',
      },
      UpgradeAuthorized: {
        codeHash: 'H256',
        checkVersion: 'bool'
      }
    }
  },
  /**
   * Lookup23: frame_system::DispatchEventInfo
   **/
  FrameSystemDispatchEventInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup24: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup25: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup26: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null',
      Trie: 'SpRuntimeProvingTrieTrieError'
    }
  },
  /**
   * Lookup27: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup28: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup29: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup30: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup31: sp_runtime::proving_trie::TrieError
   **/
  SpRuntimeProvingTrieTrieError: {
    _enum: ['InvalidStateRoot', 'IncompleteDatabase', 'ValueAtIncompleteKey', 'DecoderError', 'InvalidHash', 'DuplicateKey', 'ExtraneousNode', 'ExtraneousValue', 'ExtraneousHashReference', 'InvalidChildReference', 'ValueMismatch', 'IncompleteProof', 'RootMismatch', 'DecodeError']
  },
  /**
   * Lookup32: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup35: sp_consensus_grandpa::app::Public
   **/
  SpConsensusGrandpaAppPublic: '[u8;32]',
  /**
   * Lookup36: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      TotalIssuanceForced: {
        _alias: {
          new_: 'new',
        },
        old: 'u128',
        new_: 'u128'
      }
    }
  },
  /**
   * Lookup37: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup38: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup39: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        _alias: {
          new_: 'new',
        },
        old: 'Option<AccountId32>',
        new_: 'AccountId32',
      },
      KeyRemoved: 'Null',
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup43: aro_pallet_registry::pallet::Event<T>
   **/
  AroPalletRegistryEvent: {
    _enum: {
      SuperiorSet: 'AccountId32',
      RegionCreated: {
        code: 'Bytes',
        creator: 'AccountId32',
        createAt: 'u64',
      },
      RegionUpdated: {
        code: 'Bytes',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      RegionDeleted: {
        code: 'Bytes',
        deletor: 'AccountId32',
        deleteAt: 'u64'
      }
    }
  },
  /**
   * Lookup44: aro_pallet_user::pallet::Event<T>
   **/
  AroPalletUserEvent: {
    _enum: {
      SuperiorSet: 'AccountId32',
      UserCreated: {
        userId: 'Bytes',
        creator: 'AccountId32',
        createAt: 'u64',
      },
      UserEvmBound: {
        userId: 'Bytes',
        evmAccount: 'H160',
        updator: 'AccountId32',
        updateAt: 'u64'
      }
    }
  },
  /**
   * Lookup47: aro_pallet_edgenode::pallet::Event<T>
   **/
  AroPalletEdgenodeEvent: {
    _enum: {
      SuperiorSet: 'AccountId32',
      NodeRegistered: {
        nodeId: 'Bytes',
        deviceType: 'Bytes',
        creator: 'AccountId32',
        createAt: 'u64',
      },
      NodeBound: {
        nodeId: 'Bytes',
        userId: 'Bytes',
        regionCode: 'Bytes',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      NodeUnbound: {
        nodeId: 'Bytes',
        userId: 'Bytes',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      TrafficTypeUpdated: {
        updatedNodesCount: 'u32',
        updator: 'AccountId32',
        updateAt: 'u64'
      }
    }
  },
  /**
   * Lookup48: aro_pallet_manager::pallet::Event<T>
   **/
  AroPalletManagerEvent: {
    _enum: {
      SuperiorSet: 'AccountId32',
      ManagerRegistered: {
        manager: 'AccountId32',
        hostAddress: 'Bytes',
        managerHttpPort: 'u16',
        managerWsPort: 'u16',
        chainApiPort: 'u16',
        chainRpcPort: 'u16',
        creator: 'AccountId32',
        createAt: 'u64',
      },
      ManagerGoWorking: {
        manager: 'AccountId32',
        status: 'AroPrimitivesManagerManagerWorkingStatus',
        updateAt: 'u64',
      },
      OperatorCreated: {
        operator: 'AccountId32',
        creator: 'AccountId32',
        createAt: 'u64',
      },
      OperatorManagerBound: {
        operator: 'AccountId32',
        manager: 'AccountId32',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      ManagerRegionSet: {
        manager: 'AccountId32',
        regionCode: 'Bytes',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      ManagerConnParamsUpdated: {
        manager: 'AccountId32',
        hostAddress: 'Bytes',
        managerHttpPort: 'u16',
        managerWsPort: 'u16',
        chainApiPort: 'u16',
        chainRpcPort: 'u16',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      ManagerActivated: {
        manager: 'AccountId32',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      OperatorEVMAccountBound: {
        operator: 'AccountId32',
        evmAccount: 'H160',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      OperatorBasicInfoUpdated: {
        operator: 'AccountId32',
        updator: 'AccountId32',
        updateAt: 'u64'
      }
    }
  },
  /**
   * Lookup50: aro_primitives::types::manager::ManagerWorkingStatus
   **/
  AroPrimitivesManagerManagerWorkingStatus: {
    _enum: ['WsWorking', 'WsOffline', 'WsBlock']
  },
  /**
   * Lookup51: aro_pallet_workload::pallet::Event<T>
   **/
  AroPalletWorkloadEvent: {
    _enum: {
      SuperiorSet: 'AccountId32',
      ParamUpdated: {
        key: 'AroPrimitivesWorkloadParamKey',
        oldValue: 'u32',
        newValue: 'u32',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      WorkreportsSubmitted: {
        manager: 'AccountId32',
        epoch: 'u64',
        nodesCount: 'u32',
        submittedAt: 'u64',
      },
      ReputationPointChangeRequestsSubmitted: {
        manager: 'AccountId32',
        era: 'u64',
        nodesCount: 'u32',
        submittedAt: 'u64',
      },
      CheatStatusChangeRequestsSubmitted: {
        manager: 'AccountId32',
        era: 'u64',
        nodesCount: 'u32',
        submittedAt: 'u64',
      },
      EpochStarted: {
        epoch: 'u64',
        startTime: 'u64',
        startBlock: 'u64',
        endTime: 'u64',
      },
      EpochEnded: {
        epoch: 'u64',
        startTime: 'u64',
        startBlock: 'u64',
        endTime: 'u64',
        endBlock: 'u64',
      },
      EraStarted: {
        era: 'u64',
        startTime: 'u64',
        startBlock: 'u64',
        endTime: 'u64',
      },
      EraEnded: {
        era: 'u64',
        startTime: 'u64',
        startBlock: 'u64',
        endTime: 'u64',
        endBlock: 'u64',
      },
      WorkreportsProcessStarted: {
        epoch: 'u64',
        totalNodesCount: 'u64',
        startAt: 'u64',
      },
      WorkreportsProcessEnded: {
        epoch: 'u64',
        totalNodesCount: 'u64',
        processedNodesCount: 'u64',
        startAt: 'u64',
        endAt: 'u64',
      },
      ReputationPointsProcessStarted: {
        era: 'u64',
        totalNodesCount: 'u64',
        startAt: 'u64',
      },
      ReputationPointsProcessEnded: {
        era: 'u64',
        totalNodesCount: 'u64',
        processedNodesCount: 'u64',
        startAt: 'u64',
        endAt: 'u64',
      },
      CheatStatusProcessStarted: {
        era: 'u64',
        totalNodesCount: 'u64',
        startAt: 'u64',
      },
      CheatStatusProcessEnded: {
        era: 'u64',
        totalNodesCount: 'u64',
        processedNodesCount: 'u64',
        startAt: 'u64',
        endAt: 'u64'
      }
    }
  },
  /**
   * Lookup52: aro_primitives::types::workload::ParamKey
   **/
  AroPrimitivesWorkloadParamKey: {
    _enum: ['EpochLength', 'EraLength', 'WorkreportProcessBatchSize', 'ReputationPointProcessBatchSize', 'CheatStatusProcessBatchSize', 'HistoryEpochDataDepth', 'HistoryEraDataDepth']
  },
  /**
   * Lookup53: aro_pallet_checker::pallet::Event<T>
   **/
  AroPalletCheckerEvent: {
    _enum: {
      SuperiorSet: 'AccountId32',
      CheckerRegistered: {
        checkerAccount: 'AccountId32',
        regionCode: 'Bytes',
        creator: 'AccountId32',
        createAt: 'u64',
      },
      CheckerActivated: {
        checkerAccount: 'AccountId32',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      CheckerDeactivated: {
        checkerAccount: 'AccountId32',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      SchedulerSet: {
        schedulerAccount: 'AccountId32',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      SchedulerConnParamsUpdated: {
        schedulerAccount: 'AccountId32',
        hostAddress: 'Bytes',
        httpPort: 'u16',
        updator: 'AccountId32',
        updateAt: 'u64'
      }
    }
  },
  /**
   * Lookup54: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup58: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup62: frame_system::CodeUpgradeAuthorization<T>
   **/
  FrameSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup63: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes',
      },
      __Unused8: 'Null',
      authorize_upgrade: {
        codeHash: 'H256',
      },
      authorize_upgrade_without_checks: {
        codeHash: 'H256',
      },
      apply_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup67: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup68: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup69: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup71: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup72: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup73: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup74: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    systemVersion: 'u8'
  },
  /**
   * Lookup79: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered', 'MultiBlockMigrationsOngoing', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup80: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup82: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: '[u8;32]',
  /**
   * Lookup85: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u64',
        delay: 'u64',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u64',
        delay: 'u64'
      }
    }
  },
  /**
   * Lookup86: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u64',
    delay: 'u64',
    nextAuthorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u64>'
  },
  /**
   * Lookup90: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      note_stalled: {
        delay: 'u64',
        bestFinalizedBlockNumber: 'u64'
      }
    }
  },
  /**
   * Lookup91: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpConsensusGrandpaEquivocation'
  },
  /**
   * Lookup92: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup93: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup94: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u64'
  },
  /**
   * Lookup95: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: '[u8;64]',
  /**
   * Lookup98: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup99: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u64'
  },
  /**
   * Lookup101: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup102: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup104: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup105: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup108: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup111: frame_support::traits::tokens::misc::IdAmount<aro_runtime::RuntimeHoldReason, Balance>
   **/
  FrameSupportTokensMiscIdAmountRuntimeHoldReason: {
    id: 'AroRuntimeRuntimeHoldReason',
    amount: 'u128'
  },
  /**
   * Lookup112: aro_runtime::RuntimeHoldReason
   **/
  AroRuntimeRuntimeHoldReason: 'Null',
  /**
   * Lookup115: frame_support::traits::tokens::misc::IdAmount<aro_runtime::RuntimeFreezeReason, Balance>
   **/
  FrameSupportTokensMiscIdAmountRuntimeFreezeReason: {
    id: 'AroRuntimeRuntimeFreezeReason',
    amount: 'u128'
  },
  /**
   * Lookup116: aro_runtime::RuntimeFreezeReason
   **/
  AroRuntimeRuntimeFreezeReason: 'Null',
  /**
   * Lookup118: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      __Unused1: 'Null',
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      __Unused7: 'Null',
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
      },
      force_adjust_total_issuance: {
        direction: 'PalletBalancesAdjustmentDirection',
        delta: 'Compact<u128>',
      },
      burn: {
        value: 'Compact<u128>',
        keepAlive: 'bool'
      }
    }
  },
  /**
   * Lookup123: pallet_balances::types::AdjustmentDirection
   **/
  PalletBalancesAdjustmentDirection: {
    _enum: ['Increase', 'Decrease']
  },
  /**
   * Lookup124: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes', 'IssuanceDeactivated', 'DeltaZero']
  },
  /**
   * Lookup126: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup127: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call',
      },
      remove_key: 'Null'
    }
  },
  /**
   * Lookup129: aro_pallet_registry::pallet::Call<T>
   **/
  AroPalletRegistryCall: {
    _enum: {
      set_superior: {
        newSuperior: 'AccountId32',
      },
      create_region: {
        code: 'Bytes',
        name: 'Bytes',
        description: 'Bytes',
      },
      update_region: {
        code: 'Bytes',
        newName: 'Bytes',
        newDescription: 'Bytes',
      },
      delete_region: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup130: aro_pallet_user::pallet::Call<T>
   **/
  AroPalletUserCall: {
    _enum: {
      set_superior: {
        newSuperior: 'AccountId32',
      },
      create_user: {
        userId: 'Bytes',
      },
      bind_evm_account: {
        userId: 'Bytes',
        evmAccount: 'H160',
        evmSignature: '[u8;65]'
      }
    }
  },
  /**
   * Lookup132: aro_pallet_edgenode::pallet::Call<T>
   **/
  AroPalletEdgenodeCall: {
    _enum: {
      set_superior: {
        newSuperior: 'AccountId32',
      },
      register_node: {
        nodeId: 'Bytes',
        deviceType: 'Bytes',
      },
      bind_node: {
        nodeId: 'Bytes',
        userId: 'Bytes',
        nodePubkey: 'Bytes',
        regionCode: 'Bytes',
      },
      unbind_node: {
        nodeId: 'Bytes',
        userId: 'Bytes',
      },
      batch_update_traffic_type: {
        nodes: 'Vec<Bytes>',
        trafficType: 'u32',
        skipNonExistNode: 'bool'
      }
    }
  },
  /**
   * Lookup133: aro_pallet_manager::pallet::Call<T>
   **/
  AroPalletManagerCall: {
    _enum: {
      set_superior: {
        newSuperior: 'AccountId32',
      },
      register_manager: {
        hostAddress: 'Bytes',
        managerHttpPort: 'u16',
        managerWsPort: 'u16',
        chainApiPort: 'u16',
        chainRpcPort: 'u16',
      },
      go_working: 'Null',
      create_operator: {
        name: 'Bytes',
        desc: 'Bytes',
        website: 'Bytes',
      },
      bind_manager: {
        managerAccount: 'AccountId32',
        managerSignature: '[u8;65]',
        forceUnbind: 'bool',
      },
      set_manager_region: {
        regionCode: 'Bytes',
      },
      update_manager_conn_params: {
        hostAddress: 'Bytes',
        managerHttpPort: 'u16',
        managerWsPort: 'u16',
        chainApiPort: 'u16',
        chainRpcPort: 'u16',
      },
      activate_manager: {
        license: 'Bytes',
      },
      bind_operator_evm_account: {
        evmAccount: 'H160',
        signature: '[u8;65]',
      },
      update_operator_basic_info: {
        name: 'Bytes',
        desc: 'Bytes',
        website: 'Bytes'
      }
    }
  },
  /**
   * Lookup134: aro_pallet_workload::pallet::Call<T>
   **/
  AroPalletWorkloadCall: {
    _enum: {
      set_superior: {
        newSuperior: 'AccountId32',
      },
      update_param: {
        key: 'AroPrimitivesWorkloadParamKey',
        value: 'u32',
      },
      submit_workreports: {
        epoch: 'u64',
        nodeScores: 'Vec<(Bytes,u64)>',
      },
      submit_reputation_points: {
        era: 'u64',
        nodePoints: 'Vec<(Bytes,i64)>',
      },
      submit_cheat_status: {
        era: 'u64',
        nodeDatas: 'Vec<(Bytes,AroPrimitivesEdgenodeCheatStatus)>'
      }
    }
  },
  /**
   * Lookup142: aro_primitives::types::edgenode::CheatStatus
   **/
  AroPrimitivesEdgenodeCheatStatus: {
    _enum: ['CsNormal', 'CsSuspicious', 'CsBlacklist']
  },
  /**
   * Lookup143: aro_pallet_checker::pallet::Call<T>
   **/
  AroPalletCheckerCall: {
    _enum: {
      set_superior: {
        newSuperior: 'AccountId32',
      },
      register_checker: {
        checkerPubkey: '[u8;32]',
        regionCode: 'Bytes',
        hostAddress: 'Bytes',
        httpPort: 'u16',
        perfPorts: 'Vec<u16>',
      },
      activate_checker: {
        checkerAccount: 'AccountId32',
      },
      deactivate_checker: {
        checkerAccount: 'AccountId32',
      },
      set_scheduler: {
        schedulerAccount: 'AccountId32',
        schedulerPubkey: '[u8;32]',
        hostAddress: 'Bytes',
        httpPort: 'u16',
      },
      update_scheduler_conn_params: {
        schedulerAccount: 'AccountId32',
        hostAddress: 'Bytes',
        httpPort: 'u16'
      }
    }
  },
  /**
   * Lookup145: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup147: aro_primitives::types::registry::Region<sp_core::crypto::AccountId32>
   **/
  AroPrimitivesRegistryRegion: {
    code: 'Bytes',
    name: 'Bytes',
    description: 'Bytes',
    creator: 'AccountId32',
    createAt: 'u64',
    updator: 'AccountId32',
    updateAt: 'u64'
  },
  /**
   * Lookup150: aro_pallet_registry::pallet::Error<T>
   **/
  AroPalletRegistryError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'RegionExists', 'RegionNotFound', 'RegionCodeExceedMaxLength', 'RegionNameExceedMaxLength', 'RegionDescExceedMaxLength']
  },
  /**
   * Lookup152: aro_primitives::types::user::User<sp_core::crypto::AccountId32>
   **/
  AroPrimitivesUser: {
    userId: 'Bytes',
    evmAccount: 'Option<H160>',
    creator: 'AccountId32',
    createAt: 'u64',
    updator: 'AccountId32',
    updateAt: 'u64'
  },
  /**
   * Lookup154: aro_pallet_user::pallet::Error<T>
   **/
  AroPalletUserError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'UserExists', 'UserNotFound', 'UserIdExceedMaxLength', 'InvalidUserId', 'InvalidEvmAddress', 'InvalidSignature']
  },
  /**
   * Lookup155: aro_primitives::types::edgenode::Node<sp_core::crypto::AccountId32>
   **/
  AroPrimitivesEdgenodeNode: {
    nodeId: 'Bytes',
    nodePubkey: 'Bytes',
    userId: 'Bytes',
    deviceType: 'Bytes',
    regionCode: 'Bytes',
    trafficType: 'u32',
    registerStatus: 'AroPrimitivesEdgenodeNodeRegisterStatus',
    cheatStatus: 'AroPrimitivesEdgenodeCheatStatus',
    reputationPoint: 'i64',
    creator: 'AccountId32',
    createAt: 'u64',
    updator: 'AccountId32',
    updateAt: 'u64'
  },
  /**
   * Lookup157: aro_primitives::types::edgenode::NodeRegisterStatus
   **/
  AroPrimitivesEdgenodeNodeRegisterStatus: {
    _enum: ['RsPendingBind', 'RsPendingActivate', 'RsActivate']
  },
  /**
   * Lookup158: aro_pallet_edgenode::pallet::Error<T>
   **/
  AroPalletEdgenodeError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'NodeAlreadyExists', 'NodeNotFound', 'UserNotFound', 'RegionNotFound', 'NodeAlreadyBound', 'NodeNotBoundYet', 'UserIdNotMatch', 'BatchLimitExceeded', 'NodeIdExceedMaxLength', 'NodePubkeyExceedMaxLength', 'DeviceTypeExceedMaxLength', 'UserIdExceedMaxLength', 'RegionCodeExceedMaxLength']
  },
  /**
   * Lookup159: aro_primitives::types::manager::Manager<sp_core::crypto::AccountId32>
   **/
  AroPrimitivesManager: {
    managerAccount: 'AccountId32',
    operatorAccount: 'Option<AccountId32>',
    hostAddress: 'Bytes',
    managerHttpPort: 'u16',
    managerWsPort: 'u16',
    chainApiPort: 'u16',
    chainRpcPort: 'u16',
    regionCode: 'Bytes',
    registerStatus: 'AroPrimitivesManagerManagerRegisterStatus',
    workingStatus: 'AroPrimitivesManagerManagerWorkingStatus',
    creator: 'AccountId32',
    createAt: 'u64',
    updator: 'AccountId32',
    updateAt: 'u64'
  },
  /**
   * Lookup161: aro_primitives::types::manager::ManagerRegisterStatus
   **/
  AroPrimitivesManagerManagerRegisterStatus: {
    _enum: ['RsPendingBind', 'RsPendingConfig', 'RsPendingActivate', 'RsActivate']
  },
  /**
   * Lookup162: aro_primitives::types::manager::Operator<sp_core::crypto::AccountId32>
   **/
  AroPrimitivesManagerOperator: {
    operatorAccount: 'AccountId32',
    managerAccount: 'Option<AccountId32>',
    evmAccount: 'Option<H160>',
    name: 'Bytes',
    description: 'Bytes',
    website: 'Bytes',
    creator: 'AccountId32',
    createAt: 'u64',
    updator: 'AccountId32',
    updateAt: 'u64'
  },
  /**
   * Lookup164: aro_pallet_manager::pallet::Error<T>
   **/
  AroPalletManagerError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'ManagerAlreadyExists', 'ManagerNotFound', 'InvalidHostAddress', 'HostAddressExceedMaxLength', 'InvalidPort', 'NotActivated', 'NoOperatorBound', 'InvalidConnectionParams', 'RegionNotSet', 'OperatorAlreadyExists', 'OperatorNameExceedMaxLength', 'OperatorDescExceedMaxLength', 'OperatorUrlExceedMaxLength', 'OperatorNotFound', 'OperatorAndManagerAccountDuplicate', 'ManagerAlreadyBind', 'OperatorAndManagerAlreadyBind', 'OperatorAlreadyBindToOtherManager', 'ManagerNotBind', 'ManagerRegionNotAllowedToChange', 'RegionCodeExceedMaxLength', 'InvalidRegionCode', 'InvalidManagerRegisterStatus', 'ManagerConfigNotDone', 'ManagerAlreadyActivate', 'UnknownManagerRegisterStatus', 'InvalidManagerSignature']
  },
  /**
   * Lookup165: aro_primitives::types::workload::EpochInfo
   **/
  AroPrimitivesWorkloadEpochInfo: {
    number: 'u64',
    startTime: 'u64',
    startBlock: 'u64',
    endTime: 'u64',
    endBlock: 'Option<u64>'
  },
  /**
   * Lookup166: aro_primitives::types::workload::EraInfo
   **/
  AroPrimitivesWorkloadEraInfo: {
    number: 'u64',
    startTime: 'u64',
    startBlock: 'u64',
    endTime: 'u64',
    endBlock: 'Option<u64>'
  },
  /**
   * Lookup169: aro_primitives::types::workload::Workreport
   **/
  AroPrimitivesWorkloadWorkreport: {
    score: 'u64',
    createAt: 'u64',
    updateAt: 'u64'
  },
  /**
   * Lookup173: aro_primitives::types::workload::NodeWorkload
   **/
  AroPrimitivesWorkloadNodeWorkload: {
    score: 'u64',
    createAt: 'u64'
  },
  /**
   * Lookup175: aro_primitives::types::workload::ManagerWRWorkload<sp_core::crypto::AccountId32>
   **/
  AroPrimitivesWorkloadManagerWRWorkload: {
    epoch: 'u64',
    managerAccount: 'AccountId32',
    reportedNodesCount: 'u64',
    score: 'u64',
    createAt: 'u64',
    updateAt: 'u64'
  },
  /**
   * Lookup176: aro_primitives::types::workload::WorkreportProcessData
   **/
  AroPrimitivesWorkloadWorkreportProcessData: {
    epoch: 'u64',
    totalNodesCount: 'u64',
    processedNodesCount: 'u64',
    startAt: 'u64',
    updateAt: 'u64',
    status: 'AroPrimitivesWorkloadProcessStatus',
    pageNextKey: 'Option<Bytes>'
  },
  /**
   * Lookup177: aro_primitives::types::workload::ProcessStatus
   **/
  AroPrimitivesWorkloadProcessStatus: {
    _enum: ['Init', 'Processing', 'Done']
  },
  /**
   * Lookup180: aro_primitives::types::workload::ReputationPointChangeRequest
   **/
  AroPrimitivesWorkloadReputationPointChangeRequest: {
    deltaPoint: 'i64',
    createAt: 'u64',
    updateAt: 'u64'
  },
  /**
   * Lookup184: aro_primitives::types::workload::ReputationDeltaPoint
   **/
  AroPrimitivesWorkloadReputationDeltaPoint: {
    deltaPoint: 'i64',
    createAt: 'u64'
  },
  /**
   * Lookup185: aro_primitives::types::workload::ManagerRPWorkload<sp_core::crypto::AccountId32>
   **/
  AroPrimitivesWorkloadManagerRPWorkload: {
    era: 'u64',
    managerAccount: 'AccountId32',
    reportedNodesCount: 'u64',
    score: 'u64',
    createAt: 'u64',
    updateAt: 'u64'
  },
  /**
   * Lookup186: aro_primitives::types::workload::ReputationPointProcessData
   **/
  AroPrimitivesWorkloadReputationPointProcessData: {
    era: 'u64',
    totalNodesCount: 'u64',
    processedNodesCount: 'u64',
    startAt: 'u64',
    updateAt: 'u64',
    status: 'AroPrimitivesWorkloadProcessStatus',
    pageNextKey: 'Option<Bytes>'
  },
  /**
   * Lookup188: aro_primitives::types::workload::CheatStatusChangeRequest
   **/
  AroPrimitivesWorkloadCheatStatusChangeRequest: {
    cheatStatus: 'AroPrimitivesEdgenodeCheatStatus',
    createAt: 'u64',
    updateAt: 'u64'
  },
  /**
   * Lookup192: aro_primitives::types::workload::CheatStatusResult
   **/
  AroPrimitivesWorkloadCheatStatusResult: {
    cheatStatus: 'AroPrimitivesEdgenodeCheatStatus',
    createAt: 'u64'
  },
  /**
   * Lookup193: aro_primitives::types::workload::ManagerCSWorkload<sp_core::crypto::AccountId32>
   **/
  AroPrimitivesWorkloadManagerCSWorkload: {
    era: 'u64',
    managerAccount: 'AccountId32',
    reportedNodesCount: 'u64',
    score: 'u64',
    createAt: 'u64',
    updateAt: 'u64'
  },
  /**
   * Lookup194: aro_primitives::types::workload::CheatStatusProcessData
   **/
  AroPrimitivesWorkloadCheatStatusProcessData: {
    era: 'u64',
    totalNodesCount: 'u64',
    processedNodesCount: 'u64',
    startAt: 'u64',
    updateAt: 'u64',
    status: 'AroPrimitivesWorkloadProcessStatus',
    pageNextKey: 'Option<Bytes>'
  },
  /**
   * Lookup195: aro_pallet_workload::pallet::Error<T>
   **/
  AroPalletWorkloadError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'InvalidCurrentEpoch', 'InvalidCurrentEra', 'ManagerNotFound', 'ManagerNotActivate', 'ManagerBlocked', 'GenesisEpochNotAllowed', 'InvalidSubmitEpoch', 'ManagerLimitExceeded', 'NodeScoresCountExceedPerReqLimit', 'InvalidParamValueRange', 'EraLengthNotMultipleOfEpochLength', 'NodePointsCountExceedPerReqLimit', 'GenesisEraNotAllowed', 'InvalidSubmitEra', 'NodeDatasCountExceedPerReqLimit', 'NoActiveEpoch', 'NoActiveEra', 'InvalidPageNextKey']
  },
  /**
   * Lookup196: aro_primitives::types::checker::Checker<sp_core::crypto::AccountId32>
   **/
  AroPrimitivesChecker: {
    checkerAccount: 'AccountId32',
    checkerPubkey: '[u8;32]',
    regionCode: 'Bytes',
    hostAddress: 'Bytes',
    httpPort: 'u16',
    perfPorts: 'Vec<u16>',
    registerStatus: 'AroPrimitivesCheckerCheckerRegisterStatus',
    creator: 'AccountId32',
    createAt: 'u64',
    updator: 'AccountId32',
    updateAt: 'u64'
  },
  /**
   * Lookup198: aro_primitives::types::checker::CheckerRegisterStatus
   **/
  AroPrimitivesCheckerCheckerRegisterStatus: {
    _enum: ['RsPendingActivate', 'RsActivate']
  },
  /**
   * Lookup199: aro_primitives::types::checker::Scheduler<sp_core::crypto::AccountId32>
   **/
  AroPrimitivesCheckerScheduler: {
    schedulerAccount: 'AccountId32',
    schedulerPubkey: '[u8;32]',
    hostAddress: 'Bytes',
    httpPort: 'u16',
    creator: 'AccountId32',
    createAt: 'u64',
    updator: 'AccountId32',
    updateAt: 'u64'
  },
  /**
   * Lookup200: aro_pallet_checker::pallet::Error<T>
   **/
  AroPalletCheckerError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'InvalidHostAddress', 'HostAddressExceedMaxLength', 'InvalidPort', 'PortsListIsEmpty', 'PortsListExceedMaxLength', 'RegionCodeExceedMaxLength', 'InvalidRegionCode', 'CheckerAlreadyExists', 'CheckerNotFound', 'CheckerAlreadyActivate', 'CheckerNotActivateYet', 'SchedulerNotSet']
  },
  /**
   * Lookup202: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: '[u8;64]',
      Sr25519: '[u8;64]',
      Ecdsa: '[u8;65]'
    }
  },
  /**
   * Lookup204: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup205: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup206: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup207: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup210: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup211: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup212: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup213: frame_metadata_hash_extension::CheckMetadataHash<T>
   **/
  FrameMetadataHashExtensionCheckMetadataHash: {
    mode: 'FrameMetadataHashExtensionMode'
  },
  /**
   * Lookup214: frame_metadata_hash_extension::Mode
   **/
  FrameMetadataHashExtensionMode: {
    _enum: ['Disabled', 'Enabled']
  },
  /**
   * Lookup216: aro_runtime::Runtime
   **/
  AroRuntimeRuntime: 'Null'
};
