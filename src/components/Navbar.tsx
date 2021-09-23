import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { IMainNav } from "./types/index";
import { NavbarAtoms } from "./Atoms/NavBarAtoms";

const Navbar = ({
  postCount,
  articleCount,
  evCount,
  edCount,
  jobCount,
}: IMainNav) => {
  return (
    <div className="border-bottom" style={{ zIndex: 10 }}>
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-around py-2">
              <div style={{ cursor: "pointer" }}>AllPosts{postCount}</div>
              <div style={{ cursor: "pointer", color: "#8A8A8A" }}>
                Article{articleCount}
              </div>
              <div style={{ cursor: "pointer", color: "#8A8A8A" }}>
                Event{evCount}
              </div>
              <div style={{ cursor: "pointer", color: "#8A8A8A" }}>
                Education{edCount}
              </div>
              <div style={{ cursor: "pointer", color: "#8A8A8A" }}>
                Job{jobCount}
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-end">
              <select
                style={{
                  backgroundColor: "#EDEEF0",
                  border: "none",
                  padding: ".3rem",
                  borderRadius: "5px",
                  marginTop: ".15rem",
                  marginRight: "1rem",
                }}
              >
                <option value="volvo">Write a post</option>
              </select>
              <Button>
                <div className="d-flex">
                  <NavbarAtoms />
                  &nbsp;Join Group
                </div>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
