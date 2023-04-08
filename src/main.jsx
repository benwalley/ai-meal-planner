import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Components/Dashboard.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {
    RecoilRoot
} from 'recoil';
import {ThemeProvider} from "@mui/material";
import {mainTheme} from "./mainTheme.js";

const router = createBrowserRouter([
    {
        path: "/",
        element:  <Dashboard />,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RecoilRoot>
          <ThemeProvider theme={mainTheme}>
            <RouterProvider router={router} />
          </ThemeProvider>
      </RecoilRoot>
  </React.StrictMode>,
)
