import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import MyComponent from "./Winners";
import Modal from '@mui/material/Modal';
import { Team } from '../CssPages/PopUp/Team';
import { Roadmap } from '../CssPages/PopUp/Roadmap';


const CustomButton = styled(Button)`
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
`;

const CustomImage = styled('img')`
  cursor: pointer;
`;

const CustomTextGray = styled(Typography)`
  color: gray;
`;

const CustomTextNouveauMain = styled(Typography)`
  color: lightgreen;
`;

export default function Info() {
  const navigate = useNavigate();
  const [isTeamPopupOpen, setTeamPopupOpen] = useState(false);
  const [isRoadmapOpen, setRoadmapPopupOpen] = useState(false);


  const openTeamPopup = () => {
    setTeamPopupOpen(true);
  };

  const closeTeamPopup = () => {
    setTeamPopupOpen(false);
  };
  const openRoadMapPopup = () => {
    setRoadmapPopupOpen(true);
  };

  const closeRoadMapPopup = () => {
    setRoadmapPopupOpen(false);
  };
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', marginTop: "40px" }}>
        <div>
          <div style={{ display: 'flex' }}>
            <Typography variant="h4" fontWeight="bold">
              Free Metaverse Passes
            </Typography>
          </div>
          <CustomTextGray variant="subtitle1" fontWeight="bold">
            <CustomTextNouveauMain variant="subtitle1" fontWeight="bold">
              31/777
            </CustomTextNouveauMain>
          </CustomTextGray>
        </div>
        <Box style={{ display: 'flex', gap: '1rem' }}>
        <CustomButton onClick={openRoadMapPopup}>
            Roadmap
          </CustomButton>
          {/* <CustomButton onClick={openTeamPopup}>
            Team
          </CustomButton> */}
        </Box>
      </Box>
      <div>
        <div style={{ display: 'flex' }}>
          <MyComponent />
        </div>
      </div>

      <Modal
        open={isTeamPopupOpen}
        onClose={closeTeamPopup}
        aria-labelledby="team-popup-title"
        aria-describedby="team-popup-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <Team onClose={closeTeamPopup} />
        </Box>
      </Modal>

      <Modal
        open={isRoadmapOpen}
        onClose={closeRoadMapPopup}
        aria-labelledby="team-popup-title"
        aria-describedby="team-popup-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <Roadmap onClose={closeRoadMapPopup} />
        </Box>
      </Modal>
    </Box>
  );
}
