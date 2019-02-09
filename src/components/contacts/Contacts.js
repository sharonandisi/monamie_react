import React, { Fragment } from "react";
import Contact from "../contacts/Contact";
import { Consumer } from "../../context";

export default function Contacts() {
  return (
    <Consumer>
      {value => {
        return (
          <Fragment>
            <h1 className="text-center mb-3">Contact List</h1>
            <div className="row">
              {value.contacts.map(contact => {
                const { id, name, email, phone } = contact;
                return (
                  <div key={id} className="col-md-4">
                    <Contact name={name} email={email} phone={phone} />
                  </div>
                );
              })}
            </div>
          </Fragment>
        );
      }}
    </Consumer>
  );
}
