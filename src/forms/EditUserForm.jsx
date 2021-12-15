import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }


  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <div className="form-group">
        <label >Name</label>
        <input className="form-control" type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input className="form-control" type="number  "
          name="username"
          value={user.username}
          onChange={handleInputChange} />
      </div>
      <br></br>
      <button className="btn btn-warning">Update user</button>
      <button
        className="btn btn-warning"
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm