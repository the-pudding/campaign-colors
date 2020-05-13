/* global d3 */
import grid from "./grid";
import loadData from './load-data';
import './pudding-chart/colors-chart'

let data = null;
let colorChart = null;
const $colorChartDiv = d3.select('#chart')


function setupColorChart() {
  colorChart = $colorChartDiv
    .datum(data)
    .puddingColorChart()
}

function resize() {}

function init() {
  grid.init()

  loadData('colors.csv').then(result => {
    data = result;
    setupColorChart();
    grid.init();
	}).catch(console.error);
}

export default { init, resize };
