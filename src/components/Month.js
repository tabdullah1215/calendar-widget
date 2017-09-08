/**
 * Created by TAbdullah on 9/7/2017.
 */

import React from 'react';
import Day from './Day';

const Month = (props) => {
    const {months, days, dates} = props.data;
    const {month, date, day, maxDate, prevMaxDate} = props.calendarDate;
    const prevDays = [];
    for(let i = 0; i < day; i++){
        prevDays.push(<Day key={i} date={(prevMaxDate - (day-1)) + i} offset={-1}/>);
    }
    const nextDays = [];
    const lastDays = 7 - ((maxDate + day) % 7);
    console.log(lastDays);
    for(let i = 0; i < lastDays; i++){

    }

    function handleDay(d){
        //console.log('day', d)
        props.handleDay(d);
    }


    return (
        <div style={{width: '50%', display: 'inline'}}>
            <h1>{months[month]}</h1>
            <div>

                {days.map((d, k) => {
                    return <div key={k}
                                style={{width: '14%', float: 'left', textAlign: 'center', paddingLeft: '2px', boxSizing: 'border-box'}}>
                                    <h2>{d}</h2>
                            </div>
                })}
            </div>
                {prevDays.map(g => {
                    return g
                })}
                {dates.filter(d => d <= maxDate).map((d, k) => {
                    return (
                        <Day key={k} date={d} highlight={d === date} offset={0} handleDay={() => handleDay(d)}/>
                    )
                })}
        </div>
    );
};

export default Month;