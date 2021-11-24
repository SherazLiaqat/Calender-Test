import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
  
//country
const c = "";
const Marker = ({ icon }) => <div>{icon}</div>;
const Event = ({ props }) => {
  const [user, setuser] = useState("");

  const [countries, setCountries] = useState([]);
  const [position, setPosition] = useState([]);
  const [filter, setFilter] = useState("Global");
  const [description, setDesription] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country: filter }),
    };
    const response = await fetch(
      "https://calendarific.com/api/v2/holidays?api_key=9c2cdba3c4345070ec29600f92a239503330af62&country=pk&year=2021",
      requestOptions
    );
    const data = await response.json();

    console.log(data);
    console.log(filter);
    setuser(data.response.countries);
    setDesription(response.data.response.holidays[7].name);
    setDate(response.data.response.holidays[7].date.iso)
    setCountries(data.Country);
  };

  const callback = async () => {
    fetchAPI();
  };
  const events = [
    {
      title: [description],
      
      start: [date],
      end: [date],
    },
   
   
    
  ];
  return (
    <>
      <div className="div-main">
        <div className="country-selecter">
          <FormControl >
            <NativeSelect
              onChange={(e) => setFilter(e.target.value)}
              onClick={callback}
              id="Type"
              name="Type"
            >
              <option>Global</option>
              {countries.map((country) => (
                <option value={country}>{country}</option>
              ))}
            </NativeSelect>
          </FormControl>
          <Calendar
        localizer={localizer}
        events= {events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
        </div>
      </div>
    </>
  );
};

export default Event;

{
  /* import format from "date-fns/format";
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
        "https://calendarific.com/api/v2/holidays?api_key=9c2cdba3c4345070ec29600f92a239503330af62&country=all&year=2021"
      )
      .then(function (response) {
        // handle success
        console.log(response.data.response.holidays);
        setHoliday(response.data.response.holidays);
        setDesription(response.data.response.holidays[7].name);
        setDate(response.data.response.holidays[7].date.iso);
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
      title: [description],

      start: [date],
      end: [date],
    },
  ];

  return (
    <div className="App">
      <h1>text</h1>
      {description}
      <h1>
        Calendar
        {holiday.map((hol) => (
          <p style={{ display: "flex" }}>
            {hol.country.name}
            {hol.name}
          </p>
        ))}
      </h1>

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

export default App;*/
}
