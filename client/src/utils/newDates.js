// export default function nextDates() {
//   alert("Well the button works!");
//   // currentDate = setDate();

//   const currentDate = new Date();
//   const day = String(currentDate.getDate()).padStart(2, "0"); // Get day and pad with leading zero if needed
//   const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Get month, add 1 (since months are 0-based), and pad with leading zero if needed

//   const formattedDate = `${day}/${month}`;

//   console.log(formattedDate);
// }

// export default function loadNewWeeks(dates) {
//   try {
//     return dates.map((dateObj) => {
//       const [day, month] = dateObj.date.split("/");
//       const newDate = new Date(2024, month - 1, parseInt(day) + 7);
//       const formattedDate = `${newDate.getDate()}/${newDate.getMonth() + 1}`;
//       return { date: formattedDate };
//     });
//   } catch (error) {
//     console.error("Error generating new dates:", error);
//     return dates; // return the original dates or handle the error appropriately
//   }
// }

// export default function loadNewWeeks(dates, direction = 1) {
//   try {
//     return dates.map((dateObj) => {
//       const [day, month] = dateObj.date.split("/");
//       const newDate = new Date(2024, month - 1, parseInt(day) + 7 * direction);
//       const formattedDate = `${newDate.getDate()}/${newDate.getMonth() + 1}`;
//       return { date: formattedDate };
//     });
//   } catch (error) {
//     console.error("Error generating new dates:", error);
//     return dates; // return the original dates or handle the error appropriately
//   }
// }

export default function loadNewWeeks(dates, direction = 1) {
  try {
    return dates.map((dateObj) => {
      const [day, month] = dateObj.date.split("/");
      const parsedDay = parseInt(day);
      const parsedMonth = parseInt(month) - 1; // Month is 0-indexed in JS Dates

      // Create a new Date object
      const currentDate = new Date(2024, parsedMonth, parsedDay);

      // Adjust the date by adding or subtracting 7 days
      currentDate.setDate(currentDate.getDate() + 7 * direction);

      // Get the new day and month
      const newDay = currentDate.getDate();
      const newMonth = currentDate.getMonth() + 1; // Adjust for 0-indexed month

      // Format the new date
      const formattedDate = `${newDay}/${newMonth}`;

      return { date: formattedDate };
    });
  } catch (error) {
    console.error("Error generating new dates:", error);
    return dates; // return the original dates or handle the error appropriately
  }
}

// export function loadPreviousWeeks(currentWeekDates) {
//   const currentDate = new Date();
//   const previousWeekDates = currentWeekDates.map((dateString) => {
//     const [day, month] = dateString.split("/").map(Number);
//     const date = new Date(currentDate.getFullYear(), month - 1, day);

//     // Subtract 7 days
//     date.setDate(date.getDate() - 7);

//     // Ensure it doesn't go before the current date
//     if (date < currentDate) {
//       return formatDate(currentDate);
//     }
//     return formatDate(date);
//   });

//   return previousWeekDates;
// }
