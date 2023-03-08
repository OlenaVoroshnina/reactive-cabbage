import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/operation';

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

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    dispatch(register(user));
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
          <Wrap>
            <SubTitle>Please fill the form below:</SubTitle>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="logInEmail">
                Email:
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
              </Label>
              <Label htmlFor="logInPassword">
                Password:
                <Input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  pattern="[0-9A-Za-zA-Яа-яЁёЄєЇї!@#$%^&*]{8,}"
                  autoComplete="current-password"
                  value={password}
                  required
                />
              </Label>
              <ButtonsWrap>
                <NavBtn to="/login">Log In</NavBtn>
                <SubmitBtn type="submit">Registration</SubmitBtn>
              </ButtonsWrap>
            </Form>
          </Wrap>
        </FormContainer>
      </ContentWrapper>
      <BottomCabbages alt="Two Cabbages" src={TwoCabbages} />
    </Container>
  );
};
