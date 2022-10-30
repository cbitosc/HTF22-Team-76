import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  const [keyword,setKeyword]=useState("");
  const[query,setQuery]=useState("");
 
  useEffect(() => {
    getUsers();
  }, [keyword]);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:5000/users?search_query=${keyword}`);
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const searchData = (e) => {
    e.preventDefault();
    setKeyword(query);
  };
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
      <form onSubmit={searchData}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              type="text"
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find something here..."
            />
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>

            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
      </div>
    </div>
  );
};

export default UserList;
