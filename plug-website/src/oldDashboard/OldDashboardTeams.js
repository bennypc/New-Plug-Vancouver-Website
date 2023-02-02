import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import SidebarMenu from "./SidebarMenu";
import "./dashboard.css";
import { Navigate } from "react-router-dom";

const OldDashboardTeams = () => {
  const [session, setSession] = useState("");
  const [firstName, setfirstName] = useState("");
  const [loading, setLoading] = useState(true);
  const [usersArray, setUsersArray] = useState([]);

  async function authUser() {
    const { data, error } = await supabase.auth.getSession();
    setSession(data);
    setLoading(false);
  }

  async function getUsers() {
    let { data: users, error } = await supabase
      .from("users")
      .select("*")
      .order("first_name", { ascending: true });
    setUsersArray(users);
  }

  useEffect(() => {
    getUsers();
    authUser();
  }, []);

  return loading ? (
    <>Loading...</>
  ) : !session.session ? (
    <Navigate to="/login" replace={true} />
  ) : (
    <div style={{ display: "flex" }}>
      <SidebarMenu />
      <main className="main-content">
        <div className="">
          <div className="h-[10vh]">
            <h1 className="pt-6 text-3xl pl-4">TEAM MEMBERS</h1>
          </div>

          <div className="contact-list h-[90vh] w-[280px]">
            <ul className="">
              {usersArray.map((user) => (
                <li>
                  <div className="h-20 max-w-[280px] ml-4">
                    <div className="flex">
                      <div className="flex items-center">
                        <img
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                          src={user.avatar_url}
                          alt="avatar"
                        />
                      </div>

                      <div className="ml-3">
                        <h1>
                          {user.first_name} {user.last_name}
                        </h1>
                        <h3>{user.position}</h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OldDashboardTeams;
