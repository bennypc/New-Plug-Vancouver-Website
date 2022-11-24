import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import SidebarMenu from "./SidebarMenu";
import { Navigate, redirect } from "react-router-dom";

const DashboardSettings = () => {
  const [session, setSession] = useState("");
  const [firstName, setfirstName] = useState("");
  const [loading, setLoading] = useState(true);

  async function getUser() {
    const { data, error } = await supabase.auth.getSession();
    setSession(data);
    setLoading(false);
  }

  useEffect(() => {
    getUser();
  }, []);

  return loading ? (
    <>Loading...</>
  ) : !session.session ? (
    <Navigate to="/login" replace={true} />
  ) : (
    <div style={{ display: "flex", height: "100%" }}>
      <SidebarMenu />
      <main style={{ padding: 20 }}>
        {" "}
        Settings
        <h1>{session.session.user.user_metadata.first_name}</h1>
      </main>
    </div>
  );
};

export default DashboardSettings;
