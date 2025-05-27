// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, H256 } from '@polkadot/types/interfaces/runtime';
import type { AroPrimitivesManagerManagerWorkingStatus, AroPrimitivesWorkloadParamKey, FrameSupportTokensMiscBalanceStatus, FrameSystemDispatchEventInfo, SpConsensusGrandpaAppPublic, SpRuntimeDispatchError } from '@polkadot/types/lookup';

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
    edgeNode: {
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
