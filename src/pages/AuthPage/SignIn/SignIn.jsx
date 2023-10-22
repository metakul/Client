import React, { useState } from 'react';
import {
  Container,
  Title,
  OptionButton,
  StyledAvatar
} from './SignIn.css';
import UserSignIn from './UserSignIn/UserSignIn';
import Signup from './Signup/Signup';

const SignIn = ({ setShowSignIn }) => {
  const [showUserSignIn, setShowUserSignIn] = useState(true);
  const isSignInSelected = showUserSignIn; // Boolean to determine the selected option

  return (
    <Container>
      <StyledAvatar src="https://cdn-icons-png.flaticon.com/512/9436/9436365.png" alt="Logo" />


      {showUserSignIn ? (
        <UserSignIn setShowSignIn={setShowSignIn} />
      ) : (
        <Signup setShowSignIn={setShowSignIn} />
      )}

      <OptionButton onClick={() => setShowUserSignIn(!isSignInSelected)}>
        {isSignInSelected ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
      </OptionButton>
    </Container>
  );
};

export default SignIn;
