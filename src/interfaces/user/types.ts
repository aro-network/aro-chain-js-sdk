// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Option, Struct } from '@polkadot/types-codec';
import type { AccountId, BlockNumber, H160 } from '@polkadot/types/interfaces/runtime';

/** @name User */
export interface User extends Struct {
  readonly user_id: Bytes;
  readonly evm_account: Option<H160>;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

export type PHANTOM_USER = 'user';
