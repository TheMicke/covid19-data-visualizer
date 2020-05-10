import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const CurrentDataContent = (props) => {

    return (
        <Box>
            <h2>Current Covid-19 situation in the USA</h2>

            <TableContainer component={Paper}>
                <Table style={{width: '650px'}} aria-label="Current Covid-19 situation in the USA">
                    <TableHead>
                        <TableRow>
                            <TableCell>State</TableCell>
                            <TableCell align="right">Currently hospitalized</TableCell>
                            <TableCell align="right">Hospitalized</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((d) => (
                            <TableRow key={d.state}>
                                <TableCell component="th" scope="row">
                                    {d.state}
                                </TableCell>
                                <TableCell align="right">{d.hospitalizedCurrently ? d.hospitalizedCurrently : 'n/a'}</TableCell>
                                <TableCell align="right">{d.hospitalized ? d.hospitalized : 'n/a'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default CurrentDataContent;
