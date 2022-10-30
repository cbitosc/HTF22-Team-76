import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [keyword,setKeyword]=useState("");
  const[query,setQuery]=useState("");
 
  useEffect(() => {
    getContacts();
  }, [keyword]);

  const getContacts = async () => {
    const response = await axios.get(`http://localhost:5000/contacts?search_query=${keyword}`);
    setContacts(response.data);
  };
  const deletecontact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      getContacts();
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
      <Link to ={'/contacts/addcontact'}
       className="button is-small is-info mr-2"
         >Add</Link><div></div>
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
          <div class="card block has-background-grey-lighter  border-radius: 25">
            <div class="card-content">
              <div class="content">
                <table>
                  <tr>
                    <td class="has-text-weight-bold">Contact Name</td>
                    <td>{contact.name}</td>
                    <td class="has-text-weight-bold">Contact Email</td>
                    <td>{contact.email}</td>
                  </tr>
                  <tr>
                  <td class="has-text-weight-bold">Phonenumber</td>
                    <td>{contact.phonenumber}</td>
                    <td class="has-text-weight-bold">Address</td>
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
                    className="button is-small is-primary"
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
