import React from "react";
import "../services/Services.scss";
import machineService from '../../assets/machineService.jpg'
import fridge from '../../assets/refrigerator-repairs.jpg'

const Services = () => {
  return <div className="services">
    <div className="image-container-left">
      <img src={machineService} alt="machineService" />
    </div>
    <div className="services-description">
      <p>Servis bele tehnike "Frigo-Elektro Andrej" servisira i popravlja:
      <ul>
          <li>Veš mašine</li>
          <li>Frižidere</li>
          <li>Šporete</li>
          <li>Sušare</li>
          <li>Bojlere</li>
        </ul>
        Specijalizovani smo za servisiranje uredjaja svih vodećih proizvođača.
        Brzom i profesionalnom uslugom nastojimo da svaki kvar otklonimo u najkraćem mogućem roku.
        Garantujemo za svaki rezervni deo koji Vam ugradimo, kao i za sam rad.

      </p>
    </div>
    <div className="image-container-right">
      <img src={fridge} alt="fridge" />
    </div>
  </div>;
};

export default Services;