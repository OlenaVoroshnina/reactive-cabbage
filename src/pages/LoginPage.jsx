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
  ImageTitleLogo,
  ContentWrapper,
  BottomCabbages,
} from 'pages/styled/RegisterPage.slyle';

import { BackgroundLayout } from 'components/BackgroundLayout/BackgroundLayout';
import LogoSrc from './../images/imgReports/title_kapusta.png';
import TwoCabbages from './../images/cabbage/cabagesTwo.svg';

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
      <BackgroundLayout />
      <ContentWrapper>
        <TitleWrap>
          <ImageTitleLogo alt="title kapusta" src={LogoSrc} />
          <Title>Smart Finance</Title>
        </TitleWrap>
        <FormContainer>
          <SubTitle>You can log in with your Google Account:</SubTitle>
          <div>GOOGLE</div>
          {/* <Wrap> */}
          {/* <div>
            <p>You can log in with your Google Account:</p>
            <button href="https://kapusta-backend.goit.global/auth/google">
              {/* <GoogleIcon /> */}
          {/* Google
            </button>
          </div> */}
          <SubTitle>
            Or log in using an email and password, after registering:
          </SubTitle>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="logInEmail">Email:</Label>
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
            <Label htmlFor="logInPassword">Password:</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              pattern="[0-9A-Za-zA-Яа-яЁёЄєЇї!@#$%^&*]{8,}"
              autoComplete="current-password"
              required
            />
            <ButtonsWrap>
              <SubmitBtn type="submit">Log In</SubmitBtn>
              <NavBtn to="/register">Registration</NavBtn>
            </ButtonsWrap>
          </Form>
          {/* </Wrap> */}
        </FormContainer>
      </ContentWrapper>
      <BottomCabbages alt="Two Cabbages" src={TwoCabbages} />
    </Container>
  );
};
