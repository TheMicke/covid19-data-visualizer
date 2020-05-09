import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import { Box } from '@material-ui/core';
import CurrentDataContent from './CurrentDataContent';

const CurrentData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            setIsLoading(true);
            fetch(`https://covidtracking.com/api/v1/states/current.json`)
                .then((res) => res.json())
                .then((data) => setData(data))
                .then(setIsLoading(false));
        };
        fetchData();
    }, []);

    return isLoading ? <LoaderSpinner /> : <CurrentDataContent data={data} />;
};

export default CurrentData;
