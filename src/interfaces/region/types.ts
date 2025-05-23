// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct } from '@polkadot/types-codec';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name Region */
export interface Region extends Struct {
  readonly code: Bytes;
  readonly name: Bytes;
  readonly description: Bytes;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

export type PHANTOM_REGION = 'region';
