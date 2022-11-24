import React, { useEffect, useState, useCallback } from "react";
import supabase from "../supabase";
import SidebarMenu from "./SidebarMenu";
import { Navigate, redirect } from "react-router-dom";

const DashboardProfile = () => {
  const [session, setSession] = useState("");
  const [firstName, setfirstName] = useState("");
  const [loading, setLoading] = useState(true);
  const [usersArray, setUsersArray] = useState([]);
  const [userInfo, setUserInfo] = useState("");

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  async function authUser() {
    const { data: userSession, error } = await supabase.auth.getSession();
    setSession(userSession);

    console.log(userSession);

    let { data: users, err } = await supabase
      .from("users")
      .select("*")
      .order("first_name", { ascending: true });
    setUsersArray(users);

    console.log(users);

    if (!!userSession) {
      for (let i of users) {
        if (
          userSession.session.user.user_metadata.first_name === i.first_name &&
          userSession.session.user.user_metadata.last_name === i.last_name
        ) {
          console.log("found user");
          setUserInfo(i);
          console.log(i.avatar_url);
        }
      }
    }

    setLoading(false);
  }

  async function uploadAvatar(event) {
    const avatarFile = selectedFile;
    const username = userInfo.first_name + userInfo.last_name;

    const id = Math.random().toString(36).slice(2);

    const path = username + "/" + id + ".png";

    console.log(path);
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(path, avatarFile);

    const url = supabase.storage.from("avatars").getPublicUrl(path);

    const publicURL = url.data;
    console.log(url.data.publicUrl);

    const { img, err } = await supabase
      .from("users")
      .update({ avatar_url: url.data.publicUrl })
      .eq("id", userInfo.id);

    let { data: users } = await supabase
      .from("users")
      .select("*")
      .order("first_name", { ascending: true });
    setUsersArray(users);

    console.log(users);
  }

  useEffect(() => {
    authUser();
  }, []);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  return loading ? (
    <>Loading...</>
  ) : !session.session ? (
    <Navigate to="/login" replace={true} />
  ) : (
    <div style={{ display: "flex", height: "100%" }}>
      <SidebarMenu />
      <main style={{ padding: 20 }}>
        <div className="mt-2 ml-2">
          {" "}
          <h1 className="text-4xl">Profile</h1>
          <img
            className="inline-block h-[150px] w-[150px] rounded-full ring-2 ring-white mt-8"
            src={userInfo.avatar_url}
            alt="avatar"
          />
          <h1 className="mt-6 text-2xl">
            {userInfo.first_name} {userInfo.last_name}
          </h1>
          <input type="file" name="file" onChange={changeHandler} />
          {isSelected ? (
            <div>
              <p>image selected</p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          <div>
            <button onClick={uploadAvatar}>Submit</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardProfile;
