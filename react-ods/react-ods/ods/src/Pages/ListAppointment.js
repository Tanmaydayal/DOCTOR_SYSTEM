import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const ListAppointment = () => {
  var id = useParams().id;
  const [appo, setUsers] = useState([]);


  const getApi = () => {
    axios
      .get("http://localhost:4000/appointment/clinicwithapp/"+id)
      .then((res) => {
       
          console.log(res.data.users);
          setUsers(res.data.users);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const deleteUser = (id) => {
    axios
      .delete("http://localhost:4000/appointment/delete/" + id)
      .then((res) => {
        getApi();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
      <button onClick={getApi} class="btn btn-info">
      
        Appointments List
      </button>
     
      <table class="table table-hover" >
     
        <thead class="table table-primary">
          
          <tr>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            <th>Clinic</th>
            
          </tr>
          
        </thead>

        <tbody>
          {appo && 
           appo?.map((d) => {
            return (
              <tr>
                <td>{d?.patientname}</td>
                <td>{d?.age}</td>
                <td>{d?.date}</td>
                <td>{d?.time}</td>
                <td>{d?.reason}</td>
                <td>{d?.clinic?.clinicName}</td>
                <td>
                    <button
                      class="btn btn-danger"
                      onClick={() => deleteUser(d?._id)}
                    >
                      Cancle slot
                    </button>
                  </td>
                    <td>
                    <button
                      class="btn btn-success"
                      onClick={() => deleteUser(d?._id)}
                    >
                      Checked
                    </button>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
