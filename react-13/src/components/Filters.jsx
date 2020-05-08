import React from "react";
import Button from "./Button";
import MainContext from "../context";

export default function Filters({ itemSelected }) {
  const context = React.useContext(MainContext);

  return (
    <div className="container" data-testid="filters">
      <section className="filters">
        <div className="filters__search">
          <input
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
            onChange={e => context.filterSearch(e.target.value)}
          />

          <button type="button" className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>

        <Button
          className="filters__item"
          name="name"
          onClick={e => context.filterContacts(e.target.name)}
          selected={itemSelected}
        >
          Nome <i className="fas fa-sort-down" />
        </Button>

        <Button
          className="filters__item"
          name="country"
          onClick={e => context.filterContacts(e.target.name)}
          selected={itemSelected}
        >
          País <i className="fas fa-sort-down" />
        </Button>

        <Button
          className="filters__item"
          name="company"
          onClick={e => context.filterContacts(e.target.name)}
          selected={itemSelected}
        >
          Empresa <i className="fas fa-sort-down" />
        </Button>

        <Button
          className="filters__item"
          name="department"
          onClick={e => context.filterContacts(e.target.name)}
          selected={itemSelected}
        >
          Departamento <i className="fas fa-sort-down" />
        </Button>

        <Button
          className="filters__item"
          name="admissionDate"
          onClick={e => context.filterContacts(e.target.name)}
          selected={itemSelected}
        >
          Data de admissão <i className="fas fa-sort-down" />
        </Button>
      </section>
    </div>
  );
}
