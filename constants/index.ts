import { exportTraceState } from "next/dist/trace";

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "something 1", url: "/" },
      { title: "something 2", url: "/" },
      { title: "something 3", url: "/" },
      { title: "something 4", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

export const featuredCarsList = [
  {
    id: 12,
    make: "Toyota",
    photo: "/Noah.png",
    title: "Toyota Noah",
    price: "$30/day",
    type: "Automatic",
    doors: "4",
    passengers: "7",
    lagauge: "3",
    drive: "FWD",
    details: {
      Name: "Toyota Noah 2f2 2005b ev",
      price: "$30/day",
      oImg1: "/Noah1.jpg",
      oImg2: "/Noah2.jpg",
      oImg3: "Noah3.jpg",
      rating: "4.5(106 trips)",
      overview:
        "The 5 Seater Toyota Voxy / Noah Van is a multi-passenger van The 5 Seater Toyota Voxy / Noah Van is a multi-passenger van The 5 Seater Toyota Voxy / Noah Van is a multi-passenger van The 5 Seater Toyota Voxy / Noah Van is a multi-passenger van",
      features: {
        type: "Automatic",
        doors: "4",
        passengers: "7",
        lagauge: "3",
        drive: "FWD",
      },
      location: {
        location: "somewhere in somewhere",
      },
      // Reviews: {
      //   stars: "4",
      // },
      Comments: {
        Name: "Jese Leos ",
        updateTime: "Joined on August 2014",
        rating: "4",
        Photo: "/person.jpg",
        DateLocation: "Reviewed in the United Kingdom on March 3, 2017",
        comment:
          "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.",
      },
    },
  },

  {
    id: 13,
    make: "Subaru",
    photo: "/Car1.jpg",
    title: "Subaru Legacy",
    price: "$50/day",
    type: "Manual",
    doors: "4",
    passengers: "5",
    lagauge: "4",
    drive: "AWD",
  },
  {
    id: 14,
    make: "Toyota",
    photo: "/Prado.jpg",
    title: "Prado TX",
    price: "$60/day",
    type: "Manual",
    doors: "4",
    passengers: "5",
    lagauge: "8",
    drive: "AWD",
  },
  // {
  //   id: 4,
  //   make: "Mazda",
  //   photo: "Cx5.jpg",
  //   title: "Mazda CX5",
  //   price: "$50/day",
  //   type: "Manual",
  //   doors: "4",
  //   passengers: "5",
  //   lagauge: "7",
  //   drive: "FWD",
  // },
  // {
  //   id: 5,
  //   make: "Subaru",
  //   photo: "/Outback.png",
  //   title: "Subaru Outback",
  //   price: "$80/day",
  //   type: "Automatic",
  //   doors: "4",
  //   passengers: "5",
  //   lagauge: "7",
  //   drive: "AWD",
  // },
  // {
  //   id: 6,
  //   make: "Lamborghini",
  //   photo: "/lambo.png",
  //   title: "Lamborghini Huracan",
  //   price: "$500/day",
  //   type: "Automatic",
  //   doors: "2",
  //   passengers: "2",
  //   lagauge: "2",
  //   drive: "RWD",
  // },
];

export const SliderList = [
  {
    image: "/feat1.jpg",
    title: "Find the perfect car to try before you buy",
    description:
      "Make sure your future wheels work well with your lifestyle by taking your time in the drivers seat.",
  },
  {
    image: "feat2.jpg",
    title: "Find the perfect car to unwind for the weekend",
    description:
      "From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.",
  },
  {
    image: "feat3.jpg",
    title: "Find the perfect car to upgrade your vacation plans",
    description:
      "kip the rental car counter and find the perfect car to complement your vacation vibe.",
  },
  {
    image: "feat4.jpg",
    title: "Find the perfect car for scenic corners & curves",
    description:
      "Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.",
  },
  {
    image: "feat5.jpg",
    title: "Find the perfect car to make errand day easier",
    description:
      "Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.",
  },
];
