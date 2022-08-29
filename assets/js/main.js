/* console.log('funzt')

let album = [ "holidays.jpg",'Restaurant.jpg','desktop', 'rooms.GIF', 'DOGATBEACH.jpg'
]

album.forEach(element => {

    let ending = element.indexOf('.')

    console.log(ending)

    if(ending > 0){
        let elementLower = element.slice(0,ending)
        console.log(elementLower.toLowerCase())
    }else{
        console.log('invalid')
    }

}) */

/* console.log('funzt')

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" }]


const artist = document.getElementById('searchInput')
const table = document.getElementById('table-container')

const tableForm = document.createElement('table')
tableForm.style.width = '100%'
table.appendChild(tableForm)
const tableRow = document.createElement('tr')
tableForm.appendChild(tableRow)

const tableHeaderName = document.createElement('th')
tableRow.appendChild(tableHeaderName)
const headerName = document.createTextNode('Name')
tableHeaderName.appendChild(headerName)

const tableHeaderCountry = document.createElement('th')
tableRow.appendChild(tableHeaderCountry)
const headerCountry = document.createTextNode('Country')
tableHeaderCountry.appendChild(headerCountry)

const tableHeaderPeriod = document.createElement('th')
tableRow.appendChild(tableHeaderPeriod)
const headerPeriod = document.createTextNode('Period Active')
tableHeaderPeriod.appendChild(headerPeriod)

const tableHeaderGenre = document.createElement('th')
tableRow.appendChild(tableHeaderGenre)
const headerGenre = document.createTextNode('Genre')
tableHeaderGenre.appendChild(headerGenre)

tableRow.style.padding = '8px'

for (let i = 0; i < singers.length; i++) {

    console.log('1te for schleife')

    const tableRow = document.createElement('tr')
    tableForm.appendChild(tableRow)

    const tableDataName = document.createElement('td')
    tableRow.appendChild(tableDataName)
    const DataName = document.createTextNode(singers[i].name)
    tableDataName.appendChild(DataName)

    const tableDataCountry = document.createElement('td')
    tableRow.appendChild(tableDataCountry)
    const DataCountry = document.createTextNode(singers[i].country)
    tableDataCountry.appendChild(DataCountry)

    const tableDataPeriod = document.createElement('td')
    tableRow.appendChild(tableDataPeriod)
    const DataPeriod = document.createTextNode(`${singers[i].period_active.start} ${singers[i].period_active.end}`)
    tableDataPeriod.appendChild(DataPeriod)

    const tableDataGenre = document.createElement('td')
    tableRow.appendChild(tableDataGenre)
    const DataGenre = document.createTextNode(singers[i].genre)
    tableDataGenre.appendChild(DataGenre)

}


const handleSearchClicked = () => {
    console.log(artist.value)

    for (let i = 0; i < singers.length; i++) {

        if (artist.value === singers[i].name) {

            console.log('2te for schleife')


            tableForm.innerHTML = ''

            const tableRow = document.createElement('tr')
            tableForm.appendChild(tableRow)

            const tableDataName = document.createElement('td')
            tableRow.appendChild(tableDataName)
            const DataName = document.createTextNode(singers[i].name)
            tableDataName.appendChild(DataName)

            const tableDataCountry = document.createElement('td')
            tableRow.appendChild(tableDataCountry)
            const DataCountry = document.createTextNode(singers[i].country)
            tableDataCountry.appendChild(DataCountry)

            const tableDataPeriod = document.createElement('td')
            tableRow.appendChild(tableDataPeriod)
            const DataPeriod = document.createTextNode(`${singers[i].period_active.start} ${singers[i].period_active.end}`)
            tableDataPeriod.appendChild(DataPeriod)

            const tableDataGenre = document.createElement('td')
            tableRow.appendChild(tableDataGenre)
            const DataGenre = document.createTextNode(singers[i].genre)
            tableDataGenre.appendChild(DataGenre)

        } else {
            console.log('entweder ist die Rechtschreibung falsch, die Person wird nicht in der liste aufgeführt')
        }

    }
}
 */