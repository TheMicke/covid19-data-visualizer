import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const CurrentDataContent = (props) => {
    return (
        <Box>
            <h2>Current Covid-19 situation in the USA</h2>

            {props.data.length <= 0 ? (
                <LoaderSpinner />
            ) : (
                <TableContainer component={Paper}>
                    <Table width="90%" aria-label="Current Covid-19 situation in the USA">
                        <TableHead>
                            <TableRow>
                                <TableCell>State</TableCell>
                                <TableCell align="right">Currently hospitalized</TableCell>
                                <TableCell align="right">Hospitalized</TableCell>
                                <TableCell align="right">Deaths total</TableCell>
                                <TableCell align="right">Deaths last 3 days</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.data.map((d) => (
                                <TableRow key={d.state}>
                                    <TableCell component="th" scope="row">
                                        {`${d.fullStateName} (${d.state})`}
                                    </TableCell>
                                    <TableCell align="right">{d.hospitalizedCurrently ? d.hospitalizedCurrently : 'n/a'}</TableCell>
                                    <TableCell align="right">{d.hospitalized ? d.hospitalized : 'n/a'}</TableCell>
                                    <TableCell align="right">{d.death}</TableCell>
                                    <TableCell align="right">{d.deathLast3Days}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    );
};

export default CurrentDataContent;
