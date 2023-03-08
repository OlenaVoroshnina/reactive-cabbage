import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { logIn } from 'redux/auth/operation';

import {
  Container,
  TitleWrap,
  Title,
  FormContainer,
  Wrap,
  SubTitle,
  Form,
  Label,
  Input,
  ButtonsWrap,
  NavBtn,
  SubmitBtn,
} from 'pages/styled/RegisterPage.slyle';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(logIn(user));
    event.target.reset();
  };

  return (
    <Container>
      <TitleWrap>
        <Title>Smart Finance</Title>
      </TitleWrap>
      <FormContainer>
        <Wrap>
          {/* <GoogleInWrapper>
            <AuthFormText>
              You can log in with your Google Account:
            </AuthFormText>
            <GoogleBtn href="https://kapusta-backend.goit.global/auth/google">
              <GoogleIcon />
              Google
            </GoogleBtn>
          </GoogleInWrapper> */}
          <SubTitle>
            Or log in using an email and password, after registering:
          </SubTitle>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="logInEmail">
              Email:
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                pattern="[A-Za-zA-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zA-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zA-Яа-яЁёЄєЇї]{2,4}$"
                id="logInEmail"
                autoComplete="email"
                autoFocus
                required
              />
            </Label>
            <Label htmlFor="logInPassword">
              Password:
              <Input
                type="password"
                name="password"
                placeholder="Password"
                pattern="[0-9A-Za-zA-Яа-яЁёЄєЇї!@#$%^&*]{8,}"
                autoComplete="current-password"
                required
              />
            </Label>
            <ButtonsWrap>
              <SubmitBtn type="submit">Log In</SubmitBtn>
              <NavBtn to="/register">Registration</NavBtn>
            </ButtonsWrap>
          </Form>
        </Wrap>
      </FormContainer>
    </Container>
  );
};
