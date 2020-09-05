import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import { MainContainer } from "../elements";
import { Redirect } from "react-router-dom";

const Container = styled.section`
  height: 100vh;
  display: flex;

  justify-content: center;
  /* align-content: center; */
`;
const Card = styled.div`
  flex-direction: column;
  background: ${(props) => props.theme.color.loginMain};
  align-self: center;
  padding: 5rem 8rem;
  border-radius: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-left: 1rem;
`;

const StyledForm = styled(Form)``;
const Input = styled(Field)`
  color: red;
  display: block;
  margin-bottom: 1rem;
  border: 1px dotted #000;

  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  outline: none;
`;
const SubmitBtn = styled.button`
  background: ${(props) => props.theme.color.loginButton};
  border: 1px solid transparent;
  padding: 0.25rem 3rem;

  justify-self: center;
`;

const StudentLogin = () => {
  const [username] = useState("anshu");
  const [password] = useState("raj");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <Redirect to="/student" />
  ) : (
    <MainContainer>
      <Container>
        <Card>
          <Title>Student Login</Title>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(value) => {
              if (value.username === username || value.password === password) {
                setIsLoggedIn(true);
              }
            }}
          >
            <StyledForm>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Username..."
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password..."
              />
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </StyledForm>
          </Formik>
        </Card>
      </Container>
    </MainContainer>
  );
};

export default StudentLogin;
