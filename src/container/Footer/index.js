import React from "react";

import { Container } from "../../components/styles/StyleFooter";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Footer = (props) => {
  const openInstagram = () => {
    window.open("https://www.instagram.com/panificadorabelopaoofic/", "_blank");
  };

  const sendMessageWhatsApp = (e) => {
    e.preventDefault();

    const url = `https://wa.me/5588997428821?text=Oi`;

    window.open(url, "_blank");
  };

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <InstagramIcon
            style={{
              color: "#fff",
              marginRight: "10px",
              pointer: "cursor",
              fontSize: "35px",
            }}
            onClick={openInstagram}
          />
        </div>
        <div>
          <WhatsAppIcon
            style={{
              color: "#fff",
              marginLeft: "10px",
              pointer: "cursor",
              fontSize: "35px",
            }}
            onClick={sendMessageWhatsApp}
          />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
