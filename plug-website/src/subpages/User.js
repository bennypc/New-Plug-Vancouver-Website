import React, { useEffect, useState } from "react";

import supabase from "../supabase";

const User = () => {
  const [firstName, setfirstName] = useState("");
  async function getUser() {
    const { data, error } = await supabase.auth.getSession();

    console.log(data);

    console.log(data.session.user.user_metadata.first_name);

    setfirstName(data.session.user.user_metadata.first_name);
  }

  getUser();

  return (
    <div className="bg-black ">
      <div className="flex min-h-full items-center justify-center py-24 px-8 sm:px-6 lg:px-8"></div>
      <img
        className="mx-auto h-[150px] w-auto"
        src={require("../images/logos/PlugWhite.png")}
        alt="Your Company"
      />

      <h1 className=" text-white text-3xl text-center mt-8 mx-4">
        Welcome, {firstName}
      </h1>
      <h2 className=" text-white text-2xl text-center mt-6 mx-6 font-normal">
        Stay tuned for more features...
      </h2>
    </div>
  );
};

export default User;
