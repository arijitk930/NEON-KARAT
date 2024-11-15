import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Insights from "./pages/Insights.jsx";
import CreditCardPg from "../src/pages/CreditCardPg.jsx";
import Login from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/credit-card" element={<CreditCardPg />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
