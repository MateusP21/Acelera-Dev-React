import React, { createContext, useState } from "react";

const MainContext = createContext();

export function Provider({ children }) {
  const api = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";
  const [contacts, setContacts] = useState([]);
  const [contactsFiltered, setContactsFiltered] = useState([]);
  const [selected, setSelected] = useState("");
  const [searching, setSearching] = useState("");

  const filterContacts = item => {
    setSelected(item);
    const filtered = "";
    switch (item) {
      case "name":
        contacts.sort((a, b) =>
          a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        );
        break;
      case "country":
        contacts.sort((a, b) =>
          a.country < b.country ? -1 : a.country > b.country ? 1 : 0
        );
        break;
      case "company":
        contacts.sort((a, b) =>
          a.company < b.company ? -1 : a.company > b.company ? 1 : 0
        );
        break;
      case "department":
        contacts.sort((a, b) =>
          a.department < b.department ? -1 : a.department > b.department ? 1 : 0
        );
        break;
      case "admissionDate":
        contacts.sort((a, b) =>
          a.admissionDate < b.admissionDate
            ? -1
            : a.admissionDate > b.admissionDate
            ? 1
            : 0
        );
        break;
      default:
        break;
    }

    setContactsFiltered(filtered);
  };

  const filterSearch = value => {
    setSearching(value);
    setContactsFiltered(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <MainContext.Provider
      value={{
        api,
        contacts,
        selected,
        searching,
        contactsFiltered,
        setContacts,
        setContactsFiltered,
        setSelected,
        filterSearch,
        filterContacts
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
