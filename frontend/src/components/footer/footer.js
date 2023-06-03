import React from "react";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { SocialIcon } from "react-social-icons";

export default function App() {
    return (
        <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <SocialIcon url="https://jaketrent.com" network="github" bgColor="#ffffff" style={{width: "40px", height: "40px"}}/>{" "}
                    <SocialIcon url="https://jaketrent.com" network="instagram" style={{width: "40px", height: "40px"}}/>{" "}
                    <SocialIcon url="https://jaketrent.com" network="facebook" style={{width: "40px", height: "40px"}}/>
                </div>
            </section>

            <section>
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <MDBIcon icon="gem" className="me-3" />
                                Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                            <p>
                                <a href="#!" className="text-reset">
                                Angular
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                React
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p>
                                <a href="#!" className="text-reset">
                                Pricing
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                Settings
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: "#0000000d" }}>
                {new Date().getFullYear()} Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    );
}