import axios from 'axios'

/**  ============================= API ======================================  */

/** 查询医院档案列表数据 */

export function getHospitalPageList(
  /** 机构Id */
  organizationId: number,
  /** 查询字段 */
  archivesListRequest?: ArchivesListRequestDto,
  options?: any
): Promise<EMSSResponsePageResultArchivesListDto> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/${organizationId}/hospital-archives`,

    data: {
      archivesListRequest
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取档案id列表 */

export function getArchiveIdPage(
  lastArchiveId?: number,
  orgId?: number,
  beginTime?: string,
  pageSize?: number,
  pageIndex?: number,
  options?: any
): Promise<EMSSResponsePageResultInt64> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/archive-id-page?lastArchiveId=${lastArchiveId}&?orgId=${orgId}&?beginTime=${beginTime}&?pageSize=${pageSize}&?pageIndex=${pageIndex}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取档案id集合 */

export function getArchiveIdList(
  lastArchiveId?: number,
  pageSize?: number,
  orgId?: number,
  beginTime?: string,
  options?: any
): Promise<EMSSResponseIListInt64> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/archive-ids?lastArchiveId=${lastArchiveId}&?pageSize=${pageSize}&?orgId=${orgId}&?beginTime=${beginTime}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 查询卒中卫健委机构档案列表数据 */

export function getChestPainOrgPageList(
  /** 机构Id */
  organizationId: number,
  /** 查询字段 */
  archivesListRequest?: ArchivesListRequestDto,
  options?: any
): Promise<EMSSResponsePageResultArchivesListDto> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/${organizationId}/chestpain-organization-archives`,

    data: {
      archivesListRequest
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 导出档案列表文件 */

export function exportChestPainOrgList(
  /** The organization identifier. */
  organizationId: number,
  /** Name of the organization. */
  organizationName?: string,
  /** The create start time. */
  createStartTime?: string,
  /** The create end time. */
  createEndTime?: string,
  /** The search. */
  search?: string,
  /** The fill statuses. */
  fillStatuses?: FILLSTATUSES_ENUM[],
  /** The coming ways. */
  comingWays?: string[],
  /** The initial diagnosis. */
  initialDiagnosis?: string[],
  /** The order field. */
  orderField?: string,
  /** Type of the order by. */
  orderByType?: number,
  options?: any
): Promise<FileContentResult> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/export/${organizationId}/chestpain-organization-archives?organizationName=${organizationName}&?createStartTime=${createStartTime}&?createEndTime=${createEndTime}&?search=${search}&?fillStatuses=${fillStatuses}&?comingWays=${comingWays}&?initialDiagnosis=${initialDiagnosis}&?orderField=${orderField}&?orderByType=${orderByType}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 下载导入病例模板 */

export function downloadExportTemplate(options?: any): Promise<FileContentResult> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/archives-manager/import/archives/download-template',

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取档案所有配置信息 */

export function getAllArchivesConfig(
  options?: any
): Promise<EMSSResponseCaseReportFormConfigResponse> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/archives-manager/config',

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取档案信息 */

export function getArchivesDetail(id: number, options?: any): Promise<EMSSResponseString> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/${id}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 编辑档案信息 */

export function updateArchives(
  id: number,
  data?: ArchivesDataRequest,
  options?: any
): Promise<EMSSResponseString> {
  const config = {
    method: 'put',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/${id}`,

    data: {
      data
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取档案详细信息 */

export function getArchivesFullData(
  id: number,
  options?: any
): Promise<EMSSResponseArchivesFullData> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/${id}/full`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 新增档案信息 */

export function addArchives(data?: ArchivesDataRequest, options?: any): Promise<EMSSResponseInt64> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/archives-manager',

    data: {
      data
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 审核档案 */

export function verifyArchives(
  /** 编号 */
  id: number,
  data?: ArchivesDataRequest,
  options?: any
): Promise<EMSSResponseString> {
  const config = {
    method: 'put',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/${id}/verify`,

    data: {
      data
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 提交审核档案 */

export function applyVerifyArchives(
  id: number,
  data?: ArchivesDataRequest,
  options?: any
): Promise<EMSSResponseString> {
  const config = {
    method: 'put',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/${id}/apply-verify`,

    data: {
      data
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

export function getArchivesOperationPermissions(
  id: number,
  options?: any
): Promise<EMSSResponseString> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/permission/${id}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 上报档案信息 */

export function addOrUpdateArchives(
  userName: string,
  orgId: number,
  id: number,
  ip: string,
  logId: number,
  data?: ArchivesDataRequest,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/${orgId}/${id}/${userName}/${ip}/${logId}`,

    data: {
      data
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 删除档案 */

export function deleteReportArchives(
  userName: string,
  /** 组织Id */
  orgId: number,
  /** 档案Id */
  id: number,
  ip: string,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'delete',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/archives-manager/archives/${orgId}/${id}/${userName}/${ip}`,

    data: {},

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 查询卒中卫健委机构档案列表数据 */

export function getChestPainOrgAuditPageList(
  /** 机构Id */
  organizationId: number,
  /** 查询字段 */
  archivesListRequest?: ArchivesListRequestDto,
  options?: any
): Promise<EMSSResponsePageResultArchivesListDto> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/audit-manager/${organizationId}/chestpain-organization-archives`,

    data: {
      archivesListRequest
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 退回档案 */

export function returnArchives(
  /** 档案id */
  id: number,
  /** 档案状态 */
  status: number,
  /** 退回原因 */
  request?: ArchivesRequest,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/audit-manager/archives/return/${id}/${status}`,

    data: {
      request
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 删除档案 */

export function deleteArchives(
  /** 档案Id */
  id: number,
  /** 删除原因 */
  request?: ArchivesRequest,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/audit-manager/archives/${id}`,

    data: {
      request
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 查看操作日志 */

export function getOperationLogList(
  /** 档案id */
  id: number,
  options?: any
): Promise<EMSSResponseListOperationLogDto> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/audit-manager/log/${id}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 导出日志 */

export function exportLogs(
  name?: string,
  createStartTime?: string,
  createEndTime?: string,
  options?: any
): Promise<FileContentResult> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/sync-log/export?name=${name}&?createStartTime=${createStartTime}&?createEndTime=${createEndTime}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 查看日志详情 */

export function getLog(id?: number, options?: any): Promise<EMSSResponseLogDto> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/sync-log/detail?id=${id}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 日志分页列表 */

export function getPageList(
  /** 页数 */
  pageIndex: number,
  /** 条数 */
  pageSize: number,
  /** 名字 */
  name?: string,
  /** 起始时间 */
  createStartTime?: string,
  /** 截至时间 */
  createEndTime?: string,
  options?: any
): Promise<EMSSResponsePageResultLogDto> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/sync-log/list?pageIndex=${pageIndex}&?pageSize=${pageSize}&?name=${name}&?createStartTime=${createStartTime}&?createEndTime=${createEndTime}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取心电图列表 */

export function getEcgList(
  ecgListRequest?: EcgListRequest,
  options?: any
): Promise<PageResultEcgListResponse> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/ecg/ecg_list',

    data: {
      ecgListRequest
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取心电图信息 */

export function reports(ecgId: number, options?: any): Promise<DoctorReportDetail> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/ecg/reports/${ecgId}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取心电图信息 */

export function ecgFile(fileId: number, options?: any): Promise<string> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/ecg/file/${fileId}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取胸痛时间轴 */

export function getChestPainFormTimeAxisConfig(options?: any): Promise<EMSSResponseString> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/archives-timeaxis-config',

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 根据车牌号分组返回最新GPS信息 */

export function getLastGPSDataGroupByCarNo(options?: any): Promise<EMSSResponseListGPSDto> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/gps/group/last',

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 根据车牌号分组返回全部GPS信息 */

export function getAllGPSDataGroupByCarNo(options?: any): Promise<EMSSResponseListGPSData> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/gps/group/all',

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 详情 */

export function getHospitalDocDetail(
  id: number,
  options?: any
): Promise<EMSSResponseHospitalDocDto> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/hospitalDoc/detail/${id}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 院内评分添加 */

export function addHospitalScore(
  hospitalScore?: HospitalScoreDto,
  options?: any
): Promise<EMSSResponseInt64> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/hospitalScore/add',

    data: {
      hospitalScore
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 院内评分列表 */

export function getHospitalScoreList(
  hospitalScoreListRequest?: HospitalScoreListRequestDto,
  options?: any
): Promise<EMSSResponsePageResultHospitalScoreListDto> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/hospitalScore/list',

    data: {
      hospitalScoreListRequest
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 详情 */

export function getHospitalScoreDetail(
  id: number,
  options?: any
): Promise<EMSSResponseHospitalScoreDto> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/hospitalScore/detail/${id}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 编辑 */

export function updateHospitalScore(
  hospitalScoreDto?: HospitalScoreDto,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'put',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/hospitalScore/update',

    data: {
      hospitalScoreDto
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 删除 */

export function deleteHospitalScore(id: number, options?: any): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'delete',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/hospitalScore/delete/${id}`,

    data: {},

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 同步MongoDB */

export function syncMongoDb(ids?: number[], options?: any): Promise<boolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/mongodb/sync',

    data: {
      ids
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 重新同步MongoDB */

export function reset(
  orgId?: number,
  lastArchiveId?: number,
  beginTime?: string,
  options?: any
): Promise<boolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/mongodb/reset?orgId=${orgId}&?lastArchiveId=${lastArchiveId}&?beginTime=${beginTime}`,

    data: {},

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 院前120同步MongoDB */

export function preCareSyncMongoDb(ids?: number[], options?: any): Promise<boolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/mongodb/preCareSync',

    data: {
      ids
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 院前120重新同步MongoDB */

export function preCareReset(
  orgId?: number,
  lastId?: number,
  beginTime?: string,
  options?: any
): Promise<boolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/mongodb/preCareReset?orgId=${orgId}&?lastId=${lastId}&?beginTime=${beginTime}`,

    data: {},

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 新增站内消息 */

export function addMessage(
  platformMessage?: PlatformMessageRequest,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/message/add',

    data: {
      platformMessage
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取消息列表 */

export function getMessages(
  request?: PlatformMessagePageRequest,
  options?: any
): Promise<EMSSResponsePageResultPlatformMessageDto> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/messages',

    data: {
      request
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取消息详情 */

export function getMessageDetail(
  id: number,
  options?: any
): Promise<EMSSResponsePlatformMessageDto> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/message/${id}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 获取消息未读数量 */

export function getMessageCount(options?: any): Promise<EMSSResponseInt64> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/message/count',

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 读取消息 */

export function readMessage(ids?: number[], options?: any): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/message/read',

    data: {
      ids
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 删除消息 */

export function deleteMessage(ids?: number[], options?: any): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'delete',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/message/delete',

    data: {
      ids
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 院前急救120列表 */

export function getPreCareList(
  preCareListRequest?: PreCareListRequestDto,
  options?: any
): Promise<EMSSResponsePageResultPreCareListDto> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/preCare/list',

    data: {
      preCareListRequest
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 院前急救120详情 */

export function getPreCareDetail(
  id: number,
  options?: any
): Promise<EMSSResponsePageResultPreCareListDto> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/preCare/detail/${id}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 院前急救120调度 */

export function assignPreCare(
  id: number,
  preAssignDto?: PreAssignDto,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/preCare/assign/${id}`,

    data: {
      preAssignDto
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 编辑院前急救120数据 */

export function updatePreCare(
  id: number,
  preCareDto?: PreCareDto,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'put',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/preCare/${id}`,

    data: {
      preCareDto
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 同步海口院前数据 */

export function syncPreHospital(
  userName: string,
  orgId: number,
  ip: string,
  id: number,
  /** The pre hospital dto. */
  preHospitalDto?: PreHospitalDto,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/hk/preHospital/sync/${id}/${orgId}/${userName}/${ip}`,

    data: {
      preHospitalDto
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 同步海口GPS数据 */

export function syncGps(
  userName: string,
  orgId: number,
  ip: string,
  /** The GPS dto. */
  gpsDto?: GPSDto,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/hk/preHospital/gps/${orgId}/${userName}/${ip}`,

    data: {
      gpsDto
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 同步心电患者信息 */

export function syncEcgPatient(
  ecgId: string,
  userName: string,
  orgId: number,
  ip: string,
  ecgPatientDto?: EcgPatientDto,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: `/hk/preHospital/ecg-patient/sync/${ecgId}/${orgId}/${userName}/${ip}`,

    data: {
      ecgPatientDto
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 查询机构凭证列表 */

export function getHospitalCredentials(
  /** 页码 */
  pageIndex: number,
  /** 页数 */
  pageSize: number,
  /** 关键字 */
  key?: string,
  options?: any
): Promise<EMSSResponsePageResultHospitalCredentialDto> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/sync/hospitalcredentials?pageIndex=${pageIndex}&?pageSize=${pageSize}&?key=${key}`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 新增数据上报凭证 */

export function addHospitalCredential(
  /** 凭证信息 */
  dto?: HospitalCredentialDto,
  options?: any
): Promise<EMSSResponseInt64> {
  const config = {
    method: 'post',
    baseURL: 'localhost:8080',
    url: '/chestpain-archives/sync/hospitalcredential',

    data: {
      dto
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 修改数据上报凭证 */

export function updateHospitalCredential(
  /** 凭证id */
  id: number,
  /** 凭证信息 */
  certificate?: HospitalCredentialDto,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'put',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/sync/hospitalcredential/${id}`,

    data: {
      certificate
    },

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 删除凭证 */

export function deleteHospitalCredential(
  /** 凭证id */
  id: number,
  options?: any
): Promise<EMSSResponseBoolean> {
  const config = {
    method: 'delete',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/sync/hospitalcredential/${id}`,

    data: {},

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/** 根据id获取详情 */

export function getHospitalCredentialById(
  /** 凭证id */
  id: number,
  options?: any
): Promise<EMSSResponseHospitalCredentialDto> {
  const config = {
    method: 'get',
    baseURL: 'localhost:8080',
    url: `/chestpain-archives/sync/hospitalcredential/${id}/detail`,

    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
    ...options
  }

  return axios(config).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  })
}

/**  ============================= TYPE ======================================  */

export interface ArchivesListRequestDto {
  /**  页码 */

  pageIndex: number

  /**  每页大小 */

  pageSize: number

  /**  机构名称 */

  organizationName: string

  /**  建档开始时间 */

  createStartTime: string

  /**  建档结束时间 */

  createEndTime: string

  /**  首次医疗接触开始时间 */

  fmcStartTime: string

  /**  首次医疗接触结束时间 */

  fmcEndTime: string

  /**  到达医院大门开始时间 */

  arriveHospitalStartTime: string

  /**  到达医院大门结束时间 */

  arriveHospitalEndTime: string

  /**  姓名住院号查询 */

  search: string

  /**  填报状态 */

  fillStatuses: number[]

  /**  来院方式 */

  comingWays: string[]

  /**  诊断 */

  initialDiagnosis: string[]

  /**  排序字段 */

  orderField: string

  /**  排序类型 */

  orderByType: ORDERBYTYPE_ENUM
}

export interface EMSSResponsePageResultArchivesListDto {
  data: PageResultArchivesListDto

  code: number

  msg: string

  serverTime: number
}

export interface PageResultArchivesListDto {
  pagination: Pagination

  records: ArchivesListDto[]
}

export interface Pagination {
  pageIndex: number

  pageSize: number

  total: number
}

export interface ArchivesListDto {
  /**  档案Id */

  id: number

  /**  机构Id */

  organizationId: number

  /**  医院名称 */

  organizationName: string

  /**  姓名 */

  fullName: string

  /**  性别 */

  gender: string

  /**  性别显示名称 */

  genderText: string

  /**  年龄 */

  age: number

  /**  首次医疗接触时间 */

  fmcTime: string

  /**  发病时间 */

  attackTime: string

  /**  初步诊断 */

  initialDiagnosis: string

  /**  初步诊断显示名称 */

  initialDiagnosisText: string

  /**  建档时间 */

  createTime: string

  /**  填报状态 */

  fillStatus: FILLSTATUS_ENUM

  /**  心电图信息 */

  ecgExtension: string

  /**  对应机构的KeyCode */

  keyCode: number

  /**  填报状态 */

  fillStatusText: string
}

export interface EMSSResponsePageResultInt64 {
  data: PageResultInt64

  code: number

  msg: string

  serverTime: number
}

export interface PageResultInt64 {
  pagination: Pagination

  records: number[]
}

export interface EMSSResponseIListInt64 {
  data: number[]

  code: number

  msg: string

  serverTime: number
}

export interface FileContentResult {
  fileContents: string

  contentType: string

  fileDownloadName: string

  lastModified: string

  entityTag: EntityTagHeaderValue

  enableRangeProcessing: boolean
}

export interface EntityTagHeaderValue {
  tag: StringSegment

  isWeak: boolean
}

export interface StringSegment {
  buffer: string

  offset: number

  length: number

  value: string

  hasValue: boolean
}

export interface EMSSResponseArchivesImportResult {
  data: ArchivesImportResult

  code: number

  msg: string

  serverTime: number
}

export interface ArchivesImportResult {
  /**  错误类型 */

  archivesImportErrorType: ARCHIVESIMPORTERRORTYPE_ENUM

  /**  提示标题 */

  title: string

  /**  错误原因 */

  reason: string

  /**  错误集合 */

  errorList: string[]

  /**  本次导入是否全部成功 */

  importResult: boolean

  /**  导入的结果集合 */

  validResult: object
}

export interface EMSSResponseBoolean {
  data: boolean

  code: number

  msg: string

  serverTime: number
}

export interface EMSSResponseCaseReportFormConfigResponse {
  data: CaseReportFormConfigResponse

  code: number

  msg: string

  serverTime: number
}

export interface CaseReportFormConfigResponse {
  /**  表单的Tab页 */

  crfDisplayConfig: GetCRFDisplayConfigResponse
}

export interface GetCRFDisplayConfigResponse {
  /**  字段列表 */

  fieldList: FormFieldDisplayInfo[]
}

export interface FormFieldDisplayInfo {
  /**  字段名称 */

  fieldName: string

  /**  字段显示名称 */

  fieldLabel: string

  /**  分组名称 */

  groupName: string

  /**  分组 */

  group: string

  /**  控件类型 */

  fieldDisplayType: FIELDDISPLAYTYPE_ENUM

  /**  字段类型 */

  fieldType: string

  /**  字段值类型 */

  fieldValueType: FIELDVALUETYPE_ENUM

  /**  必填类型 */

  requiredType: REQUIREDTYPE_ENUM

  /**  显示可见的规则 */

  visibleRuleId: number

  /**  禁用的规则 */

  forbiddenRuleId: number

  /**  是否有默认值 */

  hasDefaultValue: boolean

  /**  默认值 */

  defaultValue: string

  /**  字段的备注描述 */

  remark: string

  /**  表单ID */

  formId: number

  /**  （字符串类型）字段的最大长度 */

  maxLength: number

  /**  选项数据 */

  optionData: object

  /**  显示隐藏规则 */

  visibleRule: JSVisibleRule

  /**  禁用规则 */

  forbiddenRule: JSVisibleRule

  /**  正则验证规则 */

  validateRules: ValidateRule[]

  /**  Js验证规则 */

  jsValidateRule: JSValidateRule

  /**  是否为蓝星必填 */

  isBlueRequiredField: boolean

  /**  蓝星必填规则id */

  blueRequiredRuleId: number

  /**  是否为红星必填（保存时必填） */

  isRedRequiredField: boolean

  /**  国家填报平台字段js */

  blueRequiredRule: JSValidateRule

  /**  模块名称 */

  moduleName: string

  formGroupFields: FormFieldDisplayInfo[]
}

export interface JSVisibleRule {
  jsContent: string

  /**  显示规则用到的参数 */

  ruleParam: string[]

  /**  规则体（JS代码） */

  ruleContent: string

  /**  目标字段 */

  targetFieldName: string
}

export interface ValidateRule {
  /**  规则的ID */

  id: number

  /**  错误消息 */

  errorMessage: string

  /**  验证类型（正则表达式） */

  validateType: VALIDATETYPE_ENUM

  /**  规则类型 */

  ruleContent: string
}

export interface JSValidateRule {
  jsContent: string

  /**  显示规则用到的参数 */

  ruleParam: string[]

  /**  规则体（JS代码） */

  ruleContent: string

  /**  目标字段 */

  targetFieldName: string
}

export interface EMSSResponseString {
  data: string

  code: number

  msg: string

  serverTime: number
}

export interface ArchivesDataRequest {
  /**  填报状态 */

  fillStatus: FILLSTATUS_ENUM

  /**  档案信息 */

  data: string
}

export interface EMSSResponseArchivesFullData {
  data: ArchivesFullData

  code: number

  msg: string

  serverTime: number
}

export interface ArchivesFullData {
  /**  列表信息 */

  archivesList: ArchivesListDto

  /**  详情信息 */

  archivesData: object
}

export interface EMSSResponseInt64 {
  data: number

  code: number

  msg: string

  serverTime: number
}

export interface ArchivesRequest {
  /**  退回原因 */

  reason: string
}

export interface EMSSResponseListOperationLogDto {
  data: OperationLogDto[]

  code: number

  msg: string

  serverTime: number
}

export interface OperationLogDto {
  /**  操作日期 */

  createTime: string

  /**  操作人 */

  createName: string

  /**  类型 */

  type: TYPE_ENUM

  /**  类型 */

  typeText: string

  /**  操作日志 */

  reason: string
}

export interface EMSSResponseLogDto {
  data: LogDto

  code: number

  msg: string

  serverTime: number
}

export interface LogDto {
  index: number

  /**  操作时间 */

  createTime: string

  id: number

  /**  医院 */

  orgName: string

  /**  上报类型 */

  type: TYPE_ENUM

  /**  上报类型文本 */

  typeText: string

  /**  操作用户Id */

  createUser: number

  /**  操作用户姓名 */

  createUserName: string

  /**  执行结果(是否成功) */

  operationStatus: boolean

  /**  执行结果文本 */

  operationStatusText: string

  /**  日志详情 */

  detail: string

  /**  上报的数据 */

  requestData: string

  /**  初始数据 */

  initialData: string

  /**  返回的数据 */

  responseData: string

  /**  程序执行的错误信息 */

  errorRemark: string

  /**  操作IP */

  ip: string
}

export interface EMSSResponsePageResultLogDto {
  data: PageResultLogDto

  code: number

  msg: string

  serverTime: number
}

export interface PageResultLogDto {
  pagination: Pagination

  records: LogDto[]
}

export interface EcgListRequest {
  /**  页码 */

  pageIndex: number

  /**  每页大小 */

  pageSize: number

  /**  姓名 */

  fullName: string

  /**  采集时间开始 */

  ecgAcquisitionTimeStart: string

  /**  采集时间截止 */

  ecgAcquisitionTimeEnd: string

  /**  诊断时间开始 */

  auditCompleteTimeStart: string

  /**  诊断时间截止 */

  auditCompleteTimeEnd: string

  /**  诊断状态  1已诊断  2未诊断 */

  diagnosisStatus: number
}

export interface PageResultEcgListResponse {
  pagination: Pagination

  records: EcgListResponse[]
}

export interface EcgListResponse {
  /**  心电图id */

  ecgId: number

  /**  姓名 */

  fullName: string

  /**  性别描述 */

  gender: string

  /**  性别 */

  enumGender: ENUMGENDER_ENUM

  /**  年龄 */

  age: number

  /**  机构名称 */

  organizationName: string

  /**  心电图采集时间 */

  ecgAcquisitionTime: string

  /**  审核完成时间 */

  auditCompleteTime: string

  /**  诊断耗时 */

  diagnosisTime: string

  /**  诊断内容 */

  diagnosisResult: string

  /**  心电图文件类型 */

  ecgFileType: ECGFILETYPE_ENUM

  /**  心电图文件 */

  ecgFile: string
}

export interface DoctorReportDetail {
  /**  申请受理信息 */

  acceptApplyResult: VoOfAcceptResult

  /**  诊断完成信息 */

  diagnosisResult: DiagnosisDetail

  /**  审核受理结果 */

  auditApplyResult: VoOfAcceptResult

  /**  审核完成信息 */

  auditResult: AuditedRestingEcgResultDetail

  /**  诊断快照（典型图）列表 */

  diagnosisSnapshots: DiagnosisSnapshot[]

  /**  报告业务状态：0:未知状态 1:待采集 2:已采集 3:已上传 4:待受理 5:已受理 6:已诊断 7：审核待受理 8：审核已受理 9：已审核 10:待取回 11：已取回 */

  reportBizStatus: number

  /**  报告状态 */

  reportStatus: number

  /**  报告来源 0:本地报告，1：云调度报告 */

  reportSource: number

  /**  检查信息 */

  examination: ExaminationDetail

  /**  自动分析结果 */

  analysisResults: RestingEcgAnalyzedResult[]

  /**  调度结果 */

  assignResult: AssignedResultDetail

  /**  采集文件描述集合 */

  acquisitionFiles: RestingEcgFileDetail[]

  /**  报告ID */

  id: number

  /**  病人信息 */

  patient: Patient

  /**  报告标签 */

  reportTags: ReportTag[]

  /**  是否脱敏数据 */

  isDesensitization: boolean
}

export interface VoOfAcceptResult {
  /**  受理医生Id */

  acceptDoctorId: number

  /**  受理医生名称 */

  acceptDoctorName: string

  /**  受理时间 */

  acceptTime: string
}

export interface DiagnosisDetail {
  /**  诊断中心所属机构Id */

  diagnosisOrgId: number

  /**  诊断中心所属机构名称 */

  diagnosisOrgName: string

  /**  诊断中心Id */

  diagnosisCenterId: number

  /**  诊断中心名称 */

  diagnosisCenterName: string

  /**  受理医生Id */

  acceptDoctorId: number

  /**  受理医生名称 */

  acceptDoctorName: string

  /**  受理时间 */

  acceptTime: string

  /**  诊断医生Id */

  diagnosisDoctorId: number

  /**  诊断医生姓名 */

  diagnosisDoctorName: string

  /**  诊断时间 */

  diagnosisTime: string

  /**  诊断结果 */

  diagnosisResult: RestingEcgDiagnosisResult

  /**  报告打印采集机构ID */

  printOrgId: string

  /**  报告打印采集机构ID */

  printOrgName: string

  /**  报告打印医生Id */

  printDoctorId: string

  /**  报告打印医生名称 */

  printDoctorName: string

  /**  报告打印时间 */

  printTime: string

  /**  退回医生Id */

  rejectDoctorId: number

  /**  退回医生名称 */

  rejectDoctorName: string

  /**  退回类别：0：未退回 1：加采 2：重采 */

  rejectType: number

  /**  退回原因字典标识 */

  rejectReasonKey: string

  /**  退回原因 */

  rejectReason: string

  /**  退回注意事项描述 */

  rejectRemark: string

  /**  退回时间 */

  rejectTime: string
}

export interface AuditedRestingEcgResultDetail {
  /**  受理审核医生Id */

  acceptAuditDoctorId: number

  /**  受理审核医生名称 */

  acceptAuditDoctorName: string

  /**  受理审核时间 */

  acceptAuditTime: string

  /**  审核类型 0未指定 1 手动审核  2自动审核 */

  auditType: number

  /**  审核 */

  auditResult: RestingEcgDiagnosisResult

  /**  审核医生ID */

  auditDoctorId: number

  /**  审核医生ID */

  auditDoctorName: string

  /**  审核中心ID */

  auditCenterId: number

  /**  审核中心名称 */

  auditCenterName: string

  /**  审核时间 */

  auditTime: string
}

export interface DiagnosisSnapshot {
  /**  快照Id */

  id: number

  /**  报告Id */

  reportId: number

  /**  文件Id */

  acquisitionFileId: number

  /**  快照说明 */

  snapshotRemark: string

  /**  诊断当时所选导联布局 */

  leadLayout: RestingEcgLeadLayout

  /**  基线: BLNONE:0 BLBEST:5 BLFINE:2 BLCOARSE:3 BLFORTEST:1 */

  baselineFilter: number

  /**  低通: LPNONE:0 LP35:1 LP40:2 LP100:3 LP150:4 */

  lowpassFilter: number

  /**  工频: NOTCHNONE:0 NOTCH50:1 NOTCH60:2 */

  notchFilter: number

  /**  走速 12.5  25 50 */

  speed: number

  /**  增益 5   10   20 */

  gain: number

  /**  胸导增益是否减半 */

  gainOfChestLeadIsHalved: boolean

  /**  看图偏移量 */

  diagnosisOffsetMillisecond: number
}

export interface ExaminationDetail {
  /**  检查项目：0：未知 1：静息心电 2：动态心电 3：动态血压 4：实时心电 */

  examinationProject: number

  /**  检查子项目 */

  examinationSubProject: number

  /**  检查子项目名称 */

  examinationSubProjectName: string

  /**  数据来源: 0：未知 1：接口拉取 2：手动创建 3：第三方 */

  examinationSourceType: number

  /**  检查描述（可以是对检查目的的描述，或者对本报告其它注意事项的描述） */

  examinationDescription: string

  /**  检查通行证 */

  passportId: number

  /**  申请单号 */

  registerCode: string

  /**  申请检查医生Id */

  registerDoctorId: string

  /**  申请检查医生名称 */

  registerDoctorName: string

  /**  申请科室 */

  registerDepartment: string

  /**  检查机构ID */

  examinationOrgId: number

  /**  检查机构名称 */

  examinationOrgName: string

  /**  检查机构电话 */

  examinationOrgTel: string

  /**  检查机构类型: 0：未知 1：综合医院 2：妇幼保健院 3：社区卫生服务中心 4：乡镇卫生院 5：疗养院 6:综合门诊部 7:诊所、卫生站 8:村卫生所（站） 9:急救中心 10:临床检验中心 11:专科疾病防治院 12:护理院
13:医学检验实验室 14:其他诊疗机构 */

  examinationOrgType: number

  /**  检查机构简称 */

  examinationOrgAbbreviation: string

  /**  检查机构级别: 0：未知 11：一级甲等 12：一级乙等 13：一级丙等 21：二级甲等 22：二级乙等 23：二级丙等 31：三级甲等 32：三级乙等 33：三级丙等 */

  examinationOrgLevel: number

  /**  检查科室 */

  examinationDepartment: string

  /**  检查科室电话 */

  examinationDepartmentTel: string

  /**  申请部门Id */

  examinationDepartmentId: number

  /**  检查医生Id */

  examinationDoctorId: string

  /**  检查医生名称 */

  examinationDoctorName: string

  /**  检查医生电话 */

  examinationDoctorTel: string

  /**  检查时间 */

  examinationTime: string

  /**  上传时间 */

  uploadTime: string

  /**  设备Id */

  deviceId: string

  /**  设备名称 */

  deviceName: string

  /**  申请诊断医生Id */

  applyDiagnosisDoctorId: string

  /**  申请诊断医生名称 */

  applyDiagnosisDoctorName: string

  /**  申请诊断时间 */

  applyDiagnosisTime: string

  /**  加急医生Id */

  urgentDoctorId: string

  /**  加急医生名称 */

  urgentDoctorName: string

  /**  加急类型：0：无 1：普通加急 9：胸痛加急 */

  urgentType: number

  /**  加急等级：0：无 1：1级 2：2级 3：3级 4：4级 5：5级 */

  urgentLevel: number

  /**  加急时间 */

  urgentTime: string

  /**  取回机构ID */

  retrieveOrgId: number

  /**  取回机构名称 */

  retrieveOrgName: string

  /**  取回医生ID */

  retrieveDoctorId: string

  /**  取回医生名称 */

  retrieveDoctorName: string

  /**  取回时间 */

  retrieveTime: string

  /**  预约申请时间 */

  registerApplyDate: string
}

export interface RestingEcgAnalyzedResult {
  /**  采集ID */

  acquisitionId: number

  /**  AI分析-报告危险级别: 0：未分析 1：采集不良 2：正常 3：阳性 4：危急 */

  aiCriticalLevel: number

  /**  分析结果集合 */

  analysisResults: RestingEcgAnalysisWord[]
}

export interface AssignedResultDetail {
  /**  诊断(审核)中心所属机构Id */

  targetOrgId: number

  /**  诊断(审核)中心所属机构名称 */

  targetOrgName: string

  /**  诊断(审核)中心Id */

  targetCenterId: number

  /**  诊断(审核)中心名称 */

  targetCenterName: string

  /**  诊断(审核)医生Id */

  targetDoctorId: number

  /**  诊断(审核)医生名称 */

  targetDoctorName: string
}

export interface RestingEcgFileDetail {
  /**  文件元信息 */

  metaData: RestingEcgFileMetaData

  /**  测值信息 */

  measurements: Measurements

  /**  基线: BLNONE:0 BLBEST:5 BLFINE:2 BLCOARSE:3 BLFORTEST:1 */

  baselineFilter: number

  /**  低通: LPNONE:0 LP35:1 LP40:2 LP100:3 LP150:4 */

  lowpassFilter: number

  /**  工频: NOTCHNONE:0 NOTCH50:1 NOTCH60:2 */

  notchFilter: number

  /**  走速 12.5  25 50 */

  speed: number

  /**  增益 5   10   20 */

  gain: number
}

export interface Patient {
  /**  病人预约ID（获取方式包括从预约服务获取，或者从接口拉取的数据等，字段为空表示采集端手动创建） */

  registrationId: string

  /**  病人性别 0：未说明   1：男 2：女 9：未知 */

  gender: number

  /**  病人年龄单位：0：岁 1：月 2：天 3：小时 4：分钟 */

  ageUnit: number

  /**  病人身份卡类别：0：无 1：社保卡号 2：医疗卡号 3：体检卡号 */

  identityType: number

  /**  病人来源  0：未知 1：门诊 2：住院 3：急诊 4：体检 */

  source: number

  /**  第三方病人ID */

  thirdPartyId: string

  /**  起搏器信息（0：未说明  1：未佩戴
2：已佩戴，未说明    3：单腔VVI起搏器
4:单腔AAI起搏器   5:双腔起搏器 6：三腔起搏器） */

  pacemakerInfo: number

  /**  病人姓名 */

  name: string

  /**  病人出生年月 */

  birthDate: string

  /**  病人年龄 */

  age: number

  /**  联系方式 */

  tel: string

  /**  联系地址 */

  address: string

  /**  病人身份证号码 */

  idCard: string

  /**  病人身份卡号 */

  identityNo: string

  /**  病人来源类型号码 */

  sourceNo: string

  /**  病历号 */

  admissionId: string

  /**  患者主诉 */

  chiefComplaint: string

  /**  临床诊断 */

  clinicalDiagnosis: string

  /**  既往史 */

  pastHistory: string

  /**  用药情况 */

  medication: string

  /**  病区 */

  ward: string

  /**  床号 */

  bedNo: string

  /**  身高（单位：cm） */

  height: number

  /**  体重（单位：kg） */

  weight: number

  /**  收缩压 */

  sbp: string

  /**  舒张压 */

  dbp: string
}

export interface ReportTag {
  isEnable: boolean

  reportTagExtends: ReportTagExtend[]

  tag: string

  tagName: string
}

export interface RestingEcgDiagnosisResult {
  /**  诊断所用采集ID */

  acquisitionId: number

  /**  测值信息 */

  measurements: Measurements

  /**  基线: BLNONE:0 BLBEST:5 BLFINE:2 BLCOARSE:3 BLFORTEST:1 */

  baselineFilter: number

  /**  低通: LPNONE:0 LP35:1 LP40:2 LP100:3 LP150:4 */

  lowpassFilter: number

  /**  工频: NOTCHNONE:0 NOTCH50:1 NOTCH60:2 */

  notchFilter: number

  /**  胸导增益是否减半 */

  gainOfChestLeadIsHalved: boolean

  /**  走速 12.5  25 50 */

  speed: number

  /**  增益 5   10   20 */

  gain: number

  /**  诊断偏移量 */

  diagnosisOffsetMillisecond: number

  /**  诊断结果集合 */

  diagnosisResult: DiagnosisConclusion

  /**  诊断当时所选导联布局 */

  leadLayout: RestingEcgLeadLayout

  /**  诊断结果级别 */

  doctorCriticalLevel: number
}

export interface RestingEcgLeadLayout {
  /**  列数 */

  column: number

  /**  行数 */

  row: number

  /**  心率导联集合 */

  rhythmLeads: string[]

  /**  导联模式 0：同步导联 1：连续导联 */

  mod: number

  /**  节律导联集合 */

  rhythmModeLeads: string[]

  /**  是否节律模式 */

  isRhythmMod: boolean
}

export interface RestingEcgAnalysisWord {
  /**  词条Id */

  wordId: number

  /**  分析选项集合 */

  analysisOptions: RestingEcgDiagnosisOption[]

  /**  分析描述集合 */

  analysisDescriptions: RestingEcgDiagnosisDescriptionOption[]

  /**  分析描述文本 */

  analysisDescriptionText: string

  /**  分析结果文本 */

  analysisText: string
}

export interface RestingEcgFileMetaData {
  /**  文件类型：0：未知 1：静息心电 2：动态心电 3：动态血压 4：实时心电 */

  examinationProjectType: number

  /**  检查时间 */

  examinationTime: string

  /**  采集ID */

  acquisitionId: number

  /**  文件格式类型 0：未知 1：HL7aecg 2：ANB 3：NB */

  fileFormatType: number

  /**  文件Url */

  fileUrl: string

  /**  文件名称 */

  fileName: string

  /**  压缩类型 */

  compressionType: number

  /**  导联纠错批次号 */

  fixBatchNo: number

  /**  导联纠错备注 */

  leadFixRemark: string
}

export interface Measurements {
  HR: number

  AtrialRate: number

  VentricularRate: number

  T: number

  P: number

  QT: number

  QTc: number

  QRS: number

  PR: number

  RR: number

  QRSaxis: number

  Taxis: number

  Paxis: number

  RI: number

  RIII: number

  RV1: number

  RV2: number

  RV3: number

  RV4: number

  RV5: number

  RV6: number

  SI: number

  SIII: number

  SV1: number

  SV2: number

  SV3: number

  SV4: number

  SV5: number

  SV6: number
}

export interface ReportTagExtend {
  key: string

  keyName: string

  keyValue: string
}

export interface DiagnosisConclusion {
  /**  语言名称 */

  cultureName: string

  diagnosisWords: RestingEcgDiagnosisWord[]

  /**  诊断描述文本 */

  diagnosisDescriptionText: string

  /**  诊断结果文本 */

  diagnosisText: string

  /**  诊断描述富文本 */

  diagnosisDescriptionRichText: string

  /**  诊断结果富文本 */

  diagnosisRichText: string
}

export interface RestingEcgDiagnosisOption {
  /**  选项ID */

  optionId: string

  /**  选项文案 */

  optionText: string
}

export interface RestingEcgDiagnosisDescriptionOption {
  /**  描述ID */

  descriptionId: string

  /**  描述文案 */

  descriptionText: string
}

export interface RestingEcgDiagnosisWord {
  /**  词条Id */

  wordId: number

  /**  诊断选项集合 */

  diagnosisOptions: RestingEcgDiagnosisOption[]

  /**  诊断描述集合 */

  diagnosisDescriptions: RestingEcgDiagnosisDescriptionOption[]

  /**  诊断描述文本 */

  diagnosisDescriptionText: string

  /**  诊断结果文本 */

  diagnosisText: string
}

export interface EMSSResponseListGPSDto {
  data: GPSDto[]

  code: number

  msg: string

  serverTime: number
}

export interface GPSDto {
  /**  患者id */

  patientId: string

  /**  车牌号 */

  carNumber: string

  /**  经度 */

  longitude: number

  /**  纬度 */

  latitude: number

  /**  海拔 */

  altitude: number

  /**  方向 */

  direction: string

  /**  时间 */

  gpsTime: string

  /**  车辆状态 */

  status: STATUS_ENUM

  /**  实际车辆状态 */

  gpsStatus: GPSSTATUS_ENUM
}

export interface EMSSResponseListGPSData {
  data: GPSData[]

  code: number

  msg: string

  serverTime: number
}

export interface GPSData {
  /**  车牌号 */

  carNumber: string

  gpsDtos: GPSDto[]
}

export interface EMSSResponseHospitalDocDto {
  data: HospitalDocDto

  code: number

  msg: string

  serverTime: number
}

export interface HospitalDocDto {
  /**  id */

  id: number

  /**  来源 */

  source: string

  /**  名称（标题） */

  title: string

  /**  作者 */

  author: string

  /**  作者单位 */

  affiliation: string

  /**  刊名 */

  name: string

  /**  年 */

  year: string

  /**  期 */

  stage: string

  /**  DIO */

  dio: string

  /**  摘要 */

  summary: string

  /**  关键词 */

  keyword: string

  /**  源文链接 */

  url: string
}

export interface HospitalDocListRequestDto {
  /**  页码 */

  pageIndex: number

  /**  每页大小 */

  pageSize: number

  /**  关键词 */

  name: string
}

export interface EMSSResponsePageResultHospitalDocDto {
  data: PageResultHospitalDocDto

  code: number

  msg: string

  serverTime: number
}

export interface PageResultHospitalDocDto {
  pagination: Pagination

  records: HospitalDocDto[]
}

export interface HospitalScoreDto {
  /**  id */

  id: number

  /**  姓名 */

  name: string

  /**  性别 */

  gender: GENDER_ENUM

  /**  年龄 */

  age: number

  /**  联系电话 */

  contact_Phone: string

  /**  目前状况 */

  currentSituation: CURRENTSITUATION_ENUM

  /**  家族病史 */

  familyHistory: FAMILYHISTORY_ENUM

  /**  高血压 */

  hypertension: HYPERTENSION_ENUM

  /**  高血压数值 */

  hypertensionValue: string

  /**  高脂血症 */

  hyperlipidemia: HYPERLIPIDEMIA_ENUM

  /**  TC */

  tcValue: string

  /**  TG */

  tgValue: string

  /**  LDL-C */

  ldlcValue: string

  /**  HDL-C */

  hdlcValue: string

  /**  脂蛋白a值 */

  lipoproteinAValue: string

  /**  脂蛋白a单位 */

  lipoproteinAUnit: LIPOPROTEINAUNIT_ENUM

  /**  糖尿病 */

  diabetes: DIABETES_ENUM

  /**  空腹血糖值 */

  fastingBloodSugar: string

  /**  糖化血红蛋白值 */

  glycatedHemoglobin: string

  /**  吸烟 */

  smoking: SMOKING_ENUM

  /**  饮酒 */

  drinking: DRINKING_ENUM

  /**  身高 */

  height: string

  /**  体重 */

  weight: string

  /**  BMI */

  bmiValue: string

  /**  手术出血风险 */

  surgicalBleedingRisk: SURGICALBLEEDINGRISK_ENUM

  /**  未来10年缺血性心血管病发病概率 */

  probability: string

  /**  危险因素控制效果评估 */

  riskEffectAssessment: RISKEFFECTASSESSMENT_ENUM

  /**  评估时间 */

  evaluationTime: string
}

export interface HospitalScoreListRequestDto {
  /**  页码 */

  pageIndex: number

  /**  每页大小 */

  pageSize: number

  /**  姓名 */

  name: string
}

export interface EMSSResponsePageResultHospitalScoreListDto {
  data: PageResultHospitalScoreListDto

  code: number

  msg: string

  serverTime: number
}

export interface PageResultHospitalScoreListDto {
  pagination: Pagination

  records: HospitalScoreListDto[]
}

export interface HospitalScoreListDto {
  /**  Id */

  id: number

  /**  姓名 */

  name: string

  /**  性别 */

  gender: GENDER_ENUM

  /**  性别 */

  genderText: string

  /**  年龄 */

  age: number

  /**  BMI */

  bmiValue: string

  /**  手术出血风险 */

  surgicalBleedingRisk: SURGICALBLEEDINGRISK_ENUM

  /**  手术出血风险 */

  surgicalBleedingRiskText: string

  /**  危险因素控制效果评估 */

  riskEffectAssessment: RISKEFFECTASSESSMENT_ENUM

  /**  手术出血风险 */

  riskEffectAssessmentText: string

  /**  未来10年缺血性心血管病发病概率 */

  probability: string

  /**  评估时间 */

  evaluationTime: string

  /**  创建时间 */

  createTime: string
}

export interface EMSSResponseHospitalScoreDto {
  data: HospitalScoreDto

  code: number

  msg: string

  serverTime: number
}

export interface PlatformMessageRequest {
  /**  消息信息 */

  message: string

  /**  机构id */

  orgIds: number[]
}

export interface PlatformMessagePageRequest {
  /**  页码 */

  pageIndex: number

  /**  每页大小 */

  pageSize: number

  /**  是否已读 */

  isRead: boolean
}

export interface EMSSResponsePageResultPlatformMessageDto {
  data: PageResultPlatformMessageDto

  code: number

  msg: string

  serverTime: number
}

export interface PageResultPlatformMessageDto {
  pagination: Pagination

  records: PlatformMessageDto[]
}

export interface PlatformMessageDto {
  /**  id */

  id: number

  /**  消息信息 */

  message: string

  /**  是否已读 */

  isRead: boolean

  /**  消息读时间 */

  readTime: string

  /**  创建时间 */

  createTime: string
}

export interface EMSSResponsePlatformMessageDto {
  data: PlatformMessageDto

  code: number

  msg: string

  serverTime: number
}

export interface PreCareDto {
  /**  姓名 */

  name: string

  /**  性别 */

  gender: GENDER_ENUM

  /**  年龄 */

  age: number

  /**  民族 */

  nation: NATION_ENUM

  /**  紧急联系人[新增] */

  contact_Name: string

  /**  联系电话 */

  contact_Phone: string

  /**  证件类型 */

  credentials_Type: CREDENTIALS_TYPE_ENUM

  /**  证件号 */

  idCard: string

  /**  出生日期[新增] */

  birthDate: string

  /**  职业 */

  job: JOB_ENUM

  /**  文化程度 */

  cultureDegree: CULTUREDEGREE_ENUM

  /**  婚姻状况 */

  maritalStatus: MARITALSTATUS_ENUM

  /**  病人是否已育 */

  haveChild: HAVECHILD_ENUM

  /**  身高 */

  height: number

  /**  体重 */

  weight: string

  /**  病人血型 */

  blood_Type: string

  /**  病人籍贯 */

  native_Place: string

  /**  病人国家 */

  country: string

  /**  电子邮箱 */

  email: string

  /**  病人其它病史 */

  other_History: string

  /**  病人家族病史 */

  family_History: string

  /**  病人其它家族病史 */

  other_Family_History: string

  /**  病人药物禁忌 */

  drug_Taboos: string

  /**  发病时间 */

  attack_Time: string

  /**  受理时间(新增) */

  accept_time: string

  /**  接警时间(新增) */

  alarm_time: string

  /**  车辆出发时间(新增) */

  set_out_time: string

  /**  是否延时出车 */

  set_out: SET_OUT_ENUM

  /**  延时出车原因(新增) */

  set_out_delay: string

  /**  是否未及时接听电话 */

  missing_tel: MISSING_TEL_ENUM

  /**  未及时接听电话原因 */

  missing_cause: string

  /**  是否繁忙超时 */

  accept_tel: ACCEPT_TEL_ENUM

  /**  受理繁忙原因 */

  acceping_cause: string

  /**  是否接警超时 */

  timeout_tel: TIMEOUT_TEL_ENUM

  /**  接警超时原因 */

  timeout_cause: string

  /**  是否派车超时 */

  cardelay: CARDELAY_ENUM

  /**  派车超时原因 */

  overtime_cause: string

  /**  调度台工作状态 */

  dispatcher_type: DISPATCHER_TYPE_ENUM

  /**  院前诊断 */

  prehospital_diagnosis: PREHOSPITAL_DIAGNOSIS_ENUM

  /**  院前诊断备注 */

  prehospital_diagnosis_tip: string

  /**  院前是否死亡 */

  prehospital_death: PREHOSPITAL_DEATH_ENUM

  /**  发病时间无法精确到分钟 */

  is_Null_Attack_Detail_Time: IS_NULL_ATTACK_DETAIL_TIME_ENUM

  /**  发病区间 */

  attack_Zone: ATTACK_ZONE_ENUM

  /**  发病地址（省） */

  province: string

  /**  发病地址（市） */

  city: string

  /**  发病地址（县） */

  area: string

  /**  发病详细地址 */

  attack_Address: string

  /**  家庭地址[新增] */

  home_Address: string

  /**  接车地址（省）[新增] */

  pickUp_Address_Province: string

  /**  接车地址（市） */

  pickUp_Address_City: string

  /**  接车地址(县) */

  pickUp_Address_Area: string

  /**  接车详细地址 */

  pickUp_Address: string

  /**  医保类型 */

  medical_Insurance_Type: MEDICAL_INSURANCE_TYPE_ENUM

  /**  医保编号 */

  medical_Insurance_No: string

  /**  大病医保 */

  serious_Illness_Insurance: SERIOUS_ILLNESS_INSURANCE_ENUM

  /**  病人社保卡号 */

  sin_Card: string

  /**  意识 */

  consciousness_Type: CONSCIOUSNESS_TYPE_ENUM

  /**  呼吸 */

  respiration_Rate: number

  /**  脉搏 */

  pulserat: number

  /**  心率 */

  heart_Rate: number

  /**  左上肢血压 以/分开高低压，血压值范围不能超过260或小于40，且高压（收缩压）必须大于低压（舒张压） */

  blood_Pressure: string

  /**  右上肢血压 以/分开高低压，血压值范围不能超过260或小于40，且高压（收缩压）必须大于低压（舒张压） */

  right_Blood_Pressure: string

  /**  体温 */

  temperature: string

  /**  血糖[新增] */

  bloodSugar: string

  /**  出车单位 */

  cW_120_Ambulance_Department: CW_120_AMBULANCE_DEPARTMENT_ENUM

  /**  呼救时间 */

  cW_120_Help_Time: string

  /**  送达医院名称 */

  cW_120_Hospital_Name: string

  /**  到达医院大门时间 */

  cW_120_Arrived_Hospital_Time: string

  /**  直接转送上级医院 */

  cW_120_Is_Trans_Hospital: CW_120_IS_TRANS_HOSPITAL_ENUM

  /**  直达导管室 */

  cW_120_Is_Direct_Conduit_Room: CW_120_IS_DIRECT_CONDUIT_ROOM_ENUM

  /**  首次医疗接触时间 */

  cW_120_First_Mc_Time: string

  /**  首诊医师接诊时间 */

  cW_120_First_Doctor_Time: string

  /**  医护人员 */

  cW_120_First_Doctor_Name: string

  /**  溶栓筛查 */

  screening: SCREENING_ENUM

  /**  存在禁忌症 */

  throm_Contraindication: THROM_CONTRAINDICATION_ENUM

  /**  溶栓治疗 */

  is_Thrombolysis: IS_THROMBOLYSIS_ENUM

  /**  直达溶栓场所 */

  is_Direct: IS_DIRECT_ENUM

  /**  溶栓场所 */

  throm_Treatment_Place: THROM_TREATMENT_PLACE_ENUM

  /**  开始知情同意 */

  start_Agree_Time: string

  /**  签署知情同意书 */

  sign_Agree_Time: string

  /**  开始溶栓时间 */

  throm_Start_Time: string

  /**  溶栓结束时间 */

  throm_End_Time: string

  /**  药物 */

  throm_Drug_Type: THROM_DRUG_TYPE_ENUM

  /**  剂量 */

  throm_Drug_Code: THROM_DRUG_CODE_ENUM

  /**  溶栓再通 */

  is_Repatency: IS_REPATENCY_ENUM

  /**  溶栓后造影时间 */

  start_Radiography_Time: string

  /**  补救 PCI */

  is_Repci: IS_REPCI_ENUM

  /**  实际手术时间 */

  operation_Time: string

  /**  手术地点 */

  hospital_Position: HOSPITAL_POSITION_ENUM

  /**  患者情况备注 */

  patient_Remark: string

  /**  心电图(新增) */

  ecg_Image: string

  /**  生命体征(新增) */

  smtZ_Image: string

  /**  POCT(新增) */

  pocT_Image: string

  /**  心电图 */

  haS_ECG_IMAGE: HAS_ECG_IMAGE_ENUM

  /**  心电图集合 */

  ecGs: PreECGDto[]

  /**  心电图集合 */

  ecgString: string

  /**  肌钙蛋白[新增] */

  isCtnt: ISCTNT_ENUM

  /**  肌钙蛋白集合 */

  ctnts: CTNTDto[]

  /**  肌钙蛋白集合 */

  ctntString: string

  /**  血清肌酐[新增] */

  isCr: ISCR_ENUM

  /**  血清肌酐(数值) */

  cr_Value: string

  /**  D-二聚体[新增] */

  isDdimer: ISDDIMER_ENUM

  /**  D-二聚体(数值) */

  ddimer_Value: string

  /**  D-二聚体(单位) */

  ddimer_Unit: DDIMER_UNIT_ENUM

  /**  BNP[新增] */

  isBNP: ISBNP_ENUM

  /**  BNP(数值) */

  bnp_Value: string

  /**  NT-proBNP[新增] */

  isNTprobnp: ISNTPROBNP_ENUM

  /**  NT-proBNP(数值) */

  nTprobnp_Value: string

  /**  Myo[新增] */

  isMyo: ISMYO_ENUM

  /**  Myo(数值) */

  myo_Value: string

  /**  Myo(单位) */

  myo_Unit: MYO_UNIT_ENUM

  /**  CKMB[新增] */

  isCkmb: ISCKMB_ENUM

  /**  CKMB(数值) */

  ckmb_Value: string

  /**  CKMB(单位) */

  ckmb_Unit: CKMB_UNIT_ENUM

  /**  创建时间 */

  create_Time: string

  /**  修改时间 */

  update_Time: string

  /**  是否删除 */

  is_Deleted: IS_DELETED_ENUM

  /**  120车牌号 */

  car_Number: string

  /**  120出车时间 */

  car_Departure_Time: string

  /**  120接到呼救时间 */

  car_Call_Help_Time: string

  /**  120到达时间 */

  car_Arrival_Time: string

  /**  120离开现场时间 */

  car_Leave_Time: string

  /**  120首份心电图时间 */

  car_First_ecg_Time: string

  /**  120抽血时间 */

  car_Blood_draw_Time: string

  /**  120肌钙蛋白时间 */

  car_Troponin_Time: string

  /**  瞳孔检查 */

  pupilExamination: PUPILEXAMINATION_ENUM

  /**  瞳孔检查其他 */

  pupilExaminationOther: string

  /**  光反射检查 */

  lightReflectionExamination: LIGHTREFLECTIONEXAMINATION_ENUM

  /**  光反射检查其他 */

  lightReflectionExaminationOther: string

  /**  意识检查 */

  consciousExamination: CONSCIOUSEXAMINATION_ENUM

  /**  意识检查其他 */

  consciousExaminationOther: string

  /**  气道检查 */

  airWayExamination: AIRWAYEXAMINATION_ENUM

  /**  气道检查其他 */

  airWayExaminationOther: string

  /**  循环检查 */

  circulateExamination: string

  /**  循环检查其他 */

  circulateExaminationOther: string

  /**  脉搏检查 */

  pulseCheck: PULSECHECK_ENUM

  /**  脉搏检查其他 */

  pulseCheckOther: string

  /**  心率检查 */

  heartRateExamination: HEARTRATEEXAMINATION_ENUM

  /**  心率检查其他 */

  heartRateExaminationOther: string

  /**  皮肤粘膜 */

  skinAndMucousMembraneExamination: SKINANDMUCOUSMEMBRANEEXAMINATION_ENUM

  /**  皮肤粘膜其他 */

  skinAndMucousMembraneExaminationOther: string

  /**  胸部检查 */

  chestExamination: CHESTEXAMINATION_ENUM

  /**  胸部检查其他 */

  chestExaminationOther: string

  /**  腹部检查 */

  abdomenExamination: ABDOMENEXAMINATION_ENUM

  /**  腹部检查其他 */

  abdomenExaminationOther: string

  /**  肠鸣检查 */

  bowelSoundExamination: BOWELSOUNDEXAMINATION_ENUM

  /**  肠鸣检查其他 */

  bowelSoundExaminationOther: string

  /**  肌力检查 */

  muscleStrengthExamination: MUSCLESTRENGTHEXAMINATION_ENUM

  /**  肌力检查其他 */

  muscleStrengthExaminationOther: string

  /**  肌张力检查 */

  muscleTensionExamination: MUSCLETENSIONEXAMINATION_ENUM

  /**  肌张力检查其他 */

  muscleTensionExaminationOther: string

  /**  骨折检查 */

  fractureExamination: FRACTUREEXAMINATION_ENUM

  /**  骨折检查其他 */

  fractureExaminationOther: string

  /**  补充其他体格检查 */

  otherPhysiqueExamination: string

  /**  主诉 */

  chiefComplaint: string

  /**  现病史 */

  currentHistory: string

  /**  既往病史 */

  medicalHistory: string

  /**  过敏史 */

  drugAllergy: string

  /**  抢救措施 */

  rescueMeasures: string

  /**  抢救措施其他 */

  rescueMeasuresOther: string

  /**  用药情况 */

  medication: string
}

export interface PreECGDto {
  /**  心电图诊断结论 */

  ecgDiagnosed: string

  /**  心电图时间 */

  ecG_TIME: string

  /**  心电诊断时间 */

  ecG_DIAGNOSE_TIME: string

  /**  心电文件 */

  ecgImageFileString: string

  /**  心电文件 */

  ecgImageFiles: string[]
}

export interface CTNTDto {
  /**  类型 */

  type: TYPE_ENUM

  /**  数值 */

  value: string

  /**  单位 */

  unit: UNIT_ENUM

  /**  状态 */

  status: STATUS_ENUM

  /**  抽血完成时间 */

  blood_Time: string

  /**  获得报告时间 */

  report_Time: string
}

export interface PreCareListRequestDto {
  /**  页码 */

  pageIndex: number

  /**  每页大小 */

  pageSize: number

  /**  姓名 */

  name: string

  /**  发病开始时间 */

  attackStartTime: string

  /**  发病结束时间 */

  attackEndTime: string

  /**  发车开始时间 */

  departureStartTime: string

  /**  发车结束时间 */

  departureEndTime: string

  /**  接车开始时间 */

  arrivalStartTime: string

  /**  接车结束时间 */

  arrivalEndTime: string

  /**  接收结构 */

  assignOrgId: number

  /**  车牌号 */

  car_Number: string

  /**  排序字段 */

  orderField: string

  /**  排序类型 */

  orderByType: ORDERBYTYPE_ENUM
}

export interface EMSSResponsePageResultPreCareListDto {
  data: PageResultPreCareListDto

  code: number

  msg: string

  serverTime: number
}

export interface PageResultPreCareListDto {
  pagination: Pagination

  records: PreCareListDto[]
}

export interface PreCareListDto {
  /**  档案Id */

  id: number

  /**  姓名 */

  name: string

  /**  性别 */

  gender: GENDER_ENUM

  /**  性别 */

  genderText: string

  /**  年龄 */

  age: number

  /**  证件类型 */

  credentials_Type: CREDENTIALS_TYPE_ENUM

  /**  证件类型 */

  credentials_TypeText: string

  /**  证件号 */

  idCard: string

  /**  发病时间 */

  attack_Time: string

  /**  120出车时间 */

  car_Departure_Time: string

  /**  120到达时间 */

  car_Arrival_Time: string

  /**  主诉 */

  chiefComplaint: string

  /**  接收机构ID（调度）多个用,分割 */

  assignOrgId: string

  /**  接收机构名称（调度）多个用,分割 */

  assignOrgName: string

  /**  建档时间 */

  createTime: string

  /**  120车牌号 */

  car_Number: string
}

export interface PreAssignDto {
  /**  调度机构id */

  assignOrgId: number

  /**  备注 */

  remark: string
}

export interface PreHospitalDto {
  /**  姓名 */

  name: string

  /**  性别 */

  gender: GENDER_ENUM

  /**  年龄 */

  age: number

  /**  民族 */

  nation: NATION_ENUM

  /**  联系电话 */

  contact_Phone: string

  /**  证件类型 */

  credentials_Type: CREDENTIALS_TYPE_ENUM

  /**  证件号 */

  idCard: string

  /**  职业 */

  job: JOB_ENUM

  /**  文化程度 */

  cultureDegree: CULTUREDEGREE_ENUM

  /**  婚姻状况 */

  maritalStatus: MARITALSTATUS_ENUM

  /**  病人是否已育 */

  haveChild: HAVECHILD_ENUM

  /**  身高 */

  height: number

  /**  体重 */

  weight: string

  /**  病人血型 */

  blood_Type: string

  /**  病人籍贯 */

  native_Place: string

  /**  病人国家 */

  country: string

  /**  电子邮箱 */

  email: string

  /**  病人其它病史 */

  other_History: string

  /**  病人家族病史 */

  family_History: string

  /**  病人其它家族病史 */

  other_Family_History: string

  /**  病人药物禁忌 */

  drug_Taboos: string

  /**  发病时间 */

  attack_Time: string

  /**  发病时间无法精确到分钟 */

  is_Null_Attack_Detail_Time: IS_NULL_ATTACK_DETAIL_TIME_ENUM

  /**  发病区间 */

  attack_Zone: ATTACK_ZONE_ENUM

  /**  发病地址（省） */

  province: string

  /**  发病地址（市） */

  city: string

  /**  发病地址（县） */

  area: string

  /**  发病详细地址 */

  attack_Address: string

  /**  医保类型 */

  medical_Insurance_Type: MEDICAL_INSURANCE_TYPE_ENUM

  /**  医保编号 */

  medical_Insurance_No: string

  /**  大病医保 */

  serious_Illness_Insurance: SERIOUS_ILLNESS_INSURANCE_ENUM

  /**  病人社保卡号 */

  sin_Card: string

  /**  意识 */

  consciousness_Type: CONSCIOUSNESS_TYPE_ENUM

  /**  呼吸 */

  respiration_Rate: number

  /**  脉搏 */

  pulserat: number

  /**  心率 */

  heart_Rate: number

  /**  血压 */

  blood_Pressure: string

  /**  体温 */

  temperature: string

  /**  出车单位 */

  cW_120_Ambulance_Department: CW_120_AMBULANCE_DEPARTMENT_ENUM

  /**  呼救时间 */

  cW_120_Help_Time: string

  /**  送达医院名称 */

  cW_120_Hospital_Name: string

  /**  到达医院大门时间 */

  cW_120_Arrived_Hospital_Time: string

  /**  直接转送上级医院 */

  cW_120_Is_Trans_Hospital: CW_120_IS_TRANS_HOSPITAL_ENUM

  /**  直达导管室 */

  cW_120_Is_Direct_Conduit_Room: CW_120_IS_DIRECT_CONDUIT_ROOM_ENUM

  /**  首次医疗接触时间 */

  cW_120_First_Mc_Time: string

  /**  首诊医师接诊时间 */

  cW_120_First_Doctor_Time: string

  /**  医护人员 */

  cW_120_First_Doctor_Name: string

  /**  溶栓筛查 */

  screening: SCREENING_ENUM

  /**  存在禁忌症 */

  throm_Contraindication: THROM_CONTRAINDICATION_ENUM

  /**  溶栓治疗 */

  is_Thrombolysis: IS_THROMBOLYSIS_ENUM

  /**  直达溶栓场所 */

  is_Direct: IS_DIRECT_ENUM

  /**  溶栓场所 */

  throm_Treatment_Place: THROM_TREATMENT_PLACE_ENUM

  /**  开始知情同意 */

  start_Agree_Time: string

  /**  签署知情同意书 */

  sign_Agree_Time: string

  /**  开始溶栓时间 */

  throm_Start_Time: string

  /**  溶栓结束时间 */

  throm_End_Time: string

  /**  药物 */

  throm_Drug_Type: THROM_DRUG_TYPE_ENUM

  /**  剂量 */

  throm_Drug_Code: THROM_DRUG_CODE_ENUM

  /**  溶栓再通 */

  is_Repatency: IS_REPATENCY_ENUM

  /**  溶栓后造影时间 */

  start_Radiography_Time: string

  /**  补救 PCI */

  is_Repci: IS_REPCI_ENUM

  /**  实际手术时间 */

  operation_Time: string

  /**  手术地点 */

  hospital_Position: HOSPITAL_POSITION_ENUM

  /**  患者情况备注 */

  patient_Remark: string

  /**  心电图 */

  haS_ECG_IMAGE: HAS_ECG_IMAGE_ENUM

  /**  心电图集合 */

  ecGs: ECGDto[]

  /**  心电图集合 */

  ecgString: string

  /**  肌钙蛋白集合 */

  ctnts: CTNTDto[]

  /**  肌钙蛋白集合 */

  ctntString: string

  /**  血清肌酐(数值) */

  cr_Value: string

  /**  D-二聚体(数值) */

  ddimer_Value: string

  /**  D-二聚体(单位) */

  ddimer_Unit: DDIMER_UNIT_ENUM

  /**  BNP(数值) */

  bnp_Value: string

  /**  NT-proBNP(数值) */

  nTprobnp_Value: string

  /**  Myo(数值) */

  myo_Value: string

  /**  Myo(单位) */

  myo_Unit: MYO_UNIT_ENUM

  /**  CKMB(数值) */

  ckmb_Value: string

  /**  CKMB(单位) */

  ckmb_Unit: CKMB_UNIT_ENUM

  /**  创建时间 */

  create_Time: string

  /**  修改时间 */

  update_Time: string

  /**  是否删除 */

  is_Deleted: IS_DELETED_ENUM

  /**  120车牌号 */

  car_Number: string

  /**  120出车时间 */

  car_Departure_Time: string

  /**  120接到呼救时间 */

  car_Call_Help_Time: string

  /**  120到达时间 */

  car_Arrival_Time: string

  /**  120首份心电图时间 */

  car_First_ecg_Time: string

  /**  120抽血时间 */

  car_Blood_draw_Time: string

  /**  120肌钙蛋白时间 */

  car_Troponin_Time: string
}

export interface ECGDto {
  /**  心电图时间 */

  ecG_TIME: string

  /**  心电诊断时间 */

  ecG_DIAGNOSE_TIME: string

  /**  心电文件 */

  ecgImageFileString: string

  /**  心电文件 */

  ecgImageFiles: string[]
}

export interface EcgPatientDto {
  /**  姓名 */

  fullName: string

  /**  性别 */

  gender: GENDER_ENUM

  /**  医院名称 */

  hospitalName: string

  /**  年龄 */

  age: number

  /**  电话 */

  phone: string

  /**  身份证号 */

  idCardNo: string

  /**  身高 */

  height: number

  /**  体重 */

  weight: string

  /**  紧急联系人 */

  contactPeople: string

  /**  紧急联系人电话 */

  contactPhone: string

  /**  身体状况 */

  physicalCondition: number[]

  /**  其他身体状况 */

  otherPhysicalCondition: string

  /**  病史 */

  medicalHistory: number[]

  /**  医院省 */

  hospitalProvince: string

  /**  医院市区 */

  hospitalCity: string

  /**  医院区县 */

  hospitalCounty: string

  /**  医院等级 */

  hospitalGrade: HOSPITALGRADE_ENUM

  /**  医院经度 */

  hospitalLongitude: number

  /**  医院经度 */

  hospitalLatitude: number

  /**  医院代码 */

  hospitalAreaCode: string

  /**  心电图采集时间 */

  ecgAcquisitionTime: string

  /**  心电图上传完成时间 */

  ecgCollectTime: string

  /**  评估医生 */

  assessingDoctor: string

  /**  开始评估时间 */

  assessingStartTime: string

  /**  评估完成时间 */

  assessingCompleteTime: string

  /**  审核医生 */

  auditDoctor: string

  /**  开始审核时间 */

  auditStartTime: string

  /**  审核完成时间 */

  auditCompleteTime: string

  /**  诊断内容 */

  diagnosisResult: string

  /**  评估分级 */

  assessmentGrade: ASSESSMENTGRADE_ENUM

  /**  心电图状态 */

  ecgStatus: ECGSTATUS_ENUM

  /**  心电图文件 */

  ecgFile: string

  /**  心电图文件类型 */

  ecgFileType: ECGFILETYPE_ENUM

  /**  心电图dicom文件 */

  ecgDicomFile: string
}

export interface EMSSResponsePageResultHospitalCredentialDto {
  data: PageResultHospitalCredentialDto

  code: number

  msg: string

  serverTime: number
}

export interface PageResultHospitalCredentialDto {
  pagination: Pagination

  records: HospitalCredentialDto[]
}

export interface HospitalCredentialDto {
  /**  id */

  id: number

  /**  单位ID */

  hospitalId: string

  /**  单位名称 */

  hospitalName: string

  /**  单位编码（脑防委提供） */

  hospitalCode: string

  /**  授权码（脑防委提供） */

  authCode: string

  /**  备注 */

  remark: string

  /**  录入人 */

  nickName: string
}

export interface EMSSResponseHospitalCredentialDto {
  data: HospitalCredentialDto

  code: number

  msg: string

  serverTime: number
}

export enum FILLSTATUSES_ENUM {
  1,

  2,

  3,

  4
}

export enum ORDERBYTYPE_ENUM {
  0,

  1
}

export enum FILLSTATUS_ENUM {
  1,

  2,

  3,

  4
}

export enum ARCHIVESIMPORTERRORTYPE_ENUM {
  0,

  1
}

export enum FIELDDISPLAYTYPE_ENUM {
  1,

  2,

  3,

  4,

  5,

  6,

  7,

  8,

  9,

  10,

  11,

  12,

  13,

  14,

  15,

  16,

  17,

  18,

  19,

  20,

  21,

  22,

  23,

  24,

  25,

  26,

  27,

  28,

  29
}

export enum FIELDVALUETYPE_ENUM {
  0,

  1,

  2,

  3,

  4,

  5,

  6,

  7,

  8,

  9,

  10,

  11,

  12,

  13,

  14,

  15,

  16,

  18
}

export enum REQUIREDTYPE_ENUM {
  1,

  2
}

export enum VALIDATETYPE_ENUM {
  1,

  2,

  3,

  4,

  5
}

export enum TYPE_ENUM {
  1,

  2
}

export enum ENUMGENDER_ENUM {
  1,

  2
}

export enum ECGFILETYPE_ENUM {
  1,

  2,

  3,

  4,

  5
}

export enum STATUS_ENUM {
  0,

  1,

  2
}

export enum GPSSTATUS_ENUM {
  0,

  1,

  2
}

export enum GENDER_ENUM {
  1,

  2
}

export enum CURRENTSITUATION_ENUM {
  1,

  2,

  3,

  4
}

export enum FAMILYHISTORY_ENUM {
  0,

  1
}

export enum HYPERTENSION_ENUM {
  0,

  1
}

export enum HYPERLIPIDEMIA_ENUM {
  0,

  1
}

export enum LIPOPROTEINAUNIT_ENUM {
  1,

  2
}

export enum DIABETES_ENUM {
  0,

  1
}

export enum SMOKING_ENUM {
  0,

  1
}

export enum DRINKING_ENUM {
  0,

  1
}

export enum SURGICALBLEEDINGRISK_ENUM {
  1,

  2,

  3,

  4
}

export enum RISKEFFECTASSESSMENT_ENUM {
  1,

  2,

  3,

  4
}

export enum NATION_ENUM {
  1,

  2,

  3,

  4,

  5,

  6,

  7,

  8,

  9,

  10,

  11,

  12,

  13,

  14,

  15,

  16,

  17,

  18,

  19,

  20,

  21,

  22,

  23,

  24,

  25,

  26,

  27,

  28,

  29,

  30,

  31,

  32,

  33,

  34,

  35,

  36,

  37,

  38,

  39,

  40,

  41,

  42,

  43,

  44,

  45,

  46,

  47,

  48,

  49,

  50,

  51,

  52,

  53,

  54,

  55,

  56,

  97,

  98
}

export enum CREDENTIALS_TYPE_ENUM {
  0,

  1,

  2,

  3
}

export enum JOB_ENUM {
  1,

  2,

  3,

  4,

  5,

  6,

  7,

  8,

  9,

  10,

  11
}

export enum CULTUREDEGREE_ENUM {
  1,

  2,

  3,

  4,

  5,

  6,

  9
}

export enum MARITALSTATUS_ENUM {
  1,

  2,

  3,

  4,

  9
}

export enum HAVECHILD_ENUM {
  0,

  1
}

export enum SET_OUT_ENUM {
  0,

  1
}

export enum MISSING_TEL_ENUM {
  0,

  1
}

export enum ACCEPT_TEL_ENUM {
  0,

  1
}

export enum TIMEOUT_TEL_ENUM {
  0,

  1
}

export enum CARDELAY_ENUM {
  0,

  1
}

export enum DISPATCHER_TYPE_ENUM {
  0,

  1
}

export enum PREHOSPITAL_DIAGNOSIS_ENUM {
  1,

  2,

  3,

  4
}

export enum PREHOSPITAL_DEATH_ENUM {
  0,

  1
}

export enum IS_NULL_ATTACK_DETAIL_TIME_ENUM {
  0,

  1
}

export enum ATTACK_ZONE_ENUM {
  1,

  2,

  3,

  4,

  5,

  6,

  7
}

export enum MEDICAL_INSURANCE_TYPE_ENUM {
  1,

  2,

  3,

  4,

  5
}

export enum SERIOUS_ILLNESS_INSURANCE_ENUM {
  0,

  1
}

export enum CONSCIOUSNESS_TYPE_ENUM {
  1,

  2,

  3,

  4
}

export enum CW_120_AMBULANCE_DEPARTMENT_ENUM {
  1,

  2,

  3
}

export enum CW_120_IS_TRANS_HOSPITAL_ENUM {
  0,

  1
}

export enum CW_120_IS_DIRECT_CONDUIT_ROOM_ENUM {
  0,

  1
}

export enum SCREENING_ENUM {
  1,

  2,

  3
}

export enum THROM_CONTRAINDICATION_ENUM {
  0,

  1
}

export enum IS_THROMBOLYSIS_ENUM {
  0,

  1
}

export enum IS_DIRECT_ENUM {
  0,

  1
}

export enum THROM_TREATMENT_PLACE_ENUM {
  1,

  2
}

export enum THROM_DRUG_TYPE_ENUM {
  1,

  2,

  3
}

export enum THROM_DRUG_CODE_ENUM {
  1,

  2
}

export enum IS_REPATENCY_ENUM {
  0,

  1
}

export enum IS_REPCI_ENUM {
  0,

  1
}

export enum HOSPITAL_POSITION_ENUM {
  1,

  2
}

export enum HAS_ECG_IMAGE_ENUM {
  0,

  1
}

export enum ISCTNT_ENUM {
  0,

  1
}

export enum ISCR_ENUM {
  0,

  1
}

export enum ISDDIMER_ENUM {
  0,

  1
}

export enum DDIMER_UNIT_ENUM {
  1,

  2,

  3,

  4
}

export enum ISBNP_ENUM {
  0,

  1
}

export enum ISNTPROBNP_ENUM {
  0,

  1
}

export enum ISMYO_ENUM {
  0,

  1
}

export enum MYO_UNIT_ENUM {
  1,

  2
}

export enum ISCKMB_ENUM {
  0,

  1
}

export enum CKMB_UNIT_ENUM {
  1,

  2,

  3,

  4
}

export enum IS_DELETED_ENUM {
  0,

  1
}

export enum PUPILEXAMINATION_ENUM {
  1,

  2,

  3,

  4,

  5,

  6
}

export enum LIGHTREFLECTIONEXAMINATION_ENUM {
  1,

  2,

  3,

  4
}

export enum CONSCIOUSEXAMINATION_ENUM {
  1,

  2,

  3,

  4,

  5,

  6,

  7,

  8
}

export enum AIRWAYEXAMINATION_ENUM {
  1,

  2,

  3,

  4
}

export enum PULSECHECK_ENUM {
  1,

  2,

  3,

  4,

  5,

  6
}

export enum HEARTRATEEXAMINATION_ENUM {
  1,

  2,

  3,

  4
}

export enum SKINANDMUCOUSMEMBRANEEXAMINATION_ENUM {
  1,

  2,

  3,

  4,

  5,

  6
}

export enum CHESTEXAMINATION_ENUM {
  1,

  2,

  3,

  4,

  5,

  6
}

export enum ABDOMENEXAMINATION_ENUM {
  1,

  2,

  3,

  4,

  5,

  6,

  7,

  8,

  9,

  10,

  11
}

export enum BOWELSOUNDEXAMINATION_ENUM {
  1,

  2,

  3,

  4,

  5
}

export enum MUSCLESTRENGTHEXAMINATION_ENUM {
  0,

  1,

  2,

  3,

  4,

  5
}

export enum MUSCLETENSIONEXAMINATION_ENUM {
  1,

  2,

  3,

  4
}

export enum FRACTUREEXAMINATION_ENUM {
  1,

  2,

  3
}

export enum UNIT_ENUM {
  1,

  2,

  3,

  4,

  5
}

export enum HOSPITALGRADE_ENUM {
  1,

  2,

  3,

  4,

  5
}

export enum ASSESSMENTGRADE_ENUM {
  1,

  2,

  3,

  4
}

export enum ECGSTATUS_ENUM {
  1,

  2
}
