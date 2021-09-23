import React from "react";
import {
  Col,
  Container,
  Modal,
  Row,
  Button,
  Alert,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import register from "../Assets/register.png";
import {
  BrandName,
  CoustomSearch,
  Logedin,
  NotLogedin,
} from "./Atoms/HeaderAtoms";
import SigninForm from "./Atoms/SigninForm";
import LoginForm from "./Atoms/LoginForm";

const Header = () => {
  function MyVerticallyCenteredModal(props) {
    const [signin, setSignin] = React.useState(true);
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
              <Col>{signin ? <SigninForm /> : <LoginForm/></Col>
              <Col>
                {signin ? (
                  <>
                    <small className="d-flex justify-content-end">
                      Already have account?
                      <span
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => setSignin(false)}
                      >
                        SignIn
                      </span>
                    </small>
                    <img src={register} alt="" />
                    <br />
                    <small>
                      By signing up, you agree to our
                      <a href="#">Terms & conditions</a> ,{" "}
                      <a href="#">Privacy policy</a>
                    </small>
                  </>
                ) : (
                  <>
                    <small className="d-flex justify-content-end">
                      Don’t have an account yet?
                      <span
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => setSignin(true)}
                      >
                        Create new for free!
                      </span>
                    </small>
                    <img src={register} alt="" />
                    <br />
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
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
