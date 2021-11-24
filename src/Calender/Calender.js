import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import axios from "axios";
import { NativeSelect, FormControl } from "@mui/material";
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "holiday",
    allDay: true,
    start: new Date(2021, 10, 2),
    end: new Date(2021, 10, 2),
  },
  {
    title: "Vacation",
    start: new Date(2021, 10, 1),
    end: new Date(2021, 10, 1),
  },
  {
    title: "Conference",
    start: new Date(2021, 10, 20),
    end: new Date(2021, 10, 23),
  },
  {
    title: "text",
    start: new Date(2019, 10, 20),
    end: new Date(2019, 10, 23),
  },
];

function App(props) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [data, setData] = useState([]);
  const [allEvents, setAllEvents] = useState(events);
  const [countries, setCountries] = useState([]);
  const [holiday, setHoliday] = useState([]);
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }
  useEffect(() => {
    axios
      .get(
        "https://calendarific.com/api/v2/holidays?api_key=9c2cdba3c4345070ec29600f92a239503330af62&country=pk&year=2021"
      )
      .then(function (response) {
        // handle success
        console.log(response.data.response.countries);
        setData(response.data.response.countries[1].country_name);
        setCountries(response.data.response.holidays);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://calendarific.com/api/v2/holidays?api_key=9c2cdba3c4345070ec29600f92a239503330af62&country=pk&year=2021"
      )
      .then(function (response) {
        // handle success
        console.log(response.data.response.holidays);
       setHoliday(response.data.response.holidays);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    
      
      
    <div className="App">
        
      <h1>Calendar{holiday.map((hol)=>(
<p style={{display:'flex'}}>{hol.country.name}</p>

      ))}</h1>
     
      <FormControl>
        <NativeSelect>
          <option>Select Country</option>
          {countries.map((country) => (
            <option value={country}>{country.name}</option>
          ))}
        </NativeSelect>
      </FormControl>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events= {events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default App;
