import React, { useState } from "react";
import SignIn from "./SignIn/SignIn";
import {
  MainContainer,
  BackgroundImageContainer,
  AuthContainer,
  StyledPaper,
} from "./auth.css";


/**
 * HomePage component for displaying the main page of the application.
 * It includes the Navbar, SignIn, and SignUp components.
 */
function HomePage() {
  // State to control whether to show SignIn or SignUp component
  const [, setShowSignIn] = useState(false);

  return (
    <div>
      {/* Navbar component */}
      <MainContainer>
        <BackgroundImageContainer />
        <AuthContainer>
          <StyledPaper>
            <SignIn setShowSignIn={setShowSignIn} />
          </StyledPaper>
        </AuthContainer>
      </MainContainer>
    </div>
  );
}

export default HomePage;
