// initialize scrollama
const scrollama = require("scrollama");

// candidate data
let data2020 = [];

// DOM elements
const scroller = scrollama();
const $container = d3.select('#scroll');
const $graphic = $container.select('.scroll__graphic');
const $gridDiv = $graphic.selectAll('.intro__grid')
const $text = $container.select('.scroll__text');
const $step = $text.selectAll('.step');
const $introNameSpan = d3.selectAll('.intro-hover')

// SCROLLAMA
// setup
function scrollSetup() {
    scroller
		.setup({
			container: '#scroll', // our outermost scrollytelling element
			graphic: '.scroll__graphic', // the graphic
			text: '.scroll__text', // the step container
			step: '.scroll__text .step', // the step elements
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
	scroller.resize();
}

// step enter
function handleStepEnter(response) {
    $step.classed('is-active', (d, i) => i === response.index);

    renderStep(response.index)
}

// render step
function renderStep(index) {
    const $campaignLogos = d3.selectAll('.logoDiv') 
    const $RWB_N = d3.selectAll('.RWB-N')
    const $RWB_Y = d3.selectAll('.RWB-Y')

    if (index === 0) {
        $campaignLogos.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
    }
    if (index === 1) {
        $RWB_N.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0.2)

        $RWB_Y.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)    
    }
    if (index === 2) {
        $RWB_N.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0.2)
        
        $RWB_Y.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
    }
    if (index === 3) {
        $RWB_N.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
        
        $RWB_Y.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0.2)
    }
    if (index === 4) {
        $RWB_N.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
        
        $RWB_Y.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0.2)
    }

    if (index === 5) {
        $campaignLogos.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
    }

}

// GRID
// load in images
function loadGrid() {
   $gridDiv
        .selectAll('.logoDiv')
        .data(data2020)
        .enter()
        .append('div')
        .attr('class', d => `logoDiv logoDiv-${d.nameID} RWB-${d.RWB}`)
        .append('img')
        .attr('src', d => `assets/images/2020-${d.nameID}.jpg`)
}

// fade in grid
function fadeInGrid() {
    const $campaignLogos = d3.selectAll('.logoDiv')

    $campaignLogos.transition()
        .duration(1500)
        .delay((d, i) => i * 100)
        .ease(d3.easeLinear)
        .style('opacity', 1)
}

// INTERACTIONS
function highlightName() {
   const $name = d3.select(this).attr('id').split('-')[0]
   
   const $logo = d3.select(`.logoDiv-${$name}`)
   const $logoDivs = d3.selectAll('.logoDiv')
   $logoDivs.transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style('opacity', 0.2)
   $logo.transition()
        .duration(500)
        .ease(d3.easeLinear)
        .style('opacity', 1)
}

function dehighlightName() {
    const $logoDivs = d3.selectAll('.logoDiv')
    $logoDivs.transition()
         .duration(200)
         .ease(d3.easeLinear)
         .style('opacity', 1)
}

// DATA
function filterData(data) {
    data2020 = data.filter(d => d.year === "2020")
    data2020 = data2020.map(d => ({
        ...d,
        nameID: getLastName(d.name)
    }))
    data2020 = data2020.sort((a,b) => d3.ascending(a.nameID, b.nameID))
}

function getLastName(name) {
    let lastName = null;
    if (name === 'Bill de Blasio') {
        lastName = 'deblasio'
    }
    else if(name === 'Rocky De La Fuente') {
        lastName = 'delafuente'
    }
    else {
        lastName = name.split(' ')[1].toLowerCase().replace("'","")
    }
    return lastName
}

function init(data) {
    filterData(data);
    handleResize();
    scrollSetup();

    loadGrid();
    fadeInGrid();

    window.addEventListener('resize', handleResize);

    // INTERACTIONS
    $introNameSpan.on('mouseenter', highlightName)
    $introNameSpan.on('mouseleave', dehighlightName)
  }
  
  export default { init };