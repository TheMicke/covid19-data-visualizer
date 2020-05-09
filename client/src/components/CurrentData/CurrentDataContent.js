import React from 'react';
import { Box } from '@material-ui/core';

const CurrentDataContent = (props) => {
    const data = props.data;
    console.log(data);
    
    return (
        <Box>
            <h2>CurrentDataContent</h2>
        </Box>

    );
}

export default CurrentDataContent;
