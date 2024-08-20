import { Accordion, Container } from "react-bootstrap";
import Question from "./Question";

export default function Info() {
  return (
    <>
      <Container
        className="margin-top fo"
        style={{
          direction: "rtl",
          height: "65vh",
          maxHeight: "200%",
        }}
      >
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Question ques={"مين هو فريق بازل؟"} ans={"فريق من اسيوط"} />
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Question ques={"مين هو فريق بازل؟"} ans={"فريق من اسيوط"} />
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Question ques={"مين هو فريق بازل؟"} ans={"فريق من اسيوط"} />
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Question ques={"مين هو فريق بازل؟"} ans={"فريق من اسيوط"} />
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Question ques={"مين هو فريق بازل؟"} ans={"فريق من اسيوط"} />
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Question ques={"مين هو فريق بازل؟"} ans={"فريق من اسيوط"} />
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Question ques={"مين هو فريق بازل؟"} ans={"فريق من اسيوط"} />
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Question ques={"مين هو فريق بازل؟"} ans={"فريق من اسيوط"} />
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
