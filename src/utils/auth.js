const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

/**
 * 存储access_token，第二个参数配置是否存储localStorage
 * @param {string} token
 * @param {boolean?} isPermanent
 */
const setAccessToken = (token, isPermanent) => {
  if (isPermanent) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  } else {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  }
};

/**
 * 存储access_token，第二个参数配置是否存储localStorage
 * @param {string} token
 * @param {boolean?} isPermanent
 */
const setRefreshToken = (token, isPermanent) => {
  if (isPermanent) {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  } else {
    sessionStorage.setItem(REFRESH_TOKEN_KEY, token);
  }
};

/**
 * 获取access_token
 * @return {string|undefined}
 */
const getAccessToken = () => {
  if (window === undefined) return undefined;
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) || sessionStorage.getItem(ACCESS_TOKEN_KEY);
  return accessToken ?? undefined;
};

/**
 * 获取refresh_token
 * @return {string|undefined}
 */
const getRefreshToken = () => {
  if (window === undefined) return undefined;
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY) || sessionStorage.getItem(REFRESH_TOKEN_KEY);
  return refreshToken ?? undefined;
};

const isTokenPermanent = () => {
  if (window === undefined) return false;
  const permanentValue = localStorage.getItem(ACCESS_TOKEN_KEY);
  return typeof permanentValue === 'string';
};

/**
 * 清理access_token
 */
const clearAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
};

/**
 * 清理refresh_token
 */
const clearRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  sessionStorage.removeItem(REFRESH_TOKEN_KEY);
};

export {
  getAccessToken,
  getRefreshToken,
  clearAccessToken,
  clearRefreshToken,
  setAccessToken,
  setRefreshToken,
  isTokenPermanent,
};
