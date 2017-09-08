/**
 * Created by TAbdullah on 9/7/2017.
 */

import React from 'react';

const Day = (props) => {
    return (
        <div style={{backgroundColor:'yellow', width: '14%', float: 'left', borderWidth: '1px', borderStyle: 'solid'}}>
            <h1>{props.date}</h1>
        </div>
    );
};

export default Day;