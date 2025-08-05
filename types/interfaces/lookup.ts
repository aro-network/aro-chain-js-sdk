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
   * Lookup32: pallet_indices::pallet::Event<T>
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'AccountId32',
        index: 'u32',
      },
      IndexFreed: {
        index: 'u32',
      },
      IndexFrozen: {
        index: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup33: pallet_balances::pallet::Event<T, I>
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
   * Lookup34: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup35: pallet_transaction_payment::pallet::Event<T>
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
   * Lookup36: pallet_staking::pallet::pallet::Event<T>
   **/
  PalletStakingPalletEvent: {
    _enum: {
      EraPaid: {
        eraIndex: 'u32',
        validatorPayout: 'u128',
        remainder: 'u128',
      },
      Rewarded: {
        stash: 'AccountId32',
        dest: 'PalletStakingRewardDestination',
        amount: 'u128',
      },
      Slashed: {
        staker: 'AccountId32',
        amount: 'u128',
      },
      SlashReported: {
        validator: 'AccountId32',
        fraction: 'Perbill',
        slashEra: 'u32',
      },
      OldSlashingReportDiscarded: {
        sessionIndex: 'u32',
      },
      StakersElected: 'Null',
      Bonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Unbonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Kicked: {
        nominator: 'AccountId32',
        stash: 'AccountId32',
      },
      StakingElectionFailed: 'Null',
      Chilled: {
        stash: 'AccountId32',
      },
      PayoutStarted: {
        eraIndex: 'u32',
        validatorStash: 'AccountId32',
        page: 'u32',
        next: 'Option<u32>',
      },
      ValidatorPrefsSet: {
        stash: 'AccountId32',
        prefs: 'PalletStakingValidatorPrefs',
      },
      SnapshotVotersSizeExceeded: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      SnapshotTargetsSizeExceeded: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      ForceEra: {
        mode: 'PalletStakingForcing',
      },
      ControllerBatchDeprecated: {
        failures: 'u32'
      }
    }
  },
  /**
   * Lookup37: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletStakingRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup40: pallet_staking::ValidatorPrefs
   **/
  PalletStakingValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup42: pallet_staking::Forcing
   **/
  PalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup43: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup44: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u64',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataTransferred: {
        _alias: {
          hash_: 'hash',
        },
        prevOwner: 'PalletDemocracyMetadataOwner',
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup45: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup46: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup48: pallet_democracy::types::MetadataOwner
   **/
  PalletDemocracyMetadataOwner: {
    _enum: {
      External: 'Null',
      Proposal: 'u32',
      Referendum: 'u32'
    }
  },
  /**
   * Lookup49: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32',
      },
      Killed: {
        proposalHash: 'H256',
      },
      ProposalCostBurned: {
        proposalHash: 'H256',
        who: 'AccountId32',
      },
      ProposalCostReleased: {
        proposalHash: 'H256',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup53: pallet_elections_phragmen::pallet::Event<T>
   **/
  PalletElectionsPhragmenEvent: {
    _enum: {
      NewTerm: {
        newMembers: 'Vec<(AccountId32,u128)>',
      },
      EmptyTerm: 'Null',
      ElectionError: 'Null',
      MemberKicked: {
        member: 'AccountId32',
      },
      Renounced: {
        candidate: 'AccountId32',
      },
      CandidateSlashed: {
        candidate: 'AccountId32',
        amount: 'u128',
      },
      SeatHolderSlashed: {
        seatHolder: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup56: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup57: pallet_grandpa::pallet::Event
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
   * Lookup60: sp_consensus_grandpa::app::Public
   **/
  SpConsensusGrandpaAppPublic: '[u8;32]',
  /**
   * Lookup61: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup62: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,SpStakingExposure)>'
      }
    }
  },
  /**
   * Lookup63: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: '[u8;32]',
  /**
   * Lookup66: sp_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  SpStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<SpStakingIndividualExposure>'
  },
  /**
   * Lookup69: sp_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  SpStakingIndividualExposure: {
    who: 'AccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup70: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup72: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u64',
        index: 'u32',
      },
      Canceled: {
        when: 'u64',
        index: 'u32',
      },
      Dispatched: {
        task: '(u64,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      RetrySet: {
        task: '(u64,u32)',
        id: 'Option<[u8;32]>',
        period: 'u64',
        retries: 'u8',
      },
      RetryCancelled: {
        task: '(u64,u32)',
        id: 'Option<[u8;32]>',
      },
      CallUnavailable: {
        task: '(u64,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u64,u32)',
        id: 'Option<[u8;32]>',
      },
      RetryFailed: {
        task: '(u64,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u64,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup75: pallet_bags_list::pallet::Event<T, I>
   **/
  PalletBagsListEvent: {
    _enum: {
      Rebagged: {
        who: 'AccountId32',
        from: 'u64',
        to: 'u64',
      },
      ScoreUpdated: {
        who: 'AccountId32',
        newScore: 'u64'
      }
    }
  },
  /**
   * Lookup76: pallet_statement::pallet::Event<T>
   **/
  PalletStatementEvent: {
    _enum: {
      NewStatement: {
        account: 'AccountId32',
        statement: 'SpStatementStoreStatement'
      }
    }
  },
  /**
   * Lookup77: sp_statement_store::Statement
   **/
  SpStatementStoreStatement: {
    proof: 'Option<SpStatementStoreProof>',
    decryptionKey: 'Option<[u8;32]>',
    channel: 'Option<[u8;32]>',
    priority: 'Option<u32>',
    numTopics: 'u8',
    topics: '[[u8;32];4]',
    data: 'Option<Bytes>'
  },
  /**
   * Lookup79: sp_statement_store::Proof
   **/
  SpStatementStoreProof: {
    _enum: {
      Sr25519: {
        signature: '[u8;64]',
        signer: '[u8;32]',
      },
      Ed25519: {
        signature: '[u8;64]',
        signer: '[u8;32]',
      },
      Secp256k1Ecdsa: {
        signature: '[u8;65]',
        signer: '[u8;33]',
      },
      OnChain: {
        who: '[u8;32]',
        blockHash: '[u8;32]',
        eventIndex: 'u64'
      }
    }
  },
  /**
   * Lookup85: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentitiesSet: {
        main: 'AccountId32',
        numberOfSubs: 'u32',
        newDeposit: 'u128',
      },
      SubIdentityRenamed: {
        sub: 'AccountId32',
        main: 'AccountId32',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      AuthorityAdded: {
        authority: 'AccountId32',
      },
      AuthorityRemoved: {
        authority: 'AccountId32',
      },
      UsernameSet: {
        who: 'AccountId32',
        username: 'Bytes',
      },
      UsernameQueued: {
        who: 'AccountId32',
        username: 'Bytes',
        expiration: 'u64',
      },
      PreapprovalExpired: {
        whose: 'AccountId32',
      },
      PrimaryUsernameSet: {
        who: 'AccountId32',
        username: 'Bytes',
      },
      DanglingUsernameRemoved: {
        who: 'AccountId32',
        username: 'Bytes',
      },
      UsernameUnbound: {
        username: 'Bytes',
      },
      UsernameRemoved: {
        username: 'Bytes',
      },
      UsernameKilled: {
        username: 'Bytes'
      }
    }
  },
  /**
   * Lookup87: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup88: pallet_sudo::pallet::Event<T>
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
   * Lookup90: aro_pallet_registry::pallet::Event<T>
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
   * Lookup91: aro_pallet_user::pallet::Event<T>
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
        updateAt: 'u64',
      },
      UserBatchCreated: {
        count: 'u32',
        creator: 'AccountId32',
        createAt: 'u64',
      },
      UserBatchEvmBound: {
        count: 'u32',
        updator: 'AccountId32',
        updateAt: 'u64'
      }
    }
  },
  /**
   * Lookup94: aro_pallet_edgenode::pallet::Event<T>
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
        updateAt: 'u64',
      },
      NodeBatchRegistered: {
        count: 'u32',
        creator: 'AccountId32',
        createAt: 'u64',
      },
      NodeBatchBound: {
        count: 'u32',
        updator: 'AccountId32',
        updateAt: 'u64',
      },
      NodeBatchUnbound: {
        count: 'u32',
        updator: 'AccountId32',
        updateAt: 'u64'
      }
    }
  },
  /**
   * Lookup95: aro_pallet_manager::pallet::Event<T>
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
   * Lookup97: aro_primitives::types::manager::ManagerWorkingStatus
   **/
  AroPrimitivesManagerManagerWorkingStatus: {
    _enum: ['WsWorking', 'WsOffline', 'WsBlock']
  },
  /**
   * Lookup98: aro_pallet_workload::pallet::Event<T>
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
   * Lookup99: aro_primitives::types::workload::ParamKey
   **/
  AroPrimitivesWorkloadParamKey: {
    _enum: ['EpochLength', 'EraLength', 'WorkreportProcessBatchSize', 'ReputationPointProcessBatchSize', 'CheatStatusProcessBatchSize', 'HistoryEpochDataDepth', 'HistoryEraDataDepth']
  },
  /**
   * Lookup100: aro_pallet_checker::pallet::Event<T>
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
   * Lookup101: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup104: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup108: frame_system::CodeUpgradeAuthorization<T>
   **/
  FrameSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup109: frame_system::pallet::Call<T>
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
   * Lookup113: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup114: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup115: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup117: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup118: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup119: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup120: sp_version::RuntimeVersion
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
   * Lookup125: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered', 'MultiBlockMigrationsOngoing', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup128: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: '[u8;32]',
  /**
   * Lookup131: sp_consensus_babe::digests::NextConfigDescriptor
   **/
  SpConsensusBabeDigestsNextConfigDescriptor: {
    _enum: {
      __Unused0: 'Null',
      V1: {
        c: '(u64,u64)',
        allowedSlots: 'SpConsensusBabeAllowedSlots'
      }
    }
  },
  /**
   * Lookup133: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup137: sp_consensus_babe::digests::PreDigest
   **/
  SpConsensusBabeDigestsPreDigest: {
    _enum: {
      __Unused0: 'Null',
      Primary: 'SpConsensusBabeDigestsPrimaryPreDigest',
      SecondaryPlain: 'SpConsensusBabeDigestsSecondaryPlainPreDigest',
      SecondaryVRF: 'SpConsensusBabeDigestsSecondaryVRFPreDigest'
    }
  },
  /**
   * Lookup138: sp_consensus_babe::digests::PrimaryPreDigest
   **/
  SpConsensusBabeDigestsPrimaryPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup139: sp_core::sr25519::vrf::VrfSignature
   **/
  SpCoreSr25519VrfVrfSignature: {
    preOutput: '[u8;32]',
    proof: '[u8;64]'
  },
  /**
   * Lookup140: sp_consensus_babe::digests::SecondaryPlainPreDigest
   **/
  SpConsensusBabeDigestsSecondaryPlainPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64'
  },
  /**
   * Lookup141: sp_consensus_babe::digests::SecondaryVRFPreDigest
   **/
  SpConsensusBabeDigestsSecondaryVRFPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup142: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup144: pallet_babe::pallet::Call<T>
   **/
  PalletBabeCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      plan_config_change: {
        config: 'SpConsensusBabeDigestsNextConfigDescriptor'
      }
    }
  },
  /**
   * Lookup145: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeHeader',
    secondHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup146: sp_runtime::generic::header::Header<Number, Hash>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u64>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup147: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup148: pallet_babe::pallet::Error<T>
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup149: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup151: pallet_indices::pallet::Call<T>
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u32',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
      },
      free: {
        index: 'u32',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
        freeze: 'bool',
      },
      freeze: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup154: pallet_indices::pallet::Error<T>
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup156: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup157: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup160: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup163: frame_support::traits::tokens::misc::IdAmount<aro_runtime::RuntimeHoldReason, Balance>
   **/
  FrameSupportTokensMiscIdAmountRuntimeHoldReason: {
    id: 'AroRuntimeRuntimeHoldReason',
    amount: 'u128'
  },
  /**
   * Lookup164: aro_runtime::RuntimeHoldReason
   **/
  AroRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      Council: 'PalletCollectiveHoldReason',
      TechnicalCommittee: 'PalletCollectiveHoldReason',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      Preimage: 'PalletPreimageHoldReason'
    }
  },
  /**
   * Lookup165: pallet_collective::pallet::HoldReason<I>
   **/
  PalletCollectiveHoldReason: {
    _enum: ['ProposalSubmission']
  },
  /**
   * Lookup167: pallet_preimage::pallet::HoldReason
   **/
  PalletPreimageHoldReason: {
    _enum: ['Preimage']
  },
  /**
   * Lookup170: frame_support::traits::tokens::misc::IdAmount<aro_runtime::RuntimeFreezeReason, Balance>
   **/
  FrameSupportTokensMiscIdAmountRuntimeFreezeReason: {
    id: 'AroRuntimeRuntimeFreezeReason',
    amount: 'u128'
  },
  /**
   * Lookup171: aro_runtime::RuntimeFreezeReason
   **/
  AroRuntimeRuntimeFreezeReason: 'Null',
  /**
   * Lookup173: pallet_balances::pallet::Call<T, I>
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
   * Lookup175: pallet_balances::types::AdjustmentDirection
   **/
  PalletBalancesAdjustmentDirection: {
    _enum: ['Increase', 'Decrease']
  },
  /**
   * Lookup176: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes', 'IssuanceDeactivated', 'DeltaZero']
  },
  /**
   * Lookup178: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup179: pallet_staking::StakingLedger<T>
   **/
  PalletStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingUnlockChunk>',
    legacyClaimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup181: pallet_staking::UnlockChunk<Balance>
   **/
  PalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup185: pallet_staking::Nominations<T>
   **/
  PalletStakingNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup187: pallet_staking::ActiveEraInfo
   **/
  PalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup190: sp_staking::PagedExposureMetadata<Balance>
   **/
  SpStakingPagedExposureMetadata: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    nominatorCount: 'u32',
    pageCount: 'u32'
  },
  /**
   * Lookup192: sp_staking::ExposurePage<sp_core::crypto::AccountId32, Balance>
   **/
  SpStakingExposurePage: {
    pageTotal: 'Compact<u128>',
    others: 'Vec<SpStakingIndividualExposure>'
  },
  /**
   * Lookup193: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup199: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup203: pallet_staking::slashing::SlashingSpans
   **/
  PalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup204: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup205: pallet_staking::pallet::pallet::Call<T>
   **/
  PalletStakingPalletCall: {
    _enum: {
      bond: {
        value: 'Compact<u128>',
        payee: 'PalletStakingRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PalletStakingValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PalletStakingRewardDestination',
      },
      set_controller: 'Null',
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'PalletStakingPalletConfigOpU128',
        minValidatorBond: 'PalletStakingPalletConfigOpU128',
        maxNominatorCount: 'PalletStakingPalletConfigOpU32',
        maxValidatorCount: 'PalletStakingPalletConfigOpU32',
        chillThreshold: 'PalletStakingPalletConfigOpPercent',
        minCommission: 'PalletStakingPalletConfigOpPerbill',
        maxStakedRewards: 'PalletStakingPalletConfigOpPercent',
      },
      chill_other: {
        stash: 'AccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'AccountId32',
      },
      set_min_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      payout_stakers_by_page: {
        validatorStash: 'AccountId32',
        era: 'u32',
        page: 'u32',
      },
      update_payee: {
        controller: 'AccountId32',
      },
      deprecate_controller_batch: {
        controllers: 'Vec<AccountId32>',
      },
      restore_ledger: {
        stash: 'AccountId32',
        maybeController: 'Option<AccountId32>',
        maybeTotal: 'Option<u128>',
        maybeUnlocking: 'Option<Vec<PalletStakingUnlockChunk>>',
      },
      __Unused30: 'Null',
      __Unused31: 'Null',
      withdraw_overstake: {
        stash: 'AccountId32'
      }
    }
  },
  /**
   * Lookup207: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup208: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup209: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup210: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup214: pallet_staking::pallet::pallet::Error<T>
   **/
  PalletStakingPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'InvalidPage', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow', 'BoundNotMet', 'ControllerDeprecated', 'CannotRestoreLedger', 'RewardDestinationRestricted', 'NotEnoughFunds', 'VirtualStakerNotAllowed']
  },
  /**
   * Lookup217: aro_runtime::SessionKeys
   **/
  AroRuntimeSessionKeys: {
    babe: 'SpConsensusBabeAppPublic',
    grandpa: 'SpConsensusGrandpaAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic'
  },
  /**
   * Lookup218: sp_authority_discovery::app::Public
   **/
  SpAuthorityDiscoveryAppPublic: '[u8;32]',
  /**
   * Lookup220: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup221: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'AroRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup222: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup226: frame_support::traits::preimages::Bounded<aro_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup228: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: 'FrameSupportPreimagesBounded',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_majority: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_default: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u64',
        delay: 'u64',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      delegate: {
        to: 'MultiAddress',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      unlock: {
        target: 'MultiAddress',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>',
      },
      set_metadata: {
        owner: 'PalletDemocracyMetadataOwner',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup229: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup231: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused4: 'Null',
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>',
      },
      kill: {
        proposalHash: 'H256',
      },
      release_proposal_cost: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup233: pallet_elections_phragmen::pallet::Call<T>
   **/
  PalletElectionsPhragmenCall: {
    _enum: {
      vote: {
        votes: 'Vec<AccountId32>',
        value: 'Compact<u128>',
      },
      remove_voter: 'Null',
      submit_candidacy: {
        candidateCount: 'Compact<u32>',
      },
      renounce_candidacy: {
        renouncing: 'PalletElectionsPhragmenRenouncing',
      },
      remove_member: {
        who: 'MultiAddress',
        slashBond: 'bool',
        rerunElection: 'bool',
      },
      clean_defunct_voters: {
        numVoters: 'u32',
        numDefunct: 'u32'
      }
    }
  },
  /**
   * Lookup234: pallet_elections_phragmen::Renouncing
   **/
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: 'Null',
      RunnerUp: 'Null',
      Candidate: 'Compact<u32>'
    }
  },
  /**
   * Lookup235: pallet_membership::pallet::Call<T, I>
   **/
  PalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'MultiAddress',
      },
      remove_member: {
        who: 'MultiAddress',
      },
      swap_member: {
        remove: 'MultiAddress',
        add: 'MultiAddress',
      },
      reset_members: {
        members: 'Vec<AccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      set_prime: {
        who: 'MultiAddress',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup236: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u64',
        bestFinalizedBlockNumber: 'u64'
      }
    }
  },
  /**
   * Lookup237: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpConsensusGrandpaEquivocation'
  },
  /**
   * Lookup238: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup239: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup240: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u64'
  },
  /**
   * Lookup241: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: '[u8;64]',
  /**
   * Lookup243: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup244: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u64'
  },
  /**
   * Lookup246: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      ensure_updated: {
        hashes: 'Vec<H256>'
      }
    }
  },
  /**
   * Lookup247: pallet_im_online::pallet::Call<T>
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PalletImOnlineHeartbeat',
        signature: 'PalletImOnlineSr25519AppSr25519Signature'
      }
    }
  },
  /**
   * Lookup248: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u64',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup249: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: '[u8;64]',
  /**
   * Lookup250: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u64',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      set_retry: {
        task: '(u64,u32)',
        retries: 'u8',
        period: 'u64',
      },
      set_retry_named: {
        id: '[u8;32]',
        retries: 'u8',
        period: 'u64',
      },
      cancel_retry: {
        task: '(u64,u32)',
      },
      cancel_retry_named: {
        id: '[u8;32]'
      }
    }
  },
  /**
   * Lookup252: pallet_bags_list::pallet::Call<T, I>
   **/
  PalletBagsListCall: {
    _enum: {
      rebag: {
        dislocated: 'MultiAddress',
      },
      put_in_front_of: {
        lighter: 'MultiAddress',
      },
      put_in_front_of_other: {
        heavier: 'MultiAddress',
        lighter: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup253: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentityLegacyIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'u64',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null',
      add_username_authority: {
        authority: 'MultiAddress',
        suffix: 'Bytes',
        allocation: 'u32',
      },
      remove_username_authority: {
        suffix: 'Bytes',
        authority: 'MultiAddress',
      },
      set_username_for: {
        who: 'MultiAddress',
        username: 'Bytes',
        signature: 'Option<SpRuntimeMultiSignature>',
        useAllocation: 'bool',
      },
      accept_username: {
        username: 'Bytes',
      },
      remove_expired_approval: {
        username: 'Bytes',
      },
      set_primary_username: {
        username: 'Bytes',
      },
      unbind_username: {
        username: 'Bytes',
      },
      remove_username: {
        username: 'Bytes',
      },
      kill_username: {
        username: 'Bytes'
      }
    }
  },
  /**
   * Lookup254: pallet_identity::legacy::IdentityInfo<FieldLimit>
   **/
  PalletIdentityLegacyIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup290: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup292: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: '[u8;64]',
      Sr25519: '[u8;64]',
      Ecdsa: '[u8;65]'
    }
  },
  /**
   * Lookup293: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'AroRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup295: aro_runtime::OriginCaller
   **/
  AroRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      Council: 'PalletCollectiveRawOrigin',
      TechnicalCommittee: 'PalletCollectiveRawOrigin'
    }
  },
  /**
   * Lookup296: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup297: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup299: pallet_sudo::pallet::Call<T>
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
   * Lookup300: aro_pallet_registry::pallet::Call<T>
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
   * Lookup301: aro_pallet_user::pallet::Call<T>
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
        evmSignature: '[u8;65]',
      },
      create_user_batch: {
        userIds: 'Vec<Bytes>',
      },
      bind_evm_account_batch: {
        items: 'Vec<(Bytes,H160,[u8;65])>'
      }
    }
  },
  /**
   * Lookup304: aro_pallet_edgenode::pallet::Call<T>
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
        skipNonExistNode: 'bool',
      },
      register_node_batch: {
        nodes: 'Vec<(Bytes,Bytes)>',
      },
      bind_node_batch: {
        bindings: 'Vec<(Bytes,Bytes,Bytes,Bytes)>',
      },
      unbind_node_batch: {
        bindings: 'Vec<(Bytes,Bytes)>'
      }
    }
  },
  /**
   * Lookup307: aro_pallet_manager::pallet::Call<T>
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
        managerSignature: '[u8;64]',
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
        license: 'Text',
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
   * Lookup308: aro_pallet_workload::pallet::Call<T>
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
   * Lookup316: aro_primitives::types::edgenode::CheatStatus
   **/
  AroPrimitivesEdgenodeCheatStatus: {
    _enum: ['CsNormal', 'CsSuspicious', 'CsBlacklist']
  },
  /**
   * Lookup317: aro_pallet_checker::pallet::Call<T>
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
   * Lookup319: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup324: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<aro_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u64'
      }
    }
  },
  /**
   * Lookup325: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<aro_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u64',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u64',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup326: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup327: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup331: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup332: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u64,u128)',
  /**
   * Lookup335: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
  },
  /**
   * Lookup338: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u64'
  },
  /**
   * Lookup339: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength', 'PrimeAccountNotMember', 'ProposalActive']
  },
  /**
   * Lookup343: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenSeatHolder: {
    who: 'AccountId32',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup344: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenVoter: {
    votes: 'Vec<AccountId32>',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup345: pallet_elections_phragmen::pallet::Error<T>
   **/
  PalletElectionsPhragmenError: {
    _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'DuplicatedCandidate', 'TooManyCandidates', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
  },
  /**
   * Lookup347: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
  },
  /**
   * Lookup348: pallet_grandpa::StoredState<N>
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
   * Lookup349: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u64',
    delay: 'u64',
    nextAuthorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u64>'
  },
  /**
   * Lookup351: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup352: pallet_preimage::OldRequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageOldRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup354: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::HoldConsideration<A, F, R, D, Fp>>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        ticket: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        maybeTicket: 'Option<(AccountId32,u128)>',
        count: 'u32',
        maybeLen: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup359: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested', 'TooMany', 'TooFew']
  },
  /**
   * Lookup362: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup365: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,SpStakingExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup369: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<aro_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, aro_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u64,u32)>',
    origin: 'AroRuntimeOriginCaller'
  },
  /**
   * Lookup371: pallet_scheduler::RetryConfig<Period>
   **/
  PalletSchedulerRetryConfig: {
    totalRetries: 'u8',
    remaining: 'u8',
    period: 'u64'
  },
  /**
   * Lookup372: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup373: pallet_bags_list::list::Node<T, I>
   **/
  PalletBagsListListNode: {
    id: 'AccountId32',
    prev: 'Option<AccountId32>',
    next: 'Option<AccountId32>',
    bagUpper: 'u64',
    score: 'u64'
  },
  /**
   * Lookup374: pallet_bags_list::list::Bag<T, I>
   **/
  PalletBagsListListBag: {
    head: 'Option<AccountId32>',
    tail: 'Option<AccountId32>'
  },
  /**
   * Lookup376: pallet_bags_list::pallet::Error<T, I>
   **/
  PalletBagsListError: {
    _enum: {
      List: 'PalletBagsListListListError'
    }
  },
  /**
   * Lookup377: pallet_bags_list::list::ListError
   **/
  PalletBagsListListListError: {
    _enum: ['Duplicate', 'NotHeavier', 'NotInSameBag', 'NodeNotFound']
  },
  /**
   * Lookup378: pallet_identity::types::Registration<Balance, MaxJudgements, pallet_identity::legacy::IdentityInfo<FieldLimit>>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityLegacyIdentityInfo'
  },
  /**
   * Lookup386: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32, IdField>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'u64'
  },
  /**
   * Lookup389: pallet_identity::types::AuthorityProperties<sp_core::crypto::AccountId32>
   **/
  PalletIdentityAuthorityProperties: {
    accountId: 'AccountId32',
    allocation: 'u32'
  },
  /**
   * Lookup390: pallet_identity::types::UsernameInformation<sp_core::crypto::AccountId32, Balance>
   **/
  PalletIdentityUsernameInformation: {
    owner: 'AccountId32',
    provider: 'PalletIdentityProvider'
  },
  /**
   * Lookup391: pallet_identity::types::Provider<Balance>
   **/
  PalletIdentityProvider: {
    _enum: {
      Allocation: 'Null',
      AuthorityDeposit: 'u128',
      System: 'Null'
    }
  },
  /**
   * Lookup393: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed', 'InvalidSuffix', 'NotUsernameAuthority', 'NoAllocation', 'InvalidSignature', 'RequiresSignature', 'InvalidUsername', 'UsernameTaken', 'NoUsername', 'NotExpired', 'TooEarly', 'NotUnbinding', 'AlreadyUnbinding', 'InsufficientPrivileges']
  },
  /**
   * Lookup394: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup395: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup397: aro_primitives::types::registry::Region<sp_core::crypto::AccountId32>
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
   * Lookup400: aro_pallet_registry::pallet::Error<T>
   **/
  AroPalletRegistryError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'RegionExists', 'RegionNotFound', 'RegionCodeExceedMaxLength', 'RegionNameExceedMaxLength', 'RegionDescExceedMaxLength']
  },
  /**
   * Lookup402: aro_primitives::types::user::User<sp_core::crypto::AccountId32>
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
   * Lookup404: aro_pallet_user::pallet::Error<T>
   **/
  AroPalletUserError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'UserExists', 'UserNotFound', 'UserIdExceedMaxLength', 'InvalidUserId', 'InvalidEvmAddress', 'InvalidSignature', 'TooManyUsersInBatch']
  },
  /**
   * Lookup405: aro_primitives::types::edgenode::Node<sp_core::crypto::AccountId32>
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
   * Lookup407: aro_primitives::types::edgenode::NodeRegisterStatus
   **/
  AroPrimitivesEdgenodeNodeRegisterStatus: {
    _enum: ['RsPendingBind', 'RsPendingActivate', 'RsActivate']
  },
  /**
   * Lookup408: aro_pallet_edgenode::pallet::Error<T>
   **/
  AroPalletEdgenodeError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'NodeAlreadyExists', 'NodeNotFound', 'UserNotFound', 'RegionNotFound', 'NodeAlreadyBound', 'NodeNotBoundYet', 'UserIdNotMatch', 'BatchLimitExceeded', 'NodeIdExceedMaxLength', 'NodePubkeyExceedMaxLength', 'DeviceTypeExceedMaxLength', 'UserIdExceedMaxLength', 'RegionCodeExceedMaxLength']
  },
  /**
   * Lookup409: aro_primitives::types::manager::Manager<sp_core::crypto::AccountId32>
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
   * Lookup410: aro_primitives::types::manager::ManagerRegisterStatus
   **/
  AroPrimitivesManagerManagerRegisterStatus: {
    _enum: ['RsPendingBind', 'RsPendingConfig', 'RsPendingActivate', 'RsActivate']
  },
  /**
   * Lookup411: aro_primitives::types::manager::Operator<sp_core::crypto::AccountId32>
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
   * Lookup413: aro_pallet_manager::pallet::Error<T>
   **/
  AroPalletManagerError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'ManagerAlreadyExists', 'ManagerNotFound', 'InvalidHostAddress', 'HostAddressExceedMaxLength', 'InvalidPort', 'NotActivated', 'NoOperatorBound', 'InvalidConnectionParams', 'RegionNotSet', 'OperatorAlreadyExists', 'OperatorNameExceedMaxLength', 'OperatorDescExceedMaxLength', 'OperatorUrlExceedMaxLength', 'OperatorNotFound', 'OperatorAndManagerAccountDuplicate', 'ManagerAlreadyBind', 'OperatorAndManagerAlreadyBind', 'OperatorAlreadyBindToOtherManager', 'ManagerNotBind', 'ManagerRegionNotAllowedToChange', 'RegionCodeExceedMaxLength', 'InvalidRegionCode', 'InvalidManagerRegisterStatus', 'ManagerConfigNotDone', 'ManagerAlreadyActivate', 'UnknownManagerRegisterStatus', 'InvalidManagerSignature', 'InvalidAccountFormat', 'InvalidLicenseEncoding', 'InvalidLicenseLength', 'InvalidLicense']
  },
  /**
   * Lookup414: aro_primitives::types::workload::EpochInfo
   **/
  AroPrimitivesWorkloadEpochInfo: {
    number: 'u64',
    startTime: 'u64',
    startBlock: 'u64',
    endTime: 'u64',
    endBlock: 'Option<u64>'
  },
  /**
   * Lookup415: aro_primitives::types::workload::EraInfo
   **/
  AroPrimitivesWorkloadEraInfo: {
    number: 'u64',
    startTime: 'u64',
    startBlock: 'u64',
    endTime: 'u64',
    endBlock: 'Option<u64>'
  },
  /**
   * Lookup418: aro_primitives::types::workload::Workreport
   **/
  AroPrimitivesWorkloadWorkreport: {
    score: 'u64',
    createAt: 'u64',
    updateAt: 'u64'
  },
  /**
   * Lookup422: aro_primitives::types::workload::NodeWorkload
   **/
  AroPrimitivesWorkloadNodeWorkload: {
    score: 'u64',
    createAt: 'u64'
  },
  /**
   * Lookup424: aro_primitives::types::workload::ManagerWRWorkload<sp_core::crypto::AccountId32>
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
   * Lookup425: aro_primitives::types::workload::WorkreportProcessData
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
   * Lookup426: aro_primitives::types::workload::ProcessStatus
   **/
  AroPrimitivesWorkloadProcessStatus: {
    _enum: ['Init', 'Processing', 'Done']
  },
  /**
   * Lookup430: aro_primitives::types::workload::ReputationPointChangeRequest
   **/
  AroPrimitivesWorkloadReputationPointChangeRequest: {
    deltaPoint: 'i64',
    createAt: 'u64',
    updateAt: 'u64'
  },
  /**
   * Lookup434: aro_primitives::types::workload::ReputationDeltaPoint
   **/
  AroPrimitivesWorkloadReputationDeltaPoint: {
    deltaPoint: 'i64',
    createAt: 'u64'
  },
  /**
   * Lookup435: aro_primitives::types::workload::ManagerRPWorkload<sp_core::crypto::AccountId32>
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
   * Lookup436: aro_primitives::types::workload::ReputationPointProcessData
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
   * Lookup438: aro_primitives::types::workload::CheatStatusChangeRequest
   **/
  AroPrimitivesWorkloadCheatStatusChangeRequest: {
    cheatStatus: 'AroPrimitivesEdgenodeCheatStatus',
    createAt: 'u64',
    updateAt: 'u64'
  },
  /**
   * Lookup442: aro_primitives::types::workload::CheatStatusResult
   **/
  AroPrimitivesWorkloadCheatStatusResult: {
    cheatStatus: 'AroPrimitivesEdgenodeCheatStatus',
    createAt: 'u64'
  },
  /**
   * Lookup443: aro_primitives::types::workload::ManagerCSWorkload<sp_core::crypto::AccountId32>
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
   * Lookup444: aro_primitives::types::workload::CheatStatusProcessData
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
   * Lookup445: aro_pallet_workload::pallet::Error<T>
   **/
  AroPalletWorkloadError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'InvalidCurrentEpoch', 'InvalidCurrentEra', 'ManagerNotFound', 'ManagerNotActivate', 'ManagerBlocked', 'GenesisEpochNotAllowed', 'InvalidSubmitEpoch', 'ManagerLimitExceeded', 'NodeScoresCountExceedPerReqLimit', 'InvalidParamValueRange', 'EraLengthNotMultipleOfEpochLength', 'NodePointsCountExceedPerReqLimit', 'GenesisEraNotAllowed', 'InvalidSubmitEra', 'NodeDatasCountExceedPerReqLimit', 'NoActiveEpoch', 'NoActiveEra', 'InvalidPageNextKey']
  },
  /**
   * Lookup446: aro_primitives::types::checker::Checker<sp_core::crypto::AccountId32>
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
   * Lookup448: aro_primitives::types::checker::CheckerRegisterStatus
   **/
  AroPrimitivesCheckerCheckerRegisterStatus: {
    _enum: ['RsPendingActivate', 'RsActivate']
  },
  /**
   * Lookup449: aro_primitives::types::checker::Scheduler<sp_core::crypto::AccountId32>
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
   * Lookup450: aro_pallet_checker::pallet::Error<T>
   **/
  AroPalletCheckerError: {
    _enum: ['SuperiorNotSet', 'IllegalSuperior', 'InvalidHostAddress', 'HostAddressExceedMaxLength', 'InvalidPort', 'PortsListIsEmpty', 'PortsListExceedMaxLength', 'RegionCodeExceedMaxLength', 'InvalidRegionCode', 'CheckerAlreadyExists', 'CheckerNotFound', 'CheckerAlreadyActivate', 'CheckerNotActivateYet', 'SchedulerNotSet']
  },
  /**
   * Lookup453: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup454: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup455: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup456: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup459: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup460: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup461: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup462: frame_metadata_hash_extension::CheckMetadataHash<T>
   **/
  FrameMetadataHashExtensionCheckMetadataHash: {
    mode: 'FrameMetadataHashExtensionMode'
  },
  /**
   * Lookup463: frame_metadata_hash_extension::Mode
   **/
  FrameMetadataHashExtensionMode: {
    _enum: ['Disabled', 'Enabled']
  },
  /**
   * Lookup464: aro_runtime::Runtime
   **/
  AroRuntimeRuntime: 'Null'
};
