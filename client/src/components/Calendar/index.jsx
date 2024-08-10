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
  const [saveBooking] = useMutation(SAVE_BOOKING);

  const handleClick = async (event) => {
    const mutationResponse = await saveBooking({
      variables: {
        dateBooked: event.target.id,
        timeSlot: event.target.parentNode.id
      },
    });
    // console.log(event.target.id);
    // console.log(event.target.parentNode.id);

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
                  <td  id={timeslot.time} className="px-5 py-3 ">
                    <button id={days[0].weekday} onClick={(event) => handleClick(event)}>
                      Book
                    </button>
                  </td>
                  {/* Second Column */}
                  <td id={timeslot.time} className="px-5 py-3 ">
                    <button id={days[1].weekday}  onClick={() => Prompt()}>
                      Book
                    </button>
                  </td>
                  {/* Third Column */}
                  <td id={timeslot.time} className="px-5 py-3 ">
                    <button id={days[2].weekday}  onClick={() => Prompt()}>
                      Book
                    </button>
                  </td>
                  {/* Fourth Column */}
                  <td id={timeslot.time} className="px-5 py-3 ">
                    <button id={days[3].weekday} onClick={() => Prompt()}>
                      Book
                    </button>
                  </td>
                  {/* Fifth Column */}
                  <td id={timeslot.time} className="px-5 py-3 ">
                    <button id={days[4].weekday} onClick={() => Prompt()}>
                      Book
                    </button>
                  </td>
                  {/* Sixth Column */}
                  <td id={timeslot.time} className="px-5 py-3 ">
                    <button id={days[5].weekday} onClick={() => Prompt()}>
                      Book
                    </button>
                  </td>
                  {/* Seventh Column */}
                  <td id={timeslot.time} className="px-5 py-3 ">
                    <button id={days[6].weekday} onClick={() => Prompt()}>
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