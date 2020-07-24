/* global d3 */
import grid from './grid';
import loadData from './load-data';
import './pudding-chart/colors-chart';
import './pudding-chart/bar';
import miniGrid from "./miniGrid";
import enterView from 'enter-view';
import autocomplete from 'accessible-autocomplete'

let data = null;
let yearData = null;

let colorChart = null;
const $colorChartDiv = d3.select('#chart')
const $overlay = d3.select('.overlay')

let yearChart = null;
const $yearChartDiv = d3.select('#year-chart')
const $candidateNameSpan = d3.selectAll('.cand-hover')
const $allCheckboxes = d3.selectAll('.input__check')
const $checkbox_party_r = d3.selectAll('#party-r')
const $checkbox_party_d = d3.selectAll('#party-d')
const $checkbox_party_t = d3.selectAll('#party-t')
const $checkbox_color_rwb = d3.selectAll('#color-rwb')
const $checkbox_color_nrwb = d3.selectAll('#color-nrwb')
const $checkbox_race_w = d3.selectAll('#race-w')
const $checkbox_race_nw = d3.selectAll('#race-nw')
const $checkbox_gender_m = d3.selectAll('#gender-m')
const $checkbox_gender_nm = d3.selectAll('#gender-nm')
const $reset = d3.select('.reset')
const $inputText = d3.select('#my-autocomplete')

// INTERACTIONS
function resetChart() {

  const $autocompleteInput = d3.select('.autocomplete__wrapper input')
  $autocompleteInput.node().value = ''

  d3.selectAll('.candidate').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 1)
      .style('pointer-events', 'auto')
  
  if (!$checkbox_party_d.node().checked) { $checkbox_party_d.node().click() }
  if (!$checkbox_party_r.node().checked) { $checkbox_party_r.node().click() }
  if (!$checkbox_party_t.node().checked) { $checkbox_party_t.node().click() }
  if (!$checkbox_color_rwb.node().checked) { $checkbox_color_rwb.node().click() }
  if (!$checkbox_color_nrwb.node().checked) { $checkbox_color_nrwb.node().click() }
  if (!$checkbox_race_w.node().checked) { $checkbox_race_w.node().click() }
  if (!$checkbox_race_nw.node().checked) { $checkbox_race_nw.node().click() }
  if (!$checkbox_gender_m.node().checked) { $checkbox_gender_m.node().click() }
  if (!$checkbox_gender_nm.node().checked) { $checkbox_gender_nm.node().click() }
}

function highlightName() {
  const $name = d3.select(this).attr('id').split('-')[0]
  const $parent = d3.select(this.parentNode).attr('id').split('-')[0]
  
  const $logo = d3.selectAll(`.logoSmall-${$name}`)
  const $logoDivs = d3.selectAll(`#${$parent} .logoSmall`)

  $logoDivs.transition()
       .duration(200)
       .ease(d3.easeLinear)
       .style('opacity', 0.2)
       .style('filter', 'grayscale(100%)')
  $logo.transition()
       .duration(200)
       .ease(d3.easeLinear)
       .style('opacity', 1)
       .style('filter', 'none')
  $logo.classed('is-highlighted', true)      
}

function dehighlightName() {
   const $logoDivs = d3.selectAll('.logoSmall')
   $logoDivs.transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style('opacity', 1)
        .style('filter', 'none')
    $logoDivs.classed('is-highlighted', false)      
}

// FILTERS
function checkParty() {
  const $checkbox_party_r_status = $checkbox_party_r.node().checked
  const $checkbox_party_d_status = $checkbox_party_d.node().checked
  const $checkbox_party_t_status = $checkbox_party_t.node().checked

  if ($checkbox_party_r_status === false) {
    d3.selectAll('.candidate_party-Republican').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 0.2)
      .style('pointer-events', 'none')
  }

  if ($checkbox_party_d_status === false) {
    d3.selectAll('.candidate_party-Democratic').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 0.2)
      .style('pointer-events', 'none')
  }

  if ($checkbox_party_t_status === false) {
    d3.selectAll('.candidate_party-Third').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 0.2)
      .style('pointer-events', 'none')
  }
}

function checkColor() {
  const $checkbox_color_rwb_status = $checkbox_color_rwb.node().checked
  const $checkbox_color_nrwb_status = $checkbox_color_nrwb.node().checked

  if ($checkbox_color_rwb_status === false) {
    d3.selectAll('.candidate_RWB-Y').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 0.2)
      .style('pointer-events', 'none')
  }

  if ($checkbox_color_nrwb_status === false) {
    d3.selectAll('.candidate_RWB-N').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 0.2)
      .style('pointer-events', 'none')
  }
}

function checkRace() {
  const $checkbox_race_w_status = $checkbox_race_w.node().checked
  const $checkbox_race_nw_status = $checkbox_race_nw.node().checked

  if ($checkbox_race_w_status === false) {
    d3.selectAll('.candidate_white-Y').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 0.2)
      .style('pointer-events', 'none')
  }

  if ($checkbox_race_nw_status === false) {
    d3.selectAll('.candidate_white-N').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 0.2)
      .style('pointer-events', 'none')
  }
}

function checkGender() {
  const $checkbox_gender_m_status = $checkbox_gender_m.node().checked
  const $checkbox_gender_nm_status = $checkbox_gender_nm.node().checked

  if ($checkbox_gender_m_status === false) {
    d3.selectAll('.candidate_male-Y').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 0.2)
      .style('pointer-events', 'none')
  }

  if ($checkbox_gender_nm_status === false) {
    d3.selectAll('.candidate_male-N').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 0.2)
      .style('pointer-events', 'none')
  }
}

function checkCheckboxes() {
  d3.selectAll('.candidate').transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 1)
      .style('pointer-events', 'auto')

  checkParty()
  checkColor()
  checkRace()
  checkGender()
}

// AUTOCOMPLETE
function setupCandidateSearch() {
  let onlyNames = data.map(d => d.name)
  onlyNames = [...new Set(onlyNames)];

  autocomplete({
    defaultValue: '',
    element: document.querySelector('#autocomplete'),
    id: 'my-autocomplete',
    source: onlyNames,
    displayMenu: 'overlay',
    minLength: 3,
    confirmOnBlur: true,
    onConfirm(name) {
      highlightCandidate(name)
    }
  });
}

function highlightCandidate(name) {

  if (name) {
    const nameStripped = name.replace(/\s+/g, '').replace(/\./g, '').replace(/\'/g, '')

    d3.selectAll('.candidate').transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style('opacity', 0.2)
        .style('pointer-events', 'none')
    
    d3.selectAll(`.candidate_${nameStripped}`).transition()
      .duration(200)
      .ease(d3.easeLinear)
      .style('opacity', 1)
      .style('pointer-events', 'auto')
  }
}

// CHARTS
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

    enterView({
      selector: '.methods',
      enter: function(el) {
        $overlay.classed('is-visible', false)
      },
      exit: function(el) {
        $overlay.classed('is-visible', true)
      },
      offset: 0.6
    });

    // INTERACTIONS
    $candidateNameSpan.on('mouseenter', highlightName)
    $candidateNameSpan.on('click', highlightName)
    $candidateNameSpan.on('mouseleave', dehighlightName)

    // FILTERS & SEARCH
    setupCandidateSearch();
    $allCheckboxes.on('change', checkCheckboxes)
    $reset.on('click', resetChart)

	}).catch(console.error);
}

export default { init, resize };
