import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteUserHandler = (userId) => {
    setUsersList((prevUserList) => {
      const updateUserList = prevUserList.filter((user) => user.id !== userId);
      return updateUserList;
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDeleteUser={deleteUserHandler} />
    </React.Fragment>
  );
}

export default App;
