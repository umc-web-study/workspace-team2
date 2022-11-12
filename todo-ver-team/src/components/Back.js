import React from 'react';
import Calendar from './Calendar';

const style = {
    width: '1920px',
    height: '1080px',
    backgroundColor: 'black',
    overflow:"hidden"
};

const Back = () => {
    return(
        <body style ={style}>
            <Calendar></Calendar>
        </body>
    );
};

export default Back;