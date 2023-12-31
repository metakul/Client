import { styled } from "@mui/material";

// Used for wrapping a page component
export const Screen = styled("div")`
 
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

// Used for providing space between components
export const SpacerXSmall = styled("div")`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled("div")`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled("div")`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled("div")`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled("div")`
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;

background-attachment:fixed;
background-position:center;
background-repeat:no-repeat;
background-size:cover;
font-weight:1000
`;

export const TextTitle = styled("p")`
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
`;

export const TextSubTitle = styled("p")`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription = styled("p")`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
`;

export const StyledClickable = styled("div")`
  :active {
    opacity: 0.6;
  }
`;


export const ResponsiveWrapper = styled("div")`
 
  justify-content: stretched;
  align-items: stretched;


`;


export const StyledImg = styled("img")`
  
 

 
  transition: width 0.5s;
border-radius:250px;
`;

export const StyledLogo = styled("img")`
  width: 200px;
  @media (min-width: 1000px) {
    width: 280px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledLink = styled("a")`
  color: var(--secondary);
  text-decoration: none;
`;

export const StyledButton = styled("button")`
  padding: 10px;
margin-top:10px;
font-size: 17px;
font-weight:bold;
  cursor: pointer; 
background: linear-gradient(180deg, rgba(254,241,23,0.9808298319327731) 0%, rgba(255,109,23,0.958420868347339) 70%)!important;
    text-align: left;
    color: var(--chakra-colors-black);
    text-transform: uppercase;
    text-transform: uppercase;
    -webkit-transition: 0.3s all;
    transition: 0.3s all;
    display: -webkit-box;
    
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
   
    white-space: nowrap;
    vertical-align: middle;
    outline: 2px solid transparent;
    outline-offset: 2px;
    line-height: 1.2;
border-radius: 6px;
`;