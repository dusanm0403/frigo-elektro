import React from "react";
import "./Home.scss";
import homePic from "../../assets/logos1.png"

const Home = () => {
  return <div className="home">
    <div className="screen-description">
      <p>
        Servis bele tehnike “Frigo elektro Andrej” bavi se servisiranjem i
        popravkom veš mašina, frižidera, sušara, električnih šporeta,
        bojlera.
        Servis veš mašina i frižidera vrši popravku svih vodećih
        brendova na našem trzištu.
        Dolazimo na Vašu adresu u bilo kom delu Beograda, a ukoliko
        se odlučite za naše usluge dolazak je besplatan.
        Dolazak i konstatacija kvara se ne naplaćuju ukoliko vi
        prihvatite popravku aparata.
      </p>
    </div>
    <div className="screen-picture">
      <img src={homePic} alt="service"/>
    </div>
  </div>;
};

export default Home;
