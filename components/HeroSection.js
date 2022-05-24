import Image from "next/image";
import styled from "styled-components";
import coder from "../assets/coder.svg";

function HeroSection() {

  const handleClick = (e) => {
    e.preventDefault();
    console.log("submitted")
  }

  return (
    <>
      <HeroContainer>
        <Paragraph>Welcome to Techmeister Coding Academy</Paragraph>
        <StyledImage src={coder} width={600} height={300} alt="programmer" />
      </HeroContainer>
      <Click>
        <Button as="a" href="/register" onClick={handleClick}>Register Today</Button>
      </Click>
    </>
  );
}

export default HeroSection; 

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: space-between; 
  margin: 100px;
`;

const Paragraph = styled.p`
  width: 600px;
  font-weight: 700;
  font-size: 40px;
  padding: 60px;
  color: #ff0000;
  line-height: 65px;
  letter-spacing: 0.05em;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Click = styled.div`
    margin-left: 150px;
`;

const Button = styled.button`
    background-color: #ff0000;
    color: #fff;
    border: 1px solid #ff0000;
    text-decoration: none;
    border-radius: 8px;
    padding: 12px;
    pointer: cursor;
    width: 400px;
`