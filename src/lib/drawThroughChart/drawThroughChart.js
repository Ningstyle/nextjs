/* eslint-disable function-paren-newline */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
/* eslint-disable block-scoped-var */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
// eslint-disable-next-line import/extensions
import '../../../public/static/d3.min.js';
// import arrow from '../../assets/images/a.png';

function drawThroughChart(root, rootName, data, width, height) {
  const _this = this;
  const arrow = '';
  let rootRectWidth = 0; // 根节点rect的宽度
  // 冲上冲下
  let forUpward = true;

  const treeChart = function (curd3) {
    this.d3 = curd3;
    this.directions = ['upward', 'downward'];
  };

  treeChart.prototype.drawChart = function () {
    // First get tree data for both directions.
    this.treeData = {};
    const self = this;
    self.directions.forEach((direction) => {
      self.treeData[direction] = data[direction];
    });
    rootRectWidth = rootName.length * 25;
    self.graphTree(self.getTreeConfig());
  };

  treeChart.prototype.getTreeConfig = function () {
    const treeConfig = {
      margin: {
        top: 10,
        right: 30,
        bottom: 0,
        left: 30,
      },
    };
    treeConfig.chartWidth = (width - treeConfig.margin.right - treeConfig.margin.left);
    treeConfig.chartHeight = (height - treeConfig.margin.top - treeConfig.margin.bottom);
    treeConfig.centralHeight = treeConfig.chartHeight / 2;
    treeConfig.centralWidth = treeConfig.chartWidth / 2;
    treeConfig.linkLength = 150;
    treeConfig.duration = 500; // 动画时间
    return treeConfig;
  };

  treeChart.prototype.graphTree = function (config) {
    const self = this;
    const { d3 } = this;
    const { linkLength } = config;
    const { duration } = config;
    const hasChildNodeArr = [];
    let id = 0;

    // 生成三次三次贝塞尔曲线数据，使曲线更加平滑
    // var diagonal = d3.svg.diagonal()
    //   .source(function(d) {
    //     return {
    //       "x": d.source.x,
    //       "y": d.source.name == rootName ? (forUpward ? d.source.y -20 :d.source.y + 20) : (forUpward ? d.source.y - 60 : d.source.y + 60)
    //     };
    //   })
    //   .target(function(d) {
    //     return {
    //       "x": d.target.x,
    //       "y": d.target.y
    //     };
    //   })
    //   .projection(function(d) {
    //     return [d.x, d.y];
    //   });

    // 折线
    const diagonal = function (obj) {
      const s = obj.source;
      const t = obj.target;
      let addDistance = 0;
      if (s.direction && s.depth > 0) {
        addDistance = s.direction === 'downward' ? 40 : -40;
      }
      return `M${s.x},${s.y}L${s.x},${s.y + (t.y - s.y) / 2 + addDistance}L${t.x},${
        s.y + (t.y - s.y) / 2 + addDistance}L${t.x},${t.y}`;
    };
    const zoom = d3.behavior.zoom()
      .scaleExtent([0.5, 2])
      .on('zoom', redraw);

    const svg = d3.select(root)
      .append('svg')
      .attr('width', config.chartWidth + config.margin.right + config.margin.left)
      .attr('height', config.chartHeight + config.margin.top + config.margin.bottom)
      .attr('xmlns', 'http://www.w3.org/2000/svg')
      // eslint-disable-next-line no-use-before-define
      .on('mousedown', disableRightClick)
      .call(zoom);
      // .on('dblclick.zoom', null);

    const treeG = svg.append('g')
      .attr('class', 'gbox')
      .attr('transform', `translate(${config.margin.left},${config.margin.top})`);

    // Initialize the tree nodes and update chart.
    // eslint-disable-next-line no-restricted-syntax, vars-on-top, no-var
    for (var d in this.directions) {
      const direction = this.directions[d];
      // eslint-disable-next-line no-shadow
      const data = self.treeData[direction];
      data.x0 = config.centralWidth;
      data.y0 = config.centralHeight;
      // eslint-disable-next-line no-use-before-define
      data.children.forEach(collapse);
      // eslint-disable-next-line no-use-before-define
      update(data, data, treeG);
    }
    function update(source, originalData, g) {
      const { direction } = originalData;
      forUpward = direction === 'upward';
      // eslint-disable-next-line camelcase
      const node_class = `${direction}Node`;
      // eslint-disable-next-line camelcase
      const link_class = `${direction}Link`;
      const downwardSign = (forUpward) ? -1 : 1;
      const nodeColor = (forUpward) ? '#262D36' : '#262D36';

      // var isExpand = false;
      const statusUp = true;
      const statusDown = true;
      const nodeSpace = 160;
      // eslint-disable-next-line no-use-before-define
      const tree = d3.layout.tree().sort(sortByDate).nodeSize([nodeSpace, 0]);
      const nodes = tree.nodes(originalData);
      const links = tree.links(nodes);
      const offsetX = -config.centralWidth;
      // eslint-disable-next-line no-shadow
      nodes.forEach((d) => {
        // eslint-disable-next-line no-param-reassign
        d.y = downwardSign * (d.depth * linkLength) + config.centralHeight;
        // eslint-disable-next-line no-param-reassign
        d.x -= offsetX;
        if (d.name === rootName && d.depth === 0) {
          d.x = config.centralWidth;
          d.y += downwardSign * 0; // 上下两树图根节点之间的距离
        }
      });

      // Update the node.
      const node = g.selectAll(`g.${node_class}`)
        .data(nodes, (d) => d.id || (d.id = ++id));

      const nodeEnter = node.enter().append('g')
        .attr('class', node_class)
        .attr('transform', (d) => `translate(${source.x0},${source.y0})`)
        .style('cursor', (d) => ((d.name === rootName && d.depth === 0) ? '' : (d.children || d._children) ? 'pointer' : ''));

      // 方形块
      nodeEnter.append('svg:rect')
        .attr('x', (d) => ((d.name === rootName && d.depth === 0) ? -(rootRectWidth / 2) : -75))
        .attr('y', (d) => ((d.name === rootName && d.depth === 0) ? -27 : forUpward ? -75 : 0))
        .attr('width', (d) => ((d.name === rootName && d.depth === 0) ? rootRectWidth : 150))
        .attr('height', (d) => ((d.name === rootName && d.depth === 0) ? 54 : 75))
        .attr('rx', 6)
        .style('stroke', (d) => ((d.name === rootName && d.depth === 0) ? '#1961F5' : '#aaa'))
        .style('fill', (d) => ((d.name === rootName && d.depth === 0) ? '#1961F5' : '#FFF'), // 节点背景色
        );

      // 箭头
      nodeEnter.append('svg:image')
        .attr('x', -14)
        .attr('y', (d) => (forUpward ? 15 : -25))
        .attr('xlink:href', (d) => ((d.name === rootName && d.depth === 0) ? '' : arrow));

      // 内容第一行文本
      nodeEnter.append('text')
        .attr('class', 'linkname')
        .attr('x', (d) => ((d.name === rootName && d.depth === 0) ? 0 : -68))
        .attr('dy', (d) => ((d.name === rootName && d.depth === 0) ? '.35em' : forUpward ? -58 : 16))
        .attr('text-anchor', (d) => ((d.name === rootName && d.depth === 0) ? 'middle' : 'start'))
        .attr('fill', '#000')
        .text((d) => {
          if (d.name === rootName && d.depth === 0) {
            // return ((forUpward) ? '根节点TOP' : '根节点Bottom');
            return rootName;
          }
          if (d.repeated) {
            return `[Recurring] ${d.name}`;
          }
          return (d.name.length > 10) ? d.name.substr(0, 10) : d.name;
        })
        .style({
          // 'fill-opacity': 1e-6,
          fill(d) {
            if (d.name === rootName && d.depth === 0) {
              return '#fff';
            }
            return '#262D36';
          },
          'font-size': 12,
          cursor: 'pointer',
          'letter-spacing': '1.5px',
        });

      // 内容第二行文本
      nodeEnter.append('text')
        .attr('class', 'linkname')
        .attr('x', -68)
        .attr('dy', (d) => ((d.name === rootName && d.depth === 0) ? '.35em' : forUpward ? -42 : 32))
        .attr('text-anchor', () => ((d.name === rootName && d.depth === 0) ? 'middle' : 'start'))
        .text((d) => ((d.name === rootName && d.depth === 0) ? '' : d.name.substr(10, d.name.length)))
        .style({
          fill: '#262D36',
          'font-size': 12,
          cursor: 'pointer',
          'letter-spacing': '1.5px',
        });
      // 内容第三行文本
      nodeEnter.append('text')
        .attr('x', -66)
        .attr('dy', (d) => (forUpward ? -22 : 52))
        .attr('text-anchor', 'start')
        .attr('class', 'linkname')
        .style('fill', '#919191')
        .style('font-size', 12)
        .style('letter-spacing', 1.5)
        .text((d) => ((d.name === rootName && d.depth === 0) ? '' : '认缴金额：'));

      // 内容第四行文本
      nodeEnter.append('text')
        .attr('x', -66)
        .attr('dy', (d) => (forUpward ? -6 : 68))
        .attr('text-anchor', 'start')
        .attr('class', 'linkname')
        .style('fill', '#919191')
        .style('font-size', 12)
        .style('letter-spacing', 1.5)
        .text((d) => ((d.name === rootName && d.depth === 0) ? '' : `${d.amount}万人民币`));

      //   // 占股百分比
      // nodeEnter.append("text")
      //   .attr("x", 6)
      //   .attr("dy", function(d) {
      //     return forUpward ? 14 : -4;
      //   })
      //   .attr("text-anchor", "start")
      //   .attr("class", "linkname")
      //   .style("fill", "#262D36")
      //   .style('font-size', 12)
      //   .style('letter-spacing', 1.5)
      //   .text(function(d) {
      //     return(d.name == rootName) ? '' : d.ratio;
      //   });

      // Transition nodes to their new position.原有节点更新到新位置
      const nodeUpdate = node.transition()
        .duration(duration)
        .attr('transform', (d) => `translate(${d.x},${d.y})`);

      // 展开符号背景色
      nodeEnter.append('svg:rect')
        .attr('x', (d) => ((d.name === rootName && d.depth === 0) ? -(rootRectWidth / 2) : -6))
        .attr('y', (d) => ((d.name === rootName && d.depth === 0) ? 0 : forUpward ? -88 : 76))
        .attr('width', 12)
        .attr('height', 12)
        .style('fill', (d) => (((d.name === rootName && d.depth === 0) || (d._children && d._children.length > 0) || (d.children && d.children.length > 0)) ? '#1961F5' : '#fff'));

      // 代表是否展开的+-号
      nodeEnter.append('svg:text')
        .attr('class', 'isExpand')
        .attr('x', '0')
        .attr('dy', (d) => (forUpward ? -77 : 87))
        .attr('text-anchor', 'middle')
        .style({
          fill: '#fff',
          'font-size': 16,
        })
        .text((d) => {
          if (d.name === rootName && d.depth === 0) {
            return '';
          }
          return d.isExpend ? '-' : '+';
        })
        .on('click', click);

      const nodeExit = node.exit().transition()
        .duration(duration)
        .attr('transform', (d) => `translate(${source.x},${source.y})`)
        .remove();

      const link = g.selectAll(`path.${link_class}`)
        .data(links, (d) => d.target.id);

      link.enter().insert('path', 'g')
        .attr('class', link_class)
        .attr('stroke', '#aaa')
        .attr('fill', 'none')
        .attr('stroke-width', '1px')
        .attr('opacity', 0.5)
        .attr('d', (d) => {
          const o = {
            x: source.x0,
            y: source.y0,
          };
          return diagonal({
            source: o,
            target: o,
          });
        })
        .attr('id', (d, i) => `mypath${i}`);

      link.transition()
        .duration(duration)
        .attr('d', diagonal);

      link.exit().transition()
        .duration(duration)
        .attr('d', (d) => {
          const o = {
            x: source.x,
            y: source.y,
          };
          return diagonal({
            source: o,
            target: o,
          });
        })
        .remove();

      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      function click(d) {
        if (d.name === rootName && d.depth === 0) {
          return;
        }
        if (d.children) {
          d._children = d.children;
          d.children = null;
          d.isExpend = false;
          d3.select(this).text('+');
        } else {
          d.children = d._children;
          d._children = null;
          // expand all if it's the first node
          if (d.name === rootName && d.depth === 0) {
            d.children.forEach(expand);
          }
          d.isExpend = true;
          d3.select(this).text('-');
        }
        update(d, originalData, g);
      }
    }

    function expand(d) {
      if (d._children) {
        d.children = d._children;
        d.children.forEach(expand);
        d._children = null;
      }
    }

    function collapse(d) {
      if (d.children && d.children.length !== 0) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
        hasChildNodeArr.push(d);
      }
    }

    function redraw() {
      treeG.attr('transform', `translate(${d3.event.translate})`
        + ` scale(${d3.event.scale})`);
    }

    function disableRightClick() {
      // stop zoom
      if (d3.event.button === 2) {
        d3.event.stopImmediatePropagation();
      }
    }

    function sortByDate(a, b) {
      const aNum = a.name.substr(a.name.lastIndexOf('(') + 1, 4);
      const bNum = b.name.substr(b.name.lastIndexOf('(') + 1, 4);
      return d3.ascending(aNum, bNum)
        || d3.ascending(a.name, b.name)
        || d3.ascending(a.id, b.id);
    }
  };
  console.log('this', _this);
  const d3GenerationChart = new treeChart(d3);
  d3GenerationChart.drawChart();
}

export { drawThroughChart };
