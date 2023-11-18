import React from "react";



import * as s from "./styles/globalStyles.js";


import "./styles/index.css"


import Select from "./components/Select.js"
import { backgroundOption, uniqueOption, hatOption, accessoriesOption, faceOption, bodyOption, handleGenerate, downloadImage} from "./data/avatarOption.js"
import { Grid } from "@mui/material";
function CustomMintPage() {
   
    return (
            <s.Container   style={{ paddingTop: 0, backgroundColor: "var(--primary)" }} image={"config/images/background.png"}>


              

                    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={4} lg={4}>
      <div style={{ borderImageSource: "linear-gradient(90deg, rgba(255,109,23,1) 0%, rgba(254,241,23,1) 50%, rgba(255,109,23,1) 100%);border-image-slice?:1" }} className="css-xvauwm">
                            <div className="">
                                <h2 className="chakra-heading ">Customize Your Kochi</h2>
                               
                            </div>
                            <p className="chakra-text " style={{ marginBottom: "20px" }}>Join The Kochi Pack Today!</p>
                            <p className="chakra-text ">Generate your own custom profile picture and wear it on all your socials!</p>
                            <div>
                                <div className="mainBox"><p className="chakra-text c">Background</p></div>
                                <div md="5" className="css-0" >
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <Select id="bgImage" option={backgroundOption} forImage="changebgImage" />
                                    </div>
                                </div>
                              
                            </div>

                            <div>
                                <div className="css-0"><p className="chakra-text c">Face</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <Select id="faces" option={faceOption} forImage="changefaceImage" />
                                      
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="css-0"><p className="chakra-text c">Body</p></div>
                                <div md="5" className="css-0">
                                    <div className="chakra-select__wrapper css-15w40bv">
                                        <Select id="body" option={bodyOption} forImage="changebodyImage" />
                                    </div>
                                </div>
                            </div>
                        </div>
      </Grid>

      <Grid item xs={12} sm={3} >
      <div style={{
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative", /* Set the position to relative to act as a positioning context */
  }}>

        <s.StyledImg className="generateImage" alt={"example"} id="changebgImage" src={"config/layers/bgImage/cemetary.png"} />
        <s.StyledImg className="generateImage" alt={"example"} id="changefaceImage" src={"config/layers/faces/snoop.png"} />
        <s.StyledImg className="generateImage" alt={"example"} id="changebodyImage" src={"config/layers/body/army.png"} />
        <s.StyledImg className="generateImage" alt={"example"} id="changeuniqueaddonImage" src={"config/layers/xtras/none.png"} />
        <s.StyledImg className="generateImage" alt={"example"} id="changeaccessoriesImage" src={"/config/layers/accessories/none.png"} />
        <s.StyledImg className="generateImage" alt={"example"} id="changehatImage" src={"/config/layers/hats/army.png"} />
        </div>

    </Grid>

    <Grid item xs={12} sm={4} md={4} lg={4}>
      <div style={{ borderImageSource: "linear-gradient(90deg, rgba(255,109,23,1) 0%, rgba(254,241,23,1) 50%, rgba(255,109,23,1) 100%);border-image-slice?:1" }} className="css-xvauwm css-xvauwm1">

<div>
    <div className="css-0"><p className="chakra-text c">Hat</p></div>
    <div md="5" className="css-0">
        <div className="chakra-select__wrapper css-15w40bv">
            <Select id="hats" option={hatOption} forImage="changehatImage" />
           
        </div>
    </div>
</div>

<div>
    <div className="css-0"><p className="chakra-text c">Accessories</p></div>
    <div md="5" className="css-0">
        <div className="chakra-select__wrapper css-15w40bv">
            <Select id="accessories" option={accessoriesOption} forImage="changeaccessoriesImage" />
        </div>
    </div>
</div>
<div>
    <div className="css-0"><p className="chakra-text c">Add On</p></div>
    <div md="5" className="css-0">
        <div className="chakra-select__wrapper css-15w40bv">
            <Select id="xtras" option={uniqueOption} forImage="changeuniqueaddonImage" />

        </div>
    </div>
</div>
<div style={{ marginTop: "30px" }}>
    <s.StyledButton id="gen" onClick={() => {
        handleGenerate()
    }}>Randomize
    </s.StyledButton>
    <s.StyledButton id="down" onClick={() => {
        downloadImage()
    }}>Download
    </s.StyledButton>
</div>
</div>
      </Grid>
    </Grid>





            </s.Container>

    );
}

export default CustomMintPage;