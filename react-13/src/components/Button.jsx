import React, { useContext } from "react";
import MainContext from "../context";

export default function Button({ selected, name, children }) {
  const isSelected = "is-selected";
  const context = useContext(MainContext);
  return (
    <button
      type="button"
      onClick={() => context.filterContacts(name)}
      className={`filters__item ${selected === name ? isSelected : ""} `}
    >
      {children}
    </button>
  );
}
