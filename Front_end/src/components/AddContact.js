import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const navigate = useNavigate();

  const saveContact = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("please enter email");
      return false;
    }
    if (!phonenumber) {
      alert("please enter phonenumber");
      return false;
    }
    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
      alert("please enter valid email address");
      return false;
    }

    try {
      await axios.post("http://localhost:5000/contacts", {
        name,
        email,
        address,
        phonenumber,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="has-background-info is-full">
      <div className="columns is-centered is-full">
        <div className="column is-half">
          <form onSubmit={saveContact}>
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
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    
  );
};

export default AddContact;
