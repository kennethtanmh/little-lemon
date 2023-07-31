import React from "react";
import "./styles.css";
import SpecialCard from "../SpecialCard/SpecialCard";
import menu from "../../ulti/LittleLemonMenu.pdf";

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-header">
        <a href={menu} rel="noopener noreferrer" target="_blank">
          <button className="menu">Online Menu</button>
        </a>
      </div>
      <SpecialCard />
    </section>
  );
};

export default Specials;
