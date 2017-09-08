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
        console.log('getdate: ', currentDate.getDate());
        this.state = {
            month: currentDate.getMonth(),
            date: currentDate.getDate(),
            year: currentDate.getFullYear()
        };
    }

    handleMonth(m){
        console.log('handle month', m);
        this.setState({
            month: parseInt(m)
        });
    }

    handleDate(d){
        console.log('handle date', d);
        this.setState({
            date: parseInt(d)
        })
    }

    handleYear(y){
        console.log('handle year', y);
        this.setState({
            year: parseInt(y)
        })
    }

    handleDay(d){
        this.setState({
            date: parseInt(d)
        })
    }

    getCalendarDate(){
        const {month, date, year} = this.state;
        const selectedDate = new Date(year, month, date);
        console.log('getday', selectedDate.getDay());
        return {
            month: parseInt(month),
            date: date,
            year: year,
            day: selectedDate.getDay(),
            maxDate: new Date(year, parseInt(month) + 1, 0).getDate()
        }
    }
    render() {
        console.log('render date', this.getCalendarDate());
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
