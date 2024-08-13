import createDates from "../../utils/createDates";
<<<<<<< HEAD
import React, {useState} from 'react';
import Prompt from "../../utils/prompt";
import "./calendar.css";
import newDates from "../../utils/newDates"
=======
import React, { useEffect, useState } from "react";
import Prompt from "../../utils/prompt";
import "./calendar.css";

import { useMutation, useQuery } from "@apollo/client";
import { SAVE_BOOKING } from "../../utils/mutations";
import { QUERY_ME, QUERY_BOOKINGS } from "../../utils/queries";
import { toast } from "react-toastify";
>>>>>>> c637082217a33cb631cd29babb4b49f90e82b526

const days = createDates();

const timeslots = [
  {
    id: 1,
    time: "8:00",
<<<<<<< HEAD
    shortTime: "8am"
=======
    shortTime: "8am",
>>>>>>> c637082217a33cb631cd29babb4b49f90e82b526
  },
  {
    id: 2,
    time: "9:00",
  },
  {
    id: 3,
    time: "10:00",
  },
  {
    id: 4,
    time: "11:00",
  },
  {
    id: 5,
    time: "12:00",
  },
  {
    id: 6,
    time: "1:00",
  },
  {
    id: 7,
    time: "2:00",
  },
  {
    id: 8,
    time: "3:00",
  },
  {
    id: 9,
    time: "4:00",
  },
  {
    id: 10,
    time: "5:00",
  },
  {
    id: 11,
    time: "6:00",
  },
  {
    id: 12,
    time: "7:00",
  },
];

<<<<<<< HEAD

const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, "0"); // Get day and pad with leading zero if needed
const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Get month, add 1 (since months are 0-based), and pad with leading zero if needed

const formattedDate = `${day}/${month}`;


