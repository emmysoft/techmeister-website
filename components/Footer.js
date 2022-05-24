import styled from "styled-components";
import Link from "next/link";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <Wrapper>
      <Paragraph>Copyright &copy; 2022</Paragraph>
      <StyledLink href="https://twitter.com/dev_emmy_99">
        <AiOutlineTwitter />
      </StyledLink>
      <IconLink href="https://instagram.com/emmysoft.io">
        <AiOutlineInstagram />
      </IconLink>
    </Wrapper>
  ); 
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 40px;
  box-shadow: 2px 0px 0px 0px #0000be;
  z-index: -99;
`;

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 25px; 
  color: #000000;
  text-align: center;
`;

const StyledLink = styled(Link)`
  width: 40%;
  color: #0000be;
  cursor: pointer;
`;

const IconLink = styled(Link)`
  width: 40%;
  cursor: pointer;
  color: #ff0000;
`;
