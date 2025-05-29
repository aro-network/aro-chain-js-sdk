// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    balances: {
      /**
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * The delta cannot be zero.
       **/
      DeltaZero: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      Expendability: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * The issuance cannot be modified since it is already deactivated.
       **/
      IssuanceDeactivated: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of freezes exceed `MaxFreezes`.
       **/
      TooManyFreezes: AugmentedError<ApiType>;
      /**
       * Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
       **/
      TooManyHolds: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed `MaxReserves`.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    checker: {
      /**
       * Checker already activate
       **/
      CheckerAlreadyActivate: AugmentedError<ApiType>;
      /**
       * Checker already exist
       **/
      CheckerAlreadyExists: AugmentedError<ApiType>;
      /**
       * Checker not activate yet
       **/
      CheckerNotActivateYet: AugmentedError<ApiType>;
      /**
       * Checker not found
       **/
      CheckerNotFound: AugmentedError<ApiType>;
      /**
       * Host address exceed max length
       **/
      HostAddressExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Tx caller is not superior
       **/
      IllegalSuperior: AugmentedError<ApiType>;
      /**
       * Invalid host address
       **/
      InvalidHostAddress: AugmentedError<ApiType>;
      /**
       * Invalid port
       **/
      InvalidPort: AugmentedError<ApiType>;
      /**
       * Invalid region code, region not found
       **/
      InvalidRegionCode: AugmentedError<ApiType>;
      /**
       * Ports list exceed max length
       **/
      PortsListExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Ports list is empty
       **/
      PortsListIsEmpty: AugmentedError<ApiType>;
      /**
       * Region code exceed max length
       **/
      RegionCodeExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Scheduler not set
       **/
      SchedulerNotSet: AugmentedError<ApiType>;
      /**
       * Superior not exist, should set it first
       **/
      SuperiorNotSet: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    edgeNode: {
      /**
       * Update traffic type in batch exceed the batch limit
       **/
      BatchLimitExceeded: AugmentedError<ApiType>;
      /**
       * DeviceType exceed max length
       **/
      DeviceTypeExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Tx caller is not superior
       **/
      IllegalSuperior: AugmentedError<ApiType>;
      /**
       * Node already bound
       **/
      NodeAlreadyBound: AugmentedError<ApiType>;
      /**
       * Node already exist
       **/
      NodeAlreadyExists: AugmentedError<ApiType>;
      /**
       * NodeId exceed max length
       **/
      NodeIdExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Node not bound yet
       **/
      NodeNotBoundYet: AugmentedError<ApiType>;
      /**
       * Node not found
       **/
      NodeNotFound: AugmentedError<ApiType>;
      /**
       * NodePubkey exceed max length
       **/
      NodePubkeyExceedMaxLength: AugmentedError<ApiType>;
      /**
       * RegionCode exceed max length
       **/
      RegionCodeExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Region not found
       **/
      RegionNotFound: AugmentedError<ApiType>;
      /**
       * Superior not exist, should set it first
       **/
      SuperiorNotSet: AugmentedError<ApiType>;
      /**
       * UserId exceed max length
       **/
      UserIdExceedMaxLength: AugmentedError<ApiType>;
      /**
       * The input userId does not match the node's current bound userID
       **/
      UserIdNotMatch: AugmentedError<ApiType>;
      /**
       * User not found
       **/
      UserNotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    manager: {
      /**
       * Host address exceed max length
       **/
      HostAddressExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Tx caller is not superior
       **/
      IllegalSuperior: AugmentedError<ApiType>;
      /**
       * Invalid account format
       **/
      InvalidAccountFormat: AugmentedError<ApiType>;
      /**
       * Manager connection params not set
       **/
      InvalidConnectionParams: AugmentedError<ApiType>;
      /**
       * Invalid host address
       **/
      InvalidHostAddress: AugmentedError<ApiType>;
      /**
       * Invalid license
       **/
      InvalidLicense: AugmentedError<ApiType>;
      /**
       * Invalid license enconding
       **/
      InvalidLicenseEncoding: AugmentedError<ApiType>;
      /**
       * Invalid license length
       **/
      InvalidLicenseLength: AugmentedError<ApiType>;
      /**
       * Invalid state: Operator has bound to manager, RegisterStatus should not be Pending_Bind
       **/
      InvalidManagerRegisterStatus: AugmentedError<ApiType>;
      /**
       * Invalid manager signature
       **/
      InvalidManagerSignature: AugmentedError<ApiType>;
      /**
       * Invalid port
       **/
      InvalidPort: AugmentedError<ApiType>;
      /**
       * Region code is invalid
       **/
      InvalidRegionCode: AugmentedError<ApiType>;
      /**
       * Manager already activate
       **/
      ManagerAlreadyActivate: AugmentedError<ApiType>;
      /**
       * Manager already bound to other operator
       **/
      ManagerAlreadyBind: AugmentedError<ApiType>;
      /**
       * Manager already exists
       **/
      ManagerAlreadyExists: AugmentedError<ApiType>;
      /**
       * Activate is not allow due to manager configuration is not done yet
       **/
      ManagerConfigNotDone: AugmentedError<ApiType>;
      /**
       * Operator doesn't bind manager yet
       **/
      ManagerNotBind: AugmentedError<ApiType>;
      /**
       * Manager not found
       **/
      ManagerNotFound: AugmentedError<ApiType>;
      /**
       * Not allow to change region after the manager has activated
       **/
      ManagerRegionNotAllowedToChange: AugmentedError<ApiType>;
      /**
       * Manager not bind to an operator
       **/
      NoOperatorBound: AugmentedError<ApiType>;
      /**
       * Manager not activated yet
       **/
      NotActivated: AugmentedError<ApiType>;
      /**
       * Operator already bind to another manager, could not unbind since force_unbind flag is false
       **/
      OperatorAlreadyBindToOtherManager: AugmentedError<ApiType>;
      /**
       * Operator already exists
       **/
      OperatorAlreadyExists: AugmentedError<ApiType>;
      /**
       * Operator account and manager account should not be the same
       **/
      OperatorAndManagerAccountDuplicate: AugmentedError<ApiType>;
      /**
       * Operator already bound to the same manager, should not bind again
       **/
      OperatorAndManagerAlreadyBind: AugmentedError<ApiType>;
      /**
       * Operator description exceed max length
       **/
      OperatorDescExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Operator name exceed max length
       **/
      OperatorNameExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Operator not found
       **/
      OperatorNotFound: AugmentedError<ApiType>;
      /**
       * Operator website url exceed max length
       **/
      OperatorUrlExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Region code exceed max length
       **/
      RegionCodeExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Manager region not set
       **/
      RegionNotSet: AugmentedError<ApiType>;
      /**
       * Superior not exist, should set it first
       **/
      SuperiorNotSet: AugmentedError<ApiType>;
      /**
       * Unknown manager register status
       **/
      UnknownManagerRegisterStatus: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    registry: {
      /**
       * Tx caller is not superior
       **/
      IllegalSuperior: AugmentedError<ApiType>;
      /**
       * RegionCode exceed max length
       **/
      RegionCodeExceedMaxLength: AugmentedError<ApiType>;
      /**
       * RegionDesc exceed max length
       **/
      RegionDescExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Region already exists
       **/
      RegionExists: AugmentedError<ApiType>;
      /**
       * RegionName exceed max length
       **/
      RegionNameExceedMaxLength: AugmentedError<ApiType>;
      /**
       * Region not found
       **/
      RegionNotFound: AugmentedError<ApiType>;
      /**
       * Superior not exist, should set it first
       **/
      SuperiorNotSet: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account.
       **/
      RequireSudo: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * A multi-block migration is ongoing and prevents the current code from being replaced.
       **/
      MultiBlockMigrationsOngoing: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * No upgrade authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * The submitted code is not authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    user: {
      /**
       * Tx caller is not superior
       **/
      IllegalSuperior: AugmentedError<ApiType>;
      /**
       * Invalid EVM address
       **/
      InvalidEvmAddress: AugmentedError<ApiType>;
      /**
       * Invalid EVM signature
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Invalid user id
       **/
      InvalidUserId: AugmentedError<ApiType>;
      /**
       * Superior not exist, should set it first
       **/
      SuperiorNotSet: AugmentedError<ApiType>;
      /**
       * User already exists
       **/
      UserExists: AugmentedError<ApiType>;
      /**
       * UserId exceed max length
       **/
      UserIdExceedMaxLength: AugmentedError<ApiType>;
      /**
       * User not found
       **/
      UserNotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    workload: {
      /**
       * EraLength must be a multiple of current EpochLength
       **/
      EraLengthNotMultipleOfEpochLength: AugmentedError<ApiType>;
      /**
       * Epoch#1 is not allowed to submit workreports
       **/
      GenesisEpochNotAllowed: AugmentedError<ApiType>;
      /**
       * Era#1 is not allowed to submit reputation points or cheat status
       **/
      GenesisEraNotAllowed: AugmentedError<ApiType>;
      /**
       * Tx caller is not superior
       **/
      IllegalSuperior: AugmentedError<ApiType>;
      /**
       * Invalid current epoch
       **/
      InvalidCurrentEpoch: AugmentedError<ApiType>;
      /**
       * Invalid current era
       **/
      InvalidCurrentEra: AugmentedError<ApiType>;
      /**
       * Invalid page next key
       **/
      InvalidPageNextKey: AugmentedError<ApiType>;
      /**
       * Invalid param value range
       **/
      InvalidParamValueRange: AugmentedError<ApiType>;
      /**
       * Can only submit data for previous epoch
       **/
      InvalidSubmitEpoch: AugmentedError<ApiType>;
      /**
       * Can only submit data for previous era
       **/
      InvalidSubmitEra: AugmentedError<ApiType>;
      /**
       * Manager is blocked
       **/
      ManagerBlocked: AugmentedError<ApiType>;
      /**
       * Manager limit exceeded
       **/
      ManagerLimitExceeded: AugmentedError<ApiType>;
      /**
       * Manager not activate yet
       **/
      ManagerNotActivate: AugmentedError<ApiType>;
      /**
       * Manager not found
       **/
      ManagerNotFound: AugmentedError<ApiType>;
      /**
       * No active epoch
       **/
      NoActiveEpoch: AugmentedError<ApiType>;
      /**
       * No active era
       **/
      NoActiveEra: AugmentedError<ApiType>;
      /**
       * NodeDatas count per request exceed limit
       **/
      NodeDatasCountExceedPerReqLimit: AugmentedError<ApiType>;
      /**
       * NodePoints count per request exceed limit
       **/
      NodePointsCountExceedPerReqLimit: AugmentedError<ApiType>;
      /**
       * NodeScores count per request exceed limit
       **/
      NodeScoresCountExceedPerReqLimit: AugmentedError<ApiType>;
      /**
       * Superior not exist, should set it first
       **/
      SuperiorNotSet: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
