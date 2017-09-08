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
            year: currentDate.getFullYear(),
            day: currentDate.getDay(),
            maxDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
        };
    }

    handleMonth(m){
        const {year} = this.state;
        this.setState({
            month: parseInt(m, 10),
            day: new Date(year, m, 1).getDay(),
            maxDate: new Date(year, parseInt(m, 10)+1, 0).getDate()
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
            year: parseInt(y, 10),
            day: new Date(y, month, 1).getDay(),
            maxDate: new Date(y, parseInt(month, 10)+1, 0).getDate()
        })
    }

    handleDay(d){
        this.setState({
            date: parseInt(d, 10)
        })
    }

    render() {
        const calendarDate = this.state;
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
