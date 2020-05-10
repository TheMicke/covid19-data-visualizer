const fetch = require('node-fetch');
const stateAbbreviations = require('../stateAbbreviations.json');
const { deathCalculator } = require('./calculatorController');

const getCurrentData = async () => {
    const covidStateData = []
    await fetch('https://covidtracking.com/api/v1/states/current.json')
    .then(res => (data = res.json()))
    .then(data => data.forEach(d => {
        covidStateData.push(d);
    }))
    .catch(err => console.log(err));

    covidStateData.forEach(d => {
        // Add full state names with the key fullStateName to the objects 
        // based on the abbreviations already existing in the objects
        // more abbreivations can be added to stateAbbreviations.json-file
        if(stateAbbreviations.find(abbr => abbr.short == d.state)) {
            d.fullStateName = stateAbbreviations.find(abbr => abbr.short == d.state).full;
        }
    })

    const stateData = await deathCalculator(covidStateData);
    return stateData;
};

module.exports = {
    getCurrentData,
}