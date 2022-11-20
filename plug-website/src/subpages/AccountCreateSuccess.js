import React, { useEffect, useState } from "react";

import supabase from "../supabase";

const AccountCreateSuccess = () => {
  return (
    <div className="bg-black ">
      <div className="flex min-h-full items-center justify-center py-24 px-8 sm:px-6 lg:px-8"></div>
      <img
        className="mx-auto h-[100px] w-auto"
        src={require("../images/logos/PlugWhite.png")}
        alt="Your Company"
      />

      <h1 className=" text-white text-3xl text-center mt-8 mx-4">
        Account Creation Success
      </h1>
      <h2 className=" text-white text-2xl text-center mt-6 mx-6 font-normal">
        Please check your email to verify your account
      </h2>
    </div>
  );
};

export default AccountCreateSuccess;
