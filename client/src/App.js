import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CurrentData from './components/CurrentData/CurrentData';

const App = () => {
    const theme = 
        createMuiTheme({
            palette: {
                type: 'dark',
            },
        });

    return (
        <ThemeProvider theme={theme}>
            <Box width="100%">
                <Box margin="auto">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/current" component={CurrentData} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;
