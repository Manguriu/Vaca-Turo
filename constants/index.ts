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
  {
    id: 4,
    make: "Mazda",
    photo: "Cx5.jpg",
    title: "Mazda CX5",
    price: "$50/day",
    type: "Manual",
    doors: "4",
    passengers: "5",
    lagauge: "7",
    drive: "FWD",
  },
  {
    id: 5,
    make: "Subaru",
    photo: "/Outback.png",
    title: "Subaru Outback",
    price: "$80/day",
    type: "Automatic",
    doors: "4",
    passengers: "5",
    lagauge: "7",
    drive: "AWD",
  },
  {
    id: 6,
    make: "Lamborghini",
    photo: "/lambo.png",
    title: "Lamborghini Huracan",
    price: "$500/day",
    type: "Automatic",
    doors: "2",
    passengers: "2",
    lagauge: "2",
    drive: "RWD",
  },
];

export const HouseDetailsList = [
  {
    id: 20,
    HouseDetailsListimage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    HouseName: "KingVac rentals 4",
    Shortdescription:
      "The magic thing about home is that it feels good to leave and it feels even better to come back",
    detailsImages: {
      Name: "6 Bed House with En Suite at Runda",
      price: "$590 $530 /day",
      HouseImg1: "",
      HouseImg2: "",
      HouseImg3: "",
      HouseImg4: "",
      HouseImg5: "",
      HouseImg6: "",
      HouseImg7: "",
    },
    OtherDetails: {
      Longdescription: "",
      Location: "",
      BasicInfo: "",
      Amenities: "",
      NearBy: "",
      Reviews: "",
      Comments: "",
    },
  },

  {
    id: 21,
    HouseDetailsListimage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    HouseName: "KingVac rentals 1",
    Shortdescription:
      "The magic thing about home is that it feels good to leave and it feels even better to come back",
    detailsImages: {
      Name: "6 Bed House with En Suite at Runda",
      price: "$590 $530 /day",
      HouseImg1: "",
      HouseImg2: "",
      HouseImg3: "",
      HouseImg4: "",
      HouseImg5: "",
      HouseImg6: "",
      HouseImg7: "",
    },
    OtherDetails: {
      Longdescription: "",
      Location: "",
      BasicInfo: "",
      Amenities: "",
      NearBy: "",
      Reviews: "",
      Comments: "",
    },
  },

  {
    id: 22,
    HouseDetailsListimage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    HouseName: "KingVac rentals 2",
    Shortdescription:
      "The magic thing about home is that it feels good to leave and it feels even better to come back",
    detailsImages: {
      Name: "6 Bed House with En Suite at Runda",
      price: "$590 $530 /day",
      HouseImg1: "",
      HouseImg2: "",
      HouseImg3: "",
      HouseImg4: "",
      HouseImg5: "",
      HouseImg6: "",
      HouseImg7: "",
    },
    OtherDetails: {
      Longdescription: "",
      Location: "",
      BasicInfo: "",
      Amenities: "",
      NearBy: "",
      Reviews: "",
      Comments: "",
    },
  },

  {
    id: 23,
    HouseDetailsListimage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    HouseName: "KingVac rentals 3",
    Shortdescription:
      "The magic thing about home is that it feels good to leave and it feels even better to come back",
    detailsImages: {
      Name: "6 Bed House with En Suite at Runda",
      price: "$590 $530 /day",
      HouseImg1: "",
      HouseImg2: "",
      HouseImg3: "",
      HouseImg4: "",
      HouseImg5: "",
      HouseImg6: "",
      HouseImg7: "",
    },
    OtherDetails: {
      Longdescription: "",
      Location: "",
      BasicInfo: "",
      Amenities: "",
      NearBy: "",
      Reviews: "",
      Comments: "",
    },
  },
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

export const CarMakeList = [
  {
    id: 30,
    make: "Toyota",
    makeImage: "/toyotaLogo.png",
  },
  {
    id: 30,
    make: "Mazda",
    makeImage: "/mazdaLogo.png",
  },
  {
    id: 30,
    make: "Audi",
    makeImage: "/audiLogo.png",
  },
  {
    id: 30,
    make: "Jeep",
    makeImage:
      "https://static.autox.com/uploads/2021/03/Jeep-Wrangler-Image-4-.jpg",
  },
  {
    id: 30,
    make: "Subaru",
    makeImage: "/subaruLogo.png",
  },
  {
    id: 30,
    make: "BMW",
    makeImage: "/bmwLogo.png",
  },
];
