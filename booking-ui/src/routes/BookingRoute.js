import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import PhoneBookingHistory from "../components/PhoneBookingHistory";
import BookReturnForm from "../components/BookReturnForm";

const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/bookinghistory/:phoneId",
      element: <PhoneBookingHistory />
    },
    {
      path: "/bookingform/:phoneId",
      element: <BookReturnForm />
    },
    {
      path: "/error",
      element: <ErrorPage />
    },
  ]);

export default createRouter;
