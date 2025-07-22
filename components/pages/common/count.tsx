import React from 'react';
import CountUp from 'react-countup';

const Count = ({ number }:{
    number:number
}) => {
    return (
        <>
            <CountUp end={number} enableScrollSpy />
        </>
    );
};

export default Count;