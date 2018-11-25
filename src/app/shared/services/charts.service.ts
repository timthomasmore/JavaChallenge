import {Injectable} from '@angular/core';

@Injectable()
export class ChartsService {
  xAxisData = [];
  data1 = [];
  data2 = [];
  customData = [];

  constructor() {

    //overwrite baroptiondata
    let months = ['dec','nov','oct','sept','aug','jul','jun','may','apr','mar','feb','jan','dec','nov','oct','sept','aug','jul','jun','may','apr','mar','feb'];
    let month = new Date().getMonth();
    this.BarOptionCustom.xAxis[0].data = months.splice(11-month,22-month);

    for (let i = 0; i < 100; i++) {
      this.xAxisData.push('Type ' + i);
      this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
  }

  PieOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['Example1', 'Example2', 'Example3']
    },
    roseType: 'angle',
    series: [
      {
        name: 'PieChart',
        type: 'pie',
        radius: [0, '50%'],
        data: [
          {value: 235, name: 'Example1'},
          {value: 210, name: 'Example2'},
          {value: 162, name: 'Example3'}
        ]
      }
    ]
  };

  LineOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }]
  };

  BarOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };

  AnimationBarOption = {
    legend: {
      data: ['Example data1', 'Example data2'],
      align: 'left'
    },
    /* toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    }, */
    tooltip: {},
    xAxis: {
      data: this.xAxisData,
      silent: false,
      splitLine: {
        show: false
      }
    },
    yAxis: {},
    series: [{
      name: 'Example data1',
      type: 'bar',
      data: this.data1,
      animationDelay: function (idx) {
        return idx * 10;
      }
    }, {
      name: 'Example data2',
      type: 'bar',
      data: this.data2,
      animationDelay: function (idx) {
        return idx * 10 + 100;
      }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
      return idx * 5;
    }
  };

  BarOptionCustom = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'punten',
        type: 'bar',
        barWidth: '60%',
        data: this.customData
      }
    ]
  };

  getBarOption(data = null, xAxisData = null) {
    data === null ? data = null : this.BarOption.series[0].data = data;
    xAxisData === null ? data = null : this.BarOption.xAxis[0].data = xAxisData;
    return this.BarOption;
  }

  getLineOption(data = null, xAxisData = null) {
    data === null ? data = null : this.LineOption.series[0].data = data;
    xAxisData === null ? data = null : this.LineOption.xAxis.data = xAxisData;
    return this.LineOption;
  }

  getPieOption(data = null, legendData = null) {
    data === null ? data = null : this.PieOption.series[0].data = data;
    legendData === null ? data = null : this.PieOption.legend.data = legendData;
    return this.PieOption;
  }

  getAnimationBarOption(data1 = null, data2 = null, xAxisData = null) {
    data1 === null ? data1 = this.data1 : data1 = data1;
    data2 === null ? data2 = this.data2 : data2 = data2;
    xAxisData === null ? xAxisData = this.xAxisData.slice(0, data1.length) : xAxisData = xAxisData;

    this.AnimationBarOption.series[0].data = data1;
    this.AnimationBarOption.series[1].data = data2;
    this.AnimationBarOption.xAxis.data = xAxisData;
    return this.AnimationBarOption;
  }

  getBarOptionCustom(args) {
    for (let i = 0; i < args.length; i++) {
      this.customData.push(args[i]);
    }

    console.log(this.BarOptionCustom.xAxis[0].data);
    return this.BarOptionCustom;
  }
}
