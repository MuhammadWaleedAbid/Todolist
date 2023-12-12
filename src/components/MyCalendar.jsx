/* eslint-disable no-console */
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

function MyCalendar() {
  // Initialize localizer
  const localizer = momentLocalizer(moment);

  // Sample events data
  const events = [
    {
      type: 'Type 1',
      start: new Date(2023, 10, 1), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 1),
    },
    {
      type: 'Type 2',
      start: new Date(2023, 10, 1), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 1),
    },
    {
      type: 'Type 3',
      start: new Date(2023, 10, 1), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 1),
    },
    {
      type: 'Type 2',
      start: new Date(2023, 10, 6), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 6),
    },
    {
      type: 'Type 1',
      start: new Date(2023, 10, 8), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 8),
    },
    {
      type: 'Type 3',
      start: new Date(2023, 10, 10), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 10),
    },
    {
      type: 'Type 5',
      start: new Date(2023, 10, 12), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 12),
    },
    {
      type: 'Type 3',
      start: new Date(2023, 10, 14), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 14),
    },
    {
      type: 'Type 5',
      start: new Date(2023, 10, 17), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 17),
    },
    {
      type: 'Type 4',
      start: new Date(2023, 10, 19), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 19),
    },
    {
      type: 'Type 1',
      start: new Date(2023, 10, 21), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 21),
    },
    {
      type: 'Type 5',
      start: new Date(2023, 10, 23), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 23),
    },
    {
      type: 'Type 2',
      start: new Date(2023, 10, 23), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 23),
    },
    {
      type: 'Type 4',
      start: new Date(2023, 10, 26), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 26),
    },
    {
      type: 'Type 3',
      start: new Date(2023, 10, 28), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 28),
    },
    {
      type: 'Type 2',
      start: new Date(2023, 10, 30), // November is represented by 10 (zero-based index)
      end: new Date(2023, 10, 30),
    },
    // Add more events as needed
  ];
  const handleStyle = (event) => {
    let backgroundColor;
    switch (event.type) {
      case 'Type 1':
        backgroundColor = '#FFB6C1';

        break;
      case 'Type 2':
        backgroundColor = '#87CEFA';

        break;
      case 'Type 3':
        backgroundColor = '#000';

        break;
      case 'Type 4':
        backgroundColor = '#87CEFA';

        break;
      case 'Type 5':
        backgroundColor = '#';

        break;
      // Add more cases for other types as needed
      default:
        backgroundColor = '#FFD700'; // Default color if the type is not recognized
    }
    const eventStyle = {
      backgroundColor,
      fontSize: '20px',
      border: 'none',
      height: '27px',
    };
    return {
      style: eventStyle,
    };
  };
  return (
    <div className="Calander-detail">
      <Calendar
        localizer={localizer}
        eventPropGetter={handleStyle}
        events={events}
        views={['day', 'week', 'month']}
        step={30} // The number of minutes each time slot represents
        timeslots={2} // Number of time slots displayed in a day
        defaultView="day" // The default view when the calendar loads
        defaultDate={new Date()} // The default date the calendar will display
        onSelectSlot={(slotInfo) => console.log('Selected slot:', slotInfo)}
        onSelectEvent={(event) => console.log('Selected event:', event)}
        onDoubleClickEvent={(event) => console.log('Double-clicked event:', event)}
        onNavigate={(date, view) => console.log('Navigated to:', date, 'View:', view)}
        onRangeChange={(range) => console.log('Visible range changed:', range)}
        onDrillDown={(date, view) => console.log('Drilled down to:', date, 'View:', view)}
        // eslint-disable-next-line react/jsx-boolean-value
        popup={true} // Display events in a popup when clicked
        style={{ height: 600 }}
        // components={{
        //   event: MyEventComponent, // Custom component for rendering events
        //   toolbar: MyToolbarComponent, // Custom component for rendering the toolbar
        //   dateCellWrapper: MyDateCellWrapper, // Custom component for rendering date cells
        // }}
        // Adjust the height as needed
        formats={{
          dateFormat: 'DD', // Format for day-of-month in the header
          dayFormat: 'ddd DD/MM', // Format for days in the month view
          dayRangeHeaderFormat: ({ start, end }) => `${start} - ${end}`, // Format for the header of the day range
          timeGutterFormat: 'hh:mm A', // Format for time slots in the time column
          monthHeaderFormat: 'MMMM YYYY', // Format for the header in the month view
          dayHeaderFormat: 'dddd MMM DD', // Format for the header in the day view
          selectRangeFormat: ({ start, end }) => `${start} - ${end}`, // Format for the selected range in the month view
          agendaDateFormat: 'ddd MMM DD', // Format for the date in the agenda view
          agendaTimeFormat: 'hh:mm A', // Format for the time in the agenda view
          agendaTimeRangeFormat: ({ start, end }) => `${start} - ${end}`, // Format for the time range in the agenda view
        }}
        messages={{
          allDay: 'All Day', // Label for all-day events
          previous: 'Previous', // Label for the previous button
          next: 'Next', // Label for the next button
          today: 'Today', // Label for the today button
          month: 'Month', // Label for the month view
          week: 'Week', // Label for the week view
          day: 'Day', // Label for the day view
          showMore: (total) => `+${total} more`, // Text to show when there are more events than can fit
        }}
      />
    </div>
  );
}

export default MyCalendar;
