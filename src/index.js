import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Month from './components/Month';
import SelectHeader from './components/SelectHeader';
import {data} from './data/calendar-data';

class Calendar extends React.Component {
    constructor(){
        super();
        const currentDate = new Date();
        this.state = {
            month: currentDate.getMonth(),
            date: currentDate.getDate(),
            year: currentDate.getFullYear()
        };
    }

    handleMonth(m){
        this.setState({
            month: parseInt(m, 10)
        });
    }

    handleDate(d){
        this.setState({
            date: parseInt(d, 10)
        })
    }

    handleYear(y){
        this.setState({
            year: parseInt(y, 10)
        })
    }

    handleDay(obj){
        const {month, year} = this.state;
        const tempMonth = month + obj.offset;
        const newMonth = tempMonth > 11 ? 0 : tempMonth < 0 ? 11 : tempMonth;
        const newYear = tempMonth > 11 ? year + 1 : tempMonth < 0 ? year - 1 : year;
        this.setState({
            date: parseInt(obj.d, 10),
            month: newMonth,
            year: newYear
        })
    }

    getCalendarDate(){
        const {year, month} = this.state;
        return {
            ...this.state,
            day: new Date(year, month, 1).getDay(),
            maxDate: new Date(year, month+1, 0).getDate(),
            prevMaxDate: new Date(year, (month+1)-1, 0).getDate()
        }
    }

    render() {
        const calendarDate = this.getCalendarDate();
        return (

            <div>
                <SelectHeader calendarDate={calendarDate} data={data}
                              handleMonth={(m) => this.handleMonth(m)} handleDate={(d) => this.handleDate(d)} handleYear={(y) => this.handleYear(y)}/>
                <Month calendarDate={calendarDate} data={data} handleDay={(d) => this.handleDay(d)}/>
            </div>
        )
    }
};

Calendar.defaultProps = data;

ReactDOM.render(<Calendar />, document.getElementById('root'));
