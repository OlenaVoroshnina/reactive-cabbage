import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/operation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  PasswordIcon,
} from 'pages/styled/RegisterPage.slyle';
import { BackgroundLayout } from 'components/BackgroundLayout/BackgroundLayout';

import LogoSrc from './../images/imgReports/title_kapusta.png';
import TwoCabbages from './../images/cabbage/cabagesTwo.svg';
import EyeOpened from './../images/eye/eye-open.svg';
import EyeClosed from './../images/eye/eye-blocked.svg';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleChange = event => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };

    dispatch(register(user)).then(data => {
      if (data.type === 'auth/register/fulfilled') {
        toast('Congratulations, you have successfully registered');
        return;
      }
      if (data.error.message === 'Rejected')
        toast('Error: Email already exists');
      return;
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
          <SubTitle>Please fill the form below:</SubTitle>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="logInEmail">Email:</Label>
            <InputWrapper>
              <Input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="your@email.com"
                pattern="[A-Za-zA-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zA-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zA-Яа-яЁёЄєЇї]{2,4}$"
                id="logInEmail"
                autoComplete="email"
                value={email}
                autoFocus
                required
              />
            </InputWrapper>
            <Label htmlFor="logInPassword">Password:</Label>
            <InputWrapper>
              <Input
                onChange={handleChange}
                type={isPasswordShown ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                pattern="[0-9A-Za-zA-Яа-яЁёЄєЇї!@#$%^&*]{8,}"
                autoComplete="current-password"
                value={password}
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
              <NavBtn to="/login">Log In</NavBtn>
              <SubmitBtn type="submit">Registration</SubmitBtn>
            </ButtonsWrap>
          </Form>
        </FormContainer>
      </ContentWrapper>
      <BottomCabbages alt="Two Cabbages" src={TwoCabbages} />
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
