import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import SidebarMenu from "./SidebarMenu";

const DashboardCalendar = () => {
  const [firstName, setfirstName] = useState("");
  async function getUser() {
    const { data, error } = await supabase.auth.getSession();

    console.log(data);

    console.log(data.session.user.user_metadata.first_name);

    setfirstName(data.session.user.user_metadata.first_name);
  }

  getUser();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <SidebarMenu />
      <main style={{ padding: 20 }}>Calendar</main>
    </div>
  );
};

export default DashboardCalendar;
