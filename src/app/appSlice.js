// /**
//  * App全局状态，控制导航相关的一些状态显示
//  */
import { createSlice } from '@reduxjs/toolkit';
import { getAccessToken, getRefreshToken } from '../utils/auth';

/**
 * @type {import('@reduxjs/toolkit').CreateSliceOptions<State, CaseReducers, Name>}
 */
export const createSliceOptions = {
  name: 'app',
  initialState: {
    accessToken: null,
    refreshToken: null,
    industries: {
      '': {
        name: '全部',
        code: '',
      },
    },
    default_region: '',
  },
  reducers: {},
  extraReducers: builder => {
  },
};

const appSlice = createSlice(createSliceOptions);

export default appSlice;

//
// export const {
//   tokenReceived,
//   setAccessToken,
//   setRefreshToken,
//   logOut,
// } = appSlice.actions;
//
// export const appSelector = state => state.app;
//
// export const appNameSelector = createSelector(appSelector, state => state.name);
//
// export const menuSelector = createSelector(appSelector, state => {
//   return state.menu.map(item => ({id: item.en_name, name: item.name, route: PAGES[PAGE_DICT[item.en_name]]?.path ?? '/'}))
// });
//
// /**
//  * 获取页面配置参数，自动取出产业
//  */
// export const pageParamsSelector = createSelector(
//   appSelector,
//   (state, pageId) => pageId,
//   (state, pageId) => {
//     const pageParams = state.menu?.find(item => item.en_name === pageId);
//     if (!pageParams) return null;
//     return pageParams;
//   }
// );
//
// /**
//  * 获取指定页面的默认区域code
//  * @param {string} pageEnName
//  * @returns {string}
//  */
// export const defaultRegionCodeSelector = createSelector(
//   [appSelector, pageParamsSelector],
//   (app, params) => params?.default_region ?? app.default_region,
//   // (app, params) => params?.default_region ?? (app.default_region === '000000' ? '100000' : app.default_region),
// );
// /**
//  * 获取指定页面的默认区域们code数组
//  * @param {string} pageEnName
//  * @returns {Array}
//  */
// export const defaultRegionCodes = createSelector(
//   [appSelector, pageParamsSelector],
//   (app, params) => params?.regions ?? app.regions,
// );
//
// /**
//  * 获取指定页面的默认产业code
//  * @param {string} pageEnName
//  * @returns {string}
//  */
// export const defaultIndustrySelector = createSelector(
//   [appSelector, pageParamsSelector],
//   (app, params) => (params && (typeof params.default_industry === 'string')) ? (app.industries[params.default_industry]) : undefined,
// );
//
// /**
//  * 获取指定页面的产业下拉
//  * @param {string} pageEnName
//  * @returns {{name: string, code: string}}[]}
//  */
// export const industriesSelector = createSelector(
//   [appSelector, pageParamsSelector],
//   (app, params) => params?.industries?.map(code => app.industries[code]).filter(Boolean) ?? []
// );
//
// /**
//  * 获取指定页面的默认企业标签
//  * @param {string} pageEnName
//  * @returns {string}
//  */
// export const defaultCompanyTypeSelector = createSelector(
//   [pageParamsSelector],
//   params => params?.default_company_type,
// );
//
// /**
//  * 获取指定页面的企业类型下拉
//  * @param {string} pageEnName
//  * @returns {{name: string, key: string}}[]}
//  */
// export const companyTypesSelector = createSelector(
//   [pageParamsSelector],
//   params => params?.company_type?.map(item => ({...item, key: item.id})) ?? [],
// );
//
// export const copyrightSelector = createSelector(appSelector, app => app.copyright);
//
