let demographicData = []
let demographicDataNest = []
let whiteMaleData = []
let whiteMaleDataNest = []
let demoHed = null

function getLastName(name) {
    let lastName = null;
    if (name === 'Bill de Blasio') {
        lastName = 'deblasio'
    }
    else if(name === 'Rocky De La Fuente') {
        lastName = 'delafuente'
    }
    else if(name === 'Carol Moseley Braun') {
        lastName = 'moseleybraun'
    }
    else {
        lastName = name.split(' ')[1].toLowerCase().replace("'","")
    }
    return lastName
}

function filterData(data, demographic) {

    whiteMaleData = data.filter(d => d.whiteMale == 'TRUE')
    whiteMaleDataNest = d3.nest()
        .key(d => d.RWB).sortKeys(d3.ascending)
        .entries(whiteMaleData)

    if (demographic == 'allMin') {
        demographicData = data.filter(d => d.whiteMale == 'FALSE')
        demographicData = demographicData.map(d => ({
            ...d,
            nameID: getLastName(d.name)
        }))
        demographicDataNest = d3.nest()
            .key(d => d.RWB).sortKeys(d3.ascending)
            .entries(demographicData)
        demoHed = 'all minority candidates'
    }
    if (demographic == 'race') {
        demographicData = data.filter(d => d.white == 'N')
        demographicData = demographicData.map(d => ({
            ...d,
            nameID: getLastName(d.name)
        }))
        demographicDataNest = d3.nest()
            .key(d => d.RWB).sortKeys(d3.ascending)
            .entries(demographicData)
        demoHed = 'non-White candidates'
    }
    if (demographic == 'gender') {
        demographicData = data.filter(d => d.male == 'N')
        demographicData = demographicData.map(d => ({
            ...d,
            nameID: getLastName(d.name)
        }))
        demographicDataNest = d3.nest()
            .key(d => d.RWB).sortKeys(d3.ascending)
            .entries(demographicData)
        demoHed = 'non-male candidates'    
    }

    if (demographic == 'minWomen') {
        demographicData = data.filter(d => d.male == 'N' && d.white == 'N')
        demographicData = demographicData.map(d => ({
            ...d,
            nameID: getLastName(d.name)
        }))
        demographicDataNest = d3.nest()
            .key(d => d.RWB).sortKeys(d3.ascending)
            .entries(demographicData)
        demoHed = 'non-White & non-male candidates'
    }
}

function init(data, demographic) {
    filterData(data, demographic)

    const totalCands = demographicDataNest[0].values.length + demographicDataNest[1].values.length
    const percentCands = Math.round(demographicDataNest[0].values.length/totalCands*100)

    const whiteMaleCands = whiteMaleDataNest[0].values.length + whiteMaleDataNest[1].values.length
    const percentWhiteMaleCands = Math.round(whiteMaleDataNest[0].values.length/whiteMaleCands*100)

    let $demoContainer = d3.select(`#${demographic}`)
    let $demoSen = d3.select(`#${demographic}-sen`)

    $demoSen.html(`<span>${percentCands}% of ${demoHed}</span> used non-RWB colors compared to only ${percentWhiteMaleCands}% of White male candidates.`)

    let $colorContainer = $demoContainer.selectAll('.colorGroup')
        .data(demographicDataNest)
        .enter()
        .append('div')
        .attr('class', `colorGroup`)
    
    $colorContainer
        .append('p')
        .text(function(d) {
            if (d.key === 'N') { return `Non-RWB (${d.values.length} candidates)`}
            else { return `RWB (${d.values.length} candidates)`}
        })
    
    let $imgDiv = $colorContainer.selectAll('.logoSmall')
        .data(d => d.values)
        .enter()
        .append('div')
        .attr('class', d => `logoSmall logoSmall-${d.nameID}`)
    
    $imgDiv.append('img')
        .attr('src', d => `assets/images/${d.year}-${d.nameID}.jpg`)
        .attr('alt', d => `${d.name} campaign logo`)
    
    
}
  
export default { init };