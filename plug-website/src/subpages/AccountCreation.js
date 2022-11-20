import React, { useEffect, useState } from "react";

import supabase from "../supabase";

const AccountCreation = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function createAccount(e) {
    e.preventDefault();

    console.log("create");
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
        emailRedirectTo: "/login",
      },
    });
  }

  return (
    <div className="bg-black">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mx-4">
          <div>
            <img
              className="mx-auto h-[160px] w-auto"
              src={require("../images/logos/PlugWhite.png")}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Create your Plugccount
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300">
              Or{" "}
              <a
                href="/login"
                className="font-medium text-[#cb6ce6] hover:text-indigo-500"
              >
                Sign in instead
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={createAccount}>
            <div className="-space-y-px rounded-md shadow-sm h">
              <div>
                <label htmlFor="first-name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                  autoComplete="given-name"
                  required
                  className="h-[50px] relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300  px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#cb6ce6] focus:outline-none focus:ring-[#cb6ce6] sm:text-sm"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  autoComplete="family-name"
                  required
                  className="h-[50px] relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 mb-4 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#cb6ce6] focus:outline-none focus:ring-[#cb6ce6] sm:text-sm"
                  placeholder="Last Name"
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="h-[50px] relative block w-full appearance-none rounded-md border border-gray-300 mb-4 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#cb6ce6] focus:outline-none focus:ring-[#cb6ce6] sm:text-sm"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-[50px] relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#cb6ce6] focus:outline-none focus:ring-[#cb6ce6] sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div>
                <label htmlFor="password-verify" className="sr-only">
                  Verify Password
                </label>
                <input
                  id="password-verify"
                  name="password-verify"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-[50px] relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#cb6ce6] focus:outline-none focus:ring-[#cb6ce6] sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#b638d8] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountCreation;
