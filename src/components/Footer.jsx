import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterContainer">
        <h2>HomeLands</h2>
        <div>
          Øster Uttrupvej 5 <br /> 9000 Aalborg
        </div>
        <div>
          Email: <a href="mailto:info@homelands.dk">info@homelands.dk</a> <br />{" "}
          Telefon: <a href="tel:+4511223344">+45 1122 3344</a>
        </div>
        <div className="FooterIcons">
          <IoLogoFacebook />
          <IoLogoTwitter />
        </div>
      </div>
    </footer>
  );
};
