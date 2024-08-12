const Prompt = (day, month, time) => {
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
    // Add other days as needed
  };

  const dayName = new Date(2024, month - 1, day).toLocaleDateString("en-US", {
    weekday: "long",
  });
  const availableTimes = tutorAvailability[dayName] || [];

  if (availableTimes.includes(time)) {
    let confirmation = window.confirm(
      `Do you want to book this session for ${dayName} at ${time}?`
    );
    return confirmation;
  } else {
    alert(`The time slot ${time} is not available on ${dayName}.`);
    return false;
  }
};

export default Prompt;
