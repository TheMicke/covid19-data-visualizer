import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Box>
            <h2>Covid-19 Tracking</h2>
            <p>
                The app will fetch data from covidtracking.com and present it to you <br />
                in the form of a table. You can see currently hospitalized, hospitalized <br />
                total deaths and deaths in the last three days state by state. <br />
                Notice that it can take som time to fetch the data. How long depends on <br />
                how busy the API is.
                <br />
                <br />
                <Link to="/current">
                    <Button variant="contained" color="primary">
                        Take me to the data!
                    </Button>
                </Link>
            </p>
        </Box>
    );
}

export default Home;
