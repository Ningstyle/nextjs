/*
* Author: zhangmeng
* Description: '柱状图-单柱'
* Date: 2021/09/27
*/

import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import './register';
import { cloneDeep } from 'lodash';

function TreeChart(props) {
  const {
    data,
    onNodeClick,
  } = props;
  let graph = null;

  useEffect(() => {
    if (!graph) {
      const tooltip = new G6.Tooltip({
        offsetX: 20,
        offsetY: 30,
        itemTypes: ['node'],
        // 自定义 tooltip 内容
        getContent: (e) => {
          const outDiv = document.createElement('div');
          outDiv.style.color = '#000';
          // outDiv.style.background = '#fff';
          outDiv.style.fontSize = '16px';
          const nodeName = e.item.getModel().title;
          outDiv.innerHTML = `${nodeName}`;
          return outDiv;
        },
        shouldBegin: (e) => {
          if (e.target.get('name') === 'text-shape') return true;
          return false;
        },
      });

      const container = document.getElementById('container');
      const width = container.scrollWidth;
      const height = container.scrollHeight;
      graph = new G6.TreeGraph({
        container: 'container',
        plugins: [tooltip],
        width,
        height,
        minZoom: 0.8,
        maxZoom: 2,
        modes: {
          default: [
            'drag-canvas',
            'zoom-canvas',
          ],
        },
        defaultNode: {
          type: 'tree-node',
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        nodeStateStyles: {
          hover: {
            stroke: '#7BF9FB',
          },
          click: {
            stroke: '#7BF9FB',
          },
        },
        defaultEdge: {
          type: 'industry-polyline',
          style: {
            stroke: 'l(90) 0:#0086AC 1:#004B88',
            // radius: 5,
            lineWidth: 2,
          },
        },
        layout: {
          type: 'compactBox',
          direction: 'LR',
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 16;
          },
          getWidth: function getWidth() {
            return 16;
          },
          getVGap: function getVGap() {
            return 10;
          },
          getHGap: function getHGap(e) {
            if (e.depth === 0) {
              return 170;
            }
            if (e.depth === 1) {
              return 160;
            }
            return 130;
          },
        },
      });

      // 默认展开两层节点，之后，重新渲染
      const _data = cloneDeep(data);

      // 传入数据
      graph.data(_data);
      // 渲染
      graph.layout();
      graph.render();
      // 自适应 右 左
      // graph.fitView([0, 500, 0, 400]);
      graph.zoom(1);
      G6.Util.traverseTree(_data, (item) => {
        // eslint-disable-next-line no-param-reassign
        item.id = item.value;
        if (item.depth > (_data.title === '现代服务业' ? 1 : 2)) {
          // collapsed为true时默认收起
          // eslint-disable-next-line no-param-reassign
          item.collapsed = true;
        }
      });
      // 传入数据
      graph.data(_data);
      // 渲染
      graph.layout();
      graph.render();
      // 自适应 右 左
      graph.fitView([0, 500, 0, 400]);
      graph.zoom(1);
      graph.get('canvas')
        .set('localRefresh', false);

      // 为图上的所有节点绑定点击监听
      graph.on('rect-shape:click', (e) => {
        const { target } = e;
        const id = target.get('modelId');
        const item = graph.findById(id);
        const nodeModel = item.getModel();
        nodeModel.collapsed = !nodeModel.collapsed;
        const item1 = e.item;
        const group = item1.getContainer();
        const icon = group.find((e1) => e1.get('name') === 'collapse-rect');
        const text = group.find((e1) => e1.get('name') === 'text-shape1');
        const line = group.find((e1) => e1.get('name') === 'path-shape');
        text?.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        // icon.attr('fill', !nodeModel.collapsed ? "" : '#7BF9FB');
        icon?.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        line?.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        graph.layout();
        graph.setItemState(item, 'collapsed', nodeModel.collapsed);
        const {
          title,
          value,
          depth,
          advantage_type: advantageType,
        } = nodeModel;
        if (advantageType !== '无企业布局') {
          onNodeClick({
            title,
            value,
            depth,
          });
        }
      });
      graph.on('rect-shape:touchstart', (e) => {
        const { target } = e;
        const id = target.get('modelId');
        const item = graph.findById(id);
        const nodeModel = item.getModel();
        nodeModel.collapsed = !nodeModel.collapsed;
        const item1 = e.item;
        const group = item1.getContainer();
        const icon = group.find((e1) => e1.get('name') === 'collapse-rect');
        const text = group.find((e1) => e1.get('name') === 'text-shape1');
        const line = group.find((e1) => e1.get('name') === 'path-shape');
        text.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        // icon.attr('fill', !nodeModel.collapsed ? "" : '#7BF9FB');
        icon.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        line.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        graph.layout();
        graph.setItemState(item, 'collapsed', nodeModel.collapsed);
        const {
          title,
          value,
          depth,
          advantage_type: advantageType,
        } = nodeModel;
        if (advantageType !== '无企业布局') {
          onNodeClick({
            title,
            value,
            depth,
          });
        }
      });
      graph.on('text-shape:click', (e) => {
        const { target } = e;
        const id = target.get('modelId');
        const item = graph.findById(id);
        const nodeModel = item.getModel();
        nodeModel.collapsed = !nodeModel.collapsed;
        const item1 = e.item;
        const group = item1.getContainer();
        const icon = group.find((e1) => e1.get('name') === 'collapse-rect');
        const text = group.find((e1) => e1.get('name') === 'text-shape1');
        const line = group.find((e1) => e1.get('name') === 'path-shape');
        text?.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        // icon.attr('fill', !nodeModel.collapsed ? "" : '#7BF9FB');
        icon?.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        line?.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        graph.layout();
        graph.setItemState(item, 'collapsed', nodeModel.collapsed);
        const {
          title,
          value,
          depth,
          advantage_type: advantageType,
        } = nodeModel;
        if (advantageType !== '无企业布局') {
          onNodeClick({
            title,
            value,
            depth,
          });
        }
      });
      graph.on('text-shape:touchstart', (e) => {
        const { target } = e;
        const id = target.get('modelId');
        const item = graph.findById(id);
        const nodeModel = item.getModel();
        nodeModel.collapsed = !nodeModel.collapsed;
        const item1 = e.item;
        const group = item1.getContainer();
        const icon = group.find((e1) => e1.get('name') === 'collapse-rect');
        const text = group.find((e1) => e1.get('name') === 'text-shape1');
        const line = group.find((e1) => e1.get('name') === 'path-shape');
        text?.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        // icon.attr('fill', !nodeModel.collapsed ? "" : '#7BF9FB');
        icon?.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        line?.attr('stroke', !nodeModel.collapsed ? '' : 'l(90) 0:#0086AC 1:#004B88');
        graph.layout();
        graph.setItemState(item, 'collapsed', nodeModel.collapsed);
        const {
          title,
          value,
          depth,
          advantage_type: advantageType,
        } = nodeModel;
        if (advantageType !== '无企业布局') {
          onNodeClick({
            title,
            value,
            depth,
          });
        }
      });
      graph.on('node-rect:mouseenter', (e) => {
        const { item } = e;
        const group = item.getContainer();
        const icon = group.find((e1) => e1.get('name') === 'collapse-rect');
        const text = group.find((e1) => e1.get('name') === 'text-shape1');
        icon.attr('fill', '#7BF9FB');
        icon.attr('stroke', '#BDF0FD');
        text.attr('stroke', '#fff');
      });
      graph.on('node-rect:mouseleave', (e) => {
        // console.log(e);
        const { item } = e;
        const group = item.getContainer();
        const icon = group.find((e1) => e1.get('name') === 'collapse-rect');
        const text = group.find((e1) => e1.get('name') === 'text-shape1');
        icon.attr('fill', '');
        icon.attr('stroke', 'l(90) 0:#0086AC 1:#004B88');
        text.attr('stroke', 'l(90) 0:#0086AC 1:#004B88');
      });

      if (typeof window !== 'undefined') {
        window.onresize = () => {
          if (!graph || graph.get('destroyed')) return;
          if (!container || !container.scrollWidth || !container.scrollHeight) return;
          graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
      }
    }
    return () => {
      graph.destroy();
    };
  }, [data]);

  return (
    <div
      id="container"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}

export default TreeChart;
