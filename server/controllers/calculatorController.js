const fetch = require('node-fetch');

const deathCalculator = async states => {
    return new Promise((resolve, reject) => {
        //Get date for three days ago
        const date = new Date();
        date.setDate(date.getDate() - 3); //shift date three days back
        const pastYear = date.getFullYear();
        const pastMonth = ('0' + (date.getMonth() + 1)).slice(-2);
        const pastDay = ('0' + date.getDate()).slice(-2);
        const pastFullDate = `${pastYear}${pastMonth}${pastDay}`;

        const deathCountsByState = [];

        const getOldDeathCount = state => {
            return new Promise((resolve, reject) => {
                fetch(`https://covidtracking.com/api/v1/states/${state.state}/${pastFullDate}.json`)
                    .then(res => res.json())
                    .then(data => resolve(data.death))
                    .catch(err => reject(err));
            });
        };

        (async () => {
            console.log('fetching old death counts');
            for (const state of states) {
                const deathCounts = {};
                deathCounts.state = state.state;
                deathCounts.currentDeathCount = state.death;
                deathCounts.oldDeathCount = await getOldDeathCount(state);
                deathCountsByState.push(deathCounts);
                state.deathLast3Days = deathCounts.currentDeathCount - deathCounts.oldDeathCount;
            }
            console.log(deathCountsByState);
            resolve(states);
        })();


        return states;
    });
};

module.exports = {
    deathCalculator,
};
