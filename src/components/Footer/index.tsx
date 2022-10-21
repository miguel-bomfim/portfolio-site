import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <small style={{ fontSize: "15px", textAlign: "center" }}>
        &copy; {currentYear} Sarah Heloisa. Todos os direitos reservados.
      </small>{" "}
    </footer>
  );
};

export default Footer;
