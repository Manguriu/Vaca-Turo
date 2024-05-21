"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CarInputForm from "./CarDetails/CarInputForm";


const Admin = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      router.push("/Login");
    } else {
      // Retrieve user's name from localStorage or your authentication data
      const storedUserName = localStorage.getItem("userName");
      setUserName(storedUserName || "");
    }
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="text-2xl font-extrabold font-Josefin">
          Welcome to the Dashboard,{" "}
          <span className="font-Josefin text-blue-500"> {userName} </span>!
        </h1>
    

        <div className="flex justify-center w-full">
          <CarInputForm />
        </div>
      </div>
    </main>
  );
};

export default Admin;
