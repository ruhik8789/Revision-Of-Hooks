import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("effect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    return () => {
      console.log("cleanup");
    };
  }, []);
  return (
    <>
      {users.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </>
  );
};

export default UseEffect;
