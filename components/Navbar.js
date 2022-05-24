import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <Text>Techmeister</Text>
      <Link href="/">
        <CustomLink href="/"> Home </CustomLink>
      </Link>
      <Link href="#courses">
        <CustomLink href="#courses"> Courses </CustomLink>
      </Link>
      <Button>
        <Link href="/register">
          <AnotherLink href="/register"> Join Us </AnotherLink>
        </Link>
      </Button>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 30px; 
  z-index: -999;
  box-shadow: 0px 0px 8px 0px #0000ff;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #0000be;
`;

const CustomLink = styled.a`
  color: #ff0000;
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
  text-decoration: none;
`;

const Button = styled.button`
  background-color: #0000be;
  color: #fff;
  border: 1px solid #0000be;
  border-radius: 8px;
  padding: 10px;
`;

const AnotherLink = styled.a`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
`;
