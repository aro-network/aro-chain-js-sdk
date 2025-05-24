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
  readonly node_id: string;
  readonly node_pubkey: Bytes;
  readonly user_id: string;
  readonly device_type: string;
  readonly region_code: string;
  readonly traffic_type: u32;
  readonly register_status: NodeRegisterStatus;
  readonly cheat_status: CheatStatus;
  readonly reputation_point: i64;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

/** @name NodeRegisterStatus */
export interface NodeRegisterStatus extends Enum {
  readonly isRsPendingBind: boolean;
  readonly isRsPendingActivate: boolean;
  readonly isRsActivate: boolean;
  readonly type: 'RsPendingBind' | 'RsPendingActivate' | 'RsActivate';
}

export type PHANTOM_EDGENODE = 'edgenode';
