import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./SigninElements";
import { ReactComponent as Logo } from "../../assets/images/svg-5.svg";
import { useAuth0 } from "@auth0/auth0-react";

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container>
      <FormWrap>
        <Icon to="/">
          <Logo width="50px" height="50px" />
        </Icon>
        <FormContent>
          <Form>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />

            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
          <button
            className="btn btn-primary btn-block"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
