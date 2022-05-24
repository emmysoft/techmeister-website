import styled from "styled-components";
import Image from "next/image";
import webdev from "../assets/webdev.svg";
import mobile from "../assets/mobile.svg";
import programmer from "../assets/programmer.svg";

function Courses() {
  return (
    <Container>
      <Box>
        <StyledImage src={webdev} width={200} height={200} alt="new image" />
        <Paragraph> Web Development Course </Paragraph>
        <Button1> Pick Course </Button1>
      </Box>
      <Box>
        <StyledImage src={mobile} width={200} height={200} alt="new image" />
        <Paragraph> Mobile Development Course </Paragraph>
        <Button2> Pick Course </Button2>
      </Box>
      <Box>
        <StyledImage
          src={programmer}
          width={200}
          height={200}
          alt="new image"
        />
        <Paragraph> Programming Development Course </Paragraph>
        <Button as="a" href="/register">
          {" "}
          Pick Course{" "}
        </Button>
      </Box>
    </Container>
  );
}

export default Courses;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 150px;   
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-contents: center;
  padding: 40px;
  box-shadow: 2px 0px 3px 3px #0000be;
  border-radius: 10px;
  width: 80%;
  height: 70vh;
  margin: 20px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  margin: 10px;
`;

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  margin: 15px;
`;

const Button = styled.button`
  background-color: #ff0000;
  border: 1px solid #ff0000;
  color: #fff;
  padding: 12px;
  margin: 25px;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`;

const Button1 = styled(Button)`
  background-color: #ff0000;
  border: 1px solid #ff0000;
  color: #fff;
  padding: 12px;
  margin: 25px;
  border-radius: 10px;
  text-decoration: none; 
  text-align: center;
  cursor: pointer;
  font-weight: 300;
  font-size: 15px;
`;

const Button2 = styled(Button)`
  background-color: #ff0000;
  border: 1px solid #ff0000;
  color: #fff;
  padding: 12px;
  margin: 25px;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-weight: 300;
  font-size: 15px;
`;
