import React, { forwardRef } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from '../echarts';

/**
 * echarts的react wrapper，已使用按需加载
 * @param {import("echarts-for-react/esm/types").EChartsReactProps} props
 * @param ref
 * @return {JSX.Element}
 * @constructor
 */
function ReactEcharts(props, ref) {
  return (
    <ReactEchartsCore
      echarts={echarts}
      ref={ref}
      {...props}
    />
  );
}

export default forwardRef(ReactEcharts);
