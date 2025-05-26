// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct } from '@polkadot/types-codec';
import type { AccountId, BlockNumber, H160 } from '@polkadot/types/interfaces/runtime';

/** @name User */
export interface User extends Struct {
  readonly userId: string;
  readonly evmAccount: Option<H160>;
  readonly creator: AccountId;
  readonly createAt: BlockNumber;
  readonly updator: AccountId;
  readonly updateAt: BlockNumber;
}

export type PHANTOM_USER = 'user';
