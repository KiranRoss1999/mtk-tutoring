import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { DELETE_BOOKING } from "../utils/mutations";
import { toast } from "react-toastify";

const Profile = () => {
  const { data, refetch: refetchUser } = useQuery(QUERY_ME);
  const [deleteBooking, { error }] = useMutation(DELETE_BOOKING);
  let user;

  if (data) {
    user = data.user;
  }

  useEffect(() => {
    function onfocus() {
      refetchUser();
    }

    onfocus()

    window.addEventListener("focus", onfocus);

    return () => window.removeEventListener("focus", onfocus);
  }, []);

  const handleDeleteBooking = async (bookingId) => {
    if (window.confirm("Are you sure want to delete the booking?")) {
      try {
        await deleteBooking({
          variables: {
            bookingId,
          },
        });

        toast.info("Booked deleted successfully!");

        refetchUser();
      } catch (error) {
        toast.error("Something went wrong, while deleting booking");
        console.error(error);
      }
    }
  };

  return (
    <>
      <Nav />
      <h1>Hello</h1>
      {user ? (
        <>
          <h2>Your first name: {user.firstName}</h2>
          <h2>Your last name: {user.lastName}</h2>
          <h2>Your email: {user.email}</h2>

          {/*  <UserBookingsCalendar /> */}

          {user?.bookings.map((booking, index) => (
            <div key={booking._id} className="bg-green-500 border flex ">
              <h1 className="text-2xl text-white">
                ({index + 1}.) {booking.bookedDay} | {booking.bookedMonth} |{" "}
                {booking.timeSlot}
              </h1>

              <button onClick={() => handleDeleteBooking(booking?._id)}>
                Delete
              </button>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

export default Profile;
