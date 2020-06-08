/* global d3 */

/*
 USAGE (example: line chart)
 1. c+p this template to a new file (line.js)
 2. change puddingChartName to puddingChartLine
 3. in graphic file: import './pudding-chart/line'
 4a. const charts = d3.selectAll('.thing').data(data).puddingChartLine();
 4b. const chart = d3.select('.thing').datum(datum).puddingChartLine();
*/

d3.selection.prototype.puddingBarChart = function init(options) {
    function createChart(el) {
      // dom elements
      const $chart = d3.select(el);
      let $yearRow = null;
      let $yearLabel = null;
      let $barContainer = null;
      let $rwbBar = null;
      let $rwbNBar = null;
  
      // data
      let data = $chart.datum();

      data = data.map(d => ({
          ...d,
          percent_n: +d.percent_n,
          percent_y: +d.percent_y
      }))

      console.log(data)
  
      // dimensions
      let width = 0;
      let height = 0;
      const MARGIN_TOP = 0;
      const MARGIN_BOTTOM = 0;
      const MARGIN_LEFT = 0;
      const MARGIN_RIGHT = 0;
  
      // scales
      const scaleX = null;
      const scaleY = null;
  
      // helper functions
  
      const Chart = {
        // called once at start
        init() {
          $yearRow = $chart.selectAll('.year-row')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'year-row')
          
          $yearLabel = $yearRow.append('p')
            .text(d => d.year)
            .attr('class', 'year-label')  
          
        $barContainer = $yearRow.append('div')
            .attr('class', 'bar-container')
        
        $rwbBar = $barContainer.append('div')
            .attr('class', 'bar-rwb') 
        
        $rwbNBar = $barContainer.append('div')
            .attr('class', 'bar-rwbn')
            .style('width', d => `${d.percent_n * 100}%`) 
        
        $rwbNBar.append('p')
            .text(d => `${(d.percent_n * 100).toFixed(1)}%`) 
            .style('left', d => `${100}%`) 
  
        },
        // on resize, update new dimensions
        resize() {
          // defaults to grabbing dimensions from container element
          width = $chart.node().offsetWidth - MARGIN_LEFT - MARGIN_RIGHT;
          height = $chart.node().offsetHeight - MARGIN_TOP - MARGIN_BOTTOM;
          $svg
            .attr('width', width + MARGIN_LEFT + MARGIN_RIGHT)
            .attr('height', height + MARGIN_TOP + MARGIN_BOTTOM);
          return Chart;
        },
        // update scales and render chart
        render() {
          // offset chart for margins
          $vis.attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`);
  
          return Chart;
        },
        // get / set data
        data(val) {
          if (!arguments.length) return data;
          data = val;
          $chart.datum(data);
          return Chart;
        },
      };
      Chart.init();
  
      return Chart;
    }
  
    // create charts
    const charts = this.nodes().map(createChart);
    return charts.length > 1 ? charts : charts.pop();
  };
  