/**
 * Api状态切片，
 */

/**
 * @typedef {import('@reduxjs/toolkit/dist/query/fetchBaseQuery').FetchBaseQueryArgs} FetchBaseQueryArgs
 */

/**
 * @typedef {{
 *   originalArgs?: unknown;
 *   data?: any;
 *   currentData?: any;
 *   error?: unknown;
 *   requestId?: string;
 *   endpointName?: string;
 *   startedTimeStamp?: number;
 *   fulfilledTimeStamp?: number;
 *   isUninitialized: boolean;
 *   isLoading: boolean;
 *   isFetching: boolean;
 *   isSuccess: boolean;
 *   isError: boolean;
 * }}  UseQueryStateResult
 */

/**
 * @typedef {{
 *   skip?: boolean;
 *   pollingInterval?: number;
 *   refetchOnReconnect?: boolean;
 *   refetchOnFocus?: boolean;
 *   refetchOnMountOrArgChange?: boolean | number;
 *   selectFromResult?: (result: UseQueryStateResult) => any;
 * }} UseQueryOption
 */

/**
 * @typedef {{
 *   originalArgs?: any;
 *   data?: any;
 *   currentData?: any;
 *   error?: any;
 *   requestId?: string;
 *   endpointName?: string;
 *   startedTimeStamp?: number;
 *   fulfilledTimeStamp?: number;
 *   isUninitialized: boolean;
 *   isLoading: boolean;
 *   isFetching: boolean;
 *   isError: boolean;
 *   refetch: () => void;
 * }} UseQueryResult
 */

/**
 * TODO: 更新JSDOC
 * @typedef {(any) => UseQueryResult} QueryOptions
 */
/**
 * @typedef {[trigger: function]} useMutationResult
 */

import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import {
  clearAccessToken,
  clearRefreshToken,
  getAccessToken,
  getRefreshToken,
  isTokenPermanent,
  setAccessToken,
  setRefreshToken,
} from '../utils/auth';
import { parseJSONToFormData } from '../utils/parse';

/**
 * baseQuery相关的配置，默认获取Token
 * @type {FetchBaseQueryArgs}
 */
