// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option, Struct, u16 } from '@polkadot/types-codec';
import type { AccountId, BlockNumber, H160 } from '@polkadot/types/interfaces/runtime';

/** @name Manager */
export interface Manager extends Struct {
  readonly managerAccount: AccountId;
  readonly operatorAccount: Option<AccountId>;
  readonly hostAddress: string;
  readonly managerHttpPort: u16;
  readonly managerWsPort: u16;
  readonly chainApiPort: u16;
  readonly chainRpcPort: u16;
  readonly regionCode: string;
  readonly registerStatus: ManagerRegisterStatus;
  readonly workingStatus: ManagerWorkingStatus;
  readonly creator: AccountId;
  readonly createAt: BlockNumber;
  readonly updator: AccountId;
  readonly updateAt: BlockNumber;
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
  readonly operatorAccount: AccountId;
  readonly managerAccount: Option<AccountId>;
  readonly evmAccount: Option<H160>;
  readonly name: string;
  readonly description: string;
  readonly website: string;
  readonly creator: AccountId;
  readonly createAt: BlockNumber;
  readonly updator: AccountId;
  readonly updateAt: BlockNumber;
}

export type PHANTOM_MANAGER = 'manager';
