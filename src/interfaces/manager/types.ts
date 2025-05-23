// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { RegionCodeType } from '@aro-network/types/interfaces/region';
import type { Enum, Option, Struct, Vec, u16 } from '@polkadot/types-codec';
import type { AccountId, BlockNumber, H160 } from '@polkadot/types/interfaces/runtime';

/** @name HostAddressType */
export interface HostAddressType extends Vec {}

/** @name Manager */
export interface Manager extends Struct {
  readonly manager_account: AccountId;
  readonly operator_account: Option<AccountId>;
  readonly host_address: HostAddressType;
  readonly manager_http_port: u16;
  readonly manager_ws_port: u16;
  readonly chain_api_port: u16;
  readonly chain_rpc_port: u16;
  readonly region_code: RegionCodeType;
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
  readonly name: OperatorNameType;
  readonly description: OperatorDescType;
  readonly website: OperatorUrlType;
  readonly creator: AccountId;
  readonly create_at: BlockNumber;
  readonly updator: AccountId;
  readonly update_at: BlockNumber;
}

/** @name OperatorDescType */
export interface OperatorDescType extends Vec {}

/** @name OperatorNameType */
export interface OperatorNameType extends Vec {}

/** @name OperatorUrlType */
export interface OperatorUrlType extends Vec {}

export type PHANTOM_MANAGER = 'manager';
