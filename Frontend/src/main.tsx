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
import SignUp from "./components/SignUp";
import PublicLayout from "./components/Layout/PublicLayout";
import PageNotFound from "./components/Dummy/PageNotFound";
import SignIn from "./components/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicLayout />}>
        <Route path="" element={<App />} />
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
