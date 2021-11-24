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

function App(props) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [data, setData] = useState([]);
  const [description, setDesription] = useState([]);
  const [date, setDate] = useState([]);
  const [countries, setCountries] = useState([]);
  const [holiday, setHoliday] = useState([]);

  
  useEffect(() => {
    axios
      .get(
        "https://calendarific.com/api/v2/holidays?api_key=9c2cdba3c4345070ec29600f92a239503330af62&country=pk&year=2021"
      )
      .then(function (response) {
        // handle success
        console.log(response.data.response.holidays);
        setHoliday(response.data.response.holidays);
        setDesription(response.data.response.holidays);
        setDate(response.data.response.holidays);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const events = [
    
    {
      title: [description.map((des)=>(<p>{des.name}</p>))],

      start: [date.map((da)=>(<p>{da.date.iso}</p>))],
      end: [date.map((da)=>(<p>{da.date.iso}</p>))],
    },
  ];

  return (
    <div className="App">
      <h1>text</h1>
      
      <h1>
        Calendar</h1>
        {holiday.map((hol) => (
          <p style={{ display: "flex" }}>
            {hol.country.name}
            {hol.name}
          </p>
        ))}
      

      <FormControl>
        <NativeSelect>
          <option>Select Country</option>
          {holiday.map((country) => (
            <option value={country}>{country.country.name}</option>
          ))}
         
        </NativeSelect>
      </FormControl>
      <h2>Add New Event</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
      </div>
    </div>
  );
}

export default App;
