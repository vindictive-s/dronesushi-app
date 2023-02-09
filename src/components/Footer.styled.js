import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #2d2d2d;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  text-align: center;
  color: #e2e2e2;
  gap: 20px;
  letter-spacing: 4px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #fb6d49;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SocialMediaWrap = styled.div`
  margin-top: 20px;
`;

export const SocialLogo = styled(Link)`
  color: #fb6d49;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #e2e2e2;
    transition: 0.3s ease-in-out;
  }
`;

export const WebsiteRights = styled.small`
  color: #a2a2a2;
  font-size: 0.6rem;
  letter-spacing: 2px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #e2e2e2;
  font-size: 24px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #fb6d49;
    transition: 0.3s ease-in-out;
  }
`;
