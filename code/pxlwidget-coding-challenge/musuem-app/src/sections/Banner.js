import React, { useState, useEffect } from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="content banner__content">
        <div className="time-open text-md">
          Open daily 9h to 17h - Museumstraat 1, Amsterdam
        </div>
        <div className="contact text-md">
          E-mail: info@rijksmuseum.nl - Telefoonnummer: +31 (0) 20 6747 000
        </div>
      </div>
    </div>
  );
}

export default Banner;
