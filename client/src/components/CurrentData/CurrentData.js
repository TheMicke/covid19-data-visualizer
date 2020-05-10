import React, { useState, useEffect } from 'react';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import { Box } from '@material-ui/core';
import CurrentDataContent from './CurrentDataContent';

const CurrentData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(false);
            await fetch(`http://localhost:3001/api/v1/current`)
                .then((res) => res.json())
                .then((data) => setData(data))
            };
            setIsLoading(false);
        fetchData();
    }, [isLoading]);

    return <CurrentDataContent data={data} isLoading={isLoading} />;
};

export default CurrentData;
