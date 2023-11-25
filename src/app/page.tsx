"use client";
import type { NextPage } from "next";
import useSWR from "swr";
import GuestLogin from "./compornents/GuestLogin";
import SignIn from "./compornents/SignIn";
import SignUp from "./compornents/SignUp";
import { fetcher } from "@/utils";

const Index: NextPage = () => {
  const url = "http://localhost:3000/api/v1/health_check";
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      {/* <div>Rails疎通確認</div>
      <div>レスポンスメッセージ: {data.message}</div> */}
      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-400 ">
        <h1 className="text-4xl font-bold -mt-32">Fit App</h1>
        <div className="w-full max-w-xl mt-5">
          <div className="w-full bg-white shadow-md px-8 py-6 rounded-lg">
            <SignIn />
            <SignUp />
            <GuestLogin />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
