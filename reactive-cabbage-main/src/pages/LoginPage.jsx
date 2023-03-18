import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/operation';
import { FcGoogle } from 'react-icons/fc';

import {
  Container,
  TitleWrap,
  Title,
  FormContainer,
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
  InputWrapper,
  PasswordBtn,
  GoogleLoginLink,
  PasswordIcon,
} from 'pages/styled/RegisterPage.slyle';

import { BackgroundLayout } from 'components/BackgroundLayout/BackgroundLayout';
import LogoSrc from './../images/imgReports/title_kapusta.png';
import TwoCabbages from './../images/cabbage/cabagesTwo.svg';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import EyeOpened from './../images/eye/eye-open.svg';
import EyeClosed from './../images/eye/eye-blocked.svg';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(logIn(user)).then(data => {
      // console.log(data);
      // if (data?.error?.message === 'Rejected') {
      //   toast('Data entered incorrectly. Try again');
      //   return;
      // }
      // if (data.requestStatus === 'fulfilled') {
      //   return;
      // }
    });
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
          <GoogleLoginLink href="https://kapusta-backend.goit.global/auth/google">
            <FcGoogle />
            Google
          </GoogleLoginLink>
          <SubTitle>
            Or log in using an email and password, after registering:
          </SubTitle>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="logInEmail">Email:</Label>
            <InputWrapper>
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
            </InputWrapper>
            <Label htmlFor="logInPassword">Password:</Label>
            <InputWrapper>
              <Input
                type={isPasswordShown ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                pattern="[0-9A-Za-zA-Яа-яЁёЄєЇї!@#$%^&*]{8,}"
                autoComplete="current-password"
                required
              />
              <PasswordBtn onClick={handleShowPassword} type="button">
                <PasswordIcon
                  src={isPasswordShown ? EyeOpened : EyeClosed}
                  alt="EyeOpened"
                  width="20px"
                  height="20px"
                />
              </PasswordBtn>
            </InputWrapper>

            <ButtonsWrap>
              <SubmitBtn type="submit">Log In</SubmitBtn>
              <NavBtn to="/register">Registration</NavBtn>
            </ButtonsWrap>
          </Form>
        </FormContainer>
      </ContentWrapper>
      <BottomCabbages alt="Two Cabbages" src={TwoCabbages} />
    </Container>
  );
};

export default LoginPage;
