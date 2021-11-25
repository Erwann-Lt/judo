import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
 
  NavLink,
  Extra,
  LogoContainer,
  Para,
 
  Empty,
  FooterContainer,
  Language,
  
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
 

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          
          
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Adresse")}</Language>
              <Para>26 rue St Ernel</Para>
              <Para>29800 Landerneau</Para>
              <Para>France</Para>
            </Col>
            
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Contact")}</Language>
              <Para>06 08 40 72 27</Para>
              <Para>dojolanderneen29@gmail.com</Para>
              <Para> &nbsp;</Para>
            </Col>
             
            
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.facebook.com/Landerneaujudo/"
                src="github.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
