import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Row>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/oDGuH8iVxwZ4okyM/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://wa.me/201158039656"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </Row>
        <br />
        <Row style={{ color: "white" }}>
          {" "}
          &copy; {new Date().getFullYear()} Puzzle Team Asyut
        </Row>
      </footer>
    </>
  );
}
