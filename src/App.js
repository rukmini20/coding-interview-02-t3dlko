import React from "react";
import "./style.css";
import Home from "./components/Home"

// 1. Call API on page load -https://reqres.in/api/users?page=1
// 2. Display data in string format
// 3. Create a button to fetch next page data.

export default function App() {
 
  return (<>
    <Home/></>
  );
}
