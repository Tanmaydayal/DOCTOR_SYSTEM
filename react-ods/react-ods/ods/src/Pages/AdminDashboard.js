import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Horizontalchart from "./chart-horizontal";

export const AdminDashboard = () => {
  const [user, setuser] = useState("");

  const getLoggedinUserData = () => {
    var id = localStorage.getItem("_id");
    axios
      .get("http://localhost:4000/register/register/" + id)
      .then((res) => {
        console.log(res.data.data);
        setuser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getLoggedinUserData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h1>
        AdminDetails '{user.name}' 
        <Horizontalchart/>
      
      </h1>
    </div>
  );
};
