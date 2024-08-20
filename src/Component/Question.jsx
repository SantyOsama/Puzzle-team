import { Accordion } from "react-bootstrap";

export default function Question({ ques = "غير معرف", ans = "غير معرف" }) {
  return (
    <>
      <Accordion.Header>{ques}</Accordion.Header>
      <Accordion.Body>{ans}</Accordion.Body>
    </>
  );
}
