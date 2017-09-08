/**
 * Created by TAbdullah on 9/7/2017.
 */

import React from 'react';

const SelectHeader = (props) => {
    const {months, dates, years} = props.data;
    const {month, date, year} = props.calendarDate;

    function handleMonth(e){
        props.handleMonth(e.target.value);
    }
    function handleDate(e){
        props.handleDate(e.target.value);
    }
    function handleYear(e){
        props.handleYear(e.target.value);
    }

    return (
        <div>

        <select value={month} onChange={handleMonth} style={{fontSize: '24px'}}>
            {
                months.map((m, k) => {
                    return <option key={k} value={k}>{m}</option>
            })
            }
        </select>
        <select value={date} onChange={handleDate} style={{fontSize: '24px'}}>
            {
                dates.map((d, k) => {
                    return <option key={k} value={d}>{d}</option>
                })
            }
        </select>
        <select value={year} onChange={handleYear} style={{fontSize: '24px'}}>
            {
                years.map((y, k) => {
                    return <option key={k} value={y}>{y}</option>
                })
            }
        </select>
        </div>
    )
};
export default SelectHeader;