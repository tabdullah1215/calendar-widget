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
        console.log('handle month', m);
        this.setState({
            month: m
        });
    }

    handleDate(d){
        console.log('handle date', d);
        this.setState({
            date: d
        })
    }

    handleYear(y){
        console.log('handle year', y);
        this.setState({
            year: y
        })
    }

    getCalendarDate(){
        const {month, date, year} = this.state;
        const selectedDate = new Date();
        selectedDate.setMonth(this.state.month);
        selectedDate.setDate(this.state.date);
        selectedDate.setFullYear(this.state.year);
        return {
            month: month,
            date: date,
            year: year
        }
    }
    render() {
        console.log(data);
        console.log(this.state);
        console.log(this.getCalendarDate());
        const calendarDate = this.getCalendarDate();
        return (

            <div>
                <SelectHeader calendarDate={calendarDate} data={data}
                              handleMonth={(m) => this.handleMonth(m)} handleDate={(d) => this.handleDate(d)} handleYear={(y) => this.handleYear(y)}/>
                <Month calendarDate={calendarDate} data={data}/>
            </div>
        )
    }
};

Calendar.defaultProps = data;

ReactDOM.render(<Calendar />, document.getElementById('root'));
