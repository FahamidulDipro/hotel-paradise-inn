import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hotel Paradise Inn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none mx-3 text-secondary">
              Home
            </Link>
            <Link
              to="/rooms"
              className="text-decoration-none mx-3 text-secondary"
            >
              Rooms
            </Link>
            <Link
              to="/checkout"
              className="text-decoration-none mx-3 text-secondary"
            >
              Checkout
            </Link>
            {!user ? (
              <span>
                {" "}
                <Link
                  to="/register"
                  className="text-decoration-none mx-3 text-secondary"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="text-decoration-none mx-3 text-secondary"
                >
                  Login
                </Link>
              </span>
            ) : (
              <span>
                {user?.displayName}{" "}
                <button className="btn btn-secondary mx-3" onClick={logOut}>
                  Logout
                </button>
              </span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
