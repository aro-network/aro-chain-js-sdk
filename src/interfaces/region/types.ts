// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from '@polkadot/types-codec';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name Region */
export interface Region extends Struct {
  readonly code: RegionCodeType;
  readonly name: RegionNameType;
  readonly description: RegionDescType;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

/** @name RegionCodeType */
export interface RegionCodeType extends Vec {}

/** @name RegionDescType */
export interface RegionDescType extends Vec {}

/** @name RegionNameType */
export interface RegionNameType extends Vec {}

export type PHANTOM_REGION = 'region';
