import React from 'react';
import '../inputForm/InputForm.scss';
import emailjs from 'emailjs-com';

const InputForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get('name');
    const model = data.get('model');
    const phone = data.get('phone');
    const description = data.get('description');
    const dataObject = {
      name: name,
      model: model,
      phone: phone,
      description: description
    };
    const serviceId = 'user_5PFA5dDLZA5cJ54Re4z7I';
    const templateId = 'template_DzA0Get6';


    emailjs.send('gmail', templateId, dataObject, serviceId).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (err) {
        console.log('FAILED...', err);
      }
    );

    const form = document.getElementById('form');

    setTimeout(() => {
      form.reset();
    }, 1000);
  };
  return (
    <form
      id="form"
      className="InputForm"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label className="name-input" htmlFor="name" >
        Vaše ime:
        <input placeholder="Ime" id="name" name="name" type="text" required={true}/>
      </label>
      <label className="number-input" htmlFor="phone">
        Kontakt telefon:
        <input
          placeholder="Broj telefona"
          id="phone"
          name="phone"
          type="text"
          required={true}
        />
      </label>
      <label className="model-input" htmlFor="model">
        Šta servisirate:
        <input
          placeholder="Tip i model uredjaja"
          id="model"
          name="model"
          type="text"
          required={true}
        />
      </label>
      <label className="description-input" htmlFor="description">
        Opis kvara:
        <textarea
          placeholder="Detaljan opis kvara"
          id="description"
          name="description"
          type="text"
          required={true}
        />
      </label>
      <div className="submit-wrapper">
        <button className="submit-button">Posalji upit</button>
      </div>
    </form>
  );
};

export default InputForm;
