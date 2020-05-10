const fetch = require('node-fetch');

const deathCalculator = async (states) => {
    return new Promise((resolve, reject) => {
        //Get date for three days ago
        const date = new Date();
        date.setDate(date.getDate() - 3); //shift date three days back
        const pastYear = date.getFullYear();
        const pastMonth = ('0' + (date.getMonth() + 1)).slice(-2); //adds 0 in front of the month if it's less than 10
        const pastDay = ('0' + date.getDate()).slice(-2); //adds 0 in front of the date if it's less than 10
        const pastFullDate = `${pastYear}${pastMonth}${pastDay}`;

        let totalDeaths = 0;
        let totalDeathsLast3Days = 0;

        // Function to fetch past data for each of the states
        const getOldDeathCount = (state) => {
            return new Promise((resolve, reject) => {
                fetch(`https://covidtracking.com/api/v1/states/${state.state}/${pastFullDate}.json`)
                    .then(res => res.json())
                    .then(data => resolve(data.death)) //return total deaths for the past date
                    .catch(err => reject(err));
            });
        };

        //Asynchronously fetch and calculate deaths for each state in the past three days
        (async () => {
            console.log('Fetching old death counts');
            for (const state of states) {
                const oldDeathCount = await getOldDeathCount(state);
                state.deathLast3Days = state.death - oldDeathCount; //Add deathcount for past 3 days to the state object
                totalDeaths += state.death;
                totalDeathsLast3Days += state.deathLast3Days;
            }
            console.log('Done');
            console.log('Total deaths: ' + totalDeaths);
            console.log('Total deaths (past 3 days): ' + totalDeathsLast3Days);
            
            const totals = {
                state: "totals", 
                fullStateName: "Totals",
                totalDeaths: totalDeaths, 
                totalDeathsLast3Days: totalDeathsLast3Days,
            }
            states.push(totals)
            
            resolve(states);
        })();

        return states;
    });
};

module.exports = {
    deathCalculator,
};
