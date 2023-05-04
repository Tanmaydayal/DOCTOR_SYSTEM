import axios from "axios";
import React, { useState } from "react";

export const Doctorapi = () => {
  const style1 = {
    width: "400px",
  };
  const style2 = {
    width: "100%",
  };

  const [users, setUsers] = useState([]);

  const getApi = () => {
    axios
      .get("http://localhost:4000/adddrdata/adddrdata")
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
      .delete("http://localhost:4000/adddrdata/adddrdata/" + id)
      .then((res) => {
        getApi();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="table-responsive">
      <button onClick={getApi}>Get Api</button>
      <table className="table table-hover table-center mb-0">
        <thead>
          <tr>
            <th>DrProfileId</th>
            <th>DrName</th>

            <th>Qualification</th>
            <th> Specalization</th>
            <th> Experiance</th>
            <th> Profile_pic</th>
            <th> About</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => {
            return (
              <tr key={u._id}>
                <td>{u._id}</td>
                <td>{u.DrName}</td>
                <td>{u.Qualification}</td>
                <td>{u.Specalization}</td>
                <td>{u.Experiance}</td>
                <td>{u.Profile_pic}</td>
                <td>{u.About}</td>
                <td>
                  <button onClick={() => deleteUser(u._id)}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

{
  /* <div>
      <button onClick={getApi}>Get Api</button>

      <table class="table table-success">
        <thead>
          <tr>
            <th>DrProfileId</th>
            <th>DrName</th>

            <th>Qualification</th>
            <th> Specalization</th>
            <th> Experiance</th>
            <th> Profile_pic</th>
            <th> About</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((u) => {
            return (
              <tr key={u._id}>
                <td>{u._id}</td>
                <td>{u.DrName}</td>
                <td>{u.Qualification}</td>
                <td>{u.Specalization}</td>
                <td>{u.Experiance}</td>
                <td>{u.Profile_pic}</td>
                <td>{u.About}</td>
                <td>
                  <button onClick={() => deleteUser(u._id)}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div> */
}
