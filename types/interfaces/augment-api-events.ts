// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, H256, Perbill } from '@polkadot/types/interfaces/runtime';
import type { AroPrimitivesManagerManagerWorkingStatus, AroPrimitivesWorkloadParamKey, FrameSupportTokensMiscBalanceStatus, FrameSystemDispatchEventInfo, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletDemocracyVoteThreshold, PalletImOnlineSr25519AppSr25519Public, PalletStakingForcing, PalletStakingRewardDestination, PalletStakingValidatorPrefs, SpConsensusGrandpaAppPublic, SpRuntimeDispatchError, SpStakingExposure, SpStatementStoreStatement } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32, free: u128 }>;
      /**
       * Some amount was burned from an account.
       **/
      Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was increased by `amount`, creating a credit to be balanced.
       **/
      Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was minted into an account.
       **/
      Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was decreased by `amount`, creating a debt to be balanced.
       **/
      Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was restored into an account.
       **/
      Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was suspended from an account (it can be restored later).
       **/
      Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * The `TotalIssuance` was forcefully changed.
       **/
      TotalIssuanceForced: AugmentedEvent<ApiType, [old: u128, new_: u128], { old: u128, new_: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unlocked.
       **/
      Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was upgraded.
       **/
      Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    checker: {
      /**
       * The specific checker has been activated
       **/
      CheckerActivated: AugmentedEvent<ApiType, [checkerAccount: AccountId32, updator: AccountId32, updateAt: u64], { checkerAccount: AccountId32, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific checker has been deactivated
       **/
      CheckerDeactivated: AugmentedEvent<ApiType, [checkerAccount: AccountId32, updator: AccountId32, updateAt: u64], { checkerAccount: AccountId32, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific checkers has been registered
       **/
      CheckerRegistered: AugmentedEvent<ApiType, [checkerAccount: AccountId32, regionCode: Bytes, creator: AccountId32, createAt: u64], { checkerAccount: AccountId32, regionCode: Bytes, creator: AccountId32, createAt: u64 }>;
      /**
       * The scheduler connection params are updated
       **/
      SchedulerConnParamsUpdated: AugmentedEvent<ApiType, [schedulerAccount: AccountId32, hostAddress: Bytes, httpPort: u16, updator: AccountId32, updateAt: u64], { schedulerAccount: AccountId32, hostAddress: Bytes, httpPort: u16, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific scheduler is set
       **/
      SchedulerSet: AugmentedEvent<ApiType, [schedulerAccount: AccountId32, updator: AccountId32, updateAt: u64], { schedulerAccount: AccountId32, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific account is set to superior
       **/
      SuperiorSet: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proposal was killed.
       **/
      Killed: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Some cost for storing a proposal was burned.
       **/
      ProposalCostBurned: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32], { proposalHash: H256, who: AccountId32 }>;
      /**
       * Some cost for storing a proposal was released.
       **/
      ProposalCostReleased: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32], { proposalHash: H256, who: AccountId32 }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      /**
       * A proposal_hash has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * An account has delegated their vote to another account.
       **/
      Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32, target: AccountId32 }>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * Metadata for a proposal or a referendum has been cleared.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * Metadata for a proposal or a referendum has been set.
       **/
      MetadataSet: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * Metadata has been transferred to new owner.
       **/
      MetadataTransferred: AugmentedEvent<ApiType, [prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256], { prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * A proposal has been rejected by referendum.
       **/
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal has been approved by referendum.
       **/
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal got canceled.
       **/
      ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], { propIndex: u32 }>;
      /**
       * A motion has been proposed by a public account.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has seconded a proposal
       **/
      Seconded: AugmentedEvent<ApiType, [seconder: AccountId32, propIndex: u32], { seconder: AccountId32, propIndex: u32 }>;
      /**
       * A referendum has begun.
       **/
      Started: AugmentedEvent<ApiType, [refIndex: u32, threshold: PalletDemocracyVoteThreshold], { refIndex: u32, threshold: PalletDemocracyVoteThreshold }>;
      /**
       * A public proposal has been tabled for referendum vote.
       **/
      Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * An external proposal has been vetoed.
       **/
      Vetoed: AugmentedEvent<ApiType, [who: AccountId32, proposalHash: H256, until: u64], { who: AccountId32, proposalHash: H256, until: u64 }>;
      /**
       * An account has voted in a referendum
       **/
      Voted: AugmentedEvent<ApiType, [voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote], { voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    edgeNode: {
      /**
       * Batch nodes have been bound
       **/
      NodeBatchBound: AugmentedEvent<ApiType, [count: u32, updator: AccountId32, updateAt: u64], { count: u32, updator: AccountId32, updateAt: u64 }>;
      /**
       * Batch nodes have been registered
       **/
      NodeBatchRegistered: AugmentedEvent<ApiType, [count: u32, creator: AccountId32, createAt: u64], { count: u32, creator: AccountId32, createAt: u64 }>;
      /**
       * Batch nodes have been unbound
       **/
      NodeBatchUnbound: AugmentedEvent<ApiType, [count: u32, updator: AccountId32, updateAt: u64], { count: u32, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific node has been bound to an user account
       **/
      NodeBound: AugmentedEvent<ApiType, [nodeId: Bytes, userId: Bytes, regionCode: Bytes, updator: AccountId32, updateAt: u64], { nodeId: Bytes, userId: Bytes, regionCode: Bytes, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific node has been registered
       **/
      NodeRegistered: AugmentedEvent<ApiType, [nodeId: Bytes, deviceType: Bytes, creator: AccountId32, createAt: u64], { nodeId: Bytes, deviceType: Bytes, creator: AccountId32, createAt: u64 }>;
      /**
       * The specific node has been unbound from an user account
       **/
      NodeUnbound: AugmentedEvent<ApiType, [nodeId: Bytes, userId: Bytes, updator: AccountId32, updateAt: u64], { nodeId: Bytes, userId: Bytes, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific account is set to superior
       **/
      SuperiorSet: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Traffic type of batch nodes have been updated
       **/
      TrafficTypeUpdated: AugmentedEvent<ApiType, [updatedNodesCount: u32, updator: AccountId32, updateAt: u64], { updatedNodesCount: u32, updator: AccountId32, updateAt: u64 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    elections: {
      /**
       * A candidate was slashed by amount due to failing to obtain a seat as member or
       * runner-up.
       * 
       * Note that old members and runners-up are also candidates.
       **/
      CandidateSlashed: AugmentedEvent<ApiType, [candidate: AccountId32, amount: u128], { candidate: AccountId32, amount: u128 }>;
      /**
       * Internal error happened while trying to perform election.
       **/
      ElectionError: AugmentedEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      EmptyTerm: AugmentedEvent<ApiType, []>;
      /**
       * A member has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      MemberKicked: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * A new term with new_members. This indicates that enough candidates existed to run
       * the election, not that enough have has been elected. The inner value must be examined
       * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
       * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
       * begin with.
       **/
      NewTerm: AugmentedEvent<ApiType, [newMembers: Vec<ITuple<[AccountId32, u128]>>], { newMembers: Vec<ITuple<[AccountId32, u128]>> }>;
      /**
       * Someone has renounced their candidacy.
       **/
      Renounced: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A seat holder was slashed by amount by being forcefully removed from the set.
       **/
      SeatHolderSlashed: AugmentedEvent<ApiType, [seatHolder: AccountId32, amount: u128], { seatHolder: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>], { authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>> }>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A username authority was added.
       **/
      AuthorityAdded: AugmentedEvent<ApiType, [authority: AccountId32], { authority: AccountId32 }>;
      /**
       * A username authority was removed.
       **/
      AuthorityRemoved: AugmentedEvent<ApiType, [authority: AccountId32], { authority: AccountId32 }>;
      /**
       * A dangling username (as in, a username corresponding to an account that has removed its
       * identity) has been removed.
       **/
      DanglingUsernameRemoved: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes], { who: AccountId32, username: Bytes }>;
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A queued username passed its expiration without being claimed and was removed.
       **/
      PreapprovalExpired: AugmentedEvent<ApiType, [whose: AccountId32], { whose: AccountId32 }>;
      /**
       * A username was set as a primary and can be looked up from `who`.
       **/
      PrimaryUsernameSet: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes], { who: AccountId32, username: Bytes }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * An account's sub-identities were set (in bulk).
       **/
      SubIdentitiesSet: AugmentedEvent<ApiType, [main: AccountId32, numberOfSubs: u32, newDeposit: u128], { main: AccountId32, numberOfSubs: u32, newDeposit: u128 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A given sub-account's associated name was changed by its super-identity.
       **/
      SubIdentityRenamed: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32], { sub: AccountId32, main: AccountId32 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A username has been killed.
       **/
      UsernameKilled: AugmentedEvent<ApiType, [username: Bytes], { username: Bytes }>;
      /**
       * A username was queued, but `who` must accept it prior to `expiration`.
       **/
      UsernameQueued: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes, expiration: u64], { who: AccountId32, username: Bytes, expiration: u64 }>;
      /**
       * A username has been removed.
       **/
      UsernameRemoved: AugmentedEvent<ApiType, [username: Bytes], { username: Bytes }>;
      /**
       * A username was set for `who`.
       **/
      UsernameSet: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes], { who: AccountId32, username: Bytes }>;
      /**
       * A username has been unbound.
       **/
      UsernameUnbound: AugmentedEvent<ApiType, [username: Bytes], { username: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId`.
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [authorityId: PalletImOnlineSr25519AppSr25519Public], { authorityId: PalletImOnlineSr25519AppSr25519Public }>;
      /**
       * At the end of the session, at least one validator was found to be offline.
       **/
      SomeOffline: AugmentedEvent<ApiType, [offline: Vec<ITuple<[AccountId32, SpStakingExposure]>>], { offline: Vec<ITuple<[AccountId32, SpStakingExposure]>> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    indices: {
      /**
       * A account index was assigned.
       **/
      IndexAssigned: AugmentedEvent<ApiType, [who: AccountId32, index: u32], { who: AccountId32, index: u32 }>;
      /**
       * A account index has been freed up (unassigned).
       **/
      IndexFreed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A account index has been frozen to its current account ID.
       **/
      IndexFrozen: AugmentedEvent<ApiType, [index: u32, who: AccountId32], { index: u32, who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    manager: {
      /**
       * Manager activated
       **/
      ManagerActivated: AugmentedEvent<ApiType, [manager: AccountId32, updator: AccountId32, updateAt: u64], { manager: AccountId32, updator: AccountId32, updateAt: u64 }>;
      /**
       * Manager connection params updated
       **/
      ManagerConnParamsUpdated: AugmentedEvent<ApiType, [manager: AccountId32, hostAddress: Bytes, managerHttpPort: u16, managerWsPort: u16, chainApiPort: u16, chainRpcPort: u16, updator: AccountId32, updateAt: u64], { manager: AccountId32, hostAddress: Bytes, managerHttpPort: u16, managerWsPort: u16, chainApiPort: u16, chainRpcPort: u16, updator: AccountId32, updateAt: u64 }>;
      /**
       * Manager status changed
       **/
      ManagerGoWorking: AugmentedEvent<ApiType, [manager: AccountId32, status: AroPrimitivesManagerManagerWorkingStatus, updateAt: u64], { manager: AccountId32, status: AroPrimitivesManagerManagerWorkingStatus, updateAt: u64 }>;
      /**
       * Manager region set
       **/
      ManagerRegionSet: AugmentedEvent<ApiType, [manager: AccountId32, regionCode: Bytes, updator: AccountId32, updateAt: u64], { manager: AccountId32, regionCode: Bytes, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific manager has been registered
       **/
      ManagerRegistered: AugmentedEvent<ApiType, [manager: AccountId32, hostAddress: Bytes, managerHttpPort: u16, managerWsPort: u16, chainApiPort: u16, chainRpcPort: u16, creator: AccountId32, createAt: u64], { manager: AccountId32, hostAddress: Bytes, managerHttpPort: u16, managerWsPort: u16, chainApiPort: u16, chainRpcPort: u16, creator: AccountId32, createAt: u64 }>;
      /**
       * Operator basic info updated
       **/
      OperatorBasicInfoUpdated: AugmentedEvent<ApiType, [operator: AccountId32, updator: AccountId32, updateAt: u64], { operator: AccountId32, updator: AccountId32, updateAt: u64 }>;
      /**
       * Operator created
       **/
      OperatorCreated: AugmentedEvent<ApiType, [operator: AccountId32, creator: AccountId32, createAt: u64], { operator: AccountId32, creator: AccountId32, createAt: u64 }>;
      /**
       * Operator EVM account bound
       **/
      OperatorEVMAccountBound: AugmentedEvent<ApiType, [operator: AccountId32, evmAccount: H160, updator: AccountId32, updateAt: u64], { operator: AccountId32, evmAccount: H160, updator: AccountId32, updateAt: u64 }>;
      /**
       * Operator and manager bound
       **/
      OperatorManagerBound: AugmentedEvent<ApiType, [operator: AccountId32, manager: AccountId32, updator: AccountId32, updateAt: u64], { operator: AccountId32, manager: AccountId32, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific account is set to superior
       **/
      SuperiorSet: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes.
       * \[kind, timeslot\].
       **/
      Offence: AugmentedEvent<ApiType, [kind: U8aFixed, timeslot: Bytes], { kind: U8aFixed, timeslot: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    registry: {
      /**
       * The specific region has been created
       **/
      RegionCreated: AugmentedEvent<ApiType, [code: Bytes, creator: AccountId32, createAt: u64], { code: Bytes, creator: AccountId32, createAt: u64 }>;
      /**
       * The specific region has been deleted
       **/
      RegionDeleted: AugmentedEvent<ApiType, [code: Bytes, deletor: AccountId32, deleteAt: u64], { code: Bytes, deletor: AccountId32, deleteAt: u64 }>;
      /**
       * The specific region has been updated
       **/
      RegionUpdated: AugmentedEvent<ApiType, [code: Bytes, updator: AccountId32, updateAt: u64], { code: Bytes, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific account is set to superior
       **/
      SuperiorSet: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallUnavailable: AugmentedEvent<ApiType, [task: ITuple<[u64, u32]>, id: Option<U8aFixed>], { task: ITuple<[u64, u32]>, id: Option<U8aFixed> }>;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u64, index: u32], { when: u64, index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u64, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u64, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The given task was unable to be renewed since the agenda is full at that block.
       **/
      PeriodicFailed: AugmentedEvent<ApiType, [task: ITuple<[u64, u32]>, id: Option<U8aFixed>], { task: ITuple<[u64, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task can never be executed since it is overweight.
       **/
      PermanentlyOverweight: AugmentedEvent<ApiType, [task: ITuple<[u64, u32]>, id: Option<U8aFixed>], { task: ITuple<[u64, u32]>, id: Option<U8aFixed> }>;
      /**
       * Cancel a retry configuration for some task.
       **/
      RetryCancelled: AugmentedEvent<ApiType, [task: ITuple<[u64, u32]>, id: Option<U8aFixed>], { task: ITuple<[u64, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task was unable to be retried since the agenda is full at that block or there
       * was not enough weight to reschedule it.
       **/
      RetryFailed: AugmentedEvent<ApiType, [task: ITuple<[u64, u32]>, id: Option<U8aFixed>], { task: ITuple<[u64, u32]>, id: Option<U8aFixed> }>;
      /**
       * Set a retry configuration for some task.
       **/
      RetrySet: AugmentedEvent<ApiType, [task: ITuple<[u64, u32]>, id: Option<U8aFixed>, period: u64, retries: u8], { task: ITuple<[u64, u32]>, id: Option<U8aFixed>, period: u64, retries: u8 }>;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u64, index: u32], { when: u64, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    staking: {
      /**
       * An account has bonded this amount. \[stash, amount\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      Bonded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * An account has stopped participating as either a validator or nominator.
       **/
      Chilled: AugmentedEvent<ApiType, [stash: AccountId32], { stash: AccountId32 }>;
      /**
       * Report of a controller batch deprecation.
       **/
      ControllerBatchDeprecated: AugmentedEvent<ApiType, [failures: u32], { failures: u32 }>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       **/
      EraPaid: AugmentedEvent<ApiType, [eraIndex: u32, validatorPayout: u128, remainder: u128], { eraIndex: u32, validatorPayout: u128, remainder: u128 }>;
      /**
       * A new force era mode was set.
       **/
      ForceEra: AugmentedEvent<ApiType, [mode: PalletStakingForcing], { mode: PalletStakingForcing }>;
      /**
       * A nominator has been kicked from a validator.
       **/
      Kicked: AugmentedEvent<ApiType, [nominator: AccountId32, stash: AccountId32], { nominator: AccountId32, stash: AccountId32 }>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed.
       **/
      OldSlashingReportDiscarded: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * A Page of stakers rewards are getting paid. `next` is `None` if all pages are claimed.
       **/
      PayoutStarted: AugmentedEvent<ApiType, [eraIndex: u32, validatorStash: AccountId32, page: u32, next: Option<u32>], { eraIndex: u32, validatorStash: AccountId32, page: u32, next: Option<u32> }>;
      /**
       * The nominator has been rewarded by this amount to this destination.
       **/
      Rewarded: AugmentedEvent<ApiType, [stash: AccountId32, dest: PalletStakingRewardDestination, amount: u128], { stash: AccountId32, dest: PalletStakingRewardDestination, amount: u128 }>;
      /**
       * A staker (validator or nominator) has been slashed by the given amount.
       **/
      Slashed: AugmentedEvent<ApiType, [staker: AccountId32, amount: u128], { staker: AccountId32, amount: u128 }>;
      /**
       * A slash for the given validator, for the given percentage of their stake, at the given
       * era as been reported.
       **/
      SlashReported: AugmentedEvent<ApiType, [validator: AccountId32, fraction: Perbill, slashEra: u32], { validator: AccountId32, fraction: Perbill, slashEra: u32 }>;
      /**
       * Targets size limit reached.
       **/
      SnapshotTargetsSizeExceeded: AugmentedEvent<ApiType, [size_: u32], { size_: u32 }>;
      /**
       * Voters size limit reached.
       **/
      SnapshotVotersSizeExceeded: AugmentedEvent<ApiType, [size_: u32], { size_: u32 }>;
      /**
       * A new set of stakers was elected.
       **/
      StakersElected: AugmentedEvent<ApiType, []>;
      /**
       * The election failed. No new era is planned.
       **/
      StakingElectionFailed: AugmentedEvent<ApiType, []>;
      /**
       * An account has unbonded this amount.
       **/
      Unbonded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * A validator has set their preferences.
       **/
      ValidatorPrefsSet: AugmentedEvent<ApiType, [stash: AccountId32, prefs: PalletStakingValidatorPrefs], { stash: AccountId32, prefs: PalletStakingValidatorPrefs }>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue.
       **/
      Withdrawn: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    statement: {
      /**
       * A new statement is submitted
       **/
      NewStatement: AugmentedEvent<ApiType, [account: AccountId32, statement: SpStatementStoreStatement], { account: AccountId32, statement: SpStatementStoreStatement }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The sudo key has been updated.
       **/
      KeyChanged: AugmentedEvent<ApiType, [old: Option<AccountId32>, new_: AccountId32], { old: Option<AccountId32>, new_: AccountId32 }>;
      /**
       * The key was permanently removed.
       **/
      KeyRemoved: AugmentedEvent<ApiType, []>;
      /**
       * A sudo call just took place.
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A [sudo_as](Pallet::sudo_as) call just took place.
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSystemDispatchEventInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSystemDispatchEventInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSystemDispatchEventInfo], { dispatchInfo: FrameSystemDispatchEventInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * An upgrade was authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256, checkVersion: bool], { codeHash: H256, checkVersion: bool }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proposal was killed.
       **/
      Killed: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Some cost for storing a proposal was burned.
       **/
      ProposalCostBurned: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32], { proposalHash: H256, who: AccountId32 }>;
      /**
       * Some cost for storing a proposal was released.
       **/
      ProposalCostReleased: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32], { proposalHash: H256, who: AccountId32 }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    user: {
      /**
       * The specific account is set to superior
       **/
      SuperiorSet: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Batch Users created
       **/
      UserBatchCreated: AugmentedEvent<ApiType, [count: u32, creator: AccountId32, createAt: u64], { count: u32, creator: AccountId32, createAt: u64 }>;
      /**
       * Batch Users and EVM address are bound
       **/
      UserBatchEvmBound: AugmentedEvent<ApiType, [count: u32, updator: AccountId32, updateAt: u64], { count: u32, updator: AccountId32, updateAt: u64 }>;
      /**
       * The specific user has been created
       **/
      UserCreated: AugmentedEvent<ApiType, [userId: Bytes, creator: AccountId32, createAt: u64], { userId: Bytes, creator: AccountId32, createAt: u64 }>;
      /**
       * User and EVM address are bound
       **/
      UserEvmBound: AugmentedEvent<ApiType, [userId: Bytes, evmAccount: H160, updator: AccountId32, updateAt: u64], { userId: Bytes, evmAccount: H160, updator: AccountId32, updateAt: u64 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    voterList: {
      /**
       * Moved an account from one bag to another.
       **/
      Rebagged: AugmentedEvent<ApiType, [who: AccountId32, from: u64, to: u64], { who: AccountId32, from: u64, to: u64 }>;
      /**
       * Updated the score of some account to the given amount.
       **/
      ScoreUpdated: AugmentedEvent<ApiType, [who: AccountId32, newScore: u64], { who: AccountId32, newScore: u64 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    workload: {
      /**
       * Cheat status change requests submitted
       **/
      CheatStatusChangeRequestsSubmitted: AugmentedEvent<ApiType, [manager: AccountId32, era: u64, nodesCount: u32, submittedAt: u64], { manager: AccountId32, era: u64, nodesCount: u32, submittedAt: u64 }>;
      /**
       * CheatStatus Process Ended
       **/
      CheatStatusProcessEnded: AugmentedEvent<ApiType, [era: u64, totalNodesCount: u64, processedNodesCount: u64, startAt: u64, endAt: u64], { era: u64, totalNodesCount: u64, processedNodesCount: u64, startAt: u64, endAt: u64 }>;
      /**
       * CheatStatus Process Started
       **/
      CheatStatusProcessStarted: AugmentedEvent<ApiType, [era: u64, totalNodesCount: u64, startAt: u64], { era: u64, totalNodesCount: u64, startAt: u64 }>;
      /**
       * Epoch Ended
       **/
      EpochEnded: AugmentedEvent<ApiType, [epoch: u64, startTime: u64, startBlock: u64, endTime: u64, endBlock: u64], { epoch: u64, startTime: u64, startBlock: u64, endTime: u64, endBlock: u64 }>;
      /**
       * Epoch Started
       **/
      EpochStarted: AugmentedEvent<ApiType, [epoch: u64, startTime: u64, startBlock: u64, endTime: u64], { epoch: u64, startTime: u64, startBlock: u64, endTime: u64 }>;
      /**
       * Era Ended
       **/
      EraEnded: AugmentedEvent<ApiType, [era: u64, startTime: u64, startBlock: u64, endTime: u64, endBlock: u64], { era: u64, startTime: u64, startBlock: u64, endTime: u64, endBlock: u64 }>;
      /**
       * Era Started
       **/
      EraStarted: AugmentedEvent<ApiType, [era: u64, startTime: u64, startBlock: u64, endTime: u64], { era: u64, startTime: u64, startBlock: u64, endTime: u64 }>;
      /**
       * Param updated
       **/
      ParamUpdated: AugmentedEvent<ApiType, [key: AroPrimitivesWorkloadParamKey, oldValue: u32, newValue: u32, updator: AccountId32, updateAt: u64], { key: AroPrimitivesWorkloadParamKey, oldValue: u32, newValue: u32, updator: AccountId32, updateAt: u64 }>;
      /**
       * Reputation point change requests submitted
       **/
      ReputationPointChangeRequestsSubmitted: AugmentedEvent<ApiType, [manager: AccountId32, era: u64, nodesCount: u32, submittedAt: u64], { manager: AccountId32, era: u64, nodesCount: u32, submittedAt: u64 }>;
      /**
       * ReputationPoints Process Ended
       **/
      ReputationPointsProcessEnded: AugmentedEvent<ApiType, [era: u64, totalNodesCount: u64, processedNodesCount: u64, startAt: u64, endAt: u64], { era: u64, totalNodesCount: u64, processedNodesCount: u64, startAt: u64, endAt: u64 }>;
      /**
       * ReputationPoints Process Started
       **/
      ReputationPointsProcessStarted: AugmentedEvent<ApiType, [era: u64, totalNodesCount: u64, startAt: u64], { era: u64, totalNodesCount: u64, startAt: u64 }>;
      /**
       * The specific account is set to superior
       **/
      SuperiorSet: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Workreports Process Ended
       **/
      WorkreportsProcessEnded: AugmentedEvent<ApiType, [epoch: u64, totalNodesCount: u64, processedNodesCount: u64, startAt: u64, endAt: u64], { epoch: u64, totalNodesCount: u64, processedNodesCount: u64, startAt: u64, endAt: u64 }>;
      /**
       * Workreports Process Started
       **/
      WorkreportsProcessStarted: AugmentedEvent<ApiType, [epoch: u64, totalNodesCount: u64, startAt: u64], { epoch: u64, totalNodesCount: u64, startAt: u64 }>;
      /**
       * Workreports submitted
       **/
      WorkreportsSubmitted: AugmentedEvent<ApiType, [manager: AccountId32, epoch: u64, nodesCount: u32, submittedAt: u64], { manager: AccountId32, epoch: u64, nodesCount: u32, submittedAt: u64 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
