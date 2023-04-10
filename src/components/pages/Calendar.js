import React from 'react';
import Fullcalender from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import { FooterContainer } from '../../containers/footer';

const Calendar = () => (
  <div className="schedule-section">
   < Fullcalender 
   plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin]}
   initialView = {"dayGridMonth"}
   headerToolbar = {{
    start: "today prev, next",
    center: "title",
    end: "dayGridMonth, timeGridWeek, timeGridDay"
   }}
   height={"90vh"}
   />
   <FooterContainer />
  </div>
);

export default Calendar;
