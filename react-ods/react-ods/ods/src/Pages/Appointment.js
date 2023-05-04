import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export const Appointment = () => {
  const { register, handleSubmit } = useForm();
   
   const [clinic, setclinic] = useState();
   const [doctor, setdoctor] = useState();

  const submit = (data) => {
    axios
      .post("http://localhost:4000/appointment/appointment", data)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
        
          alert("appointment added Succeessfully........");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
   useEffect(() => {
     getclinic();
   }, []);

   useEffect(() => {
     getdoctor();
   }, []);

   const getclinic = () => {
     axios.get("http://localhost:4000/clinic/getclinic").then((res) => {
       console.log(res.data.data)
      setclinic(res.data.data);
     });
   };

   const getdoctor = () => {
     axios.get("http://localhost:4000/file/getdata").then((res) => {
       //console.log(res.data.data)
       setdoctor(res.data.data);
     });
   };

  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <form onSubmit={handleSubmit(submit)}>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <h2>Appointment Form</h2>
                <div className="card-body-center">
                  <div className="row form-row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-avatar">
                          <div className="team-item position-relative rounded overflow-hidden"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          PatientName <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("patientname")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Age <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("age")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Date <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("date")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Time <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("time")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Reason</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("reason")}
                        />
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Select Clinic</label>

                          <select {...register("clinic")}>
                            <option>Select Clinic</option>
                            {clinic?.map((clinic) => {
                              return (
                                <option value={clinic._id}>
                                  {clinic.clinicName}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Select Doctor</label>

                          <select {...register("doctorid")}>
                            <option>Select Doctor</option>
                            {doctor?.map((doctor) => {
                              return (
                                <option value={doctor._id}>
                                  {doctor.DrName}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div>
                        <input type="submit" value="submit"></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
