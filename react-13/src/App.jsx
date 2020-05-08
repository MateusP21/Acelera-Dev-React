import React, { useEffect, useContext } from "react";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import MainContext from "./context";
import "./App.scss";

export default function App() {
  const context = useContext(MainContext);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(context.api);
      const response = await data.json();
      context.setContacts(response);
      context.setContactsFiltered(response);
    };
    getData();
  }, [context.contacts.length == 0]);

  return (
    <>
      <Topbar />
      <Filters itemSelected={context.selected} />
      <Contacts searching={context.searching} contacts={context.contacts} />
    </>
  );
}
