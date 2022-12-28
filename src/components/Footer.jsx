import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted square border-top border-dark"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <SocialIcon url="https://facebook.com/TrunkShowManila/" />
          </a>
          <a href="" className="me-4 text-reset">
            <SocialIcon url="https://www.instagram.com/trunkshowmanila/" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Trunk Show
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                recusandae animi! Eum, alias laborum. Quaerat ipsum beatae
                tenetur est voluptatibus fugiat exercitationem tempore sed
                perspiciatis veritatis temporibus, et assumenda autem!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Travel organizers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Accesories
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Bags
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  About us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Search
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  FAQS
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faLocationPin} className="me-2" />
                Manila, Philippines
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                trunkshowmanila@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" /> + 01 234 567
                88
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" /> + 01 234 567
                89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright
      </div>
    </MDBFooter>
  );
};

export default Footer;
