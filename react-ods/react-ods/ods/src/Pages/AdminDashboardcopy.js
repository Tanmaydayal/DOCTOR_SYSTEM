import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link,Navigate } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";
import Helmet from "helmet";

import Horizontalchart from "./chart-horizontal";

export const AdminDashboardcopy = () => {
    const [user,setuser] = useState("");
    const [docList ,setDoc]= useState();

    const getApi = () => {
        axios
          .get("http://localhost:4000/file/getdata")
          .then((res) => {
            console.log(res.data.data);
            setDoc(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
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

  const logout = () =>{
    localStorage.clear();
    alert("Logout Succeessfully........");
    Navigate('/Login')
  }
  return (
    
    <div className>
    <div>
    <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />
        <link href="lib/twentytwenty/twentytwenty.css" rel="stylesheet" />

        <link href="css/bootstrap.min.css" rel="stylesheet" />

        <link href="css/style.css" rel="stylesheet" />
        <link type="image/x-icon" href="assets/img/favicon.png" rel="icon" />

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

        <link
          rel="stylesheet"
          href="assets/plugins/fontawesome/css/fontawesome.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/plugins/fontawesome/css/all.min.css"
        />

        <link rel="stylesheet" href="assets/css/aos.css" />

        <link rel="stylesheet" href="assets/css/style.css" />
      </Helmet>

      <div className="doctor-img">
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
          <Link to="index.html" className="navbar-brand p-0">
            <h1 className="m-0 text-primary">
              <Link to="*">
                {" "}
                <h1> Welcome to Admin Dashboard  '{user.name}' </h1>
              </Link>
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <li>
                <Link onClick={getApi}  className="nav-item nav-link active">
                  Doctor Profiles
                </Link>
              </li>
             

              <li>
                <Link to="/clinic" className="btn btn-primary py-2 px-4 ms-3">
                  Add  New Clinic
                </Link>
              </li>
            
           <li>
           <Link to="/chart" className="nav-item nav-link">
                  Admin chart 
                </Link>
           </li>
            <Link to="/drprofile" className="btn btn-primary py-2 px-4 ms-3">
              Add New DR Profile
            </Link>

            <Link onClick={logout}  to="/Login" className="btn btn-danger py-2 px-4 ms-3">
          LogOut
        </Link>
          </div>
          </div>
       
        </nav>
        <div class="row g-4">
        {docList?.map((u) => {
          return (
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img
                    class="img-fluid"
                    src={`${process.env.PUBLIC_URL}/uploads/${u?.name}`}
                    alt="user"
                  />
                </div>
                <div class="team-text bg-light text-center p-4">
                  <h5> DRName:{u.DrName}</h5>
                  <h5>Specalization:{u.Specalization}</h5>
                  <h5>Experiance:{u.Experiance}</h5>
                  <Link to={`/viewprofile/${u._id}`}>View Profile</Link>
                  <br />
                  <Link class="btn btn-info" to="/payment">
                    Booking
                  </Link>

                  <p class="text-primary"></p>
                  <div class="team-social text-center">
                    <a class="btn btn-square" href="*">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square" href="*">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square" href="*">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    <div>
    </div>
    </div>
    </div>
    </div>
     
       
      
     
   
  );
};
