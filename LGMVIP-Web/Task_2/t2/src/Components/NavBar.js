import React from "react";

export default function NavBar() {
  return (
    <nav className="NavbarItems">
      <h1 className="title">React</h1>
      <ul className="UL">
        {['Home','Contact','About Us','Signup'].map((item, index) => {
          return (
            <li className="NavLIST" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}