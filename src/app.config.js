// Copyright (c) Microsoft. All rights reserved.
const baseUrl = '';

const Config = {
  // TEMP: Base service urls
  serviceUrls: {
    config: `${baseUrl}/config/v1/`,
    iotHubManager: `${baseUrl}/iothubmanager/v1/`,
    telemetry: `${baseUrl}/telemetry/v1/`
  },
  // Constants
  defaultAjaxTimeout: 10000, // 10s
  maxRetryAttempts: 2,
  retryWaitTime: 2000, // On retryable error, retry after 2s
  retryableStatusCodes: new Set([ 0, 502, 503 ]),
  paginationPageSize: 50,
  clickDebounceTime: 180
};

export default Config;
