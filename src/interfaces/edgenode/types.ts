// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { RegionCodeType } from '@aro-network/types/interfaces/region';
import type { UserIdType } from '@aro-network/types/interfaces/user';
import type { Enum, Struct, Vec, i64, u32 } from '@polkadot/types-codec';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name CheatStatus */
export interface CheatStatus extends Enum {
  readonly isCsNormal: boolean;
  readonly isCsSuspicious: boolean;
  readonly isCsBlacklist: boolean;
  readonly type: 'CsNormal' | 'CsSuspicious' | 'CsBlacklist';
}

/** @name DeviceType */
export interface DeviceType extends Vec {}

/** @name Node */
export interface Node extends Struct {
  readonly node_id: NodeIdType;
  readonly node_pubkey: NodePubkeyType;
  readonly user_id: UserIdType;
  readonly device_type: DeviceType;
  readonly region_code: RegionCodeType;
  readonly traffic_type: u32;
  readonly register_status: NodeRegisterStatus;
  readonly cheat_status: CheatStatus;
  readonly reputation_point: i64;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

/** @name NodeIdType */
export interface NodeIdType extends Vec {}

/** @name NodePubkeyType */
export interface NodePubkeyType extends Vec {}

/** @name NodeRegisterStatus */
export interface NodeRegisterStatus extends Enum {
  readonly isRsPendingBind: boolean;
  readonly isRsPendingActivate: boolean;
  readonly isRsActivate: boolean;
  readonly type: 'RsPendingBind' | 'RsPendingActivate' | 'RsActivate';
}

export type PHANTOM_EDGENODE = 'edgenode';
