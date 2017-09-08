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
        const date = (prevMaxDate - (day-1)) + i;
        prevDays.push(<Day key={i} date={date} offset={-1} handleDay={(obj) => handleDay(obj)}/>);
    }
    const nextDays = [];
    const lastDays = 7 - ((maxDate + day) % 7);
    for(let i = 0; i < lastDays; i++){
        nextDays.push(<Day key={i} date={i+1} offset={1} handleDay={(obj) => handleDay(obj)}/>);
    }

    function handleDay(obj){
        props.handleDay(obj);
    }


    return (
        <div style={{width: '50%', display: 'inline'}}>
            <h1 style={{textAlign: 'center'}}>{months[month]}</h1>
            <div>

                {days.map((d, k) => {
                    return <div key={k}
                                style={{width: '14%', float: 'left', textAlign: 'center', paddingLeft: '2px', boxSizing: 'border-box'}}>
                                    <h2>{d}</h2>
                            </div>
                })}
            </div>
                {prevDays.map(p => {
                    return p
                })}
                {dates.filter(d => d <= maxDate).map((d, k) => {
                    return (
                        <Day key={k} date={d} highlight={d === date} offset={0} handleDay={(obj) => handleDay(obj)}/>
                    )
                })}
                {nextDays.map(n => {
                    return n
                })}
        </div>
    );
};

export default Month;