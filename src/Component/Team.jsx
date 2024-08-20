import { Container, Row } from "react-bootstrap";
import logo from "../logo.svg";
import santyy from "../santyy.jpg";
import Img from "./Img";
export default function Team() {
  return (
    <>
      <Container className="margin-top">
        <Row>
          <p style={{ direction: "rtl" }}>مؤسسين الفريق:</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "90vw",
              height: "20vh",
              direction: "rtl",
              justifyContent: "space-evenly",
            }}
          >
            <Img src={santyy} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
          </div>
        </Row>
        <Row>
          <p style={{ direction: "rtl" }}>اعضاء الفريق:</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
            <Img src={logo} name={"Santy"} />
          </div>
        </Row>
      </Container>
    </>
  );
}
