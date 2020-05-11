import React, { useState, useEffect } from 'react';
import CurrentDataContent from './CurrentDataContent';
import lsh from '../../modules/localStorageHandler'; // Using localStorage for caching.

const CurrentData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        setIsLoading(true);
        await fetch(`http://localhost:3001/api/v1/current`)
        .then(res => res.json())
        .then(resData => setData(resData));
        setIsLoading(false);
    }
    
    useEffect(() => {
        if( data.length === 0) {
            if (!lsh.get('covidTrackerData')) {
                fetchData();
            } else {
                setData(lsh.get('covidTrackerData'))
            }
    
        } else {
            if(!lsh.get('covidTrackerData')) {
                lsh.set('covidTrackerData', data, 3600000) //Stores the data in cache. Time to live for cache: 3600000 ms (1 hour)
            }
        }
    }, [data]);

    return <CurrentDataContent data={data} isLoading={isLoading} />;
};

export default CurrentData;
