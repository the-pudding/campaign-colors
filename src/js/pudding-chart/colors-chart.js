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
      let $yearDiv = null;
      let $yearLabel = null;
      let $candidateRow = null;
      let $candidateName = null;
      let $rwbGroup = null;
      let $otherGroup = null;
      let $redBlock = null;
      let $whiteBlock = null;
      let $blueBlock = null;
      const $overlay = d3.select('.overlay')
      const $overlayInset = $overlay.select('.overlay-inset')
      const $overlayName = $overlayInset.select('h5')
      const $overlayParty = $overlayInset.select('.party')
      const $overlayColor = $overlayInset.select('.color')
      const $overlayRace = $overlayInset.select('.race')
      const $overlayGender = $overlayInset.select('.gender')
      const $overlayImg = $overlayInset.select('img')
      const $overlayNotes = $overlayInset.select('.notes')
  
      // data
      let data = $chart.datum();
      let yearNestData = [];
  
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
      function returnColor(color) {
        if (color == 'Y') { return 'RWB'}
        else { return 'Non-RWB'}
      }

      function returnRace(race) {
        if (race == 'Y') { return 'White'}
        else { return 'Non-White'}
      }

      function returnGender(gender) {
        if (gender == 'Y') { return 'Male'}
        else { return 'Non-male'}
      }

      function chartMouseover(d, i) {
        $candidateRow.classed('faded', true)
        d3.select(this).classed('faded', false)
        $overlayInset.classed('is-visible', true)

        $overlayName.text(`${d.name}`)
        $overlayParty.text(`${d.party}, ${d.year}`)
        $overlayColor.text(`${returnColor(d.RWB)}`)
        $overlayRace.text(`${returnRace(d.white)}`)
        $overlayGender.text(`${returnGender(d.male)}`)
        $overlayImg.attr('src', `assets/images/${d.image}`)
      }

      function chartMouseout() {
        $candidateRow.classed('faded', false)
        $overlayInset.classed('is-visible', false)
      }
  
      const Chart = {
        // called once at start
        init() {

          yearNestData = d3.nest()
            .key(d => d.year)
            .entries(data)

          $colorChartContainer = $chart.append('div').attr('class', 'pudding-chart');

          //append year divs
          $yearDiv = $colorChartContainer
            .selectAll('.year')
            .data(yearNestData)
            .enter()
            .append('div')
            .attr('class', d => `year year-${d.key}`)
          
          $yearLabel = $yearDiv
            .append('p')
            .attr('class', 'year-label')
            .text(d => d.key)  

          // append candidate rows
          $candidateRow = $yearDiv
            .selectAll('.candidate')
            .data(d => d.values)
            .enter()
            .append('div')
            .attr('class', function(d) {
              const nameStripped = (d.name).replace(/\s+/g, '').replace('.', '').replace("'", '')
              return `candidate candidate_${nameStripped} candidate_RWB-${d.RWB} candidate_white-${d.white} candidate_male-${d.male} candidate_whiteMale-${d.whiteMale}`
            })
            .on('mouseover', chartMouseover)
            .on('mouseout', chartMouseout)

          $rwbGroup = $candidateRow
            .append('div')
            .attr('class', 'rwb-group')  
          
          $otherGroup = $candidateRow
            .append('div')
            .attr('class', 'other-group')  
          
          $redBlock = $rwbGroup
            .append('div')
            .attr('class', function(d, i) {
              if (d.redHex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d, i) { if (d.redHex) {return d.redHex} })  
          
          $whiteBlock = $rwbGroup
            .append('div')
            .attr('class', function(d, i) {
              if (d.whiteHex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d, i) { if (d.whiteHex) {return d.whiteHex} }) 
          
          $blueBlock = $rwbGroup
            .append('div')
            .attr('class', function(d, i) {
              if (d.blueHex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d, i) { if (d.blueHex) {return d.blueHex} }) 
          
          $other1Block = $otherGroup
            .append('div')
            .attr('class', function(d, i) {
              if (d.other1Hex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d, i) { if (d.other1Hex) {return d.other1Hex} })  
          
          $other2Block = $otherGroup
            .append('div')
            .attr('class', function(d, i) {
              if (d.other2Hex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d, i) { if (d.other2Hex) {return d.other2Hex} })  
          
          $other3Block = $otherGroup
            .append('div')
            .attr('class', function(d, i) {
              if (d.other3Hex) { return 'color-block'}
              else { return 'color-block empty-block'}
            })
            .style('background-color', function(d, i) { if (d.other3Hex) {return d.other3Hex} })  
            
          Chart.resize();
        },
        // on resize, update new dimensions
        resize() {
          // defaults to grabbing dimensions from container element
          width = $chart.node().offsetWidth - MARGIN_LEFT - MARGIN_RIGHT;
          height = $chart.node().offsetHeight - MARGIN_TOP - MARGIN_BOTTOM;

          const totalCandidates = data.length
          const barHeight = Math.floor((height)/totalCandidates*2)
          const colorBlocks = d3.selectAll('.color-block')
          
          d3.selectAll('.color-block').style('height', `8px`)
          d3.selectAll('.candidate').style('height', `10px`)

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
  