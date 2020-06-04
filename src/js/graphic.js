/* global d3 */
import grid from "./grid";
import loadData from './load-data';
import './pudding-chart/colors-chart'
import './pudding-chart/colors-chart-mini'

// initialize scrollama
const scrollama = require("scrollama");

let data = null;
let partyData = null;
let thirdPartyData = null;
let raceData = null;
let genderData = null;

let colorChart = null;
let colorMini = null;
const $colorChartDiv = d3.select('#chart')
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

function colorStep1() {
  
}

// render step
function renderStepChart(index) {
  if (index === 0) {
  }
  if (index === 1) {
  }
  if (index === 2) {
  }
  if (index === 3) {
  }
  if (index === 4) {
  }
  if (index === 5) {
  }
}

function resize() {}

function init() {

  loadData('colors.csv').then(result => {
    data = result;

    grid.init(data);
    setupColorChart();
    handleResize();
    scrollSetup();
    window.addEventListener('resize', handleResize);
	}).catch(console.error);
}

export default { init, resize };
