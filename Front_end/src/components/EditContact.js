import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getContactsById();
  }, []);

  const updatecontact = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/contacts/${id}`, {
        name,
        email,
        phonenumber,
        address
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getContactsById = async () => {
    const response = await axios.get(`http://localhost:5000/contacts/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPhonenumber(response.data.phonenumber);
    setAddress(response.data.address);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatecontact}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phonenumber</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                placeholder="Phonenumber"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
