import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';
import '../../App.css';
import FooterContainer from '../../containers/footer';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [eventDetails, setEventDetails] = useState(null);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
  };

  const handleEventClick = (info) => {
    setSelectedDate(info.event.start);
    setEventDetails(info.event);
  };

  const handleCloseModal = () => {
    setEventDetails(null);
  };

  return (
    <div>
      <nav>...</nav>
      <div className="schedule-section">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: 'today prev,next',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          initialDate={selectedDate ? new Date(selectedDate) : null}
          events={[
            {
              title: 'Event 1',
              start: '2023-05-15T10:00:00',
              end: '2023-05-15T12:00:00',
              description: 'This is event 1',
            },
            {
              title: 'Meditation',
              start: '2023-05-26T14:00:00',
              end: '2023-05-16T16:00:00',
              description: 'This is event 2',
            },
          ]}
        />
        <FooterContainer />
        <div className="rights">
          <p>
            COPYRIGHT © 2023 YOGA WITH ABABILYOGA, LLC ·
            TERMS & CONDITIONS ·
            PRIVACY POLICY ·
            NEWSLETTER ·
            SUPPORT
          </p>
        </div>
      </div>
      {eventDetails && (
      <Modal
        isOpen
        onRequestClose={handleCloseModal}
        className="event-modal"
      >
        <h2 className="event-title">{eventDetails.title}</h2>
        <p className="event-date">{eventDetails.start.toLocaleString()}</p>
        <p className="event-description">{eventDetails.description}</p>
        <button type="button" className="event-button" onClick={handleCloseModal}>Close</button>
      </Modal>
      )}
    </div>
  );
};

export default Calendar;
