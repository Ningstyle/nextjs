/* eslint-disable no-mixed-operators */
/* eslint-disable no-empty */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Scene, Mapbox } from '@antv/l7';
import { Choropleth } from '@antv/l7plot';
// import './index.less';

let choropleth = null;
let scene = null;
const colors = ['#0061B6', '#006AD4', '#0074D9', '#007FFF', '#1492FF', '#49AAFF', '#70BCFF', '#8CCAFF'];
let MAX = 0;
const domTooltip = (items) => `
    <div class="corner-outer">
       <div>全部企业数</div>
       <div> ${items[0] && items[0].value || ''} <span>${items[1] && items[1].value || 0}家</span> </div>
    </div>
    `;

function ExampleComponent(props) {
  const { alllistData, granularitys, areaKey, first } = props;
  // 状态管理
  useEffect(async () => {
    scene = new Scene({
      id: 'map',
      map: new Mapbox({
        pitch: 0,
        style: 'blank',
        center: [116.368652, 39.93866],
        minZoom: 8.8,
        maxZoom: 8.8,
      }),
    });

    const data = [
      {
        name: '南湖区',
        value: 41763,
        center_latitude: '30.711139',
        center_longitude: '120.842186',
        area_key: '浙江省-嘉兴市-南湖区',
        unit: '个',
        parent_code: '330400',
        code: '330402',
      },
      {
        name: '秀洲区',
        value: 26131,
        center_latitude: '30.769295',
        center_longitude: '120.686337',
        area_key: '浙江省-嘉兴市-秀洲区',
        unit: '个',
        parent_code: '330400',
        code: '330411',
      },
      {
        name: '嘉善县',
        value: 27780,
        center_latitude: '30.8996',
        center_longitude: '120.902273',
        area_key: '浙江省-嘉兴市-嘉善县',
        unit: '个',
        parent_code: '330400',
        code: '330421',
      },
      {
        name: '海盐县',
        value: 17629,
        center_latitude: '30.474419',
        center_longitude: '120.929474',
        area_key: '浙江省-嘉兴市-海盐县',
        unit: '个',
        parent_code: '330400',
        code: '330424',
      },
      {
        name: '海宁市',
        value: 41426,
        center_latitude: '30.425793',
        center_longitude: '120.623277',
        area_key: '浙江省-嘉兴市-海宁市',
        unit: '个',
        parent_code: '330400',
        code: '330481',
      },
      {
        name: '平湖市',
        value: 23541,
        center_latitude: '30.705649',
        center_longitude: '121.103105',
        area_key: '浙江省-嘉兴市-平湖市',
        unit: '个',
        parent_code: '330400',
        code: '330482',
      },
      {
        name: '桐乡市',
        value: 48477,
        center_latitude: '30.606055',
        center_longitude: '120.483541',
        area_key: '浙江省-嘉兴市-桐乡市',
        unit: '个',
        parent_code: '330400',
        code: '330483',
      },
    ];
    MAX = data.sort((a, b) => b.value - a.value)[0].value;

    choropleth = new Choropleth({
      source: {
        data,
        joinBy: {
          sourceField: 'code',
          geoField: 'adcode',
        },
      },
      viewLevel: {
        level: 'city',
        adcode: '330400',
      },
      autoFit: true,
      drill: {
        steps: ['district'],
        triggerUp: 'unclick',
        triggerDown: 'click',
        onDown: async (from, to, callback) => {
          MAX = data.sort((a, b) => b.value - a.value)[0].value;
          if (props.getChildVal) {
            props.getChildVal({
              code: to.adcode,
              granularity: to.granularity,
              name: to.properties.name,
            });
          }

          callback({
            source: { data, joinBy: { sourceField: 'code' } },
          });
          // const { level, granularity } = to;
          // if (granularity === 'city') {
          //   callback({
          //     source: { data: cityData, joinBy: { sourceField: 'adcode' } },
          //   });
          // } else if (granularity === 'district') {
          //   callback({
          //     source: { data: districtData, joinBy: { sourceField: 'adcode' } },
          //   });
          // }
        },
        onUp: (from, to, callback) => {
          if (props.getChildVals) {
            props.getChildVals({
              code: to.adcode,
            });
          }
          callback();
        },
      },
      color: {
        field: 'value',
        value: ['#8CCAFF', '#70BCFF', '#49AAFF', '#1492FF', '#007FFF', '#0074D9', '#006AD4', '#0061B6'],
        scale: { type: 'quantize' },
      },
      style: {
        opacity: 1,
        stroke: '#49AAFF',
        lineWidth: 0.6,
        lineOpacity: 1,
        lineType: 'dash',
      },
      chinaBorder: {
        // 国界
        national: { color: '#49AAFF', width: 1, opacity: 1 },
        // 争议
        dispute: {
          color: '#49AAFF',
          width: 1,
          opacity: 0.8,
          dashArray: [2, 2],
        },
        // 海洋
        coast: { color: '#49AAFF', width: 0.7, opacity: 0.8 },
        // 港澳
        hkm: { color: 'gray', width: 0.7, opacity: 0.8 },
      },
      label: {
        visible: true,
        field: 'name',
        style: {
          fill: '#fff',
          opacity: 1,
          fontSize: 12,
          textAllowOverlap: false,
          padding: [5, 5],
        },
      },
      state: {
        active: { stroke: '#fff', lineWidth: 2, fill: '#007FFF' },
      },
      tooltip: {
        items: [
          { field: 'name', alias: '名称' },
          { field: 'value', alias: '数值' },
        ],
        customContent(e, data) {
          return domTooltip(data);
        },
      },
      // zoom: {
      //   position: 'bottomright',
      // },
      legend: {
        position: 'bottomleft',
        colors,
        customContent: () => {
          let str = '';
          str += '<div class="legendlegend">';
          colors.map((ele, index) => {
            if (index === 0) {
              str += `<div> <div style="background:${colors[index]}"></div> <div>${MAX}</div>  </div>`;
            } else if (index === colors.length - 1) {
              str += `<div> <div style="background:${colors[index]}"></div> <div>0</div>  </div>`;
            } else {
              str += `<div> <div style="background:${colors[index]}"></div> <div></div>  </div>`;
            }
          });
          str += '</div>';
          return str;
        },
      },
    });

    if (scene.loaded) {
      choropleth.addToScene(scene);
    } else {
      scene.on('loaded', () => {
        choropleth.addToScene(scene);
      });
    }
  }, []);

  useEffect(async () => {
    if (!first && areaKey) {
      const data1 = [
        {
          name: '南湖区',
          value: 41763,
          center_latitude: '30.711139',
          center_longitude: '120.842186',
          area_key: '浙江省-嘉兴市-南湖区',
          unit: '个',
          parent_code: '330400',
          code: '330402',
        },
        {
          name: '秀洲区',
          value: 26131,
          center_latitude: '30.769295',
          center_longitude: '120.686337',
          area_key: '浙江省-嘉兴市-秀洲区',
          unit: '个',
          parent_code: '330400',
          code: '330411',
        },
        {
          name: '嘉善县',
          value: 27780,
          center_latitude: '30.8996',
          center_longitude: '120.902273',
          area_key: '浙江省-嘉兴市-嘉善县',
          unit: '个',
          parent_code: '330400',
          code: '330421',
        },
        {
          name: '海盐县',
          value: 17629,
          center_latitude: '30.474419',
          center_longitude: '120.929474',
          area_key: '浙江省-嘉兴市-海盐县',
          unit: '个',
          parent_code: '330400',
          code: '330424',
        },
        {
          name: '海宁市',
          value: 41426,
          center_latitude: '30.425793',
          center_longitude: '120.623277',
          area_key: '浙江省-嘉兴市-海宁市',
          unit: '个',
          parent_code: '330400',
          code: '330481',
        },
        {
          name: '平湖市',
          value: 23541,
          center_latitude: '30.705649',
          center_longitude: '121.103105',
          area_key: '浙江省-嘉兴市-平湖市',
          unit: '个',
          parent_code: '330400',
          code: '330482',
        },
        {
          name: '桐乡市',
          value: 48477,
          center_latitude: '30.606055',
          center_longitude: '120.483541',
          area_key: '浙江省-嘉兴市-桐乡市',
          unit: '个',
          parent_code: '330400',
          code: '330483',
        },
      ];
      choropleth.changeView({
        level: granularitys,
        adcode: areaKey,
      }, {
        source: {
          data1,
          joinBy: {
            sourceField: 'code',
          },
        },
      });
    }
  }, [areaKey, first]);

  return (
    <div id="map" />
  );
}

export default ExampleComponent;
