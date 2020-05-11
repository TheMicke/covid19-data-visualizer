import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Box>
            <Typography variant="h4" color="textPrimary">Covid-19 Tracking</Typography>
            <Typography variant="body1" color="textPrimary">
                The app will fetch data from covidtracking.com and present it to you <br />
                in the form of a table. You can see currently hospitalized, hospitalized, <br />
                total deaths and deaths in the last three days state by state. <br /><br />
                Notice: The first time loading the data can take some time. <br />
                once it's loaded it will be cached for one hour in the localStorage of the browser.
                <br />
                <br />
                <Link to="/current" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        <Typography variant="body1">Take me to the data!</Typography>
                    </Button>
                </Link>
            </Typography>
        </Box>
    );
}

export default Home;
