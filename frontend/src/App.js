import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import ContactList from "./components/ContactList";
import AddUser from "./components/AddUser";
import AddContact from "./components/AddContact";
import EditUser from "./components/EditUser";
import EditContact from "./components/EditContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="user/dashboard" element={<UserList />} />
        <Route path="user/dashboard/edit/:id" element={<EditUser />} />
        <Route path="contacts/dashboard" element={<ContactList />} />
        <Route path="contacts/addcontact" element={<AddContact />} />
        <Route path="contacts/dashboard/edit/:id" element={<EditContact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
