// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routes/Routes";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Correct import
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes"; // Ensure your router is properly defined

// Create the root and render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
