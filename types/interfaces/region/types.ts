// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct } from '@polkadot/types-codec';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name Region */
export interface Region extends Struct {
  readonly code: string;
  readonly name: string;
  readonly description: string;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

export type PHANTOM_REGION = 'region';
