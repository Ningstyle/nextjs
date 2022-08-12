/*
 *Author../../../lib/drawThroughChart/d3.min.js
 *Description: d3股权穿透图
 *Date: 2021/05/21
*/

import React, { useEffect, useRef } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { drawThroughChart } from '../../../lib/drawThroughChart/drawThroughChart';

function D3ThroughChart(props) {
  const { data, rootName } = props;
  const chartRef = useRef(null);

  useEffect(() => {
    if (Object.keys(data).length === 0) return;
    // 每当有新数据时清空画布
    chartRef.current.innerHTML = null;
    const copyData = cloneDeep(data);
    drawThroughChart(
      chartRef.current,
      rootName,
      copyData,
      chartRef.current.clientWidth,
      chartRef.current.clientHeight,
    );
  }, [data]);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '50vh' }} />
  );
}

export default D3ThroughChart;
