import { Container } from "react-bootstrap";
import guitar from "../guitar.jpg";
export default function Vision() {
  return (
    <>
      <Container className="margin-top fo">
        <div className="img-container-first">
          <img src={guitar} alt="guitar" />
        </div>
      </Container>
    </>
  );
}
