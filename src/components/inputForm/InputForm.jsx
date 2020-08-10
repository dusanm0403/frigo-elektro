import React, { useState } from 'react';
import '../inputForm/InputForm.scss';
import emailjs from 'emailjs-com';
import success from '../../assets/success.svg'
import error from '../../assets/error.svg'
import cx from 'classnames'


const InputForm = () => {
  const [successVisible, setSuccessVisible] = useState(false)
  const [errorVisible, setErrorVisible] = useState(false)

  const successClasses = cx("success_hidden",
    successVisible && "success_visible"
  )
  const errorClasses = cx("error_hidden",
    errorVisible && "error_visible"
  )
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
        setSuccessVisible(true)
        setTimeout(()=>{setSuccessVisible(false)}, 3000)
      },
      function (err) {
        console.log('FAILED...', err);
        setErrorVisible(true)
        setTimeout(()=>{setErrorVisible(false)}, 3000)
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
        <button className="submit-button">
          Pošalji upit
        </button>
        <img className={successClasses} src={success} alt="success" />
        <img className={errorClasses} src={error} alt="error" />
      </div>
    </form>
  );
};

export default InputForm;
