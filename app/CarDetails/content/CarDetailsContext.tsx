"use client"

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Features {
  type: string;
  doors: string;
  passengers: string;
  luggage: string;
  drive: string;
}

interface Comments {
  Name: string;
  updateTime: string;
  rating: string;
  Photo: string;
  DateLocation: string;
  comment: string;
}

interface CarDetails {
  id: number;
  Name: string;
  price: string;
  oImg1: string;
  oImg2: string;
  oImg3: string;
  rating: string;
  overview: string;
  features: Features;
  location: { location: string };
  Comments: Comments;
}

interface CarDetailsContextType {
  carDetails: CarDetails[];
  setCarDetails: React.Dispatch<React.SetStateAction<CarDetails[]>>;
}

const CarDetailsContext = createContext<CarDetailsContextType | undefined>(undefined);

export const useCarDetails = () => {
  const context = useContext(CarDetailsContext);
  if (context === undefined) {
    throw new Error('useCarDetails must be used within a CarDetailsProvider');
  }
  return context;
};

interface CarDetailsProviderProps {
  children: ReactNode;
}

export const CarDetailsProvider = ({ children }: CarDetailsProviderProps) => {
  const [carDetails, setCarDetails] = useState<CarDetails[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCarDetails = localStorage.getItem('carDetails');
      return savedCarDetails ? JSON.parse(savedCarDetails) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('carDetails', JSON.stringify(carDetails));
  }, [carDetails]);

  return (
    <CarDetailsContext.Provider value={{ carDetails, setCarDetails }}>
      {children}
    </CarDetailsContext.Provider>
  );
};
