/* global d3 */

/*
 USAGE (example: line chart)
 1. c+p this template to a new file (line.js)
 2. change puddingChartName to puddingChartLine
 3. in graphic file: import './pudding-chart/line'
 4a. const charts = d3.selectAll('.thing').data(data).puddingChartLine();
 4b. const chart = d3.select('.thing').datum(datum).puddingChartLine();
*/

d3.selection.prototype.puddingColorChart = function init(options) {
    function createChart(el) {
      // dom elements
      const $chart = d3.select(el);
      let $colorChartContainer = null;
      let $candidateRow = null;
      let $candidateName = null;
      let $rwbGroup = null;
      let $otherGroup = null;
      let $redBlock = null;
      let $whiteBlock = null;
      let $blueBlock = null;
      const $overlay = d3.select('.scroll-chart__overlay')
  
      // data
      let data = $chart.datum();
  
      // dimensions
      let width = 0;
      let height = 0;
      const MARGIN_TOP = 0;
      const MARGIN_BOTTOM = 0;
      const MARGIN_LEFT = 0;
      const MARGIN_RIGHT = 0;
  
      // scales
      // const scaleX = null;
      // const scaleY = null;
  
      // helper functions
  
      const Chart = {
        // called once at start
        init() {

          $colorChartContainer = $chart.append('div').attr('class', 'pudding-chart');

          // append candidate rows
          $candidateRow = $colorChartContainer
            .selectAll('.candidate')
            .data(data)
            .enter()
            .append('div')
            .attr('class', d => `candidate candidate-${d.name}`)
            .on('mouseenter', function(d) {
              $candidateRow.classed('faded', true)
              d3.select(this).classed('faded', false)
              $overlay.classed('is-visible', true)
            })
            .on('mouseleave', function(d) {
              $candidateRow.classed('faded', false)
              $overlay.classed('is-visible', false)
            })
          
          // $candidateName = $candidateRow
          //   .append('p')
          //   .text(function(d) {
          //     if (d.party !== 'Reform') {
          //       return `${d.name} (${(d.party).substring(0, 1)})`
          //     }
          //     else { return `${d.name} (Rf)`}
          //   })
          //   .text(d => `${d.name} (${(d.party).substring(0, 1)})`)
          //   .attr('class', 'candidate__name')

          $rwbGroup = $candidateRow
            .append('div')
            .attr('class', 'rwb-group')  
          
          $otherGroup = $candidateRow
            .append('div')
            .attr('class', 'other-group')  
          
          $redBlock = $rwbGroup
            .append('div')
            .attr('class', function(d) {
              if (d.redHex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d) { if (d.redHex) {return d.redHex} })  
          
          $whiteBlock = $rwbGroup
            .append('div')
            .attr('class', function(d) {
              if (d.whiteHex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d) { if (d.whiteHex) {return d.whiteHex} }) 
          
          $blueBlock = $rwbGroup
            .append('div')
            .attr('class', function(d) {
              if (d.blueHex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d) { if (d.blueHex) {return d.blueHex} }) 
          
          $other1Block = $otherGroup
            .append('div')
            .attr('class', function(d) {
              if (d.other1Hex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d) { if (d.other1Hex) {return d.other1Hex} })  
          
          $other2Block = $otherGroup
            .append('div')
            .attr('class', function(d) {
              if (d.other2Hex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d) { if (d.other2Hex) {return d.other2Hex} })  
          
          $other3Block = $otherGroup
            .append('div')
            .attr('class', function(d) {
              if (d.other3Hex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d) { if (d.other3Hex) {return d.other3Hex} })  
            
          Chart.resize();
        },
        // on resize, update new dimensions
        resize() {
          // defaults to grabbing dimensions from container element
          width = $chart.node().offsetWidth - MARGIN_LEFT - MARGIN_RIGHT;
          height = $chart.node().offsetHeight - MARGIN_TOP - MARGIN_BOTTOM;

          const totalCandidates = data.length
          const barHeight = Math.floor((height)/totalCandidates)
          console.log(height, height, barHeight)
          const colorBlocks = d3.selectAll('.color-block')
          
          d3.selectAll('.color-block').style('height', `${barHeight}px`)
          d3.selectAll('.candidate').style('height', `${barHeight}px`)

          return Chart;
        },
        // update scales and render chart
        render() {
  
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
  