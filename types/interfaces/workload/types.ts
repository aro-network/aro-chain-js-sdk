// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CheatStatus } from '@aro-network/types/interfaces/edgenode';
import type { Bytes, Enum, Option, Struct, i64, u64 } from '@polkadot/types-codec';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name CheatStatusChangeRequest */
export interface CheatStatusChangeRequest extends Struct {
  readonly cheatStatus: CheatStatus;
  readonly createAt: BlockNumber;
  readonly updateAt: BlockNumber;
}

/** @name CheatStatusProcessData */
export interface CheatStatusProcessData extends Struct {
  readonly era: u64;
  readonly totalNodesCount: u64;
  readonly processedNodesCount: u64;
  readonly startAt: BlockNumber;
  readonly updateAt: BlockNumber;
  readonly status: ProcessStatus;
  readonly pageNextKey: Option<Bytes>;
}

/** @name CheatStatusResult */
export interface CheatStatusResult extends Struct {
  readonly cheatStatus: CheatStatus;
  readonly createAt: BlockNumber;
}

/** @name EpochInfo */
export interface EpochInfo extends Struct {
  readonly number: u64;
  readonly startTime: u64;
  readonly startBlock: BlockNumber;
  readonly endTime: u64;
  readonly endBlock: Option<BlockNumber>;
}

/** @name EraInfo */
export interface EraInfo extends Struct {
  readonly number: u64;
  readonly startTime: u64;
  readonly startBlock: BlockNumber;
  readonly endTime: u64;
  readonly endBlock: Option<BlockNumber>;
}

/** @name ManagerCSWorkload */
export interface ManagerCSWorkload extends Struct {
  readonly era: u64;
  readonly managerAccount: AccountId;
  readonly reportedNodesCount: u64;
  readonly score: u64;
  readonly createAt: BlockNumber;
  readonly updateAt: BlockNumber;
}

/** @name ManagerRPWorkload */
export interface ManagerRPWorkload extends Struct {
  readonly era: u64;
  readonly managerAccount: AccountId;
  readonly reportedNodesCount: u64;
  readonly score: u64;
  readonly createAt: BlockNumber;
  readonly updateAt: BlockNumber;
}

/** @name ManagerWRWorkload */
export interface ManagerWRWorkload extends Struct {
  readonly epoch: u64;
  readonly managerAccount: AccountId;
  readonly reportedNodesCount: u64;
  readonly score: u64;
  readonly createAt: BlockNumber;
  readonly updateAt: BlockNumber;
}

/** @name NodeWorkload */
export interface NodeWorkload extends Struct {
  readonly score: u64;
  readonly createAt: BlockNumber;
}

/** @name ParamKey */
export interface ParamKey extends Enum {
  readonly isEpochLength: boolean;
  readonly isEraLength: boolean;
  readonly isWorkreportProcessBatchSize: boolean;
  readonly isReputationPointProcessBatchSize: boolean;
  readonly isCheatStatusProcessBatchSize: boolean;
  readonly isHistoryEpochDataDepth: boolean;
  readonly isHistoryEraDataDepth: boolean;
  readonly type: 'EpochLength' | 'EraLength' | 'WorkreportProcessBatchSize' | 'ReputationPointProcessBatchSize' | 'CheatStatusProcessBatchSize' | 'HistoryEpochDataDepth' | 'HistoryEraDataDepth';
}

/** @name ProcessStatus */
export interface ProcessStatus extends Enum {
  readonly isInit: boolean;
  readonly isProcessing: boolean;
  readonly isDone: boolean;
  readonly type: 'Init' | 'Processing' | 'Done';
}

/** @name ReputationDeltaPoint */
export interface ReputationDeltaPoint extends Struct {
  readonly deltaPoint: i64;
  readonly createAt: BlockNumber;
}

/** @name ReputationPointChangeRequest */
export interface ReputationPointChangeRequest extends Struct {
  readonly deltaPoint: i64;
  readonly createAt: BlockNumber;
  readonly updateAt: BlockNumber;
}

/** @name ReputationPointProcessData */
export interface ReputationPointProcessData extends Struct {
  readonly era: u64;
  readonly totalNodesCount: u64;
  readonly processedNodesCount: u64;
  readonly startAt: BlockNumber;
  readonly updateAt: BlockNumber;
  readonly status: ProcessStatus;
  readonly pageNextKey: Option<Bytes>;
}

/** @name Workreport */
export interface Workreport extends Struct {
  readonly score: u64;
  readonly createAt: BlockNumber;
  readonly updateAt: BlockNumber;
}

/** @name WorkreportProcessData */
export interface WorkreportProcessData extends Struct {
  readonly epoch: u64;
  readonly totalNodesCount: u64;
  readonly processedNodesCount: u64;
  readonly startAt: BlockNumber;
  readonly updateAt: BlockNumber;
  readonly status: ProcessStatus;
  readonly pageNextKey: Option<Bytes>;
}

export type PHANTOM_WORKLOAD = 'workload';
