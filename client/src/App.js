import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Box, createMuiTheme, ThemeProvider } from '@material-ui/core';

import Home from './components/Home/Home';
import CurrentData from './components/CurrentData/CurrentData';
import PageNotFound from './components/PageNotFound/PageNotFound';

import banner from './images/banner.jpg';

const App = () => {
    const theme = createMuiTheme({
        palette: {
            type: 'dark',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box width="100%">
                <Link to="/">
                    <img style={{ width: '100%', maxWidth: 1280 }} src={banner} alt="Banner" />
                </Link>
                <Box margin="auto" padding={5}>
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