const options = {
  baseUrl: process.env.BASE_URL,
  prepareHeaders(headers) {
    // headers各个切片中配置读取后生成的header，相当于是拦截，可在这里覆盖之前的配置
    if (!headers.get('Authorization')) {
      // const token = tokenSelector(getState());
      const token = getAccessToken() || '';
      if (token) {
        if (process.env.NODE_ENV !== 'production') {
          // headers.set('Authorization', `Bearer Wao8KD06jLKL9gjaSACg1OIp581c4n5jug8UoqIgDW`);
          // headers.set('user', JSON.stringify({"roleIds": [15]}));
        }
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  },
  credentials: 'include',
  mode: 'cors',
};
const baseQuery = fetchBaseQuery(options);
// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });
// 返回登录页的timer
let timer = null;
const mutex = new Mutex();
/**
 * ## 简介：
 * 对fetchBaseQuery的封装，提取数据，这里可以加入路由拦截，判断是否鉴权成功
 * 目前只有Oauth系统是成功后不返回data.status，需要单独拦截处理；
 * 其他情况会判断响应体中的业务status，判断是否提取数据
 *
 * ## 错误处理：
 * * 4xx之外的错误码将进行重试
 * * 如果401，那么判断是否有refreshToken，如果存在，则刷新token，重新请求；不存在，则弹出消息，返回登录页
 *
 * ## 注意:
 * ！！！ 由于使用fetchBaseQuery，其内部自己捕获了错误进行处理，所以不使用try, catch，若使用其他实现，需要处理
 *
 * baseQuery的运行逻辑如下：
 *
 * 1.如果请求成功，那么直接返回数据内容；
 * ```
 * {
 *   data: any, // 响应体内容
 *   meta: {request, response} // 一些请求相关的参数
 * }
 * ```
 * 2.如果请求失败，包裹一层，携带responseStatus，结构
 * ```
 * {
 *   error: {
 *     status: number // 响应状态码
 *     data: any // 响应体内容
 *   },
 *   meta: {request, response} // 请求相关的参数
 * }
 * ```
 * @param {FetchBaseQueryArgs} options
 * @return {(function(*, *, *): Promise<{error: {status: number, data: unknown} | {status: "FETCH_ERROR", data?: undefined, error: string} | {status: "PARSING_ERROR", originalStatus: number, data: string, error: string} | {status: "CUSTOM_ERROR", data?: unknown, error: string}, data?: undefined, meta?: FetchBaseQueryMeta}|{error?: undefined, data: unknown, meta?: FetchBaseQueryMeta}>)|*}
 */
const baseQueryWithInterceptor = retry(
  async (arg, api, extraOption) => {
    // 如果异步锁打开，等待
    await mutex.waitForUnlock();
    // 否则，向下执行
    /**
     * @type {PromiseLike<
     * {
     * error: {status: number, data: unknown}
     * | {status: "FETCH_ERROR", data?: undefined, error: string}
     * | {status: "PARSING_ERROR", originalStatus: number, data: string, error: string}
     * | {status: "CUSTOM_ERROR", data?: unknown, error: string},
     * data?: undefined,
     * meta?: FetchBaseQueryMeta
     * } | {error?: undefined,
     * data: unknown,
     * meta?: FetchBaseQueryMeta}
     * >
     * | {error: {status: number, data: unknown}
     * | {status: "FETCH_ERROR", data?: undefined, error: string}
     * | {status: "PARSING_ERROR", originalStatus: number, data: string, error: string}
     * | {status: "CUSTOM_ERROR", data?: unknown, error: string},
     * data?: undefined,
     * meta?: FetchBaseQueryMeta
     * }
     * | {error?: undefined, data: unknown, meta?: FetchBaseQueryMeta}}
     */
    let result = await baseQuery(arg, api, extraOption);
    const { meta } = result;

    // ---------------------------- 拦截

    if (arg.interceptor) {
      return arg.interceptor(result, {
        arg,
        api,
        extraOption,
      });
    }

    // ---------------------------- 错误处理

    // 按照js异步规范，错误处理一般放到最前
    // 处理响应错误 响应码指示为错误，但非鉴权失败(401)
    if (result.error) {
      const {
        error: {
          status,
          data,
        },
      } = result;
      // 处理 401
      if (status === 401 && data.status === 'A0317') {
        if (!mutex.isLocked()) {
          const release = await mutex.acquire();
          try {
            const refreshResult = await baseQuery(
              {
                url: `${process.env.NEXT_PUBLIC_OAUTH_URL}/token`,
                method: 'POST',
                headers: {
                  Authorization: process.env.AUTHORIZATION,
                },
                body: parseJSONToFormData({
                  grant_type: 'refresh_token',
                  refresh_token: getRefreshToken(),
                }),
              },
              api,
              extraOption,
            );
            if (refreshResult.data && !refreshResult.data.status) {
              const {
                data: {
                  access_token: accessToken,
                  refresh_token: refreshToken,
                },
              } = refreshResult;
              // 通知redux，更新用户凭证，副作用函数在外侧执行
              const isPermanent = isTokenPermanent();
              setAccessToken(accessToken, isPermanent);
              setRefreshToken(refreshToken, isPermanent);
              result = await baseQuery(arg, api, extraOption);
            } else {
              // 通知redux，处理登出，副作用函数在外侧执行
              const key = 'session';
              const gap = 1000;
              let timeout = 3000;
              if (timer) {
                clearTimeout(timer);
                timer = null;
              }
              const notify = () => {
                timeout -= 1000;
                timer = null;
                if (timeout > 100) {
                  // message.warn({
                  //   content: `用户凭证过期，${Math.round(timeout / gap)}秒后跳转至登录界面……`,
                  //   key,
                  // });
                  setTimeout(notify, gap);
                } else {
                  clearRefreshToken();
                  clearAccessToken();
                  // message.info('已跳转至登录页');
                }
              };
              if (timeout > 100) {
                timer = setTimeout(notify, gap);
              } else {
                notify();
              }
              // setTimeout(() => )
            }
          } finally {
            release();
          }
        } else {
          // 其他鉴权失败的接口，等待refreshToken请求完毕后再请求
          await mutex.waitForUnlock();
          result = await baseQuery(arg, api, extraOption);
        }
      }

      // 鉴权失败，不再进行请求
      if (result.error) {
        const { status: _status } = result.error;
        if (typeof _status === 'number') {
          if (_status >= 400 && _status < 500) {
            // 响应鉴权失败
            retry.fail(result.error);
          }
          return result;
        }
        return {
          ...result,
          error: {
            status: _status,
            data: {
              status: _status,
              data: result.error,
            },
          },
        };
      }
      return {
        data: result.data?.data ?? result.data,
        meta: result.meta,
      };
    }

    // ---------------------------- 数据格式处理
    // 如果error为宽松false，那么data为宽松true
    const { data } = result;
    // 如果响应体中业务状态码正常，省略一层判断，提取数据
    if (Object.is(data.status, '00000')) {
      return {
        data: data.data,
        meta,
      };
    }
    // 否则，返回错误信息
    const _error = {
      status: meta.response.status,
      data,
    };
    retry.fail(_error);
    return {
      error: _error,
      meta,
    };
  },
  {
    maxRetries: 3,
  },
);

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
  keepUnusedDataFor: 60 * 60,
});

export default apiSlice;

export {
  options,
  baseQuery,
  // baseQueryWithRetry,
  baseQueryWithInterceptor,
};
