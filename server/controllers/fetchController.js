const fetch = require('node-fetch');

const getCurrentData = async () => {
    const data = fetch('https://covidtracking.com/api/v1/states/current.json');
    return data;
};