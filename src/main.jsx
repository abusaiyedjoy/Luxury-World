import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Router";
import FairbaseProvider from "./FairbaseProveder/FairbaseProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FairbaseProvider>
      <RouterProvider router={router} />
    </FairbaseProvider>
  </React.StrictMode>
);
