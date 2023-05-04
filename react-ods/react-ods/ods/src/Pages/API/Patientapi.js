import axios from "axios";
import React, { useState } from "react";

export const Patientapi = () => {
  const [patient, setUsers] = useState([]);

  const getApi = () => {
    axios
      .get("http://localhost:4000/addpatient/getpatient")
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = (id) => {
    axios
      .delete("http://localhost:4000/addpatient/addpatient/" + id)
      .then((res) => {
        getApi();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={getApi}>Get Api</button>

      <div class="row g-4">
        {patient?.map((d) => {
          return (
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                  <img
                    class="img-fluid"
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="user"
                  />
                </div>

                <div class="team-text bg-light text-center p-2 ">
                  <h5>PatientName:{d.patientName}</h5>
                  <h5>Disease:{d.Disease}</h5>

                  <p class="text-primary">
                    <h5> Age: {d.Age}</h5>
                  </p>
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
    </div>
  );
};

// <button onClick={getApi}>Appointment List</button>

// <table class="table table-danger">
//   <thead>
//     <tr>
//       <th>Profile Pic</th>
//       <th>ptName</th>
//       <th>PhNum</th>
//       <th> Disease</th>
//       <th> Pincode</th>
//       <th> Age</th>
//       <th> Gender</th>
//     </tr>
//   </thead>

//   <tbody>
//     {patient?.map((u) => {
//       return (
//         <tr key={u._id}>
//           <td>
//             <a
//               class="avatar avatar-sm me-2"
//               href="/react/template/patient/doctor-profile"
//             >
//               <img
//                 class="avatar-img rounded-circle"
//                 src="https://doccure.dreamguystech.com/react/template/210634dca875b5880520c51b4577e6aa.jpg"
//                 alt="User"
//                 style={{ width: "50px", height: "50px" }}
//               />
//             </a>
//           </td>
//           <td>{u.patientName}</td>
//           <td>{u.PhoneNumber}</td>
//           <td>{u.Disease}</td>
//           <td>{u.Pincode}</td>
//           <td>{u.Age}</td>
//           <td>{u.Gender}</td>
//           <td>
//             <button onClick={() => deleteUser(u._id)}>Cancle slot</button>
//           </td>
//         </tr>
//       );
//     })}
//   </tbody>
// </table>
