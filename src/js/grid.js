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
const $step0 = d3.select('#step-0')
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
    
    $step0.style('margin-top', `-${stepHeight}px`)

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

    if (index === 1) {
        $campaignLogos.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
            .style('filter', 'none')
    }
    if (index === 2) {
        $RWB_N.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0.2)
            .style('filter', 'grayscale(100%)')

        $RWB_Y.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
            .style('filter', 'none')    
    }
    if (index === 3) {
        $RWB_N.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0.2)
            .style('filter', 'grayscale(100%)')
        
        $RWB_Y.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
            .style('filter', 'none')
    }
    if (index === 4) {
        $RWB_N.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
            .style('filter', 'none')
        
        $RWB_Y.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0.2)
            .style('filter', 'grayscale(100%)')
    }
    if (index === 5) {
        $RWB_N.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
            .style('filter', 'none')
        
        $RWB_Y.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0.2)
            .style('filter', 'grayscale(100%)')
    }

    if (index === 6) {
        $campaignLogos.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
            .style('filter', 'none')
    }

}

// GRID
// load in images
function loadGrid() {
    const containerW = $graphic.node().offsetWidth
    const containerH = $graphic.node().offsetHeight
    const containerArea = containerW*containerH
    const numLogos = data2020.length

    const ratio = containerW/containerH
    const ncols_float = Math.sqrt(numLogos * ratio);
    const nrows_float = numLogos / ncols_float;

    // Find best option filling the whole height
    let nrows1 = Math.ceil(nrows_float);
    let ncols1 = Math.ceil(numLogos / nrows1);
    while (nrows1 * ratio < ncols1) {
        nrows1++;
        ncols1 = Math.ceil(numLogos / nrows1);
    }
    let cell_size1 = containerH / nrows1;

    // Find best option filling the whole width
    let ncols2 = Math.ceil(ncols_float);
    let nrows2 = Math.ceil(numLogos / ncols2);
    while (ncols2 < nrows2 * ratio) {
        ncols2++;
        nrows2 = Math.ceil(numLogos / ncols2);
    }
    let cell_size2 = containerW / ncols2;

    // Find the best values
    let nrows, ncols, cell_size;
    if (cell_size1 < cell_size2) {
        nrows = nrows2;
        ncols = ncols2;
        cell_size = cell_size2;
    } else {
        nrows = nrows1;
        ncols = ncols1;
        cell_size = cell_size1;
    }

    console.log(nrows, ncols, cell_size)
    
   $gridDiv
        .selectAll('.logoDiv')
        .data(data2020)
        .enter()
        .append('div')
        .attr('class', d => `logoDiv logoDiv-${d.nameID} RWB-${d.RWB}`)
        .append('img')
        .attr('src', d => `assets/images/2020-${d.nameID}.jpg`)
        .attr('alt', d => `${d.name} campaign logo`)
        .style('width', `${cell_size}px`)
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

    //Filter out Vermin for top
    data2020 = data2020.filter(d => d.nameID !== 'supreme')

    console.log(data2020.length)
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