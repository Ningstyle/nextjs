/**
 * 数据转换，JSON转换为FormData
 * @param json
 * @return {FormData}
 */
export const parseJSONToFormData = json => Object.entries(json).reduce((formData, [key, val]) => {
  formData.append(key, typeof val !== 'object' ? val : JSON.stringify(val));
  return formData;
}, new FormData());
