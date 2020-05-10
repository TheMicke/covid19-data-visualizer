const { getCurrentData } = require('./controllers/dataController');

// The routes availible for the backend
module.exports = function(app) {
    app.get('/api/v1/', (req, res) => {
        res.send('Hi there..!');
    });
    
    app.get('/api/v1/current', async (req, res) => {
        await getCurrentData().then(data => res.send(data));
    });
};
