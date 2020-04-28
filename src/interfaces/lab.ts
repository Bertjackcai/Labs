/*
 * @Author: your name
 * @Date: 2019-12-08 19:18:17
 * @LastEditTime: 2020-04-28 20:00:07
 * @LastEditors: Do not Edit
 * @Description: In User Settings Edit
 * @FilePath: /labs-fronted/src/interfaces/labs.ts
 */
import { PAGE_SIZE } from './common';

export interface LabModel {
  // 比赛项目编码
  competitionEventCode: string;
  // 比赛项目名称
  competitionEventName: string;
  // 计划开始时间
  planStartAt: string;
  // 计划结束时间
  planEndAt: string;
  // 组别
  suiteType: number;
  // 组别名称
  suiteTypeDesc: string;
  // 状态
  status: number;
  // 状态描述
  statusDesc: string;
  // 创建时间
  createdAt: string;
  // 创建人
  createdBy: string;
  // 更新时间
  updatedAt: string;
  // 更新人
  updatedBy: string;
}

// 新建、修改 比赛项目
export interface CompetitionEventEdit {
  // 比赛项目编码
  competitionEventCode: string;
  // 比赛项目名称
  competitionEventName: string;
  // 计划开始时间
  planStartAt: string;
  // 计划结束时间
  planEndAt: string;
  // 组别
  suiteType: number;
  // 状态
  status: number;
  // 创建人
  createdBy: string;
  // 更新人
  updatedBy: string;
}

export interface LabAssistantEditModel {
  teacherCode: string;
  // 比赛场地
  teacherName: string;

  departmentName: string;

  workCode: string;
}

export interface LabSearchProps {
  // 比赛项目名称
  competitionEventName?: string;
  // 页码
  page?: number;
  // 每页记录数
  pageSize?: number;
}

export const defaultLabSearchProps: LabSearchProps = {
  competitionEventName: undefined,
  page: 1,
  pageSize: PAGE_SIZE,
};
