import React from 'react';
import { CircularProgress, Box } from '@material-ui/core';

const LoaderSpinner = () => {
    return (
        <Box display="flex" justifyContent="center">
            <CircularProgress />
        </Box>
    )
}

export default LoaderSpinner;