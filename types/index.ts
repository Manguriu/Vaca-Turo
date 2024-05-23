import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
  className?: string;
}

export interface HouseDetails {
  id: number;
  HouseDetailsListimage: string;
  HouseName: string;
  price: string;
  Shortdescription: string;
  detailsImages: {
    Name: string;
    price: string;
    discount: string;
    Reviews: string;
    HouseImg1: string;
    HouseImg2: string;
    HouseImg3: string;
    HouseImg4: string;
    HouseImg5: string;
    HouseImg6: string;
    HouseImg7: string;
  };
  OtherDetails: {
    Longdescription: string;
    Location: string;
    Amenities: {
      Amenities1: string;
      Amenities2: string;
      Amenities3: string;
    };
    NoGuests: string;
    Name: string;
    Bedrooms: string;
    Beds: string;
    Bathrooms: string;
    NearByPlaces: string;
  };
}

export interface DetailsImages {
  Name: string;
  price: string;
  Reviews: string;
  HouseImg1: string;
  HouseImg2: string;
  HouseImg3: string;
  HouseImg4: string;
  HouseImg5: string;
  HouseImg6: string;
  HouseImg7: string;
}
