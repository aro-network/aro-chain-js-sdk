// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, i64, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256, MultiAddress } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (9) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (10) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (15) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (17) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (20) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (22) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSystemDispatchEventInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSystemDispatchEventInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked' | 'UpgradeAuthorized';
  }

  /** @name FrameSystemDispatchEventInfo (23) */
  interface FrameSystemDispatchEventInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (24) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (25) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (26) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly isTrie: boolean;
    readonly asTrie: SpRuntimeProvingTrieTrieError;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed' | 'Trie';
  }

  /** @name SpRuntimeModuleError (27) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (28) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (29) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (30) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name SpRuntimeProvingTrieTrieError (31) */
  interface SpRuntimeProvingTrieTrieError extends Enum {
    readonly isInvalidStateRoot: boolean;
    readonly isIncompleteDatabase: boolean;
    readonly isValueAtIncompleteKey: boolean;
    readonly isDecoderError: boolean;
    readonly isInvalidHash: boolean;
    readonly isDuplicateKey: boolean;
    readonly isExtraneousNode: boolean;
    readonly isExtraneousValue: boolean;
    readonly isExtraneousHashReference: boolean;
    readonly isInvalidChildReference: boolean;
    readonly isValueMismatch: boolean;
    readonly isIncompleteProof: boolean;
    readonly isRootMismatch: boolean;
    readonly isDecodeError: boolean;
    readonly type: 'InvalidStateRoot' | 'IncompleteDatabase' | 'ValueAtIncompleteKey' | 'DecoderError' | 'InvalidHash' | 'DuplicateKey' | 'ExtraneousNode' | 'ExtraneousValue' | 'ExtraneousHashReference' | 'InvalidChildReference' | 'ValueMismatch' | 'IncompleteProof' | 'RootMismatch' | 'DecodeError';
  }

  /** @name PalletGrandpaEvent (32) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpConsensusGrandpaAppPublic (35) */
  interface SpConsensusGrandpaAppPublic extends U8aFixed {}

  /** @name PalletBalancesEvent (36) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTotalIssuanceForced: boolean;
    readonly asTotalIssuanceForced: {
      readonly old: u128;
      readonly new_: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed' | 'TotalIssuanceForced';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (37) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (38) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletSudoEvent (39) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly old: Option<AccountId32>;
      readonly new_: AccountId32;
    } & Struct;
    readonly isKeyRemoved: boolean;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'KeyRemoved' | 'SudoAsDone';
  }

  /** @name AroPalletRegistryEvent (43) */
  interface AroPalletRegistryEvent extends Enum {
    readonly isSuperiorSet: boolean;
    readonly asSuperiorSet: AccountId32;
    readonly isRegionCreated: boolean;
    readonly asRegionCreated: {
      readonly code: Bytes;
      readonly creator: AccountId32;
      readonly createAt: u64;
    } & Struct;
    readonly isRegionUpdated: boolean;
    readonly asRegionUpdated: {
      readonly code: Bytes;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isRegionDeleted: boolean;
    readonly asRegionDeleted: {
      readonly code: Bytes;
      readonly deletor: AccountId32;
      readonly deleteAt: u64;
    } & Struct;
    readonly type: 'SuperiorSet' | 'RegionCreated' | 'RegionUpdated' | 'RegionDeleted';
  }

  /** @name AroPalletUserEvent (44) */
  interface AroPalletUserEvent extends Enum {
    readonly isSuperiorSet: boolean;
    readonly asSuperiorSet: AccountId32;
    readonly isUserCreated: boolean;
    readonly asUserCreated: {
      readonly userId: Bytes;
      readonly creator: AccountId32;
      readonly createAt: u64;
    } & Struct;
    readonly isUserEvmBound: boolean;
    readonly asUserEvmBound: {
      readonly userId: Bytes;
      readonly evmAccount: H160;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly type: 'SuperiorSet' | 'UserCreated' | 'UserEvmBound';
  }

  /** @name AroPalletEdgenodeEvent (47) */
  interface AroPalletEdgenodeEvent extends Enum {
    readonly isSuperiorSet: boolean;
    readonly asSuperiorSet: AccountId32;
    readonly isNodeRegistered: boolean;
    readonly asNodeRegistered: {
      readonly nodeId: Bytes;
      readonly deviceType: Bytes;
      readonly creator: AccountId32;
      readonly createAt: u64;
    } & Struct;
    readonly isNodeBound: boolean;
    readonly asNodeBound: {
      readonly nodeId: Bytes;
      readonly userId: Bytes;
      readonly regionCode: Bytes;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isNodeUnbound: boolean;
    readonly asNodeUnbound: {
      readonly nodeId: Bytes;
      readonly userId: Bytes;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isTrafficTypeUpdated: boolean;
    readonly asTrafficTypeUpdated: {
      readonly updatedNodesCount: u32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly type: 'SuperiorSet' | 'NodeRegistered' | 'NodeBound' | 'NodeUnbound' | 'TrafficTypeUpdated';
  }

  /** @name AroPalletManagerEvent (48) */
  interface AroPalletManagerEvent extends Enum {
    readonly isSuperiorSet: boolean;
    readonly asSuperiorSet: AccountId32;
    readonly isManagerRegistered: boolean;
    readonly asManagerRegistered: {
      readonly manager: AccountId32;
      readonly hostAddress: Bytes;
      readonly managerHttpPort: u16;
      readonly managerWsPort: u16;
      readonly chainApiPort: u16;
      readonly chainRpcPort: u16;
      readonly creator: AccountId32;
      readonly createAt: u64;
    } & Struct;
    readonly isManagerGoWorking: boolean;
    readonly asManagerGoWorking: {
      readonly manager: AccountId32;
      readonly status: AroPrimitivesManagerManagerWorkingStatus;
      readonly updateAt: u64;
    } & Struct;
    readonly isOperatorCreated: boolean;
    readonly asOperatorCreated: {
      readonly operator: AccountId32;
      readonly creator: AccountId32;
      readonly createAt: u64;
    } & Struct;
    readonly isOperatorManagerBound: boolean;
    readonly asOperatorManagerBound: {
      readonly operator: AccountId32;
      readonly manager: AccountId32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isManagerRegionSet: boolean;
    readonly asManagerRegionSet: {
      readonly manager: AccountId32;
      readonly regionCode: Bytes;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isManagerConnParamsUpdated: boolean;
    readonly asManagerConnParamsUpdated: {
      readonly manager: AccountId32;
      readonly hostAddress: Bytes;
      readonly managerHttpPort: u16;
      readonly managerWsPort: u16;
      readonly chainApiPort: u16;
      readonly chainRpcPort: u16;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isManagerActivated: boolean;
    readonly asManagerActivated: {
      readonly manager: AccountId32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isOperatorEVMAccountBound: boolean;
    readonly asOperatorEVMAccountBound: {
      readonly operator: AccountId32;
      readonly evmAccount: H160;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isOperatorBasicInfoUpdated: boolean;
    readonly asOperatorBasicInfoUpdated: {
      readonly operator: AccountId32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly type: 'SuperiorSet' | 'ManagerRegistered' | 'ManagerGoWorking' | 'OperatorCreated' | 'OperatorManagerBound' | 'ManagerRegionSet' | 'ManagerConnParamsUpdated' | 'ManagerActivated' | 'OperatorEVMAccountBound' | 'OperatorBasicInfoUpdated';
  }

  /** @name AroPrimitivesManagerManagerWorkingStatus (50) */
  interface AroPrimitivesManagerManagerWorkingStatus extends Enum {
    readonly isWsWorking: boolean;
    readonly isWsOffline: boolean;
    readonly isWsBlock: boolean;
    readonly type: 'WsWorking' | 'WsOffline' | 'WsBlock';
  }

  /** @name AroPalletWorkloadEvent (51) */
  interface AroPalletWorkloadEvent extends Enum {
    readonly isSuperiorSet: boolean;
    readonly asSuperiorSet: AccountId32;
    readonly isParamUpdated: boolean;
    readonly asParamUpdated: {
      readonly key: AroPrimitivesWorkloadParamKey;
      readonly oldValue: u32;
      readonly newValue: u32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isWorkreportsSubmitted: boolean;
    readonly asWorkreportsSubmitted: {
      readonly manager: AccountId32;
      readonly epoch: u64;
      readonly nodesCount: u32;
      readonly submittedAt: u64;
    } & Struct;
    readonly isReputationPointChangeRequestsSubmitted: boolean;
    readonly asReputationPointChangeRequestsSubmitted: {
      readonly manager: AccountId32;
      readonly era: u64;
      readonly nodesCount: u32;
      readonly submittedAt: u64;
    } & Struct;
    readonly isCheatStatusChangeRequestsSubmitted: boolean;
    readonly asCheatStatusChangeRequestsSubmitted: {
      readonly manager: AccountId32;
      readonly era: u64;
      readonly nodesCount: u32;
      readonly submittedAt: u64;
    } & Struct;
    readonly isEpochStarted: boolean;
    readonly asEpochStarted: {
      readonly epoch: u64;
      readonly startTime: u64;
      readonly startBlock: u64;
      readonly endTime: u64;
    } & Struct;
    readonly isEpochEnded: boolean;
    readonly asEpochEnded: {
      readonly epoch: u64;
      readonly startTime: u64;
      readonly startBlock: u64;
      readonly endTime: u64;
      readonly endBlock: u64;
    } & Struct;
    readonly isEraStarted: boolean;
    readonly asEraStarted: {
      readonly era: u64;
      readonly startTime: u64;
      readonly startBlock: u64;
      readonly endTime: u64;
    } & Struct;
    readonly isEraEnded: boolean;
    readonly asEraEnded: {
      readonly era: u64;
      readonly startTime: u64;
      readonly startBlock: u64;
      readonly endTime: u64;
      readonly endBlock: u64;
    } & Struct;
    readonly isWorkreportsProcessStarted: boolean;
    readonly asWorkreportsProcessStarted: {
      readonly epoch: u64;
      readonly totalNodesCount: u64;
      readonly startAt: u64;
    } & Struct;
    readonly isWorkreportsProcessEnded: boolean;
    readonly asWorkreportsProcessEnded: {
      readonly epoch: u64;
      readonly totalNodesCount: u64;
      readonly processedNodesCount: u64;
      readonly startAt: u64;
      readonly endAt: u64;
    } & Struct;
    readonly isReputationPointsProcessStarted: boolean;
    readonly asReputationPointsProcessStarted: {
      readonly era: u64;
      readonly totalNodesCount: u64;
      readonly startAt: u64;
    } & Struct;
    readonly isReputationPointsProcessEnded: boolean;
    readonly asReputationPointsProcessEnded: {
      readonly era: u64;
      readonly totalNodesCount: u64;
      readonly processedNodesCount: u64;
      readonly startAt: u64;
      readonly endAt: u64;
    } & Struct;
    readonly isCheatStatusProcessStarted: boolean;
    readonly asCheatStatusProcessStarted: {
      readonly era: u64;
      readonly totalNodesCount: u64;
      readonly startAt: u64;
    } & Struct;
    readonly isCheatStatusProcessEnded: boolean;
    readonly asCheatStatusProcessEnded: {
      readonly era: u64;
      readonly totalNodesCount: u64;
      readonly processedNodesCount: u64;
      readonly startAt: u64;
      readonly endAt: u64;
    } & Struct;
    readonly type: 'SuperiorSet' | 'ParamUpdated' | 'WorkreportsSubmitted' | 'ReputationPointChangeRequestsSubmitted' | 'CheatStatusChangeRequestsSubmitted' | 'EpochStarted' | 'EpochEnded' | 'EraStarted' | 'EraEnded' | 'WorkreportsProcessStarted' | 'WorkreportsProcessEnded' | 'ReputationPointsProcessStarted' | 'ReputationPointsProcessEnded' | 'CheatStatusProcessStarted' | 'CheatStatusProcessEnded';
  }

  /** @name AroPrimitivesWorkloadParamKey (52) */
  interface AroPrimitivesWorkloadParamKey extends Enum {
    readonly isEpochLength: boolean;
    readonly isEraLength: boolean;
    readonly isWorkreportProcessBatchSize: boolean;
    readonly isReputationPointProcessBatchSize: boolean;
    readonly isCheatStatusProcessBatchSize: boolean;
    readonly isHistoryEpochDataDepth: boolean;
    readonly isHistoryEraDataDepth: boolean;
    readonly type: 'EpochLength' | 'EraLength' | 'WorkreportProcessBatchSize' | 'ReputationPointProcessBatchSize' | 'CheatStatusProcessBatchSize' | 'HistoryEpochDataDepth' | 'HistoryEraDataDepth';
  }

  /** @name AroPalletCheckerEvent (53) */
  interface AroPalletCheckerEvent extends Enum {
    readonly isSuperiorSet: boolean;
    readonly asSuperiorSet: AccountId32;
    readonly isCheckerRegistered: boolean;
    readonly asCheckerRegistered: {
      readonly checkerAccount: AccountId32;
      readonly regionCode: Bytes;
      readonly creator: AccountId32;
      readonly createAt: u64;
    } & Struct;
    readonly isCheckerActivated: boolean;
    readonly asCheckerActivated: {
      readonly checkerAccount: AccountId32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isCheckerDeactivated: boolean;
    readonly asCheckerDeactivated: {
      readonly checkerAccount: AccountId32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isSchedulerSet: boolean;
    readonly asSchedulerSet: {
      readonly schedulerAccount: AccountId32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isSchedulerConnParamsUpdated: boolean;
    readonly asSchedulerConnParamsUpdated: {
      readonly schedulerAccount: AccountId32;
      readonly hostAddress: Bytes;
      readonly httpPort: u16;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly type: 'SuperiorSet' | 'CheckerRegistered' | 'CheckerActivated' | 'CheckerDeactivated' | 'SchedulerSet' | 'SchedulerConnParamsUpdated';
  }

  /** @name FrameSystemPhase (54) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (58) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCodeUpgradeAuthorization (62) */
  interface FrameSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name FrameSystemCall (63) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
    } & Struct;
    readonly isAuthorizeUpgradeWithoutChecks: boolean;
    readonly asAuthorizeUpgradeWithoutChecks: {
      readonly codeHash: H256;
    } & Struct;
    readonly isApplyAuthorizedUpgrade: boolean;
    readonly asApplyAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent' | 'AuthorizeUpgrade' | 'AuthorizeUpgradeWithoutChecks' | 'ApplyAuthorizedUpgrade';
  }

  /** @name FrameSystemLimitsBlockWeights (67) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (68) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (69) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (71) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (72) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (73) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (74) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly systemVersion: u8;
  }

  /** @name FrameSystemError (79) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly isMultiBlockMigrationsOngoing: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered' | 'MultiBlockMigrationsOngoing' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PalletTimestampCall (80) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (82) */
  interface SpConsensusAuraSr25519AppSr25519Public extends U8aFixed {}

  /** @name PalletGrandpaStoredState (85) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u64;
      readonly delay: u64;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u64;
      readonly delay: u64;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (86) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u64;
    readonly delay: u64;
    readonly nextAuthorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly forced: Option<u64>;
  }

  /** @name PalletGrandpaCall (90) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u64;
      readonly bestFinalizedBlockNumber: u64;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpConsensusGrandpaEquivocationProof (91) */
  interface SpConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpConsensusGrandpaEquivocation;
  }

  /** @name SpConsensusGrandpaEquivocation (92) */
  interface SpConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (93) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (94) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u64;
  }

  /** @name SpConsensusGrandpaAppSignature (95) */
  interface SpConsensusGrandpaAppSignature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (98) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (99) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u64;
  }

  /** @name SpCoreVoid (101) */
  type SpCoreVoid = Null;

  /** @name PalletGrandpaError (102) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletBalancesBalanceLock (104) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (105) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (108) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name FrameSupportTokensMiscIdAmountRuntimeHoldReason (111) */
  interface FrameSupportTokensMiscIdAmountRuntimeHoldReason extends Struct {
    readonly id: AroRuntimeRuntimeHoldReason;
    readonly amount: u128;
  }

  /** @name AroRuntimeRuntimeHoldReason (112) */
  type AroRuntimeRuntimeHoldReason = Null;

  /** @name FrameSupportTokensMiscIdAmountRuntimeFreezeReason (115) */
  interface FrameSupportTokensMiscIdAmountRuntimeFreezeReason extends Struct {
    readonly id: AroRuntimeRuntimeFreezeReason;
    readonly amount: u128;
  }

  /** @name AroRuntimeRuntimeFreezeReason (116) */
  type AroRuntimeRuntimeFreezeReason = Null;

  /** @name PalletBalancesCall (118) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly isForceAdjustTotalIssuance: boolean;
    readonly asForceAdjustTotalIssuance: {
      readonly direction: PalletBalancesAdjustmentDirection;
      readonly delta: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly value: Compact<u128>;
      readonly keepAlive: bool;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'ForceSetBalance' | 'ForceAdjustTotalIssuance' | 'Burn';
  }

  /** @name PalletBalancesAdjustmentDirection (123) */
  interface PalletBalancesAdjustmentDirection extends Enum {
    readonly isIncrease: boolean;
    readonly isDecrease: boolean;
    readonly type: 'Increase' | 'Decrease';
  }

  /** @name PalletBalancesError (124) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly isIssuanceDeactivated: boolean;
    readonly isDeltaZero: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes' | 'IssuanceDeactivated' | 'DeltaZero';
  }

  /** @name PalletTransactionPaymentReleases (126) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletSudoCall (127) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly isRemoveKey: boolean;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs' | 'RemoveKey';
  }

  /** @name AroPalletRegistryCall (129) */
  interface AroPalletRegistryCall extends Enum {
    readonly isSetSuperior: boolean;
    readonly asSetSuperior: {
      readonly newSuperior: AccountId32;
    } & Struct;
    readonly isCreateRegion: boolean;
    readonly asCreateRegion: {
      readonly code: Bytes;
      readonly name: Bytes;
      readonly description: Bytes;
    } & Struct;
    readonly isUpdateRegion: boolean;
    readonly asUpdateRegion: {
      readonly code: Bytes;
      readonly newName: Bytes;
      readonly newDescription: Bytes;
    } & Struct;
    readonly isDeleteRegion: boolean;
    readonly asDeleteRegion: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetSuperior' | 'CreateRegion' | 'UpdateRegion' | 'DeleteRegion';
  }

  /** @name AroPalletUserCall (130) */
  interface AroPalletUserCall extends Enum {
    readonly isSetSuperior: boolean;
    readonly asSetSuperior: {
      readonly newSuperior: AccountId32;
    } & Struct;
    readonly isCreateUser: boolean;
    readonly asCreateUser: {
      readonly userId: Bytes;
    } & Struct;
    readonly isBindEvmAccount: boolean;
    readonly asBindEvmAccount: {
      readonly userId: Bytes;
      readonly evmAccount: H160;
      readonly evmSignature: U8aFixed;
    } & Struct;
    readonly type: 'SetSuperior' | 'CreateUser' | 'BindEvmAccount';
  }

  /** @name AroPalletEdgenodeCall (132) */
  interface AroPalletEdgenodeCall extends Enum {
    readonly isSetSuperior: boolean;
    readonly asSetSuperior: {
      readonly newSuperior: AccountId32;
    } & Struct;
    readonly isRegisterNode: boolean;
    readonly asRegisterNode: {
      readonly nodeId: Bytes;
      readonly deviceType: Bytes;
    } & Struct;
    readonly isBindNode: boolean;
    readonly asBindNode: {
      readonly nodeId: Bytes;
      readonly userId: Bytes;
      readonly nodePubkey: Bytes;
      readonly regionCode: Bytes;
    } & Struct;
    readonly isUnbindNode: boolean;
    readonly asUnbindNode: {
      readonly nodeId: Bytes;
      readonly userId: Bytes;
    } & Struct;
    readonly isBatchUpdateTrafficType: boolean;
    readonly asBatchUpdateTrafficType: {
      readonly nodes: Vec<Bytes>;
      readonly trafficType: u32;
      readonly skipNonExistNode: bool;
    } & Struct;
    readonly type: 'SetSuperior' | 'RegisterNode' | 'BindNode' | 'UnbindNode' | 'BatchUpdateTrafficType';
  }

  /** @name AroPalletManagerCall (133) */
  interface AroPalletManagerCall extends Enum {
    readonly isSetSuperior: boolean;
    readonly asSetSuperior: {
      readonly newSuperior: AccountId32;
    } & Struct;
    readonly isRegisterManager: boolean;
    readonly asRegisterManager: {
      readonly hostAddress: Bytes;
      readonly managerHttpPort: u16;
      readonly managerWsPort: u16;
      readonly chainApiPort: u16;
      readonly chainRpcPort: u16;
    } & Struct;
    readonly isGoWorking: boolean;
    readonly isCreateOperator: boolean;
    readonly asCreateOperator: {
      readonly name: Bytes;
      readonly desc: Bytes;
      readonly website: Bytes;
    } & Struct;
    readonly isBindManager: boolean;
    readonly asBindManager: {
      readonly managerAccount: AccountId32;
      readonly managerSignature: U8aFixed;
      readonly forceUnbind: bool;
    } & Struct;
    readonly isSetManagerRegion: boolean;
    readonly asSetManagerRegion: {
      readonly regionCode: Bytes;
    } & Struct;
    readonly isUpdateManagerConnParams: boolean;
    readonly asUpdateManagerConnParams: {
      readonly hostAddress: Bytes;
      readonly managerHttpPort: u16;
      readonly managerWsPort: u16;
      readonly chainApiPort: u16;
      readonly chainRpcPort: u16;
    } & Struct;
    readonly isActivateManager: boolean;
    readonly asActivateManager: {
      readonly license: Bytes;
    } & Struct;
    readonly isBindOperatorEvmAccount: boolean;
    readonly asBindOperatorEvmAccount: {
      readonly evmAccount: H160;
      readonly signature: U8aFixed;
    } & Struct;
    readonly isUpdateOperatorBasicInfo: boolean;
    readonly asUpdateOperatorBasicInfo: {
      readonly name: Bytes;
      readonly desc: Bytes;
      readonly website: Bytes;
    } & Struct;
    readonly type: 'SetSuperior' | 'RegisterManager' | 'GoWorking' | 'CreateOperator' | 'BindManager' | 'SetManagerRegion' | 'UpdateManagerConnParams' | 'ActivateManager' | 'BindOperatorEvmAccount' | 'UpdateOperatorBasicInfo';
  }

  /** @name AroPalletWorkloadCall (134) */
  interface AroPalletWorkloadCall extends Enum {
    readonly isSetSuperior: boolean;
    readonly asSetSuperior: {
      readonly newSuperior: AccountId32;
    } & Struct;
    readonly isUpdateParam: boolean;
    readonly asUpdateParam: {
      readonly key: AroPrimitivesWorkloadParamKey;
      readonly value: u32;
    } & Struct;
    readonly isSubmitWorkreports: boolean;
    readonly asSubmitWorkreports: {
      readonly epoch: u64;
      readonly nodeScores: Vec<ITuple<[Bytes, u64]>>;
    } & Struct;
    readonly isSubmitReputationPoints: boolean;
    readonly asSubmitReputationPoints: {
      readonly era: u64;
      readonly nodePoints: Vec<ITuple<[Bytes, i64]>>;
    } & Struct;
    readonly isSubmitCheatStatus: boolean;
    readonly asSubmitCheatStatus: {
      readonly era: u64;
      readonly nodeDatas: Vec<ITuple<[Bytes, AroPrimitivesEdgenodeCheatStatus]>>;
    } & Struct;
    readonly type: 'SetSuperior' | 'UpdateParam' | 'SubmitWorkreports' | 'SubmitReputationPoints' | 'SubmitCheatStatus';
  }

  /** @name AroPrimitivesEdgenodeCheatStatus (142) */
  interface AroPrimitivesEdgenodeCheatStatus extends Enum {
    readonly isCsNormal: boolean;
    readonly isCsSuspicious: boolean;
    readonly isCsBlacklist: boolean;
    readonly type: 'CsNormal' | 'CsSuspicious' | 'CsBlacklist';
  }

  /** @name AroPalletCheckerCall (143) */
  interface AroPalletCheckerCall extends Enum {
    readonly isSetSuperior: boolean;
    readonly asSetSuperior: {
      readonly newSuperior: AccountId32;
    } & Struct;
    readonly isRegisterChecker: boolean;
    readonly asRegisterChecker: {
      readonly checkerPubkey: U8aFixed;
      readonly regionCode: Bytes;
      readonly hostAddress: Bytes;
      readonly httpPort: u16;
      readonly perfPorts: Vec<u16>;
    } & Struct;
    readonly isActivateChecker: boolean;
    readonly asActivateChecker: {
      readonly checkerAccount: AccountId32;
    } & Struct;
    readonly isDeactivateChecker: boolean;
    readonly asDeactivateChecker: {
      readonly checkerAccount: AccountId32;
    } & Struct;
    readonly isSetScheduler: boolean;
    readonly asSetScheduler: {
      readonly schedulerAccount: AccountId32;
      readonly schedulerPubkey: U8aFixed;
      readonly hostAddress: Bytes;
      readonly httpPort: u16;
    } & Struct;
    readonly isUpdateSchedulerConnParams: boolean;
    readonly asUpdateSchedulerConnParams: {
      readonly schedulerAccount: AccountId32;
      readonly hostAddress: Bytes;
      readonly httpPort: u16;
    } & Struct;
    readonly type: 'SetSuperior' | 'RegisterChecker' | 'ActivateChecker' | 'DeactivateChecker' | 'SetScheduler' | 'UpdateSchedulerConnParams';
  }

  /** @name PalletSudoError (145) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name AroPrimitivesRegistryRegion (147) */
  interface AroPrimitivesRegistryRegion extends Struct {
    readonly code: Bytes;
    readonly name: Bytes;
    readonly description: Bytes;
    readonly creator: AccountId32;
    readonly createAt: u64;
    readonly updator: AccountId32;
    readonly updateAt: u64;
  }

  /** @name AroPalletRegistryError (150) */
  interface AroPalletRegistryError extends Enum {
    readonly isSuperiorNotSet: boolean;
    readonly isIllegalSuperior: boolean;
    readonly isRegionExists: boolean;
    readonly isRegionNotFound: boolean;
    readonly isRegionCodeExceedMaxLength: boolean;
    readonly isRegionNameExceedMaxLength: boolean;
    readonly isRegionDescExceedMaxLength: boolean;
    readonly type: 'SuperiorNotSet' | 'IllegalSuperior' | 'RegionExists' | 'RegionNotFound' | 'RegionCodeExceedMaxLength' | 'RegionNameExceedMaxLength' | 'RegionDescExceedMaxLength';
  }

  /** @name AroPrimitivesUser (152) */
  interface AroPrimitivesUser extends Struct {
    readonly userId: Bytes;
    readonly evmAccount: Option<H160>;
    readonly creator: AccountId32;
    readonly createAt: u64;
    readonly updator: AccountId32;
    readonly updateAt: u64;
  }

  /** @name AroPalletUserError (154) */
  interface AroPalletUserError extends Enum {
    readonly isSuperiorNotSet: boolean;
    readonly isIllegalSuperior: boolean;
    readonly isUserExists: boolean;
    readonly isUserNotFound: boolean;
    readonly isUserIdExceedMaxLength: boolean;
    readonly isInvalidUserId: boolean;
    readonly isInvalidEvmAddress: boolean;
    readonly isInvalidSignature: boolean;
    readonly type: 'SuperiorNotSet' | 'IllegalSuperior' | 'UserExists' | 'UserNotFound' | 'UserIdExceedMaxLength' | 'InvalidUserId' | 'InvalidEvmAddress' | 'InvalidSignature';
  }

  /** @name AroPrimitivesEdgenodeNode (155) */
  interface AroPrimitivesEdgenodeNode extends Struct {
    readonly nodeId: Bytes;
    readonly nodePubkey: Bytes;
    readonly userId: Bytes;
    readonly deviceType: Bytes;
    readonly regionCode: Bytes;
    readonly trafficType: u32;
    readonly registerStatus: AroPrimitivesEdgenodeNodeRegisterStatus;
    readonly cheatStatus: AroPrimitivesEdgenodeCheatStatus;
    readonly reputationPoint: i64;
    readonly creator: AccountId32;
    readonly createAt: u64;
    readonly updator: AccountId32;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesEdgenodeNodeRegisterStatus (157) */
  interface AroPrimitivesEdgenodeNodeRegisterStatus extends Enum {
    readonly isRsPendingBind: boolean;
    readonly isRsPendingActivate: boolean;
    readonly isRsActivate: boolean;
    readonly type: 'RsPendingBind' | 'RsPendingActivate' | 'RsActivate';
  }

  /** @name AroPalletEdgenodeError (158) */
  interface AroPalletEdgenodeError extends Enum {
    readonly isSuperiorNotSet: boolean;
    readonly isIllegalSuperior: boolean;
    readonly isNodeAlreadyExists: boolean;
    readonly isNodeNotFound: boolean;
    readonly isUserNotFound: boolean;
    readonly isRegionNotFound: boolean;
    readonly isNodeAlreadyBound: boolean;
    readonly isNodeNotBoundYet: boolean;
    readonly isUserIdNotMatch: boolean;
    readonly isBatchLimitExceeded: boolean;
    readonly isNodeIdExceedMaxLength: boolean;
    readonly isNodePubkeyExceedMaxLength: boolean;
    readonly isDeviceTypeExceedMaxLength: boolean;
    readonly isUserIdExceedMaxLength: boolean;
    readonly isRegionCodeExceedMaxLength: boolean;
    readonly type: 'SuperiorNotSet' | 'IllegalSuperior' | 'NodeAlreadyExists' | 'NodeNotFound' | 'UserNotFound' | 'RegionNotFound' | 'NodeAlreadyBound' | 'NodeNotBoundYet' | 'UserIdNotMatch' | 'BatchLimitExceeded' | 'NodeIdExceedMaxLength' | 'NodePubkeyExceedMaxLength' | 'DeviceTypeExceedMaxLength' | 'UserIdExceedMaxLength' | 'RegionCodeExceedMaxLength';
  }

  /** @name AroPrimitivesManager (159) */
  interface AroPrimitivesManager extends Struct {
    readonly managerAccount: AccountId32;
    readonly operatorAccount: Option<AccountId32>;
    readonly hostAddress: Bytes;
    readonly managerHttpPort: u16;
    readonly managerWsPort: u16;
    readonly chainApiPort: u16;
    readonly chainRpcPort: u16;
    readonly regionCode: Bytes;
    readonly registerStatus: AroPrimitivesManagerManagerRegisterStatus;
    readonly workingStatus: AroPrimitivesManagerManagerWorkingStatus;
    readonly creator: AccountId32;
    readonly createAt: u64;
    readonly updator: AccountId32;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesManagerManagerRegisterStatus (161) */
  interface AroPrimitivesManagerManagerRegisterStatus extends Enum {
    readonly isRsPendingBind: boolean;
    readonly isRsPendingConfig: boolean;
    readonly isRsPendingActivate: boolean;
    readonly isRsActivate: boolean;
    readonly type: 'RsPendingBind' | 'RsPendingConfig' | 'RsPendingActivate' | 'RsActivate';
  }

  /** @name AroPrimitivesManagerOperator (162) */
  interface AroPrimitivesManagerOperator extends Struct {
    readonly operatorAccount: AccountId32;
    readonly managerAccount: Option<AccountId32>;
    readonly evmAccount: Option<H160>;
    readonly name: Bytes;
    readonly description: Bytes;
    readonly website: Bytes;
    readonly creator: AccountId32;
    readonly createAt: u64;
    readonly updator: AccountId32;
    readonly updateAt: u64;
  }

  /** @name AroPalletManagerError (164) */
  interface AroPalletManagerError extends Enum {
    readonly isSuperiorNotSet: boolean;
    readonly isIllegalSuperior: boolean;
    readonly isManagerAlreadyExists: boolean;
    readonly isManagerNotFound: boolean;
    readonly isInvalidHostAddress: boolean;
    readonly isHostAddressExceedMaxLength: boolean;
    readonly isInvalidPort: boolean;
    readonly isNotActivated: boolean;
    readonly isNoOperatorBound: boolean;
    readonly isInvalidConnectionParams: boolean;
    readonly isRegionNotSet: boolean;
    readonly isOperatorAlreadyExists: boolean;
    readonly isOperatorNameExceedMaxLength: boolean;
    readonly isOperatorDescExceedMaxLength: boolean;
    readonly isOperatorUrlExceedMaxLength: boolean;
    readonly isOperatorNotFound: boolean;
    readonly isOperatorAndManagerAccountDuplicate: boolean;
    readonly isManagerAlreadyBind: boolean;
    readonly isOperatorAndManagerAlreadyBind: boolean;
    readonly isOperatorAlreadyBindToOtherManager: boolean;
    readonly isManagerNotBind: boolean;
    readonly isManagerRegionNotAllowedToChange: boolean;
    readonly isRegionCodeExceedMaxLength: boolean;
    readonly isInvalidRegionCode: boolean;
    readonly isInvalidManagerRegisterStatus: boolean;
    readonly isManagerConfigNotDone: boolean;
    readonly isManagerAlreadyActivate: boolean;
    readonly isUnknownManagerRegisterStatus: boolean;
    readonly isInvalidManagerSignature: boolean;
    readonly isInvalidAccountFormat: boolean;
    readonly type: 'SuperiorNotSet' | 'IllegalSuperior' | 'ManagerAlreadyExists' | 'ManagerNotFound' | 'InvalidHostAddress' | 'HostAddressExceedMaxLength' | 'InvalidPort' | 'NotActivated' | 'NoOperatorBound' | 'InvalidConnectionParams' | 'RegionNotSet' | 'OperatorAlreadyExists' | 'OperatorNameExceedMaxLength' | 'OperatorDescExceedMaxLength' | 'OperatorUrlExceedMaxLength' | 'OperatorNotFound' | 'OperatorAndManagerAccountDuplicate' | 'ManagerAlreadyBind' | 'OperatorAndManagerAlreadyBind' | 'OperatorAlreadyBindToOtherManager' | 'ManagerNotBind' | 'ManagerRegionNotAllowedToChange' | 'RegionCodeExceedMaxLength' | 'InvalidRegionCode' | 'InvalidManagerRegisterStatus' | 'ManagerConfigNotDone' | 'ManagerAlreadyActivate' | 'UnknownManagerRegisterStatus' | 'InvalidManagerSignature' | 'InvalidAccountFormat';
  }

  /** @name AroPrimitivesWorkloadEpochInfo (165) */
  interface AroPrimitivesWorkloadEpochInfo extends Struct {
    readonly number: u64;
    readonly startTime: u64;
    readonly startBlock: u64;
    readonly endTime: u64;
    readonly endBlock: Option<u64>;
  }

  /** @name AroPrimitivesWorkloadEraInfo (166) */
  interface AroPrimitivesWorkloadEraInfo extends Struct {
    readonly number: u64;
    readonly startTime: u64;
    readonly startBlock: u64;
    readonly endTime: u64;
    readonly endBlock: Option<u64>;
  }

  /** @name AroPrimitivesWorkloadWorkreport (169) */
  interface AroPrimitivesWorkloadWorkreport extends Struct {
    readonly score: u64;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadNodeWorkload (173) */
  interface AroPrimitivesWorkloadNodeWorkload extends Struct {
    readonly score: u64;
    readonly createAt: u64;
  }

  /** @name AroPrimitivesWorkloadManagerWRWorkload (175) */
  interface AroPrimitivesWorkloadManagerWRWorkload extends Struct {
    readonly epoch: u64;
    readonly managerAccount: AccountId32;
    readonly reportedNodesCount: u64;
    readonly score: u64;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadWorkreportProcessData (176) */
  interface AroPrimitivesWorkloadWorkreportProcessData extends Struct {
    readonly epoch: u64;
    readonly totalNodesCount: u64;
    readonly processedNodesCount: u64;
    readonly startAt: u64;
    readonly updateAt: u64;
    readonly status: AroPrimitivesWorkloadProcessStatus;
    readonly pageNextKey: Option<Bytes>;
  }

  /** @name AroPrimitivesWorkloadProcessStatus (177) */
  interface AroPrimitivesWorkloadProcessStatus extends Enum {
    readonly isInit: boolean;
    readonly isProcessing: boolean;
    readonly isDone: boolean;
    readonly type: 'Init' | 'Processing' | 'Done';
  }

  /** @name AroPrimitivesWorkloadReputationPointChangeRequest (180) */
  interface AroPrimitivesWorkloadReputationPointChangeRequest extends Struct {
    readonly deltaPoint: i64;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadReputationDeltaPoint (184) */
  interface AroPrimitivesWorkloadReputationDeltaPoint extends Struct {
    readonly deltaPoint: i64;
    readonly createAt: u64;
  }

  /** @name AroPrimitivesWorkloadManagerRPWorkload (185) */
  interface AroPrimitivesWorkloadManagerRPWorkload extends Struct {
    readonly era: u64;
    readonly managerAccount: AccountId32;
    readonly reportedNodesCount: u64;
    readonly score: u64;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadReputationPointProcessData (186) */
  interface AroPrimitivesWorkloadReputationPointProcessData extends Struct {
    readonly era: u64;
    readonly totalNodesCount: u64;
    readonly processedNodesCount: u64;
    readonly startAt: u64;
    readonly updateAt: u64;
    readonly status: AroPrimitivesWorkloadProcessStatus;
    readonly pageNextKey: Option<Bytes>;
  }

  /** @name AroPrimitivesWorkloadCheatStatusChangeRequest (188) */
  interface AroPrimitivesWorkloadCheatStatusChangeRequest extends Struct {
    readonly cheatStatus: AroPrimitivesEdgenodeCheatStatus;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadCheatStatusResult (192) */
  interface AroPrimitivesWorkloadCheatStatusResult extends Struct {
    readonly cheatStatus: AroPrimitivesEdgenodeCheatStatus;
    readonly createAt: u64;
  }

  /** @name AroPrimitivesWorkloadManagerCSWorkload (193) */
  interface AroPrimitivesWorkloadManagerCSWorkload extends Struct {
    readonly era: u64;
    readonly managerAccount: AccountId32;
    readonly reportedNodesCount: u64;
    readonly score: u64;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadCheatStatusProcessData (194) */
  interface AroPrimitivesWorkloadCheatStatusProcessData extends Struct {
    readonly era: u64;
    readonly totalNodesCount: u64;
    readonly processedNodesCount: u64;
    readonly startAt: u64;
    readonly updateAt: u64;
    readonly status: AroPrimitivesWorkloadProcessStatus;
    readonly pageNextKey: Option<Bytes>;
  }

  /** @name AroPalletWorkloadError (195) */
  interface AroPalletWorkloadError extends Enum {
    readonly isSuperiorNotSet: boolean;
    readonly isIllegalSuperior: boolean;
    readonly isInvalidCurrentEpoch: boolean;
    readonly isInvalidCurrentEra: boolean;
    readonly isManagerNotFound: boolean;
    readonly isManagerNotActivate: boolean;
    readonly isManagerBlocked: boolean;
    readonly isGenesisEpochNotAllowed: boolean;
    readonly isInvalidSubmitEpoch: boolean;
    readonly isManagerLimitExceeded: boolean;
    readonly isNodeScoresCountExceedPerReqLimit: boolean;
    readonly isInvalidParamValueRange: boolean;
    readonly isEraLengthNotMultipleOfEpochLength: boolean;
    readonly isNodePointsCountExceedPerReqLimit: boolean;
    readonly isGenesisEraNotAllowed: boolean;
    readonly isInvalidSubmitEra: boolean;
    readonly isNodeDatasCountExceedPerReqLimit: boolean;
    readonly isNoActiveEpoch: boolean;
    readonly isNoActiveEra: boolean;
    readonly isInvalidPageNextKey: boolean;
    readonly type: 'SuperiorNotSet' | 'IllegalSuperior' | 'InvalidCurrentEpoch' | 'InvalidCurrentEra' | 'ManagerNotFound' | 'ManagerNotActivate' | 'ManagerBlocked' | 'GenesisEpochNotAllowed' | 'InvalidSubmitEpoch' | 'ManagerLimitExceeded' | 'NodeScoresCountExceedPerReqLimit' | 'InvalidParamValueRange' | 'EraLengthNotMultipleOfEpochLength' | 'NodePointsCountExceedPerReqLimit' | 'GenesisEraNotAllowed' | 'InvalidSubmitEra' | 'NodeDatasCountExceedPerReqLimit' | 'NoActiveEpoch' | 'NoActiveEra' | 'InvalidPageNextKey';
  }

  /** @name AroPrimitivesChecker (196) */
  interface AroPrimitivesChecker extends Struct {
    readonly checkerAccount: AccountId32;
    readonly checkerPubkey: U8aFixed;
    readonly regionCode: Bytes;
    readonly hostAddress: Bytes;
    readonly httpPort: u16;
    readonly perfPorts: Vec<u16>;
    readonly registerStatus: AroPrimitivesCheckerCheckerRegisterStatus;
    readonly creator: AccountId32;
    readonly createAt: u64;
    readonly updator: AccountId32;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesCheckerCheckerRegisterStatus (198) */
  interface AroPrimitivesCheckerCheckerRegisterStatus extends Enum {
    readonly isRsPendingActivate: boolean;
    readonly isRsActivate: boolean;
    readonly type: 'RsPendingActivate' | 'RsActivate';
  }

  /** @name AroPrimitivesCheckerScheduler (199) */
  interface AroPrimitivesCheckerScheduler extends Struct {
    readonly schedulerAccount: AccountId32;
    readonly schedulerPubkey: U8aFixed;
    readonly hostAddress: Bytes;
    readonly httpPort: u16;
    readonly creator: AccountId32;
    readonly createAt: u64;
    readonly updator: AccountId32;
    readonly updateAt: u64;
  }

  /** @name AroPalletCheckerError (200) */
  interface AroPalletCheckerError extends Enum {
    readonly isSuperiorNotSet: boolean;
    readonly isIllegalSuperior: boolean;
    readonly isInvalidHostAddress: boolean;
    readonly isHostAddressExceedMaxLength: boolean;
    readonly isInvalidPort: boolean;
    readonly isPortsListIsEmpty: boolean;
    readonly isPortsListExceedMaxLength: boolean;
    readonly isRegionCodeExceedMaxLength: boolean;
    readonly isInvalidRegionCode: boolean;
    readonly isCheckerAlreadyExists: boolean;
    readonly isCheckerNotFound: boolean;
    readonly isCheckerAlreadyActivate: boolean;
    readonly isCheckerNotActivateYet: boolean;
    readonly isSchedulerNotSet: boolean;
    readonly type: 'SuperiorNotSet' | 'IllegalSuperior' | 'InvalidHostAddress' | 'HostAddressExceedMaxLength' | 'InvalidPort' | 'PortsListIsEmpty' | 'PortsListExceedMaxLength' | 'RegionCodeExceedMaxLength' | 'InvalidRegionCode' | 'CheckerAlreadyExists' | 'CheckerNotFound' | 'CheckerAlreadyActivate' | 'CheckerNotActivateYet' | 'SchedulerNotSet';
  }

  /** @name SpRuntimeMultiSignature (202) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: U8aFixed;
    readonly isSr25519: boolean;
    readonly asSr25519: U8aFixed;
    readonly isEcdsa: boolean;
    readonly asEcdsa: U8aFixed;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name FrameSystemExtensionsCheckNonZeroSender (204) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (205) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (206) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (207) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (210) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (211) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (212) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name FrameMetadataHashExtensionCheckMetadataHash (213) */
  interface FrameMetadataHashExtensionCheckMetadataHash extends Struct {
    readonly mode: FrameMetadataHashExtensionMode;
  }

  /** @name FrameMetadataHashExtensionMode (214) */
  interface FrameMetadataHashExtensionMode extends Enum {
    readonly isDisabled: boolean;
    readonly isEnabled: boolean;
    readonly type: 'Disabled' | 'Enabled';
  }

  /** @name AroRuntimeRuntime (216) */
  type AroRuntimeRuntime = Null;

} // declare module
