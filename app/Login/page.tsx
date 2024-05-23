"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = async (event: any) => {
    event.preventDefault();

    // Dummy authentication logic
    if (username === "admin" && password === "password") {
      // Set authentication in localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userName", "admin");
      // Redirect to admin dashboard
      router.push("/Admin");
    } else {
      alert("Invalid username or password");
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="w-[500px] relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex justify-center items-center flex-col ">
              <img src="/person.png" className="h-20 w-20" />
              <h1 className="text-2xl font-semibold font-Josefin">
                Admin Login{" "}
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form className="flex flex-col gap-8" onSubmit={handleLogin}>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      name="email"
                      type="text"
                      className="font-Josefin placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Username"
                    />
                    <label
                      htmlFor="email"
                      className="font-Josefin absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      name="password"
                      type="password"
                      className="font-Josefin peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="font-Josefin absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="w-full font-Josefin bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
