import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
  padding: 0.5rem 1rem; /* Reduced padding for lower navbar height */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
  }

  @media (min-width: 768px) and (max-width: 1023.98px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
  }

  @media (min-width: 1024px) {
    padding: 0.5rem 3rem;
  }

  @media (min-width: 1024px) and (max-width: 1024px) {
    padding-left: 2.5rem; 
    padding-right: 2.5rem;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) and (max-width: 1023.98px) {
    gap: 2rem;
  }
`;

export const Logo = styled.img`
  height: 2.2rem; /* Slightly reduced height */
  flex-shrink: 0;

  @media (max-width: 479px) {
    height: 1.8rem;
  }
`;

export const HamburgerButton = styled.button`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: none;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: #000;
  font-weight: 580;
  font-family: 'Inter', sans-serif;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 768px) and (max-width: 1023.98px) {
    gap: 1rem;
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    gap: 2.5rem;
    font-size: 1rem;
  }
`;

export const NavLink = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  white-space: nowrap;
  &:hover {
    color: #F73442;
  }
`;

export const DropdownIcon = styled.svg`
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 0.2rem;
`;

export const UserSection = styled.div`
  display: none;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
    gap: 1rem;
  }
`;

export const UserAvatar = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
`;

export const UserName = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: #000;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const LogoutButton = styled.button`
  background: #F73442;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 0.5rem;
  transition: background 0.2s;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover {
    background: #e42534;
  }

  @media (min-width: 1024px) {
    padding: 0.4rem 0.9rem;
    gap: 0.5rem;
    font-size: 0.95rem;
  }
`;

export const LogoutText = styled.span`
  font-weight: 500;
`;

export const LogoutIcon = styled.svg`
  height: 1.15rem;
  width: 1.15rem;
`;

export const MobileDrawer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  max-width: 100vw; /* Prevent horizontal overflow */
  height: calc(100vh - 4rem); /* Full height minus navbar */
  background: #fff;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 1000;
  overflow-y: auto; /* Allow scrolling within the drawer if content is long */

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
`;

export const MobileNavLink = styled.li`
  cursor: pointer;
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Changed from gap to space-between */
  padding: 0.5rem 0;

  span {
    display: flex;
    align-items: center;
    gap: 1rem; /* Gap between icon and text */
  }

  span > svg {
      color: #808080; /* Set icon color to grey */
  }
`;

export const MobileUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
`;

export const MobileUserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const MobileUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileUserName = styled.span`
  font-weight: 600;
  color: #000;
`;

export const MobileUserCollege = styled.span`
  font-size: 0.875rem;
  color: #666;
`;

export const MobileLogoutButton = styled.button`
  background: #F73442; /* Changed background to solid red */
  color: #fff; /* Changed text color to white */
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: auto; /* Pushes to the bottom */
  margin-bottom: 1rem; /* Added margin to lift from bottom */
`;

export const AssessmentMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const AssessmentHeader = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`;

export const AssessmentTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
`;

export const AssessmentSection = styled.h4`
    font-size: 0.875rem;
    color: #666;
    text-transform: uppercase;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

export const AssessmentItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0;
    cursor: pointer;
`;

export const IconWrapper = styled.div`
    background-color: ${props => props.color || '#000'}20; /* Light background of icon color */
    color: ${props => props.color || '#000'};
    border-radius: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AssessmentItemText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AssessmentItemSubText = styled.span`
    font-size: 0.8rem;
    color: #666;
`;
