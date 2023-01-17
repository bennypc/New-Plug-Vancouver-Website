import React, { useState, useRef } from "react";
import "./subcss/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex min-h-full flex-col bg-black pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <a href="/" className="inline-flex">
              <span className="sr-only">Your Company</span>
              <img
                className="h-24 w-auto"
                src={require("../images/logos/PLogo.png")}
                alt=""
              />
            </a>
          </div>
          <div className="pt-8 pb-16">
            <div className="text-center">
              <p className="text-base font-semibold text-indigo-600">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-300">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="text-base font-medium text-indigo-500 hover:text-indigo-500"
                >
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFoundPage;
