import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mypic from "../Assets/MyPic.jpg";
import {
  BrandName,
  CoustomSearch,
  Logedin,
  NotLogedin,
} from "./Atoms/NavbarAtoms";

const Navbar = () => {
  const [logedIn, setlogedIn] = React.useState(false);
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
            {logedIn ? (
              <Logedin name="Siddharth Goyal" pic={mypic} />
            ) : (
              <div
                onClick={() => {
                  setlogedIn(true);
                }}
              >
                <NotLogedin />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
