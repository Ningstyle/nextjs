/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable quotes */
export const option1 = (data) => {
  const option = {
    color: ["#1492FF"],
    radar: {
      indicator: [
        { name: data.abscissa_list[0], max: 100 },
        { name: data.abscissa_list[1], max: 100 },
        { name: data.abscissa_list[2], max: 100 },
        { name: data.abscissa_list[3], max: 100 },
        { name: data.abscissa_list[4], max: 100 },
      ],
      axisLine: {
        show: true,
      },
      axisLabel: {
        show: true,
      },
    },
    tooltip: {},
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        label: {
          show: true,
          color: "#1492FF",
          formatter(params) {
            return params.value;
          },
        },
        data: [
          {
            value: data.detail_list[0].ordinate,
            name: "综合评级",
            areaStyle: {
              color: "#D2EAFF",
            },
          },
        ],
      },
    ],
  };
  return option;
};
export const option2 = (param) => {
  const data = JSON.parse(JSON.stringify(param.detail_list[0].ordinate)).reverse();
  const name = JSON.parse(JSON.stringify(param.abscissa_list)).reverse();
  const rifhrL = JSON.parse(JSON.stringify(param.abscissa_right_list)).reverse();
  const colorList = ["#266ABE", "#3AA0FF", "#00CFFF", "#00CFFF", "#17CDB5", "#A6FFC2"].reverse();
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "25%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: [
      {
        type: "category",
        data: name,
        axisTick: {
          show: false,
          alignWithLabel: true,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
          },
        },
        axisLine: {
          show: false,
        },
        boundaryGap: false,
      },
    ],
    xAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
        axisLabel: {
          margin: 30,
        },
      },
    ],
    series: [
      {
        name: param.detail_list[0].target,
        type: "bar",
        barWidth: 28,
        data,
        label: {
          show: true,
          position: "right",
          textStyle: {
            fontSize: "12",
            color: "#333",
          },
          formatter: (params) => `${params.value + param.detail_list[0].unit}   ${rifhrL[params.dataIndex]}`,
        },
        tooltip: {
          valueFormatter(value) {
            return value + param.detail_list[0].unit;
          },
        },
        itemStyle: {
          color: (params) => colorList[params.dataIndex],
        },
      },
    ],
  };
  return option;
};
export const option3 = (param) => {
  const option = {
    series: [
      {
        radius: "80%",
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.25, "#C54646"],
              [0.5, "#FFC559"],
              [0.75, "#00CFFF"],
              [1, "#51C886"],
            ],
          },
        },
        pointer: {
          icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
          length: "12%",
          width: 20,
          offsetCenter: [0, "-60%"],
          itemStyle: {
            color: "auto",
          },
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: "auto",
            width: 1,
          },
        },
        splitLine: {
          length: 10,
          lineStyle: {
            color: "auto",
            width: 1,
          },
        },
        axisLabel: {
          color: "#464646",
          fontSize: 14,
          distance: -40,
          formatter(value) {
            if (value === 0.875) {
              return "优";
            }
            if (value === 0.625) {
              return "良";
            }
            if (value === 0.375) {
              return "中";
            }
            if (value === 0.125) {
              return "差";
            }
            return "";
          },
        },
        title: {
          offsetCenter: [0, "-30%"],
          fontSize: 14,
        },
        detail: {
          fontSize: 14,
          offsetCenter: [0, "0%"],
          valueAnimation: true,
          formatter(value) {
            if (value) {
              return `${Math.round(value * 100)}分`;
            }
            return `${0}分`;
          },
          color: "auto",
        },
        data: [
          {
            value: param.value / 100,
            name: "成绩评定",
          },
        ],
      },
    ],
  };
  return option;
};
export const option4 = (data) => {
  const option = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "tree",
        data,
        top: "1%",
        left: "7%",
        bottom: "1%",
        right: "20%",
        symbolSize: 20,
        label: {
          position: "left",
          verticalAlign: "middle",
          align: "right",
          fontSize: 14,
        },
        roam: true,
        leaves: {
          label: {
            position: "right",
            verticalAlign: "middle",
            align: "left",
          },
        },
        emphasis: {
          focus: "descendant",
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
      },
    ],
  };

  return option;
};
export const option5 = (childrenData) => {
  const option = {
    series: [
      {
        type: "tree",
        layout: "radial",
        top: "5%",
        left: "5%",
        bottom: "5%",
        right: "5%",
        symbolSize: 16,
        data: [childrenData],
        roam: true,
        label: {
          position: "top",
          verticalAlign: "middle",
          align: "right",
          fontSize: 16,
        },
        leaves: {
          label: {
            position: "right",
            verticalAlign: "middle",
            align: "left",
          },
        },
        // emphasis: {
        //     focus: 'descendant'
        // },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
      },
    ],
  };
  return option;
};
export const option6 = (params) => {
  const option = {
    color: ["#1192FF", "#007DE7"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    xAxis: [
      {
        type: "category",
        data: ["2022.5", "2022.6", "2022.7", "2022.8"],
        axisPointer: {
          type: "shadow",
        },
        axisTick: {
          show: false,
          alignWithLabel: true,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          rotate: 30,
          fontSize: 12,
          color: "#777A7A",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "万元",
        nameTextStyle: {
          fontSize: 10,
          padding: [0, 30, 0, 0],
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: "dashed",
          },
        },
      },
    ],
    series: [
      {
        name: "Before",
        type: "bar",
        barWidth: 12,
        data: [964, 7959, 46, 451],
        label: {
          show: true,
          position: "top",
          fontSize: 8,
          color: "#333",
        },
      },
      {
        name: "After",
        type: "bar",
        barWidth: 12,
        data: [839, 7419, 100, 120],
        label: {
          show: true,
          position: "top",
          fontSize: 8,
          color: "#333",
        },
      },
    ],
  };
  return option;
};
export const option7 = (data) => {
  if (data[0]) {
    data[0].value = 20;
    data[0].label = {
      fontSize: 8,
    };
    data[1].value = 40;
    data[2].value = 60;
    data[3].value = 80;
  }

  const option = {
    tooltip: {
      trigger: "item",
      formatter: (params) => `
        <div>${params.data.name}</div>
        <div> <span>${params.data.amount} 家 </span>  <span>${params.data.proportion}</span> </div>
        `,
    },
    series: [
      {
        name: "Funnel",
        type: "funnel",
        left: "10%",
        right: "10%",
        top: 0,
        width: "50%",
        minSize: "0%",
        maxSize: "100%",
        sort: "ascending",
        gap: 2,
        label: {
          show: true,
          position: "right",
          formatter: (params) => `{name|${params.data.amount}家}\n{time|${params.data.proportion}}`,
          rich: {
            name: {
              fontSize: 14,
              color: "#020C2D",
              width: "100%",
              padding: [10, 3, 5, 3],
            },
            time: {
              fontSize: 12,
              color: "#5C5F66",
              width: "100%",
              padding: [3, 3, 10, 3],
            },
          },
        },
        labelLine: {
          show: false,
        },
        color: ["#0074D9", "#3AA0FF", "#7FC9FF", "#266ABE"],
        data,
      },
      {
        name: "Funnel",
        type: "funnel",
        top: 0,
        left: "10%",
        right: "10%",
        width: "50%",
        minSize: "0%",
        maxSize: "100%",
        sort: "ascending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        color: ["#0074D9", "#3AA0FF", "#7FC9FF", "#266ABE"],
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data,
        z: 100,
      },
    ],
  };

  return option;
};
// 堆叠柱状图
export const echartsBarAd = (params, name, title) => {
  const series = [];
  params.yAxis.map((ele) => {
    series.push({
      name: ele.name,
      type: "bar",
      barMaxWidth: "20",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: ele.value,
    });
  });
  const option = {
    tooltip: {
      trigger: "axis",
      formatter: (param) => {
        let str = "";
        if (name) {
          str += ` <div> <span>${name}</span> </div> `;
        }
        str += ` <div> <span>${param[0].name}</span> </div> `;
        param.map((ele) => {
          str += ` <div> <span>${ele.seriesName}</span>  <span>${ele.value}</span> <span>${
            params.yUnit || ""
          }</span> </div> `;
        });
        return str;
      },
    },
    legend: {
      bottom: "bottom",
      icon: "distance",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "20%",
      top: title ? "15%" : "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: params.xAxis,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: title || "",
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
          },
        },
      },
    ],
    color: ["#1192FF", "#70DFB6"],
    series,
  };
  return option;
};
// 矩形数图
export const echartsTreemap = (data, name) => {
  const option = {
    tooltip: {
      formatter: (params) => {
        let str = "";
        if (name) {
          str += ` <div> <span>${name}</span> </div> `;
        }
        str += ` <div> <span>${params.data.name}</span>  <span>${params.data.value}</span> <span>${
          params.data.unit || ""
        }</span> </div> `;
        return str;
      },
    },
    series: [
      {
        type: "treemap",
        breadcrumb: false,
        roam: "move",
        label: {
          position: "insideTopLeft",
          formatter(params) {
            const arr = [`{name|${params.name}}`, `{value|${params.value}}`];
            const arr1 = [params.name, params.value];
            return arr1.join("\n");
          },
          rich: {
            name: {
              fontSize: 18,
              color: "#fff",
            },
            value: {
              fontSize: 18,
              color: "#fff",
            },
          },
        },
        color: [
          "#0D3B66",
          "#00488B",
          "#266ABE",
          "#2468F2",
          "#6FE4FF",
          "#006AD4",
          "#518AFF",
          "#17CDB5",
          "#CFEFBC",
          "#FFC58E",
          "#FDAD61",
          "#0074D9",
          "#3AA0FF",
          "#78A4FF",
          "#00CFFF",
          "#00B572",
          "#51C886",
          "#68E5A0",
          "#8FEFBA",
          "#A6FFC2",
          "#F0FFA3",
          "#FFFBA5",
          "#FFECAB",
          "#FFDB92",
          "#FFC559",
          "#F79760",
          "#F88C6B",
          "#F88C6B",
        ],
        data,
      },
    ],
  };
  return option;
};
