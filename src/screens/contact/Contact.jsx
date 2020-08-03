import React from "react";
import "./Contact.scss";
import InputForm from "../../components/inputForm/InputForm";

const Contact = () => {
  return <div className="contact">
    <div className="contact-description">
      <p>
        Pozovite nas da zakažete dolazak majstora, ili nam pošaljite bilo kakvo pitanje vezano za uredjaj koji bi želeli da servisirate i javićemo Vam se u najkraćem mogućem roku.
      </p>
    </div>
      <InputForm />
    </div>
};

export default Contact;