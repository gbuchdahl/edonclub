import { graphql, useStaticQuery } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";
import { Image, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      edonText: file(relativePath: { eq: "edontext.svg" }) {
        publicURL
      }
      hamburger: file(relativePath: { eq: "Hamburger.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <Navbar expand="md" className="header__Navbar d-flex align-content-center">
      <Navbar.Brand>
        <Nav.Link onClick={() => scrollTo("#top")}>
          <Image
            style={{
              width: 174,
              marginTop: -32,
              marginBottom: -32,
              marginLeft: -16,
            }}
            src={data.edonText.publicURL}
          />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="header__Toggle"
      >
        <div className="my-auto flex-grow-1">
          <Image className="my-auto" src={data.hamburger.publicURL} />
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div
            tabIndex={0}
            role="button"
            className="header__navlink"
            onClick={() => scrollTo("#about")}
            aria-label="button"
          >
            <Nav.Link className="header__navlink">About</Nav.Link>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="header__navlink"
            onClick={() => scrollTo("#board")}
            aria-label="button"
          >
            <Nav.Link className="header__navlink">Board</Nav.Link>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="header__navlink"
            onClick={() => scrollTo("#contact")}
            aria-label="button"
          >
            <Nav.Link className="header__navlink">Contact</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
Header.propTypes = {};

Header.defaultProps = {};

export default Header;
