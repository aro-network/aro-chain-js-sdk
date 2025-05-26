// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, U8aFixed, Vec, u16 } from '@polkadot/types-codec';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name Checker */
export interface Checker extends Struct {
  readonly checkerAccount: AccountId;
  readonly checkerPubkey: U8aFixed;
  readonly regionCode: string;
  readonly hostAddress: string;
  readonly httpPort: u16;
  readonly perfPorts: Vec<u16>;
  readonly registerStatus: CheckerRegisterStatus;
  readonly creator: AccountId;
  readonly createAt: BlockNumber;
  readonly updator: AccountId;
  readonly updateAt: BlockNumber;
}

/** @name CheckerRegisterStatus */
export interface CheckerRegisterStatus extends Enum {
  readonly isRsPendingActivate: boolean;
  readonly isRsActivate: boolean;
  readonly type: 'RsPendingActivate' | 'RsActivate';
}

/** @name Scheduler */
export interface Scheduler extends Struct {
  readonly schedulerAccount: AccountId;
  readonly schedulerPubkey: U8aFixed;
  readonly hostAddress: string;
  readonly httpPort: u16;
  readonly creator: AccountId;
  readonly createAt: BlockNumber;
  readonly updator: AccountId;
  readonly updateAt: BlockNumber;
}

export type PHANTOM_CHECKER = 'checker';
