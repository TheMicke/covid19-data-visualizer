const { getCurrentData } = require('./controllers/fetchController');

// The routes availible for the backend
module.exports = function(app) {
    app.get('/api/v1/', (req, res) => {
        res.send('Hi there..!');
    });
    
    app.get('/api/v1/current', (req, res) => {
        res.send(getCurrentData().then(data => res.send(data)));
    });
};
