// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct, Vec } from '@polkadot/types-codec';
import type { AccountId, BlockNumber, H160 } from '@polkadot/types/interfaces/runtime';

/** @name User */
export interface User extends Struct {
  readonly user_id: UserIdType;
  readonly evm_account: Option<H160>;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

/** @name UserIdType */
export interface UserIdType extends Vec {}

export type PHANTOM_USER = 'user';
