import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const [keyword,setKeyword]=useState("");
  const[query,setQuery]=useState("");
 
  useEffect(() => {
    getcontacts();
  }, [keyword]);

  const getcontacts = async () => {
    const response = await axios.get(`http://localhost:5000/contacts?search_query=${keyword}`);
    setContacts(response.data);
  };
  const deletecontact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      getcontacts();
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

        {contacts.map((contact, index) => (
          <div className="card block has-background-grey-lighter  border-radius: 25">
            <div className="card-content">
              <div className="content">
                <table>
                  <tr>
                    <td className="has-text-weight-bold">Contact Name</td>
                    <td>{contact.name}</td>
                    <td className="has-text-weight-bold">Contact Email</td>
                    <td>{contact.email}</td>
                  </tr>
                  <tr>
                  <td className="has-text-weight-bold">Phonenumber</td>
                    <td>{contact.phonenumber}</td>
                    <td className="has-text-weight-bold">Address</td>
                    <td>{contact.address}</td>
                  </tr>
                </table>
              </div>
              <Link
                    to={`/contacts/dashboard/edit/${contact.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deletecontact(contact.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
            </div>
          </div>
        ))}

        <br></br>
      </div>
    </div>
  );
};

export default ContactList;
