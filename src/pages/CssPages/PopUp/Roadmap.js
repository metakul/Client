import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";


export const Roadmap = ({ onClose }) => {
    const theme=useTheme()
  return (
    <div className="roadmap-container">
      <Button sx={{ position: 'absolute', top: 40, right: 40,color:theme.palette.colors.colors.yellow[200] }} onClick={onClose}>
        Close
      </Button>
      <section
        className="roadmap roadmap--style2 padding-bottom"
        id="roadmap"
        style={{marginRight:"20px", backgroundImage: `url(/assets/images/banner/bg.png)` }}
      >
                <div class="container">
                    <div class="section-header text-center">
                        <h2 class="subtitle">How it all started</h2>
                    </div>
                    <div class="roadmap__wrapper">
                        <div class="row gy-4 gy-md-0 gx-5">
                            <div class="col-md-6 mb-4 offset-md-6">
                                <div class=" roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 >
                                                    Idea Generation (Q2 2022)
                                                </h4>
                                                <p>10%</p>
                                            </div>
                                            <p>
                                                1.Building something with Technology,Free Education via Vedic system & For Friends.
                                            </p>
                                            <p>
                                                2.Kickoff & Concept Creation with The Metakul.
                                            </p>
                                            <p>

                                                3.Getting Idea from own College.

                                            </p>
                                            <p>
                                                4. Onboarding Co-Founders and Developing Ideas.
                                            </p>
                                        </div>
                                    </div>
                                    <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                        <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                        Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                        Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                        Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                        Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                        L125.000,-0.001 Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                        L155.000,-0.001 Z" />
                                        <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                        L185.000,-0.001 Z" />
                                    </svg></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class=" roadmap__item ms-auto me-md-4 aos-init" data-aos="fade-right"
                                    data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 >

                                                    Design & Development (Q1 2023)
                                                </h4>
                                                <p>20%</p>
                                            </div>
                                            <p>
                                                1.  Grow Community and Team.

                                            </p>
                                            <p>

                                                2. Sneak Peek of Art.

                                            </p>
                                            <p>

                                                3.  Release Website and Logo.

                                            </p>
                                            <p>

                                                4. Social Media Setup.
                                            </p>
                                        </div>
                                    </div>
                                    <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                        <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                L125.000,-0.001 Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                L155.000,-0.001 Z" />
                                        <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                L185.000,-0.001 Z" />
                                    </svg></span>
                                </div>
                            </div>
                            <div class="col-md-6 offset-md-6">
                                <div class="roadmap__item ms-md-4  aos-init" data-aos="fade-left" data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 >
                                                    Initial Release (Q2 2023)
                                                </h4>
                                                <p>40%</p>
                                            </div>
                                            <p>
                                                1.  Pre_sale for WL Users.
                                            </p>
                                            <p>
                                                2. Introduce $KULL ,our Utility Token.
                                            </p>
                                            
                                            <p>
                                                3.  Open Live Mint for Public.
                                            </p>
                                        </div>
                                    </div>
                                    <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                        <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                L125.000,-0.001 Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                L155.000,-0.001 Z" />
                                        <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                L185.000,-0.001 Z" />
                                    </svg></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="roadmap__item ms-auto me-md-4  aos-init" data-aos="fade-right"
                                    data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 >  Marketing (Q3 2023)  </h4>
                                                <p>60%</p>
                                            </div>
                                            <p>
                                                1. Providing Weekly Free Utilities to Holders
                                            </p>
                                            <p>
                                                2. Opening of Shoping website to shop via earned $KULL.
                                            </p>
                                            <p>
                                                3.  Launching Staking Dashboard of NFT's.
                                            </p>
                                            <p>
                                                4. Buying/Selling $KULL on exchanges.
                                            </p>
                                        </div>

                                        <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                            <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                L125.000,-0.001 Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                L155.000,-0.001 Z" />
                                            <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                L185.000,-0.001 Z" />
                                        </svg></span>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 offset-md-6">
                                <div class="roadmap__item ms-md-4  aos-init" data-aos="fade-left" data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 >Launching Metaverse  (Q4 2023) </h4>
                                                <p>80%</p>
                                            </div>
                                            <p>1. First Experience for holder in The Metakul Metaverse in Unreal Engine.</p>
                                            <p>2. Public Sale for metaverse land.</p>
                                            <p>3. Airdrop of Metaverse land to 777 NFT's hodlers.</p>
                                            <p>4. Launching Own Mixed Reality(MR) Experience.</p>
                                            

                                        </div>

                                        <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                            <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                L125.000,-0.001 Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                L155.000,-0.001 Z" />
                                            <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                L185.000,-0.001 Z" />
                                        </svg></span>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="roadmap__item ms-auto me-md-4  aos-init" data-aos="fade-right"
                                    data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 class="">Booming web3 Space (2024)   </h4>
                                                <p>100%</p>
                                            </div>
                                            <p>1. Launching Own Nft Marketplace..</p>
                                            <p>2. Launching our p2e game for the world.</p>
                                            <p>3. Airdrop of profits from p2e to The Sushie Holders.</p>
                                            <p> </p>
                                        </div>
                                    </div>
                                    <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                        <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                L125.000,-0.001 Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                L155.000,-0.001 Z" />
                                        <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                L185.000,-0.001 Z" />
                                    </svg></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
};
