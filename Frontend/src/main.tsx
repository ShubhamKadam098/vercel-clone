import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import PublicLayout from "./components/Layout/PublicLayout";
import PageNotFound from "./components/Dummy/PageNotFound";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import PrivateLayout from "./components/Layout/PrivateLayout";
import Project from "./components/Project/Project";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import ProjectDetails from "./components/Project/ProjectDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PrivateLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="project" element={<Project />} />
        <Route path="project/:projectId" element={<ProjectDetails />} />
      </Route>
      <Route path="/" element={<PublicLayout />}>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
