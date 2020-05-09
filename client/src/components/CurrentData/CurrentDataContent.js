import React from 'react';
import { Box } from '@material-ui/core';

const CurrentDataContent = (props) => {

    return (
        <Box>
            <h2>CurrentDataContent</h2>
            {props.data.map(d => 
                <div key={d.state}>
                    <p>{d.state}</p>
                </div>
            )}

        </Box>
    );
}

export default CurrentDataContent;
