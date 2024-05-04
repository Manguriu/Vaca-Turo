import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DateProps = React.HTMLAttributes<HTMLDivElement>;

interface Car {
  id: string;
  name: string;
  pricePerDay: number;
}

interface CarFeatures {
  driverAge: number;
  extras: string[];
}

interface BookingDetails {
  location: string;
  pickupTime: string;
  returnTime: string;
  email: string;
  contactNumber: string;
}

const DateComponent: React.FC<DateProps> = ({ className }: DateProps) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [car, setCar] = useState<Car | null>(null);
  const [rentalDays, setRentalDays] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);
  const [carFeatures, setCarFeatures] = useState<CarFeatures>({
    driverAge: 25,
    extras: [],
  });
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    location: "",
    pickupTime: "",
    returnTime: "",
    email: "",
    contactNumber: "",
  });

  const cars: Car[] = [
    { id: "1", name: "Toyota Noah", pricePerDay: 30 },
    { id: "2", name: "Subaru Legacy", pricePerDay: 70 },
    { id: "3", name: "Prado TX", pricePerDay: 60 },
    { id: "4", name: "Mazda CX5", pricePerDay: 50 },
    { id: "5", name: "Subaru Outback", pricePerDay: 80 },
    { id: "6", name: "Lamborghini Huracan", pricePerDay: 500 },
  ];

  const calculateTotalPrice = (): number => {
    if (!car) return 0;
    const extrasPrice = carFeatures.extras.length * 10; // Assuming each extra costs $10 per day
    return car.pricePerDay * rentalDays + extrasPrice;
  };

  const handleCarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCarId = e.target.value;
    const selectedCar = cars.find((car) => car.id === selectedCarId);
    if (selectedCar) {
      setCar(selectedCar);
    }
  };

  const handleRentalDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const days = parseInt(e.target.value) || 1;
    setRentalDays(days);
  };

  const handleDriverAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarFeatures({
      ...carFeatures,
      driverAge: parseInt(e.target.value) || 0,
    });
  };

  const handleExtrasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setCarFeatures({
        ...carFeatures,
        extras: [...carFeatures.extras, value],
      });
    } else {
      setCarFeatures({
        ...carFeatures,
        extras: carFeatures.extras.filter((extra) => extra !== value),
      });
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingDetails({
      ...bookingDetails,
      location: e.target.value,
    });
  };

  const handlePickupTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingDetails({
      ...bookingDetails,
      pickupTime: e.target.value,
    });
  };

  const handleReturnTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingDetails({
      ...bookingDetails,
      returnTime: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle the submit action here, e.g., send data to server
    setSubmitted(true);
    toast.success("Car rental booked successfully!");
    console.log("Submitted date range:", date);
    console.log("Selected car:", car);
    console.log("Rental days:", rentalDays);
    console.log("Car features:", carFeatures);
    console.log("Booking Details:", bookingDetails);
    console.log("Total Price:", calculateTotalPrice());
  };

  return (
    <div className={cn("grid gap-4", className)}>
      <ToastContainer />

      <div className="grid gap-2">
        <label htmlFor="car" className="text-sm font-medium text-gray-700">
          Select Car:
        </label>
        <select
          id="car"
          name="car"
          onChange={handleCarChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Select a car</option>
          {cars.map((car) => (
            <option key={car.id} value={car.id}>
              {car.name}
            </option>
          ))}
        </select>
      </div>

      {car && (
        <div className="grid gap-2">
          <label
            htmlFor="rentalDays"
            className="text-sm font-medium text-gray-700"
          >
            Rental Days:
          </label>
          <input
            type="number"
            id="rentalDays"
            name="rentalDays"
            value={rentalDays}
            onChange={handleRentalDaysChange}
            min={1}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      )}

      {car && (
        <div className="grid gap-2">
          <label
            htmlFor="driverAge"
            className="text-sm font-medium text-gray-700"
          >
            Driver Age:
          </label>
          <input
            type="number"
            id="driverAge"
            name="driverAge"
            value={carFeatures.driverAge.toString()}
            onChange={handleDriverAgeChange}
            min={18}
            max={99}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      )}

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={bookingDetails.email}
          onChange={(e) =>
            setBookingDetails({ ...bookingDetails, email: e.target.value })
          }
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="contactNumber"
          className="text-sm font-medium text-gray-700"
        >
          Contact Number:
        </label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={bookingDetails.contactNumber}
          onChange={(e) =>
            setBookingDetails({
              ...bookingDetails,
              contactNumber: e.target.value,
            })
          }
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="location" className="text-sm font-medium text-gray-700">
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={bookingDetails.location}
          onChange={handleLocationChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="pickupTime"
          className="text-sm font-medium text-gray-700"
        >
          Pick-up Time:
        </label>
        <input
          type="time"
          id="pickupTime"
          name="pickupTime"
          value={bookingDetails.pickupTime}
          onChange={handlePickupTimeChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="returnTime"
          className="text-sm font-medium text-gray-700"
        >
          Return Time:
        </label>
        <input
          type="time"
          id="returnTime"
          name="returnTime"
          value={bookingDetails.returnTime}
          onChange={handleReturnTimeChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {car && (
        <div className="grid gap-2">
          <label className="text-sm font-medium text-gray-700">
            Total Price:
          </label>
          <div>${calculateTotalPrice()}</div>
        </div>
      )}

      {car && (
        <div className="grid gap-2">
          <label className="text-sm font-medium text-gray-700">
            Select Dates:
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      )}

      {car && (
        <div className="grid gap-2">
          <Button onClick={handleSubmit} className="w-full">
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default DateComponent;
