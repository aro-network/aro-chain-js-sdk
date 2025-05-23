// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, U8aFixed, Vec, u16 } from '@polkadot/types-codec';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name Checker */
export interface Checker extends Struct {
  readonly checker_account: AccountId;
  readonly checker_pubkey: U8aFixed;
  readonly region_code: Bytes;
  readonly host_address: Bytes;
  readonly http_port: u16;
  readonly perf_ports: Vec<u16>;
  readonly register_status: CheckerRegisterStatus;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

/** @name CheckerRegisterStatus */
export interface CheckerRegisterStatus extends Enum {
  readonly isRsPendingActivate: boolean;
  readonly isRsActivate: boolean;
  readonly type: 'RsPendingActivate' | 'RsActivate';
}

/** @name Scheduler */
export interface Scheduler extends Struct {
  readonly scheduler_account: AccountId;
  readonly scheduler_pubkey: U8aFixed;
  readonly host_address: Bytes;
  readonly http_port: u16;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

export type PHANTOM_CHECKER = 'checker';
