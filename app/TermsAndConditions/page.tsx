import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="max-w-screen-xl mx-auto flex flex-col my-auto items-center ">
      <div className=" px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

        <h2 className="text-xl font-semibold mb-2">1. Booking and Payment</h2>
        <p className="mb-4">
          By booking a rental through KingVac Rentals, you agree to pay the
          specified rental fees and any additional charges as outlined in the
          booking details. Payments are processed securely through our payment
          gateway.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          2. Reservation and Cancellation
        </h2>
        <p className="mb-4">
          Reservations are subject to availability and confirmation by KingVac
          Rentals. Cancellation policies vary based on the rental type and are
          specified during the booking process. Please review cancellation terms
          before making a reservation.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions or concerns regarding these terms and
          conditions, please contact us at{" "}
          <a href="mailto:contact@kingvacrentals.com">
            contact@kingvacrentals.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
