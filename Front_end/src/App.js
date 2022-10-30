import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="contacts/dashboard" element={<ContactList />} />
        <Route path="contacts/addcontact" element={<AddContact />} />
        <Route path="contacts/dashboard/edit/:id" element={<EditContact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
