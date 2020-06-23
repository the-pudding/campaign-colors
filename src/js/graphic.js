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
	}).catch(console.error);
}

export default { init, resize };
