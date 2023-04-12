import { FooterWrapper, FooterItems } from "./Footer.styles";
import logo from "./footer_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItems className="third">
        <a className="footer_items_link" href="#">Договір публічної оферти</a>
        <p>© Correctarium</p>
        <p>2015–2023</p>
      </FooterItems>
      <FooterItems className="first">
        <img src={logo} alt="logo" />
      </FooterItems>
      <FooterItems className="second">
        <p>Надіслати текст на переклад:</p>
        <a className="footer_items_link footer_items_email" href="manager@correctarium.com">manager@correctarium.com</a>
      </FooterItems>
    </FooterWrapper>
  );
};

export default Footer;
