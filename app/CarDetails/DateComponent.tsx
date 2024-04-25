"use client"

import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import React, { useState } from 'react';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type DateProps = React.HTMLAttributes<HTMLDivElement>;

const DateComponent: React.FC<DateProps> = ({ className }: DateProps) => {
    const [date, setDate] = React.useState<DateRange | undefined>({
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    });

    const handleSubmit = () => {
      // Handle the submit action here, e.g., send date data to server
      console.log("Submitted date range:", date);
    }

    return (
      <div className={cn("grid gap-2", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
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
        <Button className="mt-3" onClick={handleSubmit}>Submit</Button>
      </div>
    )
}

export default DateComponent;


// import { addDays, format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"
// import { DateRange } from "react-day-picker"
// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"

// type DateProps = React.HTMLAttributes<HTMLDivElement>;

// const DateComponent: React.FC<DateProps> = ({ className }: DateProps) => {
//     const [date, setDate] = React.useState<DateRange | undefined>({
//       from: new Date(2022, 0, 20),
//       to: addDays(new Date(2022, 0, 20), 20),
//     });
//     const [submitted, setSubmitted] = useState(false);

//     const handleSubmit = () => {
//       // Handle the submit action here, e.g., send date data to server
//       setSubmitted(true);
//       toast.success('Date range submitted successfully!');
//     }

//     return (
//       <div className={cn("grid gap-2", className)}>
//         <ToastContainer />
//         <div className={cn("grid gap-2", className)}>
//           <Button
//             id="date"
//             variant={"outline"}
//             className={cn(
//               "w-[300px] justify-start text-left font-normal",
//               !date && "text-muted-foreground"
//             )}
//           >
//             <CalendarIcon className="mr-2 h-4 w-4" />
//             {date?.from ? (
//               date.to ? (
//                 <>
//                   {format(date.from, "LLL dd, y")} -{" "}
//                   {format(date.to, "LLL dd, y")}
//                 </>
//               ) : (
//                 format(date.from, "LLL dd, y")
//               )
//             ) : (
//               <span>Pick a date</span>
//             )}
//           </Button>
//         </div>
//         <Button onClick={handleSubmit}>Submit</Button>
//       </div>
//     )
// }

// export default DateComponent;
