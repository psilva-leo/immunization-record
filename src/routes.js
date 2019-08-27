import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import BlankLayout from './layouts/BlankLayout';

// Route Views
import Vaccines from "./views/Vaccines";
import Maps from "./views/Maps";
import Login from "./views/Login";
import Register from "./views/Register";
import LandingPage from "./views/LandingPage";
import Profile from "./views/UserProfile";

export default [
  {
    path: "/",
    exact: true,
    layout: BlankLayout,
    component: LandingPage
  },
  {
    path: "/console",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/console/vacinas" />
  },
  {
    path: "/console/vacinas",
    layout: DefaultLayout,
    component: Vaccines
  },
  {
    path: "/console/maps",
    layout: DefaultLayout,
    component: Maps
  },
  {
    path: "/console/profile",
    layout: DefaultLayout,
    component: Profile
  },
  {
    path: "/login",
    layout: BlankLayout,
    component: Login
  },
  {
    path: "/register",
    layout: BlankLayout,
    component: Register
  },
  {
    path: "/landingpage",
    layout: BlankLayout,
    component: LandingPage
  }
];
