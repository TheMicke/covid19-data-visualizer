const app = require('./app').app;
const port = 3001;
const initRoutes = require('./routes');

// Initiate the routes file
initRoutes(app);

// Run the app om port specified on top of file.
app.listen(port, () => console.log(`Covid-19 visualizer server listening on port ${port}!`));
