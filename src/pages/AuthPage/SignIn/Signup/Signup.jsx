import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { tokens } from "../../../../theme";
import { Box, Select, MenuItem, InputLabel, FormControl, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../../utils/apiUrl/apiUrl";
import toast from "react-hot-toast";
const Title = styled("h1")`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;
  border: 1px solid ${({ colors }) => colors.primary[800]};
  background-color: ${({ colors }) => colors.background};
  border-radius: 8px;
`;

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



const SelectContainer = styled(FormControl)`
  width: 100%;
  margin-bottom: 8px;
  padding:6px
`;

const SelectInput = styled(Select)`
  padding: 2px;
  border: 1px solid ${({ colors }) => colors.primary[500]};
  border-radius: 4px;
  
`;

const Button = styled("button")`
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 8px;
  background-color: ${({ colors }) => colors.secondary[900]};
  color: ${({ colors }) => colors.secondary[100]};
  &:hover {
    background-color: ${({ colors }) => colors.secondary[700]};
  }
`;

const LinkContainer = styled("div")`
  margin-top: 16px;
`;

const Input = styled(TextField)`
  padding: 6px;
  border-radius: 4px;
  margin-bottom: 4px;
  width: 100%;
  color: ${({ colors }) => colors.primary[100]};

`;


const Icon = styled("span")`
  margin-right: 8px;
`;

const RegisterUser = ({ }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    user_country: "INDIA",
  });

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser(data); 
      console.log(response)
  
      if (response.data && response.status === 201) {
        toast.success(response.data.message);        
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <Container colors={colors}>
      <Title>Register</Title>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: "280px"}}>
          <Input
            colors={colors}
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={data.email || ""}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            colors={colors}
            name="phoneNumber"
            placeholder="Phone Number "
            required
            value={data.phoneNumber || ""}
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
          />
          <Input
            colors={colors}
            type="password"
            name="password"
            placeholder="Password"
            required
            value={data.password || ""}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <SelectContainer>
            <InputLabel>Country</InputLabel>
            <SelectInput
              colors={colors}
              theme={theme}
              name="user_country"
              value={data.user_country}
              onChange={(e) => setData({ ...data, user_country: e.target.value })}
            >
              <MenuItem value="INDIA">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="CANADA">Canada</MenuItem>
              <MenuItem value="RUSSIA">Russia</MenuItem>
            </SelectInput>
          </SelectContainer>
          
          </div>
          <Button colors={colors} type="button" onClick={handleRegister}>
            <Icon>
              <LanguageIcon />
            </Icon>
            Register
          </Button>
          </div>
    </Container>
  );
};

export default RegisterUser
