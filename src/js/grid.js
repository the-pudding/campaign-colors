// initialize scrollama
const scrollama = require("scrollama");

// candidate data
const candidateIDs = ['bennet', 'biden', 'bloomberg', 'booker', 'buttigieg', 'castro', 'deblasio', 'delaney', 'gabbard', 'gillibrand',
'harris', 'hickenlooper', 'inslee', 'klobuchar', 'messam', 'moulton', 'ojeda', 'orourke', 'patrick', 'ryan', 'sanders', 'sestak', 'steyer',
'swalwell', 'trump', 'warren', 'weld', 'williamson', 'yang'];

// DOM elements
const scroller = scrollama();
const $container = d3.select('#scroll');
const $graphic = $container.select('.scroll__graphic');
const $gridDiv = $graphic.selectAll('.intro__grid')
const $text = $container.select('.scroll__text');
const $step = $text.selectAll('.step');

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
}

// GRID
// load in images
function loadGrid() {
   $gridDiv
        .selectAll('.logoDiv')
        .data(candidateIDs)
        .enter()
        .append('div')
        .attr('class', d => `logoDiv logoDiv-${d}`)
        .append('img')
        .attr('src', d => `assets/images/2020-${d}.jpg`)
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

function init() {
    handleResize();
    scrollSetup();

    loadGrid();
    fadeInGrid();

    window.addEventListener('resize', handleResize);
  }
  
  export default { init };