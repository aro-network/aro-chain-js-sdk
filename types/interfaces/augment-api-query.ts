// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { BTreeMap, Bytes, Option, Vec, bool, u128, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { AroPrimitivesChecker, AroPrimitivesCheckerScheduler, AroPrimitivesEdgenodeNode, AroPrimitivesManager, AroPrimitivesManagerOperator, AroPrimitivesRegistryRegion, AroPrimitivesUser, AroPrimitivesWorkloadCheatStatusChangeRequest, AroPrimitivesWorkloadCheatStatusProcessData, AroPrimitivesWorkloadCheatStatusResult, AroPrimitivesWorkloadEpochInfo, AroPrimitivesWorkloadEraInfo, AroPrimitivesWorkloadManagerCSWorkload, AroPrimitivesWorkloadManagerRPWorkload, AroPrimitivesWorkloadManagerWRWorkload, AroPrimitivesWorkloadNodeWorkload, AroPrimitivesWorkloadParamKey, AroPrimitivesWorkloadReputationDeltaPoint, AroPrimitivesWorkloadReputationPointChangeRequest, AroPrimitivesWorkloadReputationPointProcessData, AroPrimitivesWorkloadWorkreport, AroPrimitivesWorkloadWorkreportProcessData, FrameSupportDispatchPerDispatchClassWeight, FrameSupportTokensMiscIdAmountRuntimeFreezeReason, FrameSupportTokensMiscIdAmountRuntimeHoldReason, FrameSystemAccountInfo, FrameSystemCodeUpgradeAuthorization, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReserveData, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletTransactionPaymentReleases, SpConsensusAuraSr25519AppSr25519Public, SpConsensusGrandpaAppPublic, SpRuntimeDigest } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    aura: {
      /**
       * The current authority set.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current slot of this block.
       * 
       * This will be set in `on_initialize`.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    balances: {
      /**
       * The Balances pallet example of storing the balance of an account.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
       * }
       * ```
       * 
       * You can also store the balance of an account in the `System` pallet.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = System
       * }
       * ```
       * 
       * But this comes with tradeoffs, storing account balances in the system pallet stores
       * `frame_system` data alongside the account data contrary to storing account balances in the
       * `Balances` pallet, which uses a `StorageMap` to store balances data only.
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Freeze locks on account balances.
       **/
      freezes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<FrameSupportTokensMiscIdAmountRuntimeFreezeReason>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Holds on account balances.
       **/
      holds: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<FrameSupportTokensMiscIdAmountRuntimeHoldReason>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units of outstanding deactivated balance in the system.
       **/
      inactiveIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       * 
       * Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/`
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       * 
       * Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/`
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    checker: {
      checkers: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AroPrimitivesChecker>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      schedulerDB: AugmentedQuery<ApiType, () => Observable<Option<AroPrimitivesCheckerScheduler>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Storage items for this pallet.
       **/
      superior: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    edgeNode: {
      /**
       * Storage items for this pallet.
       **/
      nodes: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<AroPrimitivesEdgenodeNode>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      superior: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      /**
       * The current list of authorities.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<PalletGrandpaStoredPendingChange>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * This is only used for validating equivocation proofs. An equivocation proof must
       * contains a key-ownership proof for a given session, therefore we need a way to tie
       * together sessions and GRANDPA set ids, i.e. we need to validate that a validator
       * was the owner of a given key on a given session, and what the active set ID was
       * during that session.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u64, u64]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    manager: {
      /**
       * Storage items for this pallet.
       **/
      managers: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AroPrimitivesManager>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      operators: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AroPrimitivesManagerOperator>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      superior: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    registry: {
      /**
       * Storage items for this pallet.
       **/
      regions: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<AroPrimitivesRegistryRegion>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      superior: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * `Some` if a code upgrade has been authorized.
       **/
      authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemCodeUpgradeAuthorization>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<H256>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       * 
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u64, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Whether all inherents have been applied.
       **/
      inherentsApplied: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      /**
       * Whether the timestamp has been updated in this block.
       * 
       * This value is updated to `true` upon successful submission of a timestamp by a node.
       * It is then checked at the end of each block execution in the `on_finalize` hook.
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    user: {
      superior: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Storage items for this pallet.
       **/
      users: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<AroPrimitivesUser>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    workload: {
      cheatStatusChangeRequests: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Option<BTreeMap<AccountId32, AroPrimitivesWorkloadCheatStatusChangeRequest>>>, [u64, Bytes]> & QueryableStorageEntry<ApiType, [u64, Bytes]>;
      cheatStatusChangeRequestsNodesCount: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      cheatStatusProcessHistory: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<AroPrimitivesWorkloadCheatStatusProcessData>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      cheatStatusProcessHistoryCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      cheatStatusResults: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Option<AroPrimitivesWorkloadCheatStatusResult>>, [u64, Bytes]> & QueryableStorageEntry<ApiType, [u64, Bytes]>;
      cheatStatusResultsCount: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      currentEpoch: AugmentedQuery<ApiType, () => Observable<Option<AroPrimitivesWorkloadEpochInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      currentEra: AugmentedQuery<ApiType, () => Observable<Option<AroPrimitivesWorkloadEraInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      historyEpochs: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<AroPrimitivesWorkloadEpochInfo>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      historyEras: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<AroPrimitivesWorkloadEraInfo>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      lastCheatStatusProcessData: AugmentedQuery<ApiType, () => Observable<Option<AroPrimitivesWorkloadCheatStatusProcessData>>, []> & QueryableStorageEntry<ApiType, []>;
      lastReputationPointProcessData: AugmentedQuery<ApiType, () => Observable<Option<AroPrimitivesWorkloadReputationPointProcessData>>, []> & QueryableStorageEntry<ApiType, []>;
      lastWorkreportProcessData: AugmentedQuery<ApiType, () => Observable<Option<AroPrimitivesWorkloadWorkreportProcessData>>, []> & QueryableStorageEntry<ApiType, []>;
      managerCSWorkloads: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<AroPrimitivesWorkloadManagerCSWorkload>>, [u64, AccountId32]> & QueryableStorageEntry<ApiType, [u64, AccountId32]>;
      managerCSWorkloadsCount: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      managerRPWorkloads: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<AroPrimitivesWorkloadManagerRPWorkload>>, [u64, AccountId32]> & QueryableStorageEntry<ApiType, [u64, AccountId32]>;
      managerRPWorkloadsCount: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      managerWRWorkloads: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<AroPrimitivesWorkloadManagerWRWorkload>>, [u64, AccountId32]> & QueryableStorageEntry<ApiType, [u64, AccountId32]>;
      managerWRWorkloadsCount: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      nodeWorkloads: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Option<AroPrimitivesWorkloadNodeWorkload>>, [u64, Bytes]> & QueryableStorageEntry<ApiType, [u64, Bytes]>;
      nodeWorkloadsCount: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      params: AugmentedQuery<ApiType, (arg: AroPrimitivesWorkloadParamKey | 'EpochLength' | 'EraLength' | 'WorkreportProcessBatchSize' | 'ReputationPointProcessBatchSize' | 'CheatStatusProcessBatchSize' | 'HistoryEpochDataDepth' | 'HistoryEraDataDepth' | number | Uint8Array) => Observable<u32>, [AroPrimitivesWorkloadParamKey]> & QueryableStorageEntry<ApiType, [AroPrimitivesWorkloadParamKey]>;
      pendingNextEpoch: AugmentedQuery<ApiType, () => Observable<Option<AroPrimitivesWorkloadEpochInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      pendingNextEra: AugmentedQuery<ApiType, () => Observable<Option<AroPrimitivesWorkloadEraInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      reputationDeltaPoints: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Option<AroPrimitivesWorkloadReputationDeltaPoint>>, [u64, Bytes]> & QueryableStorageEntry<ApiType, [u64, Bytes]>;
      reputationDeltaPointsCount: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      reputationPointChangeRequests: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Option<BTreeMap<AccountId32, AroPrimitivesWorkloadReputationPointChangeRequest>>>, [u64, Bytes]> & QueryableStorageEntry<ApiType, [u64, Bytes]>;
      reputationPointChangeRequestsNodesCount: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      reputationPointsProcessHistory: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<AroPrimitivesWorkloadReputationPointProcessData>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      reputationPointsProcessHistoryCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Storage items for this pallet.
       **/
      superior: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      workreports: AugmentedQuery<ApiType, (arg1: u64 | AnyNumber | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Option<BTreeMap<AccountId32, AroPrimitivesWorkloadWorkreport>>>, [u64, Bytes]> & QueryableStorageEntry<ApiType, [u64, Bytes]>;
      workreportsNodesCount: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      workreportsProcessHistory: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<AroPrimitivesWorkloadWorkreportProcessData>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      workreportsProcessHistoryCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  } // AugmentedQueries
} // declare module
