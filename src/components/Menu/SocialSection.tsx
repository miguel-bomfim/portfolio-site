import React from "react";
import Link from "@mui/material/Link";

import Instagram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";
import LinkedIn from "@mui/icons-material/LinkedIn";

const SocialSection = () => {
  return (
    <div className="socialSections">
      <Link
        underline="hover"
        color="inherit"
        target="_blank"
        href="https://www.instagram.com/sarahheloisa/"
      >
        <Instagram color="primary" fontSize="large" />
      </Link>
      <Link
        underline="hover"
        color="inherit"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5548996948019"
      >
        <WhatsApp color="primary" fontSize="large" />
      </Link>
      <Link
        underline="hover"
        color="inherit"
        target="_blank"
        href="https://www.linkedin.com/in/sarah-freitas-0849321b9/"
      >
        <LinkedIn color="primary" fontSize="large" />
      </Link>
    </div>
  );
};

export default SocialSection;
