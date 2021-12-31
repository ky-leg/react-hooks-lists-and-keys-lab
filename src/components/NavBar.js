import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const createLinks = links.map((link) => {
    const k = `#${link}`
    return <a key={link} href={k}>{link}</a>
  })
  return <nav>{createLinks}</nav>;
}

export default NavBar;
