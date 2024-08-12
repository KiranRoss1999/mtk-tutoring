import createDates from "../../utils/createDates";
import {useState} from 'react';
import Prompt from "../../utils/prompt";
import {useMutation} from '@apollo/client';
import {SAVE_BOOKING} from '../../utils/mutations';

const days = createDates();

const timeslots = [
  {
    id: 1,
    time: "8:00",
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

const Calendar = () => {
  const [saveBooking, {error}] = useMutation(SAVE_BOOKING);

  const handleClick = async (event) => {
    let bookedMonth = event.target.getAttribute('data-month');
    let bookedDay = event.target.getAttribute('data-day');
    let timeSlot = event.target.id;

    try {
      const { data } = await saveBooking({
        variables: {
          bookedDay: bookedDay,
          bookedMonth: bookedMonth,
          timeSlot: timeSlot
        },
      });

    } catch (error) {
      console.error(error);
    }
   
    // console.log(bookedDay);
    // console.log(bookedMonth);
    // console.log(timeSlot);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h3>Calendar</h3>
      <table className='table-auto w-full bg-white border border-gray-300'>
        <thead className='bg-pink-500 text-white'>
          <tr>
            <th></th>
            {days.map((day) => {
              return (
                <th key={day.day} className='border px-6 py-2'>
                  {day.weekday} {day.day}/{day.month}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
            {timeslots.map((timeslot) => {
              return (
                <tr key={timeslot.id} className='border px-6 py-6'>
                  <th className="px-5 py-3 ">
                    {timeslot.time}
                  </th>
                  {/* First Column */}
                  <td className="px-5 py-3 ">
                    <button id={timeslot.time} data-month={days[0].month} data-day={days[0].day} onClick={(event) => handleClick(event)}>
                      Book
                    </button>
                  </td>
                  {/* Second Column */}
                  <td className="px-5 py-3 ">
                    <button id={timeslot.time} data-month={days[1].month} data-day={days[1].day} onClick={(event) => handleClick(event)}>
                      Book
                    </button>
                  </td>
                  {/* Third Column */}
                  <td className="px-5 py-3 ">
                    <button id={timeslot.time}  data-month={days[2].month} data-day={days[2].day} onClick={(event) => handleClick(event)}>
                      Book
                    </button>
                  </td>
                  {/* Fourth Column */}
                  <td className="px-5 py-3 ">
                    <button id={timeslot.time} data-month={days[3].month} data-day={days[3].day} onClick={(event) => handleClick(event)}>
                      Book
                    </button>
                  </td>
                  {/* Fifth Column */}
                  <td className="px-5 py-3 ">
                    <button id={timeslot.time} data-month={days[4].month} data-day={days[4].day} onClick={(event) => handleClick(event)}>
                      Book
                    </button>
                  </td>
                  {/* Sixth Column */}
                  <td className="px-5 py-3 ">
                    <button id={timeslot.time} data-month={days[5].month} data-day={days[5].day} onClick={(event) => handleClick(event)}>
                      Book
                    </button>
                  </td>
                  {/* Seventh Column */}
                  <td id={timeslot.time} className="px-5 py-3 ">
                    <button id={timeslot.time} data-month={days[6].month} data-day={days[6].day} onClick={(event) => handleClick(event)}>
                      Book
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>

  );
};

export default Calendar;