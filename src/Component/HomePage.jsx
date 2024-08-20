import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import logo from "../logo.jpg";
import MusicSection from "./MusicSection";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const images = {
    اورج: [
      "/اورج/1.jpg",
      "/اورج/2.jpg",
      "/اورج/3.jpg",
      "/اورج/4.jpg",
      "/اورج/5.jpg",
      "/اورج/6.jpg",
      "/اورج/7.jpg",
      "/اورج/8.jpg",
      "/اورج/9.jpg",
    ],
    درامز: [
      "/درامز/1.jpg",
      "/درامز/2.jpg",
      "/درامز/3.jpg",
      "/درامز/4.jpg",
      "/درامز/5.jpg",
      "/درامز/6.jpg",
      "/درامز/7.jpg",
      "/درامز/8.jpg",
    ],
    جيتار: [
      "/جيتار/1.jpg",
      "/جيتار/2.jpg",
      "/جيتار/3.jpg",
      "/جيتار/4.jpg",
      "/جيتار/5.jpg",
    ],
    كمانجا: [
      "/كمانجا/1.jpg",
      "/كمانجا/2.jpg",
      "/كمانجا/3.jpg",
      "/كمانجا/4.jpg",
      "/كمانجا/5.jpg",
    ],
    تمثيل: [
      "/تمثيل/1.jpg",
      "/تمثيل/2.jpg",
      "/تمثيل/3.jpg",
      "/تمثيل/4.jpg",
      "/تمثيل/5.jpg",
      "/تمثيل/6.jpg",
    ],
    رسم: [
      "/رسم/1.jpg",
      "/رسم/2.jpg",
      "/رسم/3.jpg",
      "/رسم/4.jpg",
      "/رسم/5.jpg",
      "/رسم/6.jpg",
      "/رسم/7.jpg",
      "/رسم/8.jpg",
      "/رسم/9.jpg",
    ],
    صوت: ["/صوت/1.jpg", "/صوت/2.jpg", "/صوت/3.jpg"],
  };
  const [isHovered, setIsHovered] = useState(false);
  const [selectedButton, setSelectedButton] = useState("اورج");
  function handleSelect(button) {
    setSelectedButton(button);
  }
  const buttonStyle = {
    backgroundColor: isHovered ? "#cc0db1" : "black",
    color: isHovered ? "white" : "white",
    border: isHovered ? "1px solid white " : "none",
    transition: "background-color 0.3s, color 0.3s",
  };
  return (
    <>
      <Container className="margin-top">
        <div className="img-container-first">
          <img src={logo} alt="logo" />
        </div>
        <br />
        <div className="info">
          نبذة مختصرة عنا:
          <br />
          فريق بازل تيم <br />
          هو فريق لتعليم المواهب مجانا وهو غير تابع لطائفة معينة ينزل الفريق
          بجميع الألات الخاصه به الي الكنيسة لمدة 6 ايام متواصلين يتكفل الفريق
          بجميع مصاريفه من أكل وغيره. يحتاج الفريق فقط مكان للنوم ومطبخ يعلم
          الفريق جميع المواهب مثل :(اورج/جيتار/درامز/كمانجا/تمثيل/صوت/رسم)
          لمعرفة المزيد
          <br />
          <Link to="/info" style={{ color: "#cc0db1" }}>
            اضغط هنا
          </Link>
        </div>{" "}
        <br />
        <Row
          style={{
            justifyContent: "center",
            display: "flex",
            width: "60%",
            margin: "auto",
          }}
        >
          <Button
            variant="dark"
            style={buttonStyle}
            onMouseOver={() => setIsHovered(true)} // تعيين حالة التحويم
            onMouseOut={() => setIsHovered(false)} // تعيين حالة الخروج من التحويم
          >
            احجز الان مع الفريق مجانا
          </Button>
        </Row>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "20px",
            padding: "20px",
            flexWrap: "wrap",
            direction: "rtl",
          }}
        >
          {["اورج", "درامز", "جيتار", "كمانجا", "تمثيل", "رسم", "صوت"].map(
            (button) => (
              <Button
                key={button}
                variant="outline-dark"
                onClick={() => handleSelect(button)}
                onMouseOver={() => setHoveredButton(button)}
                onMouseOut={() => setHoveredButton(null)}
                style={{
                  backgroundColor:
                    selectedButton === button
                      ? "#cc0db1"
                      : hoveredButton === button
                      ? "#cc0db1" // Light gray color for hover effect
                      : "white",
                  borderColor:
                    selectedButton === button
                      ? "#cc0db1"
                      : hoveredButton === button
                      ? "#cc0db1"
                      : "black",
                  color:
                    selectedButton === button || hoveredButton === button
                      ? "white"
                      : "black",
                }}
              >
                {button}
              </Button>
            )
          )}
        </div>
        {selectedButton ? (
          <MusicSection
            topic={selectedButton}
            images={images[selectedButton]}
          />
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
