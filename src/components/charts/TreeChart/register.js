import G6 from '@antv/g6';

const rectStyle = p => {
  let obj = {};
  switch (p) {
    case '优势环节':
      obj = {
        fill: '#D5B53F',
        stroke: '#FEF9E1',
      };
      break;
    case '劣势环节':
      obj = {
        fill: '#AB432C',
        stroke: '#F0A689',
      };
      break;
    case '普通环节':
      obj = {
        fill: '#1C428C',
        stroke: '#3B7DE0',
      };
      break;
    case '无企业布局':
      obj = {
        fill: '#112C71',
        stroke: '#112C71',
      };
      break;
    default:
      obj = {
        fill: '#1C428C',
        stroke: '#3B7DE0',
      };
      break;
  }
  return obj;
};
const font = p => {
  let f = 0;
  switch (p) {
    case 0:
      f = 31;
      break;
    case 1:
      f = 22;
      break;
    case 2:
    case 3:
      f = 18;
      break;
    default:
      f = 16;
      break;
  }
  return f;
};

// 1. 根节点：152 * 56 外发光，字体大小 32
// 2. 一级节点，194 * 42，字体大小 22
// 3. 二三级节点，128 * 36，字体大小 18
// 4. 四级节点，100 * 28，字体大小 18
// 5. 五级节点，字体大小 14

/**
 * shape
 * {
 *   fontSize,
 *   fontColor,
 *   fontColor = '#fff',
 *   color = '#1C428C',
 *   borderWidth = 1,
 *   borderRadius = 0,
 *   borderColor = '#ced4d9',
 *   shadowColor,
 *   shadowOffsetX,
 *   shadowOffsetY,
 *   shadowBlur,
 *   opacity = 1,
 *   width,
 *   height,
 * }
 */

// 自定义节点、边
const registerFn = () => {
  G6.registerNode(
    'tree-node',
    {
      drawShape: function drawShape(cfg, group) {
        // console.log(cfg, '00000')
        const rect = group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: 1,
            height: 1,
            cursor: 'pointer',
            ...rectStyle(cfg.advantage_type),
          },
          name: 'rect-shape',
          modelId: cfg.id,
        });
        let title = '';
        const len = cfg.title.length;
        if (len > 6) {
          title = `  ${cfg.title.slice(0, 6)}...`;
        } else {
          const arr = cfg.title.split('');
          for (let i = 0; i < (7 - len); i += 1) {
            arr.push('   ');
          }
          title = `  ${arr.join('')}`;
        }
        const text = group.addShape('text', {
          attrs: {
            text: `${cfg.depth === 0 ? title.trimEnd() : title}`,
            textAlign: 'start',
            textBaseline: 'alphabetic',
            fill: cfg.advantage_type === '无企业布局' ? '#3767B7' : '#fff',
            cursor: 'pointer',
            fontSize: font(cfg.depth),
          },
          name: 'text-shape',
          modelId: cfg.id,
        });
        const bbox = text.getBBox();
        const hasChildren = cfg.children && cfg.children.length > 0;
        rect.attr({
          x: 0,
          y: cfg.depth === 0 ? 5 : 2,
          width: bbox.width + (hasChildren ? 26 : 12),
          height: bbox.height + 12,
          cursor: 'pointer',
        });
        text.attr({
          x: 0,
          y: bbox.height + 5,
        });
        if (hasChildren) {
          group.addShape('rect', {
            attrs: {
              text: cfg.collapsed ? cfg.children.length : '',
              x: bbox.width + 40,
              y: bbox.height - 10,
              width: 20,
              height: 20,
              stroke: 'l(90) 0:#0086AC 1:#004B88',
              radius: 3,
              opacity: cfg.collapsed ? 1 : 0,
              cursor: 'pointer',
            },
            name: 'collapse-rect',
            modelId: cfg.id,
          });
          group.addShape('text', {
            attrs: {
              text: cfg.collapsed ? cfg.children.length : '',
              x: bbox.width + (cfg.children.length >= 10 ? 42 : 47),
              y: bbox.height + 8,
              stroke: 'l(90) 0:#0086AC 1:#004B88',
              cursor: 'pointer',
            },
            name: 'text-shape1',
            modelId: cfg.id,
          });
          group.addShape('path', {
            attrs: {
              path: [
                ['M', bbox.width + 26, bbox.height],
                ['L', bbox.width + 40, bbox.height],
              ],
              stroke: 'l(90) 0:#0086AC 1:#004B88',
              lineWidth: cfg.collapsed ? 2 : 0,
              lineAppendWidth: 5,
              cursor: 'pointer',
            },
            // must be assigned in G6 3.3 and later versions. it can be any value you want
            name: 'path-shape',
            modelId: cfg.id,
          });
        }
        return rect;
      },
      update: (cfg, item) => {
      },
      setState: (name, value, item) => {
        const cfg = item.getModel();
        const group = item.getContainer();
        const l = group.find((e) => e.get('name') === 'path-shape');
        l?.attr('lineWidth', value ? 2 : 0);
        const icon = group.find((e) => e.get('name') === 'collapse-rect');
        icon?.attr('opacity', value ? 2 : 0);
        const t = group.find((e) => e.get('name') === 'text-shape1');
        t?.attr('text', value ? cfg.children.length : '');
      },
    },
    'rect',
  );

  G6.registerEdge('industry-polyline', {
    itemType: 'edge',
    draw: function draw(cfg, group) {
      // 获取起点以及终点，在这中间我们进行绘制
      const { startPoint, endPoint } = cfg; // 添加边界逻辑判断

      // predefined
      // 我们构建的边为折线边，至少有4个途径点，同一深度的节点的第一段节点应该是彼此覆盖完全一致的
      const line1Width = 32 + (cfg?.sourceNode?._cfg.model?.expandWidth ?? 0); // TODO:
      const line1EndPoint = {
        x: startPoint.x + line1Width,
        y: startPoint.y,
      };
      const line2StartPoint = {
        x: line1EndPoint.x,
        y: endPoint.y,
      };

      const path = [
        ['M', startPoint.x, startPoint.y],
        ['L', line1EndPoint.x + 20, line1EndPoint.y],
        ['L', line1EndPoint.x + 20, line2StartPoint.y],
        ['L', endPoint.x, endPoint.y],
      ];

      const endArrow = cfg?.style && cfg.style.endArrow ? cfg.style.endArrow : false;
      if (typeof endArrow === 'object') endArrow.fill = endArrow.stroke;
      const line = group.addShape('path', {
        attrs: {
          path,
          stroke: 'l(90) 0:#0086AC 1:#004B88',
          lineWidth: 2,
          endArrow,
        },
        name: 'path-shape',
      });
      return line;
    },
  });
};

registerFn();
