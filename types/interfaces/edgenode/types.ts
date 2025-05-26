// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, i64, u32 } from '@polkadot/types-codec';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name CheatStatus */
export interface CheatStatus extends Enum {
  readonly isCsNormal: boolean;
  readonly isCsSuspicious: boolean;
  readonly isCsBlacklist: boolean;
  readonly type: 'CsNormal' | 'CsSuspicious' | 'CsBlacklist';
}

/** @name Node */
export interface Node extends Struct {
  readonly nodeId: string;
  readonly nodePubkey: Bytes;
  readonly userId: string;
  readonly deviceType: string;
  readonly regionCode: string;
  readonly trafficType: u32;
  readonly registerStatus: NodeRegisterStatus;
  readonly cheatStatus: CheatStatus;
  readonly reputationPoint: i64;
  readonly creator: AccountId;
  readonly createAt: BlockNumber;
  readonly updator: AccountId;
  readonly updateAt: BlockNumber;
}

/** @name NodeRegisterStatus */
export interface NodeRegisterStatus extends Enum {
  readonly isRsPendingBind: boolean;
  readonly isRsPendingActivate: boolean;
  readonly isRsActivate: boolean;
  readonly type: 'RsPendingBind' | 'RsPendingActivate' | 'RsActivate';
}

export type PHANTOM_EDGENODE = 'edgenode';
