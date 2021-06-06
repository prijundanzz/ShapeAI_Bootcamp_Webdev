import React from "react";

function Footer() {
  var yr = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p> Copyright @ {yr} </p>
      </footer>
    </div>
  );
}

export default Footer;
