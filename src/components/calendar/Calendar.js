import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './Calendar.css'


// import './main.scss' // webpack must be configured to do this

export default class Calendar extends React.Component {
  calendarComponentRef = React.createRef()
  state = {
    value: "",
    calendarEvents: []
  }



    render() {
        return (
          <div className='calendar'>
            <div className='calendar-top'>
              {/* <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
              <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;
              (also, click a date/time to add an event) */}
            </div>
            <div className='calendar-calendar'>
              <FullCalendar
                defaultView="dayGridMonth"
                header={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                plugins={[ dayGridPlugin ]}
                ref={ this.calendarComponentRef }
                // weekends={ this.state.calendarWeekends }
                events={ this.state.calendarEvents }



                // dateClick={ this.handleDateClick }
                />
            </div>
          </div>
        )
      }


}