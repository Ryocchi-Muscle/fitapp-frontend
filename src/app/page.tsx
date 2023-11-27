"use client";
// import { AppProps } from "next/app";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/auth";

import AuthProvider from "./compornents/AuthProvider";
import GuestLogin from "./compornents/GuestLogin";
import Home from "./compornents/Home";
import SignIn from "./compornents/SignIn";
import SignUp from "./compornents/SignUp";

function App() {
  // const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();
      console.log(res?.data.isLogin);
      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
      } else {
        console.log("no current user");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, [isSignedIn]);

  return (
    <>
      <AuthProvider
        value={{
          loading,
          setLoading,
          isSignedIn,
          setIsSignedIn,
          currentUser,
          setCurrentUser,
        }}
      >
        <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-400 ">
          <h1 className="text-4xl font-bold -mt-32">Fit App</h1>
          <div className="w-full max-w-xl mt-5">
            <div className="w-full bg-white shadow-md px-8 py-6 rounded-lg">
              <SignUp />
              {isSignedIn ? <Home /> : <SignIn />}
              <GuestLogin />
            </div>
          </div>
        </main>
      </AuthProvider>
    </>
  );
}

export default App;
