/**
 * Created by TAbdullah on 9/7/2017.
 */

import React from 'react';
import Day from './Day';

const Month = (props) => {
    const {months, days, dates, years} = props.data;
    const {month, date, year} = props.calendarDate;
    return (
        <div style={{width: '50%', display: 'inline'}}>
            <h1>{months[month]}</h1>
            <div>
            {days.map((d, k) => {
                return <div key={k} style={{width: '14%', float: 'left', textAlign: 'center', boxSizing: 'border-box'}}><h1>{d}</h1></div>
            })}
            </div>
            {dates.map((d, k) => {
                return (
                    <Day key={k} date={d}/>

                )
            })}
        </div>
    );
};

export default Month;