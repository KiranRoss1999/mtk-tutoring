const createDates = () => {
  const days = [];

  const week = 7;

  let currentDate = new Date();

  let newDate = new Date(currentDate);

  for (let i = 0; i < week; i++) {
    // let dateDay = (currentDate.getDay() + i) % 7;
    newDate.setDate(currentDate.getDate() + i);
    // console.log(newDate);
    let dateMonth = newDate.getMonth() + 1;
    let dateDate = newDate.getDate();
    let dateDay = newDate.toLocaleString("en-us", { weekday: "long" });

    let dateObj = {
      month: dateMonth,
      day: dateDate,
      weekday: dateDay,
    };

    days.push(dateObj);
  }

  // console.log(days);
  return days;
};

export default createDates;
