/**
 * Created by TAbdullah on 9/7/2017.
 */

import React from 'react';

const Day = (props) => {
    const bkColor = props.highlight ? 'yellow': 'beige';
    function handleDay(e){
        props.handleDay(e.target.value);
    }
    return (
        <div onClick={handleDay} style={{backgroundColor: bkColor, width: '14%', float: 'left', borderWidth: '1px', borderStyle: 'solid'}}>
            {
                <h2>{props.date !== 0 ? props.date : '\u00A0' }</h2>
            }
        </div>
    );
};

export default Day;