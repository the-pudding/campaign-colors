/* global d3 */
import grid from "./grid";
import loadData from './load-data';
import './pudding-chart/colors-chart'
import './pudding-chart/colors-chart-mini'

let data = null;
let partyData = null;
let thirdPartyData = null;
let raceData = null;
let genderData = null;

let colorChart = null;
let colorMini = null;
const $colorChartDiv = d3.select('#chart')
const $colorMiniParty = d3.select('#party-demo .charts')
const $colorMiniRace = d3.select('#party-race .charts')
const $colorMiniGender = d3.select('#party-gender .charts')

function returnParty(party) {
  if (party === 'Democratic' || party === 'Republican') { return party }
  else { return 'Third Party'}
}

function nestData(data, demo) {
  if (demo === 'party') {
    thirdPartyData = data.map(d => ({
      ...d,
      party: returnParty(d.party)
    }))

    partyData = d3.nest()
      .key(d => d.party)
      .entries(thirdPartyData)
  }
  if (demo === 'race') {
    raceData = d3.nest()
      .key(d => d.white)
      .entries(data)
  }
  if (demo === 'gender') {
    genderData = d3.nest()
      .key(d => d.male)
      .entries(data)
  }
}

function setupColorChart() {
  colorChart = $colorChartDiv
    .datum(data)
    .puddingColorChart()
}

function setupColorMini(demo) {
  if (demo === 'party') {
    colorMini = $colorMiniParty
    .datum(partyData)
    .puddingColorMini(demo)
  }
}

function resize() {}

function init() {

  loadData('colors.csv').then(result => {
    data = result;

    nestData(data, 'party')
    nestData(data, 'race')
    nestData(data, 'gender')

    setupColorMini('party');

    setupColorChart();
    grid.init(data);
	}).catch(console.error);
}

export default { init, resize };
