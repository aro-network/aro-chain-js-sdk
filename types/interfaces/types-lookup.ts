// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, i64, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H160, H256, MultiAddress, Perbill, Percent } from '@polkadot/types/interfaces/runtime';
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

  /** @name PalletIndicesEvent (32) */
  interface PalletIndicesEvent extends Enum {
    readonly isIndexAssigned: boolean;
    readonly asIndexAssigned: {
      readonly who: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isIndexFreed: boolean;
    readonly asIndexFreed: {
      readonly index: u32;
    } & Struct;
    readonly isIndexFrozen: boolean;
    readonly asIndexFrozen: {
      readonly index: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen';
  }

  /** @name PalletBalancesEvent (33) */
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

  /** @name FrameSupportTokensMiscBalanceStatus (34) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (35) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletStakingPalletEvent (36) */
  interface PalletStakingPalletEvent extends Enum {
    readonly isEraPaid: boolean;
    readonly asEraPaid: {
      readonly eraIndex: u32;
      readonly validatorPayout: u128;
      readonly remainder: u128;
    } & Struct;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly stash: AccountId32;
      readonly dest: PalletStakingRewardDestination;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly staker: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashReported: boolean;
    readonly asSlashReported: {
      readonly validator: AccountId32;
      readonly fraction: Perbill;
      readonly slashEra: u32;
    } & Struct;
    readonly isOldSlashingReportDiscarded: boolean;
    readonly asOldSlashingReportDiscarded: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly isStakersElected: boolean;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isKicked: boolean;
    readonly asKicked: {
      readonly nominator: AccountId32;
      readonly stash: AccountId32;
    } & Struct;
    readonly isStakingElectionFailed: boolean;
    readonly isChilled: boolean;
    readonly asChilled: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isPayoutStarted: boolean;
    readonly asPayoutStarted: {
      readonly eraIndex: u32;
      readonly validatorStash: AccountId32;
      readonly page: u32;
      readonly next: Option<u32>;
    } & Struct;
    readonly isValidatorPrefsSet: boolean;
    readonly asValidatorPrefsSet: {
      readonly stash: AccountId32;
      readonly prefs: PalletStakingValidatorPrefs;
    } & Struct;
    readonly isSnapshotVotersSizeExceeded: boolean;
    readonly asSnapshotVotersSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isSnapshotTargetsSizeExceeded: boolean;
    readonly asSnapshotTargetsSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isForceEra: boolean;
    readonly asForceEra: {
      readonly mode: PalletStakingForcing;
    } & Struct;
    readonly isControllerBatchDeprecated: boolean;
    readonly asControllerBatchDeprecated: {
      readonly failures: u32;
    } & Struct;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'SlashReported' | 'OldSlashingReportDiscarded' | 'StakersElected' | 'Bonded' | 'Unbonded' | 'Withdrawn' | 'Kicked' | 'StakingElectionFailed' | 'Chilled' | 'PayoutStarted' | 'ValidatorPrefsSet' | 'SnapshotVotersSizeExceeded' | 'SnapshotTargetsSizeExceeded' | 'ForceEra' | 'ControllerBatchDeprecated';
  }

  /** @name PalletStakingRewardDestination (37) */
  interface PalletStakingRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletStakingValidatorPrefs (40) */
  interface PalletStakingValidatorPrefs extends Struct {
    readonly commission: Compact<Perbill>;
    readonly blocked: bool;
  }

  /** @name PalletStakingForcing (42) */
  interface PalletStakingForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PalletSessionEvent (43) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletDemocracyEvent (44) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u64;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PalletDemocracyMetadataOwner;
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
  }

  /** @name PalletDemocracyVoteThreshold (45) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (46) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletDemocracyMetadataOwner (48) */
  interface PalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name PalletCollectiveEvent (49) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isKilled: boolean;
    readonly asKilled: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isProposalCostBurned: boolean;
    readonly asProposalCostBurned: {
      readonly proposalHash: H256;
      readonly who: AccountId32;
    } & Struct;
    readonly isProposalCostReleased: boolean;
    readonly asProposalCostReleased: {
      readonly proposalHash: H256;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed' | 'Killed' | 'ProposalCostBurned' | 'ProposalCostReleased';
  }

  /** @name PalletElectionsPhragmenEvent (53) */
  interface PalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean;
    readonly asNewTerm: {
      readonly newMembers: Vec<ITuple<[AccountId32, u128]>>;
    } & Struct;
    readonly isEmptyTerm: boolean;
    readonly isElectionError: boolean;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: AccountId32;
    } & Struct;
    readonly isRenounced: boolean;
    readonly asRenounced: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: {
      readonly candidate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSeatHolderSlashed: boolean;
    readonly asSeatHolderSlashed: {
      readonly seatHolder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
  }

  /** @name PalletMembershipEvent (56) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletGrandpaEvent (57) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpConsensusGrandpaAppPublic (60) */
  interface SpConsensusGrandpaAppPublic extends U8aFixed {}

  /** @name PalletPreimageEvent (61) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletImOnlineEvent (62) */
  interface PalletImOnlineEvent extends Enum {
    readonly isHeartbeatReceived: boolean;
    readonly asHeartbeatReceived: {
      readonly authorityId: PalletImOnlineSr25519AppSr25519Public;
    } & Struct;
    readonly isAllGood: boolean;
    readonly isSomeOffline: boolean;
    readonly asSomeOffline: {
      readonly offline: Vec<ITuple<[AccountId32, SpStakingExposure]>>;
    } & Struct;
    readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
  }

  /** @name PalletImOnlineSr25519AppSr25519Public (63) */
  interface PalletImOnlineSr25519AppSr25519Public extends U8aFixed {}

  /** @name SpStakingExposure (66) */
  interface SpStakingExposure extends Struct {
    readonly total: Compact<u128>;
    readonly own: Compact<u128>;
    readonly others: Vec<SpStakingIndividualExposure>;
  }

  /** @name SpStakingIndividualExposure (69) */
  interface SpStakingIndividualExposure extends Struct {
    readonly who: AccountId32;
    readonly value: Compact<u128>;
  }

  /** @name PalletOffencesEvent (70) */
  interface PalletOffencesEvent extends Enum {
    readonly isOffence: boolean;
    readonly asOffence: {
      readonly kind: U8aFixed;
      readonly timeslot: Bytes;
    } & Struct;
    readonly type: 'Offence';
  }

  /** @name PalletSchedulerEvent (72) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u64;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u64;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isRetrySet: boolean;
    readonly asRetrySet: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
      readonly period: u64;
      readonly retries: u8;
    } & Struct;
    readonly isRetryCancelled: boolean;
    readonly asRetryCancelled: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isRetryFailed: boolean;
    readonly asRetryFailed: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'RetrySet' | 'RetryCancelled' | 'CallUnavailable' | 'PeriodicFailed' | 'RetryFailed' | 'PermanentlyOverweight';
  }

  /** @name PalletBagsListEvent (75) */
  interface PalletBagsListEvent extends Enum {
    readonly isRebagged: boolean;
    readonly asRebagged: {
      readonly who: AccountId32;
      readonly from: u64;
      readonly to: u64;
    } & Struct;
    readonly isScoreUpdated: boolean;
    readonly asScoreUpdated: {
      readonly who: AccountId32;
      readonly newScore: u64;
    } & Struct;
    readonly type: 'Rebagged' | 'ScoreUpdated';
  }

  /** @name PalletStatementEvent (76) */
  interface PalletStatementEvent extends Enum {
    readonly isNewStatement: boolean;
    readonly asNewStatement: {
      readonly account: AccountId32;
      readonly statement: SpStatementStoreStatement;
    } & Struct;
    readonly type: 'NewStatement';
  }

  /** @name SpStatementStoreStatement (77) */
  interface SpStatementStoreStatement extends Struct {
    readonly proof: Option<SpStatementStoreProof>;
    readonly decryptionKey: Option<U8aFixed>;
    readonly channel: Option<U8aFixed>;
    readonly priority: Option<u32>;
    readonly numTopics: u8;
    readonly topics: Vec<U8aFixed>;
    readonly data: Option<Bytes>;
  }

  /** @name SpStatementStoreProof (79) */
  interface SpStatementStoreProof extends Enum {
    readonly isSr25519: boolean;
    readonly asSr25519: {
      readonly signature: U8aFixed;
      readonly signer: U8aFixed;
    } & Struct;
    readonly isEd25519: boolean;
    readonly asEd25519: {
      readonly signature: U8aFixed;
      readonly signer: U8aFixed;
    } & Struct;
    readonly isSecp256k1Ecdsa: boolean;
    readonly asSecp256k1Ecdsa: {
      readonly signature: U8aFixed;
      readonly signer: U8aFixed;
    } & Struct;
    readonly isOnChain: boolean;
    readonly asOnChain: {
      readonly who: U8aFixed;
      readonly blockHash: U8aFixed;
      readonly eventIndex: u64;
    } & Struct;
    readonly type: 'Sr25519' | 'Ed25519' | 'Secp256k1Ecdsa' | 'OnChain';
  }

  /** @name PalletIdentityEvent (85) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentitiesSet: boolean;
    readonly asSubIdentitiesSet: {
      readonly main: AccountId32;
      readonly numberOfSubs: u32;
      readonly newDeposit: u128;
    } & Struct;
    readonly isSubIdentityRenamed: boolean;
    readonly asSubIdentityRenamed: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isAuthorityAdded: boolean;
    readonly asAuthorityAdded: {
      readonly authority: AccountId32;
    } & Struct;
    readonly isAuthorityRemoved: boolean;
    readonly asAuthorityRemoved: {
      readonly authority: AccountId32;
    } & Struct;
    readonly isUsernameSet: boolean;
    readonly asUsernameSet: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameQueued: boolean;
    readonly asUsernameQueued: {
      readonly who: AccountId32;
      readonly username: Bytes;
      readonly expiration: u64;
    } & Struct;
    readonly isPreapprovalExpired: boolean;
    readonly asPreapprovalExpired: {
      readonly whose: AccountId32;
    } & Struct;
    readonly isPrimaryUsernameSet: boolean;
    readonly asPrimaryUsernameSet: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isDanglingUsernameRemoved: boolean;
    readonly asDanglingUsernameRemoved: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameUnbound: boolean;
    readonly asUsernameUnbound: {
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameRemoved: boolean;
    readonly asUsernameRemoved: {
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameKilled: boolean;
    readonly asUsernameKilled: {
      readonly username: Bytes;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentitiesSet' | 'SubIdentityRenamed' | 'SubIdentityRemoved' | 'SubIdentityRevoked' | 'AuthorityAdded' | 'AuthorityRemoved' | 'UsernameSet' | 'UsernameQueued' | 'PreapprovalExpired' | 'PrimaryUsernameSet' | 'DanglingUsernameRemoved' | 'UsernameUnbound' | 'UsernameRemoved' | 'UsernameKilled';
  }

  /** @name PalletUtilityEvent (87) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletSudoEvent (88) */
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

  /** @name AroPalletRegistryEvent (90) */
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

  /** @name AroPalletUserEvent (91) */
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
    readonly isUserBatchCreated: boolean;
    readonly asUserBatchCreated: {
      readonly count: u32;
      readonly creator: AccountId32;
      readonly createAt: u64;
    } & Struct;
    readonly isUserBatchEvmBound: boolean;
    readonly asUserBatchEvmBound: {
      readonly count: u32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly type: 'SuperiorSet' | 'UserCreated' | 'UserEvmBound' | 'UserBatchCreated' | 'UserBatchEvmBound';
  }

  /** @name AroPalletEdgenodeEvent (94) */
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
    readonly isNodeBatchRegistered: boolean;
    readonly asNodeBatchRegistered: {
      readonly count: u32;
      readonly creator: AccountId32;
      readonly createAt: u64;
    } & Struct;
    readonly isNodeBatchBound: boolean;
    readonly asNodeBatchBound: {
      readonly count: u32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly isNodeBatchUnbound: boolean;
    readonly asNodeBatchUnbound: {
      readonly count: u32;
      readonly updator: AccountId32;
      readonly updateAt: u64;
    } & Struct;
    readonly type: 'SuperiorSet' | 'NodeRegistered' | 'NodeBound' | 'NodeUnbound' | 'TrafficTypeUpdated' | 'NodeBatchRegistered' | 'NodeBatchBound' | 'NodeBatchUnbound';
  }

  /** @name AroPalletManagerEvent (95) */
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

  /** @name AroPrimitivesManagerManagerWorkingStatus (97) */
  interface AroPrimitivesManagerManagerWorkingStatus extends Enum {
    readonly isWsWorking: boolean;
    readonly isWsOffline: boolean;
    readonly isWsBlock: boolean;
    readonly type: 'WsWorking' | 'WsOffline' | 'WsBlock';
  }

  /** @name AroPalletWorkloadEvent (98) */
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

  /** @name AroPrimitivesWorkloadParamKey (99) */
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

  /** @name AroPalletCheckerEvent (100) */
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

  /** @name FrameSystemPhase (101) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (104) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCodeUpgradeAuthorization (108) */
  interface FrameSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name FrameSystemCall (109) */
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

  /** @name FrameSystemLimitsBlockWeights (113) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (114) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (115) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (117) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (118) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (119) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (120) */
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

  /** @name FrameSystemError (125) */
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

  /** @name SpConsensusBabeAppPublic (128) */
  interface SpConsensusBabeAppPublic extends U8aFixed {}

  /** @name SpConsensusBabeDigestsNextConfigDescriptor (131) */
  interface SpConsensusBabeDigestsNextConfigDescriptor extends Enum {
    readonly isV1: boolean;
    readonly asV1: {
      readonly c: ITuple<[u64, u64]>;
      readonly allowedSlots: SpConsensusBabeAllowedSlots;
    } & Struct;
    readonly type: 'V1';
  }

  /** @name SpConsensusBabeAllowedSlots (133) */
  interface SpConsensusBabeAllowedSlots extends Enum {
    readonly isPrimarySlots: boolean;
    readonly isPrimaryAndSecondaryPlainSlots: boolean;
    readonly isPrimaryAndSecondaryVRFSlots: boolean;
    readonly type: 'PrimarySlots' | 'PrimaryAndSecondaryPlainSlots' | 'PrimaryAndSecondaryVRFSlots';
  }

  /** @name SpConsensusBabeDigestsPreDigest (137) */
  interface SpConsensusBabeDigestsPreDigest extends Enum {
    readonly isPrimary: boolean;
    readonly asPrimary: SpConsensusBabeDigestsPrimaryPreDigest;
    readonly isSecondaryPlain: boolean;
    readonly asSecondaryPlain: SpConsensusBabeDigestsSecondaryPlainPreDigest;
    readonly isSecondaryVRF: boolean;
    readonly asSecondaryVRF: SpConsensusBabeDigestsSecondaryVRFPreDigest;
    readonly type: 'Primary' | 'SecondaryPlain' | 'SecondaryVRF';
  }

  /** @name SpConsensusBabeDigestsPrimaryPreDigest (138) */
  interface SpConsensusBabeDigestsPrimaryPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: SpCoreSr25519VrfVrfSignature;
  }

  /** @name SpCoreSr25519VrfVrfSignature (139) */
  interface SpCoreSr25519VrfVrfSignature extends Struct {
    readonly preOutput: U8aFixed;
    readonly proof: U8aFixed;
  }

  /** @name SpConsensusBabeDigestsSecondaryPlainPreDigest (140) */
  interface SpConsensusBabeDigestsSecondaryPlainPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
  }

  /** @name SpConsensusBabeDigestsSecondaryVRFPreDigest (141) */
  interface SpConsensusBabeDigestsSecondaryVRFPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: SpCoreSr25519VrfVrfSignature;
  }

  /** @name SpConsensusBabeBabeEpochConfiguration (142) */
  interface SpConsensusBabeBabeEpochConfiguration extends Struct {
    readonly c: ITuple<[u64, u64]>;
    readonly allowedSlots: SpConsensusBabeAllowedSlots;
  }

  /** @name PalletBabeCall (144) */
  interface PalletBabeCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isPlanConfigChange: boolean;
    readonly asPlanConfigChange: {
      readonly config: SpConsensusBabeDigestsNextConfigDescriptor;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'PlanConfigChange';
  }

  /** @name SpConsensusSlotsEquivocationProof (145) */
  interface SpConsensusSlotsEquivocationProof extends Struct {
    readonly offender: SpConsensusBabeAppPublic;
    readonly slot: u64;
    readonly firstHeader: SpRuntimeHeader;
    readonly secondHeader: SpRuntimeHeader;
  }

  /** @name SpRuntimeHeader (146) */
  interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u64>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeDigest;
  }

  /** @name SpSessionMembershipProof (147) */
  interface SpSessionMembershipProof extends Struct {
    readonly session: u32;
    readonly trieNodes: Vec<Bytes>;
    readonly validatorCount: u32;
  }

  /** @name PalletBabeError (148) */
  interface PalletBabeError extends Enum {
    readonly isInvalidEquivocationProof: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly isInvalidConfiguration: boolean;
    readonly type: 'InvalidEquivocationProof' | 'InvalidKeyOwnershipProof' | 'DuplicateOffenceReport' | 'InvalidConfiguration';
  }

  /** @name PalletTimestampCall (149) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletIndicesCall (151) */
  interface PalletIndicesCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly index: u32;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isFree: boolean;
    readonly asFree: {
      readonly index: u32;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
      readonly freeze: bool;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze';
  }

  /** @name PalletIndicesError (154) */
  interface PalletIndicesError extends Enum {
    readonly isNotAssigned: boolean;
    readonly isNotOwner: boolean;
    readonly isInUse: boolean;
    readonly isNotTransfer: boolean;
    readonly isPermanent: boolean;
    readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
  }

  /** @name PalletBalancesBalanceLock (156) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (157) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (160) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name FrameSupportTokensMiscIdAmountRuntimeHoldReason (163) */
  interface FrameSupportTokensMiscIdAmountRuntimeHoldReason extends Struct {
    readonly id: AroRuntimeRuntimeHoldReason;
    readonly amount: u128;
  }

  /** @name AroRuntimeRuntimeHoldReason (164) */
  interface AroRuntimeRuntimeHoldReason extends Enum {
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveHoldReason;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveHoldReason;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly type: 'Council' | 'TechnicalCommittee' | 'Preimage';
  }

  /** @name PalletCollectiveHoldReason (165) */
  interface PalletCollectiveHoldReason extends Enum {
    readonly isProposalSubmission: boolean;
    readonly type: 'ProposalSubmission';
  }

  /** @name PalletPreimageHoldReason (167) */
  interface PalletPreimageHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly type: 'Preimage';
  }

  /** @name FrameSupportTokensMiscIdAmountRuntimeFreezeReason (170) */
  interface FrameSupportTokensMiscIdAmountRuntimeFreezeReason extends Struct {
    readonly id: AroRuntimeRuntimeFreezeReason;
    readonly amount: u128;
  }

  /** @name AroRuntimeRuntimeFreezeReason (171) */
  type AroRuntimeRuntimeFreezeReason = Null;

  /** @name PalletBalancesCall (173) */
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

  /** @name PalletBalancesAdjustmentDirection (175) */
  interface PalletBalancesAdjustmentDirection extends Enum {
    readonly isIncrease: boolean;
    readonly isDecrease: boolean;
    readonly type: 'Increase' | 'Decrease';
  }

  /** @name PalletBalancesError (176) */
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

  /** @name PalletTransactionPaymentReleases (178) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletStakingStakingLedger (179) */
  interface PalletStakingStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PalletStakingUnlockChunk>;
    readonly legacyClaimedRewards: Vec<u32>;
  }

  /** @name PalletStakingUnlockChunk (181) */
  interface PalletStakingUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletStakingNominations (185) */
  interface PalletStakingNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PalletStakingActiveEraInfo (187) */
  interface PalletStakingActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name SpStakingPagedExposureMetadata (190) */
  interface SpStakingPagedExposureMetadata extends Struct {
    readonly total: Compact<u128>;
    readonly own: Compact<u128>;
    readonly nominatorCount: u32;
    readonly pageCount: u32;
  }

  /** @name SpStakingExposurePage (192) */
  interface SpStakingExposurePage extends Struct {
    readonly pageTotal: Compact<u128>;
    readonly others: Vec<SpStakingIndividualExposure>;
  }

  /** @name PalletStakingEraRewardPoints (193) */
  interface PalletStakingEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<AccountId32, u32>;
  }

  /** @name PalletStakingUnappliedSlash (199) */
  interface PalletStakingUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporters: Vec<AccountId32>;
    readonly payout: u128;
  }

  /** @name PalletStakingSlashingSlashingSpans (203) */
  interface PalletStakingSlashingSlashingSpans extends Struct {
    readonly spanIndex: u32;
    readonly lastStart: u32;
    readonly lastNonzeroSlash: u32;
    readonly prior: Vec<u32>;
  }

  /** @name PalletStakingSlashingSpanRecord (204) */
  interface PalletStakingSlashingSpanRecord extends Struct {
    readonly slashed: u128;
    readonly paidOut: u128;
  }

  /** @name PalletStakingPalletCall (205) */
  interface PalletStakingPalletCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly value: Compact<u128>;
      readonly payee: PalletStakingRewardDestination;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly maxAdditional: Compact<u128>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isValidate: boolean;
    readonly asValidate: {
      readonly prefs: PalletStakingValidatorPrefs;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<MultiAddress>;
    } & Struct;
    readonly isChill: boolean;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly payee: PalletStakingRewardDestination;
    } & Struct;
    readonly isSetController: boolean;
    readonly isSetValidatorCount: boolean;
    readonly asSetValidatorCount: {
      readonly new_: Compact<u32>;
    } & Struct;
    readonly isIncreaseValidatorCount: boolean;
    readonly asIncreaseValidatorCount: {
      readonly additional: Compact<u32>;
    } & Struct;
    readonly isScaleValidatorCount: boolean;
    readonly asScaleValidatorCount: {
      readonly factor: Percent;
    } & Struct;
    readonly isForceNoEras: boolean;
    readonly isForceNewEra: boolean;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isForceUnstake: boolean;
    readonly asForceUnstake: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isForceNewEraAlways: boolean;
    readonly isCancelDeferredSlash: boolean;
    readonly asCancelDeferredSlash: {
      readonly era: u32;
      readonly slashIndices: Vec<u32>;
    } & Struct;
    readonly isPayoutStakers: boolean;
    readonly asPayoutStakers: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isReapStash: boolean;
    readonly asReapStash: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isKick: boolean;
    readonly asKick: {
      readonly who: Vec<MultiAddress>;
    } & Struct;
    readonly isSetStakingConfigs: boolean;
    readonly asSetStakingConfigs: {
      readonly minNominatorBond: PalletStakingPalletConfigOpU128;
      readonly minValidatorBond: PalletStakingPalletConfigOpU128;
      readonly maxNominatorCount: PalletStakingPalletConfigOpU32;
      readonly maxValidatorCount: PalletStakingPalletConfigOpU32;
      readonly chillThreshold: PalletStakingPalletConfigOpPercent;
      readonly minCommission: PalletStakingPalletConfigOpPerbill;
      readonly maxStakedRewards: PalletStakingPalletConfigOpPercent;
    } & Struct;
    readonly isChillOther: boolean;
    readonly asChillOther: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isForceApplyMinCommission: boolean;
    readonly asForceApplyMinCommission: {
      readonly validatorStash: AccountId32;
    } & Struct;
    readonly isSetMinCommission: boolean;
    readonly asSetMinCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly isPayoutStakersByPage: boolean;
    readonly asPayoutStakersByPage: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
      readonly page: u32;
    } & Struct;
    readonly isUpdatePayee: boolean;
    readonly asUpdatePayee: {
      readonly controller: AccountId32;
    } & Struct;
    readonly isDeprecateControllerBatch: boolean;
    readonly asDeprecateControllerBatch: {
      readonly controllers: Vec<AccountId32>;
    } & Struct;
    readonly isRestoreLedger: boolean;
    readonly asRestoreLedger: {
      readonly stash: AccountId32;
      readonly maybeController: Option<AccountId32>;
      readonly maybeTotal: Option<u128>;
      readonly maybeUnlocking: Option<Vec<PalletStakingUnlockChunk>>;
    } & Struct;
    readonly isWithdrawOverstake: boolean;
    readonly asWithdrawOverstake: {
      readonly stash: AccountId32;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'WithdrawUnbonded' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'SetInvulnerables' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'ReapStash' | 'Kick' | 'SetStakingConfigs' | 'ChillOther' | 'ForceApplyMinCommission' | 'SetMinCommission' | 'PayoutStakersByPage' | 'UpdatePayee' | 'DeprecateControllerBatch' | 'RestoreLedger' | 'WithdrawOverstake';
  }

  /** @name PalletStakingPalletConfigOpU128 (207) */
  interface PalletStakingPalletConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpU32 (208) */
  interface PalletStakingPalletConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpPercent (209) */
  interface PalletStakingPalletConfigOpPercent extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Percent;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpPerbill (210) */
  interface PalletStakingPalletConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletError (214) */
  interface PalletStakingPalletError extends Enum {
    readonly isNotController: boolean;
    readonly isNotStash: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isAlreadyPaired: boolean;
    readonly isEmptyTargets: boolean;
    readonly isDuplicateIndex: boolean;
    readonly isInvalidSlashIndex: boolean;
    readonly isInsufficientBond: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isNoUnlockChunk: boolean;
    readonly isFundedTarget: boolean;
    readonly isInvalidEraToReward: boolean;
    readonly isInvalidNumberOfNominations: boolean;
    readonly isNotSortedAndUnique: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isInvalidPage: boolean;
    readonly isIncorrectHistoryDepth: boolean;
    readonly isIncorrectSlashingSpans: boolean;
    readonly isBadState: boolean;
    readonly isTooManyTargets: boolean;
    readonly isBadTarget: boolean;
    readonly isCannotChillOther: boolean;
    readonly isTooManyNominators: boolean;
    readonly isTooManyValidators: boolean;
    readonly isCommissionTooLow: boolean;
    readonly isBoundNotMet: boolean;
    readonly isControllerDeprecated: boolean;
    readonly isCannotRestoreLedger: boolean;
    readonly isRewardDestinationRestricted: boolean;
    readonly isNotEnoughFunds: boolean;
    readonly isVirtualStakerNotAllowed: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashIndex' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'NotSortedAndUnique' | 'AlreadyClaimed' | 'InvalidPage' | 'IncorrectHistoryDepth' | 'IncorrectSlashingSpans' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators' | 'CommissionTooLow' | 'BoundNotMet' | 'ControllerDeprecated' | 'CannotRestoreLedger' | 'RewardDestinationRestricted' | 'NotEnoughFunds' | 'VirtualStakerNotAllowed';
  }

  /** @name AroRuntimeSessionKeys (217) */
  interface AroRuntimeSessionKeys extends Struct {
    readonly babe: SpConsensusBabeAppPublic;
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
  }

  /** @name SpAuthorityDiscoveryAppPublic (218) */
  interface SpAuthorityDiscoveryAppPublic extends U8aFixed {}

  /** @name SpCoreCryptoKeyTypeId (220) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionCall (221) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: AroRuntimeSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name PalletSessionError (222) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name FrameSupportPreimagesBounded (226) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name PalletDemocracyCall (228) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u64;
      readonly delay: u64;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: MultiAddress;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata';
  }

  /** @name PalletDemocracyConviction (229) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletCollectiveCall (231) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isKill: boolean;
    readonly asKill: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isReleaseProposalCost: boolean;
    readonly asReleaseProposalCost: {
      readonly proposalHash: H256;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close' | 'Kill' | 'ReleaseProposalCost';
  }

  /** @name PalletElectionsPhragmenCall (233) */
  interface PalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly votes: Vec<AccountId32>;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isRemoveVoter: boolean;
    readonly isSubmitCandidacy: boolean;
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>;
    } & Struct;
    readonly isRenounceCandidacy: boolean;
    readonly asRenounceCandidacy: {
      readonly renouncing: PalletElectionsPhragmenRenouncing;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
      readonly slashBond: bool;
      readonly rerunElection: bool;
    } & Struct;
    readonly isCleanDefunctVoters: boolean;
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32;
      readonly numDefunct: u32;
    } & Struct;
    readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
  }

  /** @name PalletElectionsPhragmenRenouncing (234) */
  interface PalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean;
    readonly isRunnerUp: boolean;
    readonly isCandidate: boolean;
    readonly asCandidate: Compact<u32>;
    readonly type: 'Member' | 'RunnerUp' | 'Candidate';
  }

  /** @name PalletMembershipCall (235) */
  interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: MultiAddress;
      readonly add: MultiAddress;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletGrandpaCall (236) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u64;
      readonly bestFinalizedBlockNumber: u64;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpConsensusGrandpaEquivocationProof (237) */
  interface SpConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpConsensusGrandpaEquivocation;
  }

  /** @name SpConsensusGrandpaEquivocation (238) */
  interface SpConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (239) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (240) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u64;
  }

  /** @name SpConsensusGrandpaAppSignature (241) */
  interface SpConsensusGrandpaAppSignature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (243) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (244) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u64;
  }

  /** @name PalletPreimageCall (246) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isEnsureUpdated: boolean;
    readonly asEnsureUpdated: {
      readonly hashes: Vec<H256>;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage' | 'EnsureUpdated';
  }

  /** @name PalletImOnlineCall (247) */
  interface PalletImOnlineCall extends Enum {
    readonly isHeartbeat: boolean;
    readonly asHeartbeat: {
      readonly heartbeat: PalletImOnlineHeartbeat;
      readonly signature: PalletImOnlineSr25519AppSr25519Signature;
    } & Struct;
    readonly type: 'Heartbeat';
  }

  /** @name PalletImOnlineHeartbeat (248) */
  interface PalletImOnlineHeartbeat extends Struct {
    readonly blockNumber: u64;
    readonly sessionIndex: u32;
    readonly authorityIndex: u32;
    readonly validatorsLen: u32;
  }

  /** @name PalletImOnlineSr25519AppSr25519Signature (249) */
  interface PalletImOnlineSr25519AppSr25519Signature extends U8aFixed {}

  /** @name PalletSchedulerCall (250) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u64;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isSetRetry: boolean;
    readonly asSetRetry: {
      readonly task: ITuple<[u64, u32]>;
      readonly retries: u8;
      readonly period: u64;
    } & Struct;
    readonly isSetRetryNamed: boolean;
    readonly asSetRetryNamed: {
      readonly id: U8aFixed;
      readonly retries: u8;
      readonly period: u64;
    } & Struct;
    readonly isCancelRetry: boolean;
    readonly asCancelRetry: {
      readonly task: ITuple<[u64, u32]>;
    } & Struct;
    readonly isCancelRetryNamed: boolean;
    readonly asCancelRetryNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter' | 'SetRetry' | 'SetRetryNamed' | 'CancelRetry' | 'CancelRetryNamed';
  }

  /** @name PalletBagsListCall (252) */
  interface PalletBagsListCall extends Enum {
    readonly isRebag: boolean;
    readonly asRebag: {
      readonly dislocated: MultiAddress;
    } & Struct;
    readonly isPutInFrontOf: boolean;
    readonly asPutInFrontOf: {
      readonly lighter: MultiAddress;
    } & Struct;
    readonly isPutInFrontOfOther: boolean;
    readonly asPutInFrontOfOther: {
      readonly heavier: MultiAddress;
      readonly lighter: MultiAddress;
    } & Struct;
    readonly type: 'Rebag' | 'PutInFrontOf' | 'PutInFrontOfOther';
  }

  /** @name PalletIdentityCall (253) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityLegacyIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: u64;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly isAddUsernameAuthority: boolean;
    readonly asAddUsernameAuthority: {
      readonly authority: MultiAddress;
      readonly suffix: Bytes;
      readonly allocation: u32;
    } & Struct;
    readonly isRemoveUsernameAuthority: boolean;
    readonly asRemoveUsernameAuthority: {
      readonly suffix: Bytes;
      readonly authority: MultiAddress;
    } & Struct;
    readonly isSetUsernameFor: boolean;
    readonly asSetUsernameFor: {
      readonly who: MultiAddress;
      readonly username: Bytes;
      readonly signature: Option<SpRuntimeMultiSignature>;
      readonly useAllocation: bool;
    } & Struct;
    readonly isAcceptUsername: boolean;
    readonly asAcceptUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveExpiredApproval: boolean;
    readonly asRemoveExpiredApproval: {
      readonly username: Bytes;
    } & Struct;
    readonly isSetPrimaryUsername: boolean;
    readonly asSetPrimaryUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isUnbindUsername: boolean;
    readonly asUnbindUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveUsername: boolean;
    readonly asRemoveUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isKillUsername: boolean;
    readonly asKillUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub' | 'AddUsernameAuthority' | 'RemoveUsernameAuthority' | 'SetUsernameFor' | 'AcceptUsername' | 'RemoveExpiredApproval' | 'SetPrimaryUsername' | 'UnbindUsername' | 'RemoveUsername' | 'KillUsername';
  }

  /** @name PalletIdentityLegacyIdentityInfo (254) */
  interface PalletIdentityLegacyIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityJudgement (290) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name SpRuntimeMultiSignature (292) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: U8aFixed;
    readonly isSr25519: boolean;
    readonly asSr25519: U8aFixed;
    readonly isEcdsa: boolean;
    readonly asEcdsa: U8aFixed;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name PalletUtilityCall (293) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: AroRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name AroRuntimeOriginCaller (295) */
  interface AroRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly type: 'System' | 'Council' | 'TechnicalCommittee';
  }

  /** @name FrameSupportDispatchRawOrigin (296) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (297) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PalletSudoCall (299) */
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

  /** @name AroPalletRegistryCall (300) */
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

  /** @name AroPalletUserCall (301) */
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
    readonly isCreateUserBatch: boolean;
    readonly asCreateUserBatch: {
      readonly userIds: Vec<Bytes>;
    } & Struct;
    readonly isBindEvmAccountBatch: boolean;
    readonly asBindEvmAccountBatch: {
      readonly items: Vec<ITuple<[Bytes, H160, U8aFixed]>>;
    } & Struct;
    readonly type: 'SetSuperior' | 'CreateUser' | 'BindEvmAccount' | 'CreateUserBatch' | 'BindEvmAccountBatch';
  }

  /** @name AroPalletEdgenodeCall (304) */
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
    readonly isRegisterNodeBatch: boolean;
    readonly asRegisterNodeBatch: {
      readonly nodes: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isBindNodeBatch: boolean;
    readonly asBindNodeBatch: {
      readonly bindings: Vec<ITuple<[Bytes, Bytes, Bytes, Bytes]>>;
    } & Struct;
    readonly isUnbindNodeBatch: boolean;
    readonly asUnbindNodeBatch: {
      readonly bindings: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly type: 'SetSuperior' | 'RegisterNode' | 'BindNode' | 'UnbindNode' | 'BatchUpdateTrafficType' | 'RegisterNodeBatch' | 'BindNodeBatch' | 'UnbindNodeBatch';
  }

  /** @name AroPalletManagerCall (307) */
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
      readonly license: Text;
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

  /** @name AroPalletWorkloadCall (308) */
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

  /** @name AroPrimitivesEdgenodeCheatStatus (316) */
  interface AroPrimitivesEdgenodeCheatStatus extends Enum {
    readonly isCsNormal: boolean;
    readonly isCsSuspicious: boolean;
    readonly isCsBlacklist: boolean;
    readonly type: 'CsNormal' | 'CsSuspicious' | 'CsBlacklist';
  }

  /** @name AroPalletCheckerCall (317) */
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

  /** @name SpRuntimeBlakeTwo256 (319) */
  type SpRuntimeBlakeTwo256 = Null;

  /** @name PalletDemocracyReferendumInfo (324) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u64;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (325) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u64;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u64;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (326) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (327) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (331) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (332) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u64, u128]> {}

  /** @name PalletDemocracyError (335) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name PalletCollectiveVotes (338) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u64;
  }

  /** @name PalletCollectiveError (339) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly isPrimeAccountNotMember: boolean;
    readonly isProposalActive: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'PrimeAccountNotMember' | 'ProposalActive';
  }

  /** @name PalletElectionsPhragmenSeatHolder (343) */
  interface PalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: AccountId32;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenVoter (344) */
  interface PalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<AccountId32>;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenError (345) */
  interface PalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean;
    readonly isNoVotes: boolean;
    readonly isTooManyVotes: boolean;
    readonly isMaximumVotesExceeded: boolean;
    readonly isLowBalance: boolean;
    readonly isUnableToPayBond: boolean;
    readonly isMustBeVoter: boolean;
    readonly isDuplicatedCandidate: boolean;
    readonly isTooManyCandidates: boolean;
    readonly isMemberSubmit: boolean;
    readonly isRunnerUpSubmit: boolean;
    readonly isInsufficientCandidateFunds: boolean;
    readonly isNotMember: boolean;
    readonly isInvalidWitnessData: boolean;
    readonly isInvalidVoteCount: boolean;
    readonly isInvalidRenouncing: boolean;
    readonly isInvalidReplacement: boolean;
    readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'DuplicatedCandidate' | 'TooManyCandidates' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
  }

  /** @name PalletMembershipError (347) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name PalletGrandpaStoredState (348) */
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

  /** @name PalletGrandpaStoredPendingChange (349) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u64;
    readonly delay: u64;
    readonly nextAuthorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly forced: Option<u64>;
  }

  /** @name PalletGrandpaError (351) */
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

  /** @name PalletPreimageOldRequestStatus (352) */
  interface PalletPreimageOldRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageRequestStatus (354) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly ticket: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly maybeTicket: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly maybeLen: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (359) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly isTooMany: boolean;
    readonly isTooFew: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested' | 'TooMany' | 'TooFew';
  }

  /** @name PalletImOnlineError (362) */
  interface PalletImOnlineError extends Enum {
    readonly isInvalidKey: boolean;
    readonly isDuplicatedHeartbeat: boolean;
    readonly type: 'InvalidKey' | 'DuplicatedHeartbeat';
  }

  /** @name SpStakingOffenceOffenceDetails (365) */
  interface SpStakingOffenceOffenceDetails extends Struct {
    readonly offender: ITuple<[AccountId32, SpStakingExposure]>;
    readonly reporters: Vec<AccountId32>;
  }

  /** @name PalletSchedulerScheduled (369) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
    readonly origin: AroRuntimeOriginCaller;
  }

  /** @name PalletSchedulerRetryConfig (371) */
  interface PalletSchedulerRetryConfig extends Struct {
    readonly totalRetries: u8;
    readonly remaining: u8;
    readonly period: u64;
  }

  /** @name PalletSchedulerError (372) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletBagsListListNode (373) */
  interface PalletBagsListListNode extends Struct {
    readonly id: AccountId32;
    readonly prev: Option<AccountId32>;
    readonly next: Option<AccountId32>;
    readonly bagUpper: u64;
    readonly score: u64;
  }

  /** @name PalletBagsListListBag (374) */
  interface PalletBagsListListBag extends Struct {
    readonly head: Option<AccountId32>;
    readonly tail: Option<AccountId32>;
  }

  /** @name PalletBagsListError (376) */
  interface PalletBagsListError extends Enum {
    readonly isList: boolean;
    readonly asList: PalletBagsListListListError;
    readonly type: 'List';
  }

  /** @name PalletBagsListListListError (377) */
  interface PalletBagsListListListError extends Enum {
    readonly isDuplicate: boolean;
    readonly isNotHeavier: boolean;
    readonly isNotInSameBag: boolean;
    readonly isNodeNotFound: boolean;
    readonly type: 'Duplicate' | 'NotHeavier' | 'NotInSameBag' | 'NodeNotFound';
  }

  /** @name PalletIdentityRegistration (378) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityLegacyIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (386) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: u64;
  }

  /** @name PalletIdentityAuthorityProperties (389) */
  interface PalletIdentityAuthorityProperties extends Struct {
    readonly accountId: AccountId32;
    readonly allocation: u32;
  }

  /** @name PalletIdentityUsernameInformation (390) */
  interface PalletIdentityUsernameInformation extends Struct {
    readonly owner: AccountId32;
    readonly provider: PalletIdentityProvider;
  }

  /** @name PalletIdentityProvider (391) */
  interface PalletIdentityProvider extends Enum {
    readonly isAllocation: boolean;
    readonly isAuthorityDeposit: boolean;
    readonly asAuthorityDeposit: u128;
    readonly isSystem: boolean;
    readonly type: 'Allocation' | 'AuthorityDeposit' | 'System';
  }

  /** @name PalletIdentityError (393) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly isInvalidSuffix: boolean;
    readonly isNotUsernameAuthority: boolean;
    readonly isNoAllocation: boolean;
    readonly isInvalidSignature: boolean;
    readonly isRequiresSignature: boolean;
    readonly isInvalidUsername: boolean;
    readonly isUsernameTaken: boolean;
    readonly isNoUsername: boolean;
    readonly isNotExpired: boolean;
    readonly isTooEarly: boolean;
    readonly isNotUnbinding: boolean;
    readonly isAlreadyUnbinding: boolean;
    readonly isInsufficientPrivileges: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed' | 'InvalidSuffix' | 'NotUsernameAuthority' | 'NoAllocation' | 'InvalidSignature' | 'RequiresSignature' | 'InvalidUsername' | 'UsernameTaken' | 'NoUsername' | 'NotExpired' | 'TooEarly' | 'NotUnbinding' | 'AlreadyUnbinding' | 'InsufficientPrivileges';
  }

  /** @name PalletUtilityError (394) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletSudoError (395) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name AroPrimitivesRegistryRegion (397) */
  interface AroPrimitivesRegistryRegion extends Struct {
    readonly code: Bytes;
    readonly name: Bytes;
    readonly description: Bytes;
    readonly creator: AccountId32;
    readonly createAt: u64;
    readonly updator: AccountId32;
    readonly updateAt: u64;
  }

  /** @name AroPalletRegistryError (400) */
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

  /** @name AroPrimitivesUser (402) */
  interface AroPrimitivesUser extends Struct {
    readonly userId: Bytes;
    readonly evmAccount: Option<H160>;
    readonly creator: AccountId32;
    readonly createAt: u64;
    readonly updator: AccountId32;
    readonly updateAt: u64;
  }

  /** @name AroPalletUserError (404) */
  interface AroPalletUserError extends Enum {
    readonly isSuperiorNotSet: boolean;
    readonly isIllegalSuperior: boolean;
    readonly isUserExists: boolean;
    readonly isUserNotFound: boolean;
    readonly isUserIdExceedMaxLength: boolean;
    readonly isInvalidUserId: boolean;
    readonly isInvalidEvmAddress: boolean;
    readonly isInvalidSignature: boolean;
    readonly isTooManyUsersInBatch: boolean;
    readonly type: 'SuperiorNotSet' | 'IllegalSuperior' | 'UserExists' | 'UserNotFound' | 'UserIdExceedMaxLength' | 'InvalidUserId' | 'InvalidEvmAddress' | 'InvalidSignature' | 'TooManyUsersInBatch';
  }

  /** @name AroPrimitivesEdgenodeNode (405) */
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

  /** @name AroPrimitivesEdgenodeNodeRegisterStatus (407) */
  interface AroPrimitivesEdgenodeNodeRegisterStatus extends Enum {
    readonly isRsPendingBind: boolean;
    readonly isRsPendingActivate: boolean;
    readonly isRsActivate: boolean;
    readonly type: 'RsPendingBind' | 'RsPendingActivate' | 'RsActivate';
  }

  /** @name AroPalletEdgenodeError (408) */
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

  /** @name AroPrimitivesManager (409) */
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

  /** @name AroPrimitivesManagerManagerRegisterStatus (410) */
  interface AroPrimitivesManagerManagerRegisterStatus extends Enum {
    readonly isRsPendingBind: boolean;
    readonly isRsPendingConfig: boolean;
    readonly isRsPendingActivate: boolean;
    readonly isRsActivate: boolean;
    readonly type: 'RsPendingBind' | 'RsPendingConfig' | 'RsPendingActivate' | 'RsActivate';
  }

  /** @name AroPrimitivesManagerOperator (411) */
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

  /** @name AroPalletManagerError (413) */
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
    readonly isInvalidLicenseEncoding: boolean;
    readonly isInvalidLicenseLength: boolean;
    readonly isInvalidLicense: boolean;
    readonly type: 'SuperiorNotSet' | 'IllegalSuperior' | 'ManagerAlreadyExists' | 'ManagerNotFound' | 'InvalidHostAddress' | 'HostAddressExceedMaxLength' | 'InvalidPort' | 'NotActivated' | 'NoOperatorBound' | 'InvalidConnectionParams' | 'RegionNotSet' | 'OperatorAlreadyExists' | 'OperatorNameExceedMaxLength' | 'OperatorDescExceedMaxLength' | 'OperatorUrlExceedMaxLength' | 'OperatorNotFound' | 'OperatorAndManagerAccountDuplicate' | 'ManagerAlreadyBind' | 'OperatorAndManagerAlreadyBind' | 'OperatorAlreadyBindToOtherManager' | 'ManagerNotBind' | 'ManagerRegionNotAllowedToChange' | 'RegionCodeExceedMaxLength' | 'InvalidRegionCode' | 'InvalidManagerRegisterStatus' | 'ManagerConfigNotDone' | 'ManagerAlreadyActivate' | 'UnknownManagerRegisterStatus' | 'InvalidManagerSignature' | 'InvalidAccountFormat' | 'InvalidLicenseEncoding' | 'InvalidLicenseLength' | 'InvalidLicense';
  }

  /** @name AroPrimitivesWorkloadEpochInfo (414) */
  interface AroPrimitivesWorkloadEpochInfo extends Struct {
    readonly number: u64;
    readonly startTime: u64;
    readonly startBlock: u64;
    readonly endTime: u64;
    readonly endBlock: Option<u64>;
  }

  /** @name AroPrimitivesWorkloadEraInfo (415) */
  interface AroPrimitivesWorkloadEraInfo extends Struct {
    readonly number: u64;
    readonly startTime: u64;
    readonly startBlock: u64;
    readonly endTime: u64;
    readonly endBlock: Option<u64>;
  }

  /** @name AroPrimitivesWorkloadWorkreport (418) */
  interface AroPrimitivesWorkloadWorkreport extends Struct {
    readonly score: u64;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadNodeWorkload (422) */
  interface AroPrimitivesWorkloadNodeWorkload extends Struct {
    readonly score: u64;
    readonly createAt: u64;
  }

  /** @name AroPrimitivesWorkloadManagerWRWorkload (424) */
  interface AroPrimitivesWorkloadManagerWRWorkload extends Struct {
    readonly epoch: u64;
    readonly managerAccount: AccountId32;
    readonly reportedNodesCount: u64;
    readonly score: u64;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadWorkreportProcessData (425) */
  interface AroPrimitivesWorkloadWorkreportProcessData extends Struct {
    readonly epoch: u64;
    readonly totalNodesCount: u64;
    readonly processedNodesCount: u64;
    readonly startAt: u64;
    readonly updateAt: u64;
    readonly status: AroPrimitivesWorkloadProcessStatus;
    readonly pageNextKey: Option<Bytes>;
  }

  /** @name AroPrimitivesWorkloadProcessStatus (426) */
  interface AroPrimitivesWorkloadProcessStatus extends Enum {
    readonly isInit: boolean;
    readonly isProcessing: boolean;
    readonly isDone: boolean;
    readonly type: 'Init' | 'Processing' | 'Done';
  }

  /** @name AroPrimitivesWorkloadReputationPointChangeRequest (430) */
  interface AroPrimitivesWorkloadReputationPointChangeRequest extends Struct {
    readonly deltaPoint: i64;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadReputationDeltaPoint (434) */
  interface AroPrimitivesWorkloadReputationDeltaPoint extends Struct {
    readonly deltaPoint: i64;
    readonly createAt: u64;
  }

  /** @name AroPrimitivesWorkloadManagerRPWorkload (435) */
  interface AroPrimitivesWorkloadManagerRPWorkload extends Struct {
    readonly era: u64;
    readonly managerAccount: AccountId32;
    readonly reportedNodesCount: u64;
    readonly score: u64;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadReputationPointProcessData (436) */
  interface AroPrimitivesWorkloadReputationPointProcessData extends Struct {
    readonly era: u64;
    readonly totalNodesCount: u64;
    readonly processedNodesCount: u64;
    readonly startAt: u64;
    readonly updateAt: u64;
    readonly status: AroPrimitivesWorkloadProcessStatus;
    readonly pageNextKey: Option<Bytes>;
  }

  /** @name AroPrimitivesWorkloadCheatStatusChangeRequest (438) */
  interface AroPrimitivesWorkloadCheatStatusChangeRequest extends Struct {
    readonly cheatStatus: AroPrimitivesEdgenodeCheatStatus;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadCheatStatusResult (442) */
  interface AroPrimitivesWorkloadCheatStatusResult extends Struct {
    readonly cheatStatus: AroPrimitivesEdgenodeCheatStatus;
    readonly createAt: u64;
  }

  /** @name AroPrimitivesWorkloadManagerCSWorkload (443) */
  interface AroPrimitivesWorkloadManagerCSWorkload extends Struct {
    readonly era: u64;
    readonly managerAccount: AccountId32;
    readonly reportedNodesCount: u64;
    readonly score: u64;
    readonly createAt: u64;
    readonly updateAt: u64;
  }

  /** @name AroPrimitivesWorkloadCheatStatusProcessData (444) */
  interface AroPrimitivesWorkloadCheatStatusProcessData extends Struct {
    readonly era: u64;
    readonly totalNodesCount: u64;
    readonly processedNodesCount: u64;
    readonly startAt: u64;
    readonly updateAt: u64;
    readonly status: AroPrimitivesWorkloadProcessStatus;
    readonly pageNextKey: Option<Bytes>;
  }

  /** @name AroPalletWorkloadError (445) */
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

  /** @name AroPrimitivesChecker (446) */
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

  /** @name AroPrimitivesCheckerCheckerRegisterStatus (448) */
  interface AroPrimitivesCheckerCheckerRegisterStatus extends Enum {
    readonly isRsPendingActivate: boolean;
    readonly isRsActivate: boolean;
    readonly type: 'RsPendingActivate' | 'RsActivate';
  }

  /** @name AroPrimitivesCheckerScheduler (449) */
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

  /** @name AroPalletCheckerError (450) */
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

  /** @name FrameSystemExtensionsCheckNonZeroSender (453) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (454) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (455) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (456) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (459) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (460) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (461) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name FrameMetadataHashExtensionCheckMetadataHash (462) */
  interface FrameMetadataHashExtensionCheckMetadataHash extends Struct {
    readonly mode: FrameMetadataHashExtensionMode;
  }

  /** @name FrameMetadataHashExtensionMode (463) */
  interface FrameMetadataHashExtensionMode extends Enum {
    readonly isDisabled: boolean;
    readonly isEnabled: boolean;
    readonly type: 'Disabled' | 'Enabled';
  }

  /** @name AroRuntimeRuntime (464) */
  type AroRuntimeRuntime = Null;

} // declare module
