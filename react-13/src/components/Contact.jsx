import React from "react";
import formatDate from "../formatDate";

export default function Contact({
  data: { avatar, name, phone, country, admissionDate, company, department }
}) {
  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar">
        <img src={avatar} alt={name} />
      </span>
      <span className="contact__data">
        <p>{name}</p>
      </span>
      <span className="contact__data">
        <p>{phone}</p>
      </span>
      <span className="contact__data">
        <p>{country}</p>
      </span>
      <span className="contact__data">
        <p> {formatDate(admissionDate)}</p>
      </span>
      <span className="contact__data">
        <p>{company}</p>
      </span>
      <span className="contact__data">
        <p>{department}</p>
      </span>
    </article>
  );
}
