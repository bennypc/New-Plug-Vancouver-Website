import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import SidebarMenu from "./SidebarMenu";
import  { Navigate, redirect } from 'react-router-dom'

const DashboardHome = () => {
  const [session, setSession] = useState("");
  const [firstName, setfirstName] = useState("");

  async function  getUser() {
    const { data, error } = await supabase.auth.getSession();

    setSession(data);
  }


  useEffect(() => {
    getUser();
  }, []);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      {!session && (
          <Navigate to="/login" replace={true} />
        )}
      <SidebarMenu />
      <main style={{ padding: 20 }}> Main content</main>
    </div>
  );
};

export default DashboardHome;
