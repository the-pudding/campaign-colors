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
const $introSVG = d3.selectAll('.intro__svg')

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

    loadGrid()

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

    if (index === 0) {
        $text.style('pointer-events', 'none')

        $introSVG.transition()
            .duration(100)
            .ease(d3.easeLinear)
            .style('opacity', 1)

        $campaignLogos.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0.2)
            .style('filter', 'grayscale(100%)')
    }

    if (index === 1) {
        $text.style('pointer-events', 'auto')

        $introSVG.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0)

        $campaignLogos.transition()
            .duration(1500)
            .delay((d, i) => i * 50)
            .ease(d3.easeLinear)
            .style('opacity', 1)
            .style('filter', 'none')
        
        d3.selectAll('.logoDiv-bennet, .logoDiv-bullock, .logoDiv-ryan')
            .classed('is-intext', false)
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
        
        d3.selectAll('.logoDiv-biden, .logoDiv-trump')
            .classed('is-intext', false)
        
        d3.selectAll('.logoDiv-bennet, .logoDiv-bullock, .logoDiv-ryan')
            .classed('is-intext', true)
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
        
        d3.selectAll('.logoDiv-biden, .logoDiv-trump')
            .classed('is-intext', true)
        
        d3.selectAll('.logoDiv-bennet, .logoDiv-bullock, .logoDiv-ryan')
            .classed('is-intext', false)
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
        
        d3.selectAll('.logoDiv-biden, .logoDiv-trump')
            .classed('is-intext', false)
        
        d3.selectAll('.logoDiv-harris, .logoDiv-orourke, .logoDiv-warren')
            .classed('is-intext', false)
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
        
        d3.selectAll('.logoDiv-harris, .logoDiv-orourke, .logoDiv-warren')
            .classed('is-intext', true)
    }

    if (index === 6) {
        $campaignLogos.transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1)
            .style('filter', 'none')
        
        d3.selectAll('.logoDiv-harris, .logoDiv-orourke, .logoDiv-warren')
            .classed('is-intext', false)
    }

}

// GRID
// load in images
function loadGrid() {
    const containerW = $graphic.node().offsetWidth
    const containerH = $graphic.node().offsetHeight
    const containerArea = containerW*containerH
    const numLogos = data2020.length
    const areaPerLogo = containerArea / numLogos
    const logoscale = 0.95
    const logoH = Math.floor(Math.sqrt(areaPerLogo / 1.777) * logoscale)
    const logoW = Math.floor(logoH * 1.777 * logoscale)
    
   $gridDiv
        .selectAll('.logoDiv')
        .data(data2020)
        .enter()
        .append('div')
        .attr('class', d => `logoDiv logoDiv-${d.nameID} RWB-${d.RWB}`)
        .append('img')
        .attr('src', d => `assets/images/2020-${d.nameID}.jpg`)
        .attr('alt', d => `${d.name} campaign logo`)
        .style('width', `${logoW}px`)
        .style('height', `${logoH}px`)
}

// fade in grid
function fadeInGrid() {
    const $campaignLogos = d3.selectAll('.logoDiv')

    $campaignLogos.transition()
        .duration(1500)
        .delay((d, i) => i * 100)
        .ease(d3.easeLinear)
        .style('opacity', 0.125)
}

// title animations
function bounceArrow() {
    const arrow = d3.selectAll('#lines polygon')

    arrow.transition()
        .duration(5000)
        .ease(d3.easeBounce)
        .style('transform', 'translateY(30px)')
    
    arrow.classed('bounce', true)
}
function popItems(itemType) {
    const items = d3.selectAll(itemType)

    items.transition()
        .duration(5000)
        .delay((d, i) => i * 100)
        .ease(d3.easeBounce)
        .style('transform', 'scale(1)')
}

function tweenDashIn() {
    const l = this.getTotalLength()
	const i = d3.interpolateString('0,' + l, l + ',' + l);
	return function(t) { return i(t); };
}

function drawInPaths(pathType) {
    const letterPaths = d3.selectAll(pathType)
    const lineNodes = letterPaths._groups[0]

    lineNodes.forEach.call(lineNodes, function(path) {
        letterPaths.transition()
            .delay((d) => Math.random() * Math.random(500))
            .duration(5000)
            .ease(d3.easeLinear)
            .attrTween('stroke-dasharray', tweenDashIn)   
    })
}

function animateTitle() {
    console.log('animating')
    drawInPaths('#strokes path')
    drawInPaths('#line-strokes path')
    popItems('#stars polygon')
    popItems('#years g path')
    bounceArrow()
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
    $logo.classed('is-highlighted', true)    
}

function dehighlightName() {
    const $name = d3.select(this).attr('id').split('-')[0]
    const $logoDivs = d3.selectAll('.logoDiv')

    console.log($name)

    if ($name === 'bennet' || $name === 'bullock' || $name === 'ryan' || $name === 'biden' || $name === 'trump') {
       d3.selectAll('.RWB-Y').transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 1) 
       
        d3.selectAll('.RWB-N').transition()
            .duration(200)
            .ease(d3.easeLinear)
            .style('opacity', 0.2) 
    }

    if ($name === 'harris' || $name === 'orourke' || $name === 'warren') {
        d3.selectAll('.RWB-Y').transition()
             .duration(200)
             .ease(d3.easeLinear)
             .style('opacity', 0.2) 
        
         d3.selectAll('.RWB-N').transition()
             .duration(200)
             .ease(d3.easeLinear)
             .style('opacity', 1) 
     }

    $logoDivs.classed('is-highlighted', false)        
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

    //loadGrid();
    fadeInGrid();
    //invisibleStroke(); 
    animateTitle(); 

    window.addEventListener('resize', handleResize);

    // INTERACTIONS
    $introNameSpan.on('mouseenter', highlightName)
    $introNameSpan.on('mouseleave', dehighlightName)
  }
  
  export default { init };