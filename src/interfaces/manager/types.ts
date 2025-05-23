// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, u16 } from '@polkadot/types-codec';
import type { AccountId, BlockNumber, H160 } from '@polkadot/types/interfaces/runtime';

/** @name Manager */
export interface Manager extends Struct {
  readonly manager_account: AccountId;
  readonly operator_account: Option<AccountId>;
  readonly host_address: Bytes;
  readonly manager_http_port: u16;
  readonly manager_ws_port: u16;
  readonly chain_api_port: u16;
  readonly chain_rpc_port: u16;
  readonly region_code: Bytes;
  readonly register_status: ManagerRegisterStatus;
  readonly working_status: ManagerWorkingStatus;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

/** @name ManagerRegisterStatus */
export interface ManagerRegisterStatus extends Enum {
  readonly isRsPendingBind: boolean;
  readonly isRsPendingConfig: boolean;
  readonly isRsPendingActivate: boolean;
  readonly isRsActivate: boolean;
  readonly type: 'RsPendingBind' | 'RsPendingConfig' | 'RsPendingActivate' | 'RsActivate';
}

/** @name ManagerWorkingStatus */
export interface ManagerWorkingStatus extends Enum {
  readonly isWsWorking: boolean;
  readonly isWsOffline: boolean;
  readonly isWsBlock: boolean;
  readonly type: 'WsWorking' | 'WsOffline' | 'WsBlock';
}

/** @name Operator */
export interface Operator extends Struct {
  readonly operator_account: AccountId;
  readonly manager_account: Option<AccountId>;
  readonly evm_account: Option<H160>;
  readonly name: Bytes;
  readonly description: Bytes;
  readonly website: Bytes;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

export type PHANTOM_MANAGER = 'manager';