const Calendar = () => {

  const daysOfWeek = [
    { day: "Monday", shortName: "Mon" },
    { day: "Tuesday",  shortName: "Tue" },
    { day: "Wednesday", shortName: "Wed" },
    { day: "Thursday",  shortName: "Thu" },
    { day: "Friday", shortName: "Fri" },
    { day: "Saturday", shortName: "Sat" },
    { day: "Sunday", shortName: "Sun" }
  ];

  const [datesThisWeek, setDatesThisWeek] = useState([
    { date: "12/08" },
    { date: "13/08" },
    { date: "14/08" },
    { date: "15/08" },
    { date: "16/08" },
    { date: "17/08" },
    { date: "18/08" },
  ]);

  const tutorAvailability = {
    Monday: ["8:00", "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"],
    Tuesday: [
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "1:00",
      "2:00",
      "3:00",
      "4:00",
    ],
  };


  const loadNextWeek = () => {
    const updatedDates = newDates(datesThisWeek);
    setDatesThisWeek(updatedDates);
  };

  // const loadPreviousWeek = () => {
  //   const updatedDates = newDates(datesThisWeek, -7); // Subtract 7 days
    
  //   const now = new Date();
  //   const isValid = updatedDates.every(dateObj => {
  //     const [day, month] = dateObj.date.split('/');
  //     const dateToCheck = new Date(now.getFullYear(), month - 1, day);
  //     return dateToCheck >= now;
  //   });

  //   if (isValid) {
  //     setDatesThisWeek(updatedDates);
  //   }
  // };

  const loadPreviousWeek = () => {
    const updatedDates = newDates(datesThisWeek, -1); // Use -1 to go back 7 days
   
    const now = new Date();
    const isValid = updatedDates.every(dateObj => {
      const [day, month] = dateObj.date.split('/');
      const dateToCheck = new Date(now.getFullYear(), month - 1, day);
      return dateToCheck >= now;
    });
  
    if (isValid) {
      setDatesThisWeek(updatedDates);
    }
  };

  const handleTimeSlotClick = (dateString, time) => {
    const [day, month] = dateString.split('/').map(Number); // Convert to numbers
    const isConfirmed = Prompt(day, month, time);
    if (isConfirmed) {
      console.log(`Booking confirmed for ${day}/${month} at ${time}`);
    } else {
      console.log(`Booking canceled or failed for ${day}/${month} at ${time}`);
    }
=======
const NewCalendar = () => {
  const [saveBooking, { error }] = useMutation(SAVE_BOOKING);

  const {
    data: bookingsData,
    refetch: refetchBookings,
    loading: loadingBookings,
  } = useQuery(QUERY_BOOKINGS);
  const { data } = useQuery(QUERY_ME);
  let user;

  if (data) {
    user = data.user;
  }


  useEffect(() => {
    function onfocus() {
      refetchBookings();
    }

    onfocus()

    window.addEventListener("focus", onfocus);

    return () => window.removeEventListener("focus", onfocus);
  }, []);

  const isBooked = React.useCallback(
    (day, month, timeSlot) => {
      const foundBooking = bookingsData?.bookings.find(
        (booking) =>
          booking.bookedDay === String(day) &&
          booking.bookedMonth === String(month) &&
          booking.timeSlot === String(timeSlot)
      );
      if (foundBooking) return true;
      return false;
    },
    [bookingsData]
  );

  const getBookedColor = React.useCallback(
    (day, month, timeSlot) => {
      const foundBooking = isBooked(day, month, timeSlot);
      if (foundBooking) return "bg-red-500";
      return ``;
    },
    [bookingsData, isBooked]
  );

  const handleClick = async (event) => {
    if (loadingBookings) return;

    let bookedMonth = event.target.getAttribute("data-month");
    let bookedDay = event.target.getAttribute("data-day");
    let timeSlot = event.target.id;
    let userId = user._id;

    try {
      const { data } = await saveBooking({
        variables: {
          userId: userId,
          bookedDay: bookedDay,
          bookedMonth: bookedMonth,
          timeSlot: timeSlot,
        },
      });

      toast.success("Booked successfully!");

      refetchBookings();
    } catch (error) {
      toast.error("Something went wrong, while creating booking");
      console.error(error);
    }

    // console.log(typeof(bookedDay));
    // console.log(typeof(bookedMonth));
    // console.log(typeof(timeSlot));
    // console.log(userId);
  };

  const handleTimeSlotClick = (dateString, time) => {
    // const [day, month] = dateString.split('/').map(Number); // Convert to numbers
    // const isConfirmed = Prompt(day, month, time);
    // if (isConfirmed) {
    //   console.log(`Booking confirmed for ${day}/${month} at ${time}`);
    // } else {
    //   console.log(`Booking canceled or failed for ${day}/${month} at ${time}`);
    // }
    console.log(days);
>>>>>>> c637082217a33cb631cd29babb4b49f90e82b526
  };

  return (
    <div className="shadow-md w-screen h-screen">
      <section className="calendar-box flex flex-col justify-start align-start bg-gray-300 w-100 m-24 rounded-xl h-auto">
        <div className="info-head flex flex-row items-center h-28 rounded-xl text-black ml-5 w-100">
<<<<<<< HEAD
          <span className="header-text basis-full font-bold">Available times for your Tutor:</span>
          <span className="tutor-name basis-full ml-3 flex-1 font-bold">Mitra Ahmadi</span>
          <div className="small-view-arrow basis-full swiffy-slider slider-nav-square slider-nav-visible slider-nav-touch">
            <button type="button" className="slider-nav slider-nav-prev" onClick={() => loadPreviousWeek()}></button>
          </div>
          <span className="week-switch-small">Switch week</span>
          <div className="small-view-arrow swiffy-slider slider-nav-square slider-nav-visible slider-nav-touch">
            <button type="button" className="slider-nav slider-nav-next" onClick={() => loadNextWeek()}></button>
          </div>
        </div>
        <div className="dates-box flex flex-row items-center h-28 bg-green-800">
          <div className="left-arrow basis-12 swiffy-slider slider-nav-square slider-nav-visible slider-nav-touch">
            <button type="button" className="slider-nav slider-nav-prev" onClick={() => loadPreviousWeek()}></button>
          </div>
          {daysOfWeek.map((day, index) => (
=======
          <span className="header-text basis-full font-bold">
            Available times for your Tutor:
          </span>
          <span className="tutor-name basis-full ml-3 flex-1 font-bold">
            Tutor Name
          </span>
        </div>
        <div className="dates-box flex flex-row items-center h-28 bg-green-800">
          {/* {daysOfWeek.map((day, index) => (
>>>>>>> c637082217a33cb631cd29babb4b49f90e82b526
            <div className="flex-1 grow text-center" key={index}>
              <span className="full-day font-bold">{day.day}</span>
              <span className="short-day font-bold">{day.shortName}</span>
              <br /><span className="dates">{datesThisWeek[index].date}</span>
            </div>
<<<<<<< HEAD
          ))}
          <div className="right-arrow basis-12 swiffy-slider slider-nav-square slider-nav-visible slider-nav-touch">
            <button type="button" className="slider-nav slider-nav-next" onClick={() => loadNextWeek()}></button>
          </div>
=======
          ))} */}

          {days.map((day) => {
            return (
              <div className="flex-1 grow text-center" key={day.day}>
                <span className="font-bold">{day.weekday}</span>
                {/* <span className="short-day font-bold">{day.shortName}</span> */}
                <br />
                <span className="dates">
                  {day.day}/{day.month}
                </span>
              </div>
            );
          })}
>>>>>>> c637082217a33cb631cd29babb4b49f90e82b526
        </div>
        <div className="flex flex-col h-full bg-gray-400 w-100 pb-6 rounded-bl-xl rounded-br-xl">
          {timeslots.map((timeslot) => (
            <div key={timeslot.id} className="flex flex-row w-full">
              <div className="side-space basis-12"></div>
<<<<<<< HEAD
              {daysOfWeek.map((_, index) => {
                const dayName = new Date(2024, parseInt(datesThisWeek[index].date.split('/')[1]) - 1, parseInt(datesThisWeek[index].date.split('/')[0])).toLocaleDateString('en-US', { weekday: 'long' });
                const isAvailable = tutorAvailability[dayName]?.includes(timeslot.time);
=======

              {/* {daysOfWeek.map((_, index) => {
                const dayName = new Date(2024, parseInt(datesThisWeek[index].date.split('/')[1]) - 1, parseInt(datesThisWeek[index].date.split('/')[0])).toLocaleDateString('en-US', { weekday: 'long' });
>>>>>>> c637082217a33cb631cd29babb4b49f90e82b526

                return (
                  <div
                    key={index}
<<<<<<< HEAD
                    className={`grid-cell flex-1 grow text-center rounded-xl ${isAvailable ? 'bg-black' : 'not-available'} h-10 m-1 hover:bg-sky-900`}
                  >
                    {isAvailable ? (
                      <button
                        id={timeslot.time}
                        className="w-full h-full text-white"
                        onClick={() => handleTimeSlotClick(datesThisWeek[index].date, timeslot.time)}
                      >
                        {timeslot.time}
                      </button>
                    ) : (
                      <div className="w-full h-full text-gray-600">{timeslot.time}</div>
                    )}
=======
                    className={`grid-cell flex-1 grow text-center rounded-xl bg-black h-10 m-1 hover:bg-sky-900`}
                  >
                    <button
                      id={timeslot.time}
                      className="w-full h-full text-white"
                      onClick={() => handleTimeSlotClick(datesThisWeek[index].date, timeslot.time)}
                    >
                      {timeslot.time}
                    </button>
                  </div>
                );
              })} */}

              {days.map((day) => {
                return (
                  <div
                    key={day.day}
                    className={`grid-cell flex-1 grow text-center rounded-xl bg-black h-10 m-1 hover:bg-sky-900  ${getBookedColor(
                      day.day,
                      day.month,
                      timeslot.time
                    )} `}
                  >
                    <button
                      id={timeslot.time}
                      data-month={day.month}
                      data-day={day.day}
                      onClick={(event) => {
                        if (isBooked(day.day, day.month, timeslot.time))
                          return toast.error("Already booked!");
                        handleClick(event);
                      }}
                      className="w-full h-full text-white"
                    >
                      {timeslot.time}
                    </button>
>>>>>>> c637082217a33cb631cd29babb4b49f90e82b526
                  </div>
                );
              })}
              <div className="side-space basis-12"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD

export default Calendar;


// <div className="shadow-md w-screen h-screen">
// <section className="calendar-box flex flex-col justify-start align-start bg-gray-300 w-100 m-24 rounded-xl h-auto">
//   <div className="info-head flex flex-row items-center h-28 rounded-xl text-black ml-5 w-100">
//       <span className="basis-full">Available times for your Tutor:</span><span className="tutor-name basis-full ml-3 flex-1">Mitra Ahmadi</span>
//     <div className="small-view-arrow basis-full swiffy-slider slider-nav-square slider-nav-visible slider-nav-touch">
//       <button type="button" className="slider-nav slider-nav-prev" onClick={() => loadPreviousWeek()}></button>
//     </div>
//     <span className="week-switch-small">Switch week</span>
//     <div className="small-view-arrow swiffy-slider slider-nav-square slider-nav-visible slider-nav-touch">
//       <button type="button" className="slider-nav slider-nav-next" onClick={() => loadNextWeek()}></button>
//     </div>
//   </div>
//   <div className="dates-box flex flex-row items-center h-28 bg-green-800">
//     <div className="left-arrow basis-12 swiffy-slider slider-nav-square slider-nav-visible slider-nav-touch">
//       <button type="button" className="slider-nav slider-nav-prev" onClick={() => loadPreviousWeek()}></button>
//   </div>
//     {daysOfWeek.map((day, index) => (
//       <div className="flex-1 grow text-center" key={index}>
//         <span className="full-day font-bold">{day.day}</span>
//         <span className="short-day font-bold">{day.shortName}</span>
//         <br /><span className="dates">{datesThisWeek[index].date}</span>
//       </div>
//     ))}
//     <div className="right-arrow basis-12 swiffy-slider slider-nav-square slider-nav-visible slider-nav-touch">
//       <button type="button" className="slider-nav slider-nav-next" onClick={() => loadNextWeek()}></button>
//     </div>
//   </div>
//   <div className="flex flex-col h-full bg-gray-400 w-100 pb-6 rounded-bl-xl rounded-br-xl">
//   {timeslots.map((timeslot) => (
//       <div key={timeslot.id} className="flex flex-row w-full">
//         <div className="side-space basis-12"></div>
//         {daysOfWeek.map((_, index) => (
//           <div
//             key={index}
//             className="grid-cell flex-1 grow text-center rounded-xl bg-black h-10 m-1 hover:bg-sky-900"
//           >
//             <button
//               id={timeslot.time}
//               className="w-full h-full text-white"
//               onClick={() => Prompt()}
//             >
//               {timeslot.time}
//             </button>
//           </div>
//         ))}
//         <div className="side-space basis-12"></div>
//       </div>
//     ))}
//   </div>
// </section>
// </div>
// );
// };

=======
export default NewCalendar;
>>>>>>> c637082217a33cb631cd29babb4b49f90e82b526
