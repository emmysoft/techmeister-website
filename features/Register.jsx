import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import form from "../assets/form.svg";
import keys from "../keys";
import {PaystackButton} from "react-paystack";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <>
      <Navbar />
      <FormWrapper>
        <Form>
          <Input
            name={name}
            text="text"
            placeholder="enter your name"
            onChange={() => setName()}
          />
          <Input
            email={email}
            text="email"
            placeholder="enter your email"
            onChange={() => setEmail()}
          />
          <Input placeholder = "enter your course of choice"/>

          <Button as="a" href="/">
            Submit
          </Button>
        </Form>
        <StyledImage src={form} width={600} height={300} alt="image" />
      </FormWrapper>
    </>
  );
}

export default Register;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 80px;
  height: 80vh;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 40px;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: 2px 2px 2px 2px #0000be;
`;

const Input = styled.input`
  width: 300px;
  border-radius: 10px;
  background-color: #d3d3d3;
  border: 1px solid #808080;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #0000be;
  border: 1px solid #0000be;
  color: #fff;
  padding: 15px; 
  border-radius: 8px; 
  margin: 20px;
  text-decoration:none;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
