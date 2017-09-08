/**
 * Created by TAbdullah on 9/7/2017.
 */

import React from 'react';
import Day from './Day';

const Month = (props) => {
    const {months, days, dates, years} = props.data;
    const {month, date, year, day, maxDate} = props.calendarDate;
    const gapDays = [];
    for(let i = 0; i < day; i++){
        gapDays.push(<Day key={i} date={0}/>);
    }

    function handleDay(d){
        console.log('day', d)
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
                {gapDays.map(g => {
                    return g
                })}
                {dates.filter(d => d <= maxDate).map((d, k) => {
                    return (
                        <Day key={k} date={d} highlight={d === date} handleDay={() => handleDay(d)}/>
                    )
                })}
        </div>
    );
};

export default Month;