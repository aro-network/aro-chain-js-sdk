// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    babe: {
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * Submitted configuration is invalid.
       **/
      InvalidConfiguration: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
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
    council: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
      /**
       * Proposal is still active.
       **/
      ProposalActive: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * The preimage does not exist.
       **/
      PreimageNotExist: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Maximum number of items reached.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Voting period too low
       **/
      VotingPeriodLow: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
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
    elections: {
      /**
       * Duplicated candidate submission.
       **/
      DuplicatedCandidate: AugmentedError<ApiType>;
      /**
       * Candidate does not have enough funds.
       **/
      InsufficientCandidateFunds: AugmentedError<ApiType>;
      /**
       * The renouncing origin presented a wrong `Renouncing` parameter.
       **/
      InvalidRenouncing: AugmentedError<ApiType>;
      /**
       * Prediction regarding replacement after member removal is wrong.
       **/
      InvalidReplacement: AugmentedError<ApiType>;
      /**
       * The provided count of number of votes is incorrect.
       **/
      InvalidVoteCount: AugmentedError<ApiType>;
      /**
       * The provided count of number of candidates is incorrect.
       **/
      InvalidWitnessData: AugmentedError<ApiType>;
      /**
       * Cannot vote with stake less than minimum balance.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * Cannot vote more than maximum allowed.
       **/
      MaximumVotesExceeded: AugmentedError<ApiType>;
      /**
       * Member cannot re-submit candidacy.
       **/
      MemberSubmit: AugmentedError<ApiType>;
      /**
       * Must be a voter.
       **/
      MustBeVoter: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Must vote for at least one candidate.
       **/
      NoVotes: AugmentedError<ApiType>;
      /**
       * Runner cannot re-submit candidacy.
       **/
      RunnerUpSubmit: AugmentedError<ApiType>;
      /**
       * Too many candidates have been created.
       **/
      TooManyCandidates: AugmentedError<ApiType>;
      /**
       * Cannot vote more than candidates.
       **/
      TooManyVotes: AugmentedError<ApiType>;
      /**
       * Voter can not pay voting bond.
       **/
      UnableToPayBond: AugmentedError<ApiType>;
      /**
       * Cannot vote when no candidates or members exist.
       **/
      UnableToVote: AugmentedError<ApiType>;
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
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * The username cannot be unbound because it is already unbinding.
       **/
      AlreadyUnbinding: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The action cannot be performed because of insufficient privileges (e.g. authority
       * trying to unbind a username provided by the system).
       **/
      InsufficientPrivileges: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The signature on a username was not valid.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * The provided suffix is too long.
       **/
      InvalidSuffix: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The username does not meet the requirements.
       **/
      InvalidUsername: AugmentedError<ApiType>;
      /**
       * The provided judgement was for a different identity.
       **/
      JudgementForDifferentIdentity: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * Error that occurs when there is an issue paying for judgement.
       **/
      JudgementPaymentFailed: AugmentedError<ApiType>;
      /**
       * The authority cannot allocate any more usernames.
       **/
      NoAllocation: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * The username cannot be forcefully removed because it can still be accepted.
       **/
      NotExpired: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * The username cannot be removed because it is not unbinding.
       **/
      NotUnbinding: AugmentedError<ApiType>;
      /**
       * The sender does not have permission to issue a username.
       **/
      NotUsernameAuthority: AugmentedError<ApiType>;
      /**
       * The requested username does not exist.
       **/
      NoUsername: AugmentedError<ApiType>;
      /**
       * Setting this username requires a signature, but none was provided.
       **/
      RequiresSignature: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * The username cannot be removed because it's still in the grace period.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * The username is already taken.
       **/
      UsernameTaken: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    imOnline: {
      /**
       * Duplicated heartbeat.
       **/
      DuplicatedHeartbeat: AugmentedError<ApiType>;
      /**
       * Non existent public key.
       **/
      InvalidKey: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    indices: {
      /**
       * The index was not available.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The index was not already assigned.
       **/
      NotAssigned: AugmentedError<ApiType>;
      /**
       * The index is assigned to another account.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The source and destination accounts are identical.
       **/
      NotTransfer: AugmentedError<ApiType>;
      /**
       * The index is permanent and may not be freed/changed.
       **/
      Permanent: AugmentedError<ApiType>;
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
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * Too few hashes were requested to be upgraded (i.e. zero).
       **/
      TooFew: AugmentedError<ApiType>;
      /**
       * More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
       **/
      TooMany: AugmentedError<ApiType>;
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
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    staking: {
      /**
       * Stash is already bonded.
       **/
      AlreadyBonded: AugmentedError<ApiType>;
      /**
       * Rewards for this era have already been claimed for this validator.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Controller is already paired.
       **/
      AlreadyPaired: AugmentedError<ApiType>;
      /**
       * Internal state has become somehow corrupted and the operation cannot continue.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * A nomination target was supplied that was blocked or otherwise not a validator.
       **/
      BadTarget: AugmentedError<ApiType>;
      /**
       * Some bound is not met.
       **/
      BoundNotMet: AugmentedError<ApiType>;
      /**
       * The user has enough bond and thus cannot be chilled forcefully by an external person.
       **/
      CannotChillOther: AugmentedError<ApiType>;
      /**
       * Cannot reset a ledger.
       **/
      CannotRestoreLedger: AugmentedError<ApiType>;
      /**
       * Commission is too low. Must be at least `MinCommission`.
       **/
      CommissionTooLow: AugmentedError<ApiType>;
      /**
       * Used when attempting to use deprecated controller account logic.
       **/
      ControllerDeprecated: AugmentedError<ApiType>;
      /**
       * Duplicate index.
       **/
      DuplicateIndex: AugmentedError<ApiType>;
      /**
       * Targets cannot be empty.
       **/
      EmptyTargets: AugmentedError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      FundedTarget: AugmentedError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      IncorrectHistoryDepth: AugmentedError<ApiType>;
      /**
       * Incorrect number of slashing spans provided.
       **/
      IncorrectSlashingSpans: AugmentedError<ApiType>;
      /**
       * Cannot have a validator or nominator role, with value less than the minimum defined by
       * governance (see `MinValidatorBond` and `MinNominatorBond`). If unbonding is the
       * intention, `chill` first to remove one's role as validator/nominator.
       **/
      InsufficientBond: AugmentedError<ApiType>;
      /**
       * Invalid era to reward.
       **/
      InvalidEraToReward: AugmentedError<ApiType>;
      /**
       * Invalid number of nominations.
       **/
      InvalidNumberOfNominations: AugmentedError<ApiType>;
      /**
       * No nominators exist on this page.
       **/
      InvalidPage: AugmentedError<ApiType>;
      /**
       * Slash record index out of bounds.
       **/
      InvalidSlashIndex: AugmentedError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      NoMoreChunks: AugmentedError<ApiType>;
      /**
       * Not a controller account.
       **/
      NotController: AugmentedError<ApiType>;
      /**
       * Not enough funds available to withdraw.
       **/
      NotEnoughFunds: AugmentedError<ApiType>;
      /**
       * Items are not sorted and unique.
       **/
      NotSortedAndUnique: AugmentedError<ApiType>;
      /**
       * Not a stash account.
       **/
      NotStash: AugmentedError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      NoUnlockChunk: AugmentedError<ApiType>;
      /**
       * Provided reward destination is not allowed.
       **/
      RewardDestinationRestricted: AugmentedError<ApiType>;
      /**
       * There are too many nominators in the system. Governance needs to adjust the staking
       * settings to keep things safe for the runtime.
       **/
      TooManyNominators: AugmentedError<ApiType>;
      /**
       * Too many nomination targets supplied.
       **/
      TooManyTargets: AugmentedError<ApiType>;
      /**
       * There are too many validator candidates in the system. Governance needs to adjust the
       * staking settings to keep things safe for the runtime.
       **/
      TooManyValidators: AugmentedError<ApiType>;
      /**
       * Operation not allowed for virtual stakers.
       **/
      VirtualStakerNotAllowed: AugmentedError<ApiType>;
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
    technicalCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
      /**
       * Proposal is still active.
       **/
      ProposalActive: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
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
       * Too many users in batch
       **/
      TooManyUsersInBatch: AugmentedError<ApiType>;
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
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    voterList: {
      /**
       * A error in the list interface implementation.
       **/
      List: AugmentedError<ApiType>;
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
