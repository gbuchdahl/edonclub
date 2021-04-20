import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import React, { useCallback } from "react";
import { Image, Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";


const Header = ({ isHomePage }) => {
  const data = useStaticQuery(graphql`
    query {
      edonText: file(relativePath: { eq: "edontext.png" }) {
        publicURL
      }
      hamburger: file(relativePath: { eq: "Hamburger.svg" }) {
        publicURL
      }
    }
  `);

  const navigateHomeAndScroll = useCallback(async (tag) => {
    await navigate('/');
    scrollTo(tag);
  }, []);

  return (
    <Navbar expand="md" className="header__Navbar d-flex align-content-center">
      <Navbar.Brand>
        <Nav.Link onClick={() => navigateHomeAndScroll('#top')}>
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
          {isHomePage ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="header__navlink"
                onClick={() => navigateHomeAndScroll('#about')}
                aria-label="button"
              >
                <Nav.Link className="header__navlink">About</Nav.Link>
              </div>
              <div
                tabIndex={1}
                role="button"
                className="header__navlink"
                onClick={() => navigateHomeAndScroll('#board')}
                aria-label="button"
              >
                <Nav.Link className="header__navlink">Board</Nav.Link>
              </div>
              <div
                tabIndex={2}
                role="button"
                className="header__navlink"
                onClick={() => navigateHomeAndScroll('#contact')}
                aria-label="button"
              >
                <Nav.Link className="header__navlink">Contact</Nav.Link>
              </div>
              {/* <div
                tabIndex={3}
                role="button"
                className="header__navlink"
                aria-label="button"
              > */}
              <Nav.Link to='/alumni' className="header__navlink"><Link to='/alumni'>Alums</Link></Nav.Link>
              {/* </div> */}
            </>
          ) : (
            <div
              tabIndex={3}
              role="button"
              className="header__navlink"
              onClick={() => navigateHomeAndScroll('#top')}
              aria-label="button"
            >
              <Nav.Link className="header__navlink">Back</Nav.Link>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
Header.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
};

Header.defaultProps = {};

export default Header;
