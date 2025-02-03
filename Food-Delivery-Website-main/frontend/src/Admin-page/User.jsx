import  { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { localhost } from "../localhost";

function User() {
  const [user, setuser] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const usergetdata = async () => {
      await axios
        .get(`${localhost}/api/admin/user`,{ headers: { Authorization: localStorage.getItem("token") }})
        .then((res) => {
          setuser(res.data);
        })
        .catch((err) => {
          console.log(err);
          if(err.response.status==401){
            navigate('/admin')
          }
        });
    };
    usergetdata();
  }, []);

  const deleteUser = async (id) => {
    await axios
      .get(`${localhost}/api/userdelete/${id}`)
      .then((res) => {
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((ele, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{ele.fullname}</td>
                <td>{ele.email}</td>
                <td style={{cursor:"pointer"}}>
                  <NavLink to="/admin/userEdit" state={ele}>Edit</NavLink>
                </td>
                <td
                  onClick={() => deleteUser(ele._id)}
                  style={{ cursor: "pointer" }}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default User;
