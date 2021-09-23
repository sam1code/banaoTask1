import React from "react";
import { Col, Container, Modal, Row, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mypic from "../Assets/MyPic.jpg";
import {
  BrandName,
  CoustomSearch,
  CreateSvg,
  Logedin,
  NotLogedin,
} from "./Atoms/HeaderAtoms";

const Header = () => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div
          style={{
            marginTop: "-3rem",
            backgroundColor: "#3f3f3f",
            width: "3rem",
            marginLeft: "102%",
            borderRadius: "50px",
          }}
        >
          <Modal.Header closeButton />
        </div>
        <div>
          <Alert variant="success">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </Alert>
        </div>

        <Modal.Body>
          <Container>
            <Row>
              <Col>Helklo</Col>
              <Col>
                <small className="d-flex justify-content-end">
                  Already have account?
                  <span style={{ color: "blue", cursor: "pointer" }}>
                    Signin
                  </span>
                </small>
                <CreateSvg />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>{/* <Button onClick={}>Close</Button> */}</Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="my-2 ">
      <Container>
        <Row>
          <Col>
            <BrandName />
          </Col>
          <Col xs={6}>
            <CoustomSearch />
          </Col>
          <Col>
            <div onClick={() => setModalShow(true)}>
              <NotLogedin />
            </div>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
