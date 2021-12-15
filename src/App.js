import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
const App = () => {
  const usersData = [
    { id: 1, name: "Avraham", username: "Avi" },
    { id: 2, name: "Isaac", username: "Aizic" },
    { id: 3, name: "Jacob", username: "Jake" },
  ];

  const [users, setUsers] = useState(usersData);

  //for editing____________________
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  //</>______________________________

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    console.log("newIs", user);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  //update__________________________________________

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    console.log("updated");
  };

  //</>_______________________________________________

  return (
    <div className="container">
      <div className="row top">
      <h1>
            CRUD App with <span className="title">Hooks</span>{" "}
          </h1>
      </div>

      <div className="row">
        <div className="col-3">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>

        <div className="col-9">
          <h2>View users</h2>
          <UserTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
          ></UserTable>
        </div>
      </div>
    </div>
  );
};

export default App;
