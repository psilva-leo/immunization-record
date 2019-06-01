import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Vaccines from "./views/Vaccines";
import Maps from "./views/Maps";
import FirstLoginSteps from "./views/FirstLoginSteps";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/vacinas" />
  },
  {
    path: "/vacinas",
    layout: DefaultLayout,
    component: Vaccines
  },
  {
    path: "/maps",
    layout: DefaultLayout,
    component: Maps
  },
  {
    path: "/first",
    layout: DefaultLayout,
    component: FirstLoginSteps
  }
];
