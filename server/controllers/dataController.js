const fetch = require('node-fetch');
const stateAbbreviations = require('../stateAbbreviations.json');
const { calculateDeathsAndTotals } = require('./calculatorController');

const getCurrentData = async () => {
    const covidStateData = []
    await fetch('https://covidtracking.com/api/v1/states/current.json')
    .then(res => (data = res.json()))
    .then(states => states.forEach(state => {
        covidStateData.push(state);
    }))
    .catch(err => console.log(err));

    covidStateData.forEach(state => {
        // Add full state names with the key fullStateName to the objects 
        // based on the abbreviations already existing in the objects
        // more abbreivations can be added to stateAbbreviations.json-file
        if(stateAbbreviations.find(abbr => abbr.short == state.state)) {
            state.fullStateName = stateAbbreviations.find(abbr => abbr.short == state.state).full;
        }
    })

    const stateData = await calculateDeathsAndTotals(covidStateData);
    return stateData;
};

module.exports = {
    getCurrentData,
}