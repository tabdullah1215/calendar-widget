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
        console.log('current date constructor: ', currentDate);
        this.state = {
            month: currentDate.getMonth(),
            date: currentDate.getDate(),
            year: currentDate.getFullYear()

        };
    }

    handleMonth(m){
        const {year} = this.state;
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
        const {month} = this.state;
        this.setState({
            year: parseInt(y, 10)
        })
    }

    handleDay(d){
        this.setState({
            date: parseInt(d, 10)
        })
    }

    getCalendarDate(){
        const {year, month, date} = this.state;
        return {
            ...this.state,
            day: new Date(year, month, 1).getDay(),
            maxDate: new Date(year, month+1, 0).getDate(),
            prevMaxDate: new Date(year, month, 0).getDate()
        }
    }

    render() {
        const calendarDate = this.getCalendarDate();
        console.log(calendarDate);
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
