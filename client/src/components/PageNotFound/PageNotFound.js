import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

function PageNotFound() {
    return (
        <Fragment>
            <Typography variant="h3" color="textPrimary">404</Typography>
            <Typography variant="h4" color="textPrimary">This is not the page you've been looking for...</Typography>
        </Fragment>
    );

}

export default PageNotFound;