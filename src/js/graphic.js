/* global d3 */
import grid from './grid';
import loadData from './load-data';
import './pudding-chart/colors-chart';
import './pudding-chart/bar';
import miniGrid from "./miniGrid";

// initialize scrollama
const scrollama = require("scrollama");

let data = null;
let yearData = null;

let colorChart = null;
const $colorChartDiv = d3.select('#chart')

let yearChart = null;
const $yearChartDiv = d3.select('#year-chart')

const scrollerChart = scrollama();
const $container = d3.select('#scroll-chart');
const $graphic = $container.select('.scroll-chart__graphic');
const $text = $container.select('.scroll-chart__text');
const $step = $text.selectAll('.step-chart');

function setupColorChart() {
  colorChart = $colorChartDiv
    .datum(data)
    .puddingColorChart()
}

function setupYearChart() {
  yearChart = $yearChartDiv
    .datum(yearData)
    .puddingBarChart()
}

// SCROLLAMA
// setup
function scrollSetup() {
  scrollerChart
  .setup({
    container: '#scroll-chart', // our outermost scrollytelling element
    graphic: '.scroll-chart__graphic', // the graphic
    text: '.scroll-chart__text', // the step container
    step: '.scroll-chart__text .step-chart', // the step elements
    offset: 0.5, // set the trigger to be 1/2 way down screen
    debug: false, // display the trigger offset for testing
  })
  .onStepEnter(handleStepEnter);
}

// resize
function handleResize() {
  // 1. update height of step elements for breathing room between steps
  const stepHeight = Math.floor(window.innerHeight * 0.75);
  $step.style('height', stepHeight + 'px');

  // 2. update height of graphic element
  const bodyWidth = d3.select('body').node().offsetWidth;

  $graphic
    .style('height', (window.innerHeight) + 'px');

  // 3. tell scrollama to update new element dimensions
  scrollerChart.resize();
  }

// step enter
function handleStepEnter(response) {
  $step.classed('is-active', (d, i) => i === response.index);

  renderStepChart(response.index)
}

function colorStep0() {
  const $candidateRow = d3.selectAll('.candidate');

  $candidateRow.classed('faded', false).style('pointer-events', 'none')
}

function colorStep1() {
  const $candidateRow = d3.selectAll('.candidate');
  const $bar = d3.selectAll('#allCand .percent')
  const $text = d3.selectAll('#allCand p')

  $candidateRow.classed('faded', true).style('pointer-events', 'none')
  d3.selectAll('.candidate_RWB-N').classed('faded', false)

  $bar.transition()
     .duration(250)
     .ease(d3.easeLinear)
     .style('width', '35.5%')
  
  $text.transition()
    .duration(250)
    .delay(250)
    .style('opacity', '1')
}

function colorStep2() {
  const $candidateRow = d3.selectAll('.candidate');
  const $bar = d3.selectAll('#demoCand .percent')
  const $text = d3.selectAll('#demoCand p')
  
  $candidateRow.classed('faded', true).style('pointer-events', 'none')
  d3.selectAll('.candidate_whiteMale-FALSE').classed('faded', false)

  $bar.transition()
    .duration(250)
    .ease(d3.easeLinear)
    .style('width', '50%')

  $text.transition()
    .duration(250)
    .delay(250)
    .style('opacity', '1')
  }

function colorStep3() {
  const $candidateRow = d3.selectAll('.candidate');
  const $bar = d3.selectAll('#raceCand .percent')
  const $text = d3.selectAll('#raceCand p')
  
  $candidateRow.classed('faded', true).style('pointer-events', 'none')
  d3.selectAll('.candidate_white-N').classed('faded', false)

  $bar.transition()
    .duration(250)
    .ease(d3.easeLinear)
    .style('width', '38.7%')

  $text.transition()
    .duration(250)
    .delay(250)
    .style('opacity', '1')
}

function colorStep4() {
  const $candidateRow = d3.selectAll('.candidate');
  const $bar = d3.selectAll('#genderCand .percent')
  const $text = d3.selectAll('#genderCand p')
  
  $candidateRow.classed('faded', true).style('pointer-events', 'none')
  d3.selectAll('.candidate_male-N').classed('faded', false)

  $bar.transition()
    .duration(250)
    .ease(d3.easeLinear)
    .style('width', '72%')

  $text.transition()
    .duration(250)
    .delay(250)
    .style('opacity', '1')
}

function colorStep5() {
  const $candidateRow = d3.selectAll('.candidate');
  
  $candidateRow.classed('faded', false).style('pointer-events', 'auto')
}

// render step
function renderStepChart(index) {
  if (index === 0) {
    colorStep0()
  }
  if (index === 1) {
    colorStep1()
  }
  if (index === 2) {
    colorStep2()
  }
  if (index === 3) {
    colorStep3()
  }
  if (index === 4) {
    colorStep4()
  }
  if (index === 5) {
    colorStep5()
  }
}

function resize() {}

function init() {

  loadData(['colors.csv', 'years.csv']).then(result => {
    data = result[0];
    yearData = result[1];

    grid.init(data);
    setupYearChart();
    miniGrid.init(data, 'allMin');
    miniGrid.init(data, 'race');
    miniGrid.init(data, 'gender');
    miniGrid.init(data, 'minWomen');
    setupColorChart();
    handleResize();
    scrollSetup();
    window.addEventListener('resize', handleResize);
	}).catch(console.error);
}

export default { init, resize };
