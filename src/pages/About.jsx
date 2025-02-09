import React from "react";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-red-800">About Page</h1>
    </div>
    </div>
  );
}
