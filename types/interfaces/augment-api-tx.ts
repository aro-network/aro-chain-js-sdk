// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Bytes, Compact, U8aFixed, Vec, bool, i64, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256, MultiAddress } from '@polkadot/types/interfaces/runtime';
import type { AroPrimitivesEdgenodeCheatStatus, AroPrimitivesWorkloadParamKey, PalletBalancesAdjustmentDirection, SpConsensusGrandpaEquivocationProof, SpCoreVoid, SpWeightsWeightV2Weight } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    balances: {
      /**
       * Burn the specified liquid free balance from the origin account.
       * 
       * If the origin's account ends up below the existential deposit as a result
       * of the burn and `keep_alive` is false, the account will be reaped.
       * 
       * Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
       * this `burn` operation will reduce total issuance by the amount _burned_.
       **/
      burn: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, bool]>;
      /**
       * Adjust the total issuance in a saturating way.
       * 
       * Can only be called by root and always needs a positive `delta`.
       * 
       * # Example
       **/
      forceAdjustTotalIssuance: AugmentedSubmittable<(direction: PalletBalancesAdjustmentDirection | 'Increase' | 'Decrease' | number | Uint8Array, delta: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletBalancesAdjustmentDirection, Compact<u128>]>;
      /**
       * Set the regular balance of a given account.
       * 
       * The dispatch origin for this call is `root`.
       **/
      forceSetBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Exactly as `transfer_allow_death`, except the origin must be root and the source account
       * may be specified.
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Unreserve some balance from a user by force.
       * 
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * Transfer the entire transferable balance from the caller account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the account has, causing the sender account to be killed (false), or
       * transfer everything except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
       * kill the origin account.
       * 
       * 99% of the time you want [`transfer_allow_death`] instead.
       * 
       * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Upgrade a specified account.
       * 
       * - `origin`: Must be `Signed`.
       * - `who`: The account to be upgraded.
       * 
       * This will waive the transaction fee if at least all but 10% of the accounts needed to
       * be upgraded. (We let some not have to be upgraded just in order to allow for the
       * possibility of churn).
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    checker: {
      activateChecker: AugmentedSubmittable<(checkerAccount: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      deactivateChecker: AugmentedSubmittable<(checkerAccount: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      registerChecker: AugmentedSubmittable<(checkerPubkey: U8aFixed | string | Uint8Array, regionCode: Bytes | string | Uint8Array, hostAddress: Bytes | string | Uint8Array, httpPort: u16 | AnyNumber | Uint8Array, perfPorts: Vec<u16> | (u16 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [U8aFixed, Bytes, Bytes, u16, Vec<u16>]>;
      setScheduler: AugmentedSubmittable<(schedulerAccount: AccountId32 | string | Uint8Array, schedulerPubkey: U8aFixed | string | Uint8Array, hostAddress: Bytes | string | Uint8Array, httpPort: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, U8aFixed, Bytes, u16]>;
      setSuperior: AugmentedSubmittable<(newSuperior: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      updateSchedulerConnParams: AugmentedSubmittable<(schedulerAccount: AccountId32 | string | Uint8Array, hostAddress: Bytes | string | Uint8Array, httpPort: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Bytes, u16]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    edgeNode: {
      batchUpdateTrafficType: AugmentedSubmittable<(nodes: Vec<Bytes> | (Bytes | string | Uint8Array)[], trafficType: u32 | AnyNumber | Uint8Array, skipNonExistNode: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>, u32, bool]>;
      bindNode: AugmentedSubmittable<(nodeId: Bytes | string | Uint8Array, userId: Bytes | string | Uint8Array, nodePubkey: Bytes | string | Uint8Array, regionCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes, Bytes, Bytes]>;
      registerNode: AugmentedSubmittable<(nodeId: Bytes | string | Uint8Array, deviceType: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      setSuperior: AugmentedSubmittable<(newSuperior: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      unbindNode: AugmentedSubmittable<(nodeId: Bytes | string | Uint8Array, userId: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    grandpa: {
      /**
       * Note that the current authority set of the GRANDPA finality gadget has stalled.
       * 
       * This will trigger a forced authority set change at the beginning of the next session, to
       * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
       * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
       * The block production rate (which may be slowed down because of finality lagging) should
       * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
       * authority will start voting on top of `best_finalized_block_number` for new finalized
       * blocks. `best_finalized_block_number` should be the highest of the latest finalized
       * block of all validators of the new authority set.
       * 
       * Only callable by root.
       **/
      noteStalled: AugmentedSubmittable<(delay: u64 | AnyNumber | Uint8Array, bestFinalizedBlockNumber: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u64]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpCoreVoid | null) => SubmittableExtrinsic<ApiType>, [SpConsensusGrandpaEquivocationProof, SpCoreVoid]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       * 
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpCoreVoid | null) => SubmittableExtrinsic<ApiType>, [SpConsensusGrandpaEquivocationProof, SpCoreVoid]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    manager: {
      activateManager: AugmentedSubmittable<(license: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      bindManager: AugmentedSubmittable<(managerAccount: AccountId32 | string | Uint8Array, managerSignature: U8aFixed | string | Uint8Array, forceUnbind: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, U8aFixed, bool]>;
      bindOperatorEvmAccount: AugmentedSubmittable<(evmAccount: H160 | string | Uint8Array, signature: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, U8aFixed]>;
      createOperator: AugmentedSubmittable<(name: Bytes | string | Uint8Array, desc: Bytes | string | Uint8Array, website: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes, Bytes]>;
      goWorking: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      registerManager: AugmentedSubmittable<(hostAddress: Bytes | string | Uint8Array, managerHttpPort: u16 | AnyNumber | Uint8Array, managerWsPort: u16 | AnyNumber | Uint8Array, chainApiPort: u16 | AnyNumber | Uint8Array, chainRpcPort: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u16, u16, u16, u16]>;
      setManagerRegion: AugmentedSubmittable<(regionCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      setSuperior: AugmentedSubmittable<(newSuperior: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      updateManagerConnParams: AugmentedSubmittable<(hostAddress: Bytes | string | Uint8Array, managerHttpPort: u16 | AnyNumber | Uint8Array, managerWsPort: u16 | AnyNumber | Uint8Array, chainApiPort: u16 | AnyNumber | Uint8Array, chainRpcPort: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u16, u16, u16, u16]>;
      updateOperatorBasicInfo: AugmentedSubmittable<(name: Bytes | string | Uint8Array, desc: Bytes | string | Uint8Array, website: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    registry: {
      createRegion: AugmentedSubmittable<(code: Bytes | string | Uint8Array, name: Bytes | string | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes, Bytes]>;
      deleteRegion: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      setSuperior: AugmentedSubmittable<(newSuperior: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      updateRegion: AugmentedSubmittable<(code: Bytes | string | Uint8Array, newName: Bytes | string | Uint8Array, newDescription: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      /**
       * Permanently removes the sudo key.
       * 
       * **This cannot be un-done.**
       **/
      removeKey: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
       * key.
       **/
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
       * 
       * If the authorization required a version check, this call will ensure the spec name
       * remains unchanged and that the spec version has increased.
       * 
       * Depending on the runtime's `OnSetCode` configuration, this function may directly apply
       * the new `code` in the same block or attempt to schedule the upgrade.
       * 
       * All origins are allowed.
       **/
      applyAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
       * later.
       * 
       * This call requires Root origin.
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
       * later.
       * 
       * WARNING: This authorizes an upgrade that will take place without any safety checks, for
       * example that the spec name remains the same and that the version number increases. Not
       * recommended for normal use. Use `authorize_upgrade` instead.
       * 
       * This call requires Root origin.
       **/
      authorizeUpgradeWithoutChecks: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * Kill some items from storage.
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * Make some on-chain remark.
       * 
       * Can be executed by every `origin`.
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code.
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * Note that runtime upgrades will not run if this is called with a not-increasing spec
       * version!
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * [`Config::MinimumPeriod`].
       * 
       * The dispatch origin for this call must be _None_.
       * 
       * This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
       * that changing the complexity of this call could result exhausting the resources in a
       * block to execute any other calls.
       * 
       * ## Complexity
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    user: {
      bindEvmAccount: AugmentedSubmittable<(userId: Bytes | string | Uint8Array, evmAccount: H160 | string | Uint8Array, evmSignature: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, H160, U8aFixed]>;
      createUser: AugmentedSubmittable<(userId: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      setSuperior: AugmentedSubmittable<(newSuperior: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    workload: {
      setSuperior: AugmentedSubmittable<(newSuperior: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      submitCheatStatus: AugmentedSubmittable<(era: u64 | AnyNumber | Uint8Array, nodeDatas: Vec<ITuple<[Bytes, AroPrimitivesEdgenodeCheatStatus]>> | ([Bytes | string | Uint8Array, AroPrimitivesEdgenodeCheatStatus | 'CsNormal' | 'CsSuspicious' | 'CsBlacklist' | number | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [u64, Vec<ITuple<[Bytes, AroPrimitivesEdgenodeCheatStatus]>>]>;
      submitReputationPoints: AugmentedSubmittable<(era: u64 | AnyNumber | Uint8Array, nodePoints: Vec<ITuple<[Bytes, i64]>> | ([Bytes | string | Uint8Array, i64 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [u64, Vec<ITuple<[Bytes, i64]>>]>;
      submitWorkreports: AugmentedSubmittable<(epoch: u64 | AnyNumber | Uint8Array, nodeScores: Vec<ITuple<[Bytes, u64]>> | ([Bytes | string | Uint8Array, u64 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [u64, Vec<ITuple<[Bytes, u64]>>]>;
      updateParam: AugmentedSubmittable<(key: AroPrimitivesWorkloadParamKey | 'EpochLength' | 'EraLength' | 'WorkreportProcessBatchSize' | 'ReputationPointProcessBatchSize' | 'CheatStatusProcessBatchSize' | 'HistoryEpochDataDepth' | 'HistoryEraDataDepth' | number | Uint8Array, value: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AroPrimitivesWorkloadParamKey, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
