import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

const Home = () => {
  const [userList, setUserList] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const data = await axios.get("https://gorest.co.in/public/v1/users");
      if (data.status === 200) {
        setUserList(data.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item: User, index: number) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
