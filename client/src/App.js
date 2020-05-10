import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';

import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CurrentData from './components/CurrentData/CurrentData';

const App = () => {
    return (
        <div>
            <Box margin="auto">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/current" component={CurrentData}/>
                    <Route path="*" component={PageNotFound}/>
                </Switch>
            </Box>
        </div>
    );
}

export default App;
