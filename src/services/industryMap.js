import apiSlice from '../app/apiSlice';

const INDUSTRY_MAP = 'huzhou/industryMap';

export const industryMapApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNewsByRegionAndIndustry: builder.query({
      query(arg) {
        return {
          url: `${INDUSTRY_MAP}/news`,
          params: {
            limit: 50,
            ...arg,
          },
        };
      },
    }),
  }),
});

export const {
  /**
   * 舆情
   * @type {(arg: {
   *   region_code: string,
   *   industry_code: string,
   *   limit?: number,
   * }, opt?: UseQueryOption) => UseQueryResult}
   */
  useGetNewsByRegionAndIndustryQuery,
} = industryMapApi;
