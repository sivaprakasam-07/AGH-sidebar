import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faTimes,
    faHome,
    faPencilAlt,
    faFileAlt,
    faTrophy,
    faBuilding,
    faUser,
    faSignOutAlt,
    faChevronRight,
    faChevronLeft,
    faBook,
    faLaptopCode,
    faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import {
    Nav,
    Left,
    Logo,
    HamburgerButton,
    NavLinks,
    NavLink,
    DropdownIcon,
    UserSection,
    UserAvatar,
    UserName,
    LogoutButton,
    LogoutText,
    LogoutIcon,
    MobileDrawer,
    MobileNavLinks,
    MobileNavLink,
    MobileUserProfile,
    MobileUserAvatar,
    MobileUserInfo,
    MobileUserName,
    MobileUserCollege,
    MobileLogoutButton,
    AssessmentMenu,
    AssessmentHeader,
    AssessmentTitle,
    AssessmentSection,
    AssessmentItem,
    AssessmentItemText,
    AssessmentItemSubText,
    IconWrapper,
} from './Navbar.styles';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showAssessment, setShowAssessment] = useState(false);

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = originalStyle;
        }

        return () => {
            document.body.style.overflow = originalStyle;
        }
    }, [isOpen]);

    const mainLinks = (
        <MobileNavLinks>
            <MobileNavLink>
                <span>
                    <FontAwesomeIcon icon={faHome} /> Home
                </span>
            </MobileNavLink>
            <MobileNavLink>
                <span>
                    <FontAwesomeIcon icon={faPencilAlt} /> Practice
                </span>
            </MobileNavLink>
            <MobileNavLink onClick={() => setShowAssessment(true)}>
                <span>
                    <FontAwesomeIcon icon={faFileAlt} /> Assessment
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
            </MobileNavLink>
            <MobileNavLink>
                <span>
                    <FontAwesomeIcon icon={faTrophy} /> Leaderboard
                </span>
            </MobileNavLink>
            <MobileNavLink>
                <span>
                    <FontAwesomeIcon icon={faBuilding} /> Company Specific
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
            </MobileNavLink>
            <MobileNavLink>
                <span>
                    <FontAwesomeIcon icon={faUser} /> Profile
                </span>
            </MobileNavLink>
        </MobileNavLinks>
    );

    const assessmentMenu = (
        <AssessmentMenu>
            <AssessmentHeader onClick={() => setShowAssessment(false)}>
                <FontAwesomeIcon icon={faChevronLeft} /> Assessment
            </AssessmentHeader>
            <AssessmentSection>Aptitude</AssessmentSection>
            <AssessmentItem>
                <IconWrapper color="#F73442">
                    <FontAwesomeIcon icon={faBook} />
                </IconWrapper>
                <AssessmentItemText>
                    Quiz
                    <AssessmentItemSubText>Quick Aptitude Test</AssessmentItemSubText>
                </AssessmentItemText>
            </AssessmentItem>
            <AssessmentItem>
                <IconWrapper color="#F73442">
                    <FontAwesomeIcon icon={faBook} />
                </IconWrapper>
                <AssessmentItemText>
                    E-Learning
                    <AssessmentItemSubText>Learn aptitude basics</AssessmentItemSubText>
                </AssessmentItemText>
            </AssessmentItem>
            <AssessmentSection>Technical</AssessmentSection>
            <AssessmentItem>
                <IconWrapper color="#F73442">
                    <FontAwesomeIcon icon={faLaptopCode} />
                </IconWrapper>
                <AssessmentItemText>
                    Technical Quiz
                    <AssessmentItemSubText>Test Technical skills</AssessmentItemSubText>
                </AssessmentItemText>
            </AssessmentItem>
            <AssessmentItem>
                <IconWrapper color="#F73442">
                    <FontAwesomeIcon icon={faLaptopCode} />
                </IconWrapper>
                <AssessmentItemText>
                    Tech E-Learning
                    <AssessmentItemSubText>Learn core concepts</AssessmentItemSubText>
                </AssessmentItemText>
            </AssessmentItem>
            <AssessmentSection>College Assessment</AssessmentSection>
            <AssessmentItem>
                <IconWrapper color="#F73442">
                    <FontAwesomeIcon icon={faGraduationCap} />
                </IconWrapper>
                <AssessmentItemText>
                    Aptitude
                    <AssessmentItemSubText>College-level test</AssessmentItemSubText>
                </AssessmentItemText>
            </AssessmentItem>
        </AssessmentMenu>
    );

    return (
        <Nav>
            {/* Left: Logo + Hamburger */}
            <Left>
                <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FontAwesomeIcon icon={faTimes} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
                </HamburgerButton>
                <Logo src="src/assets/AGH-logo.jpg" alt="Logo" />
            </Left>
            {/* Center: Nav Links (hidden on mobile) */}
            <NavLinks>
                <NavLink>Home</NavLink>
                <NavLink>Requests</NavLink>
                <NavLink>
                    College Assessment
                    <DropdownIcon
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </DropdownIcon>
                </NavLink>
                <NavLink>Leaderboard</NavLink>
            </NavLinks>
            {/* Right: User Info (hidden on small screens) */}
            <UserSection>
                <UserAvatar
                    src="https://i.pravatar.cc/150?img=32"
                    alt="User"
                />
                <UserName>Muskan Verma</UserName>
                <LogoutButton>
                    <LogoutText>Logout</LogoutText>
                    <LogoutIcon
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10v1"
                        />
                    </LogoutIcon>
                </LogoutButton>
            </UserSection>
            {/* Mobile Drawer */}
            {isOpen && (
                <MobileDrawer>
                    <MobileUserProfile>
                        <MobileUserAvatar src="https://i.pravatar.cc/150?img=32" alt="User" />
                        <MobileUserInfo>
                            <MobileUserName>Muskan Verma</MobileUserName>
                            <MobileUserCollege>GEC Bilaspur</MobileUserCollege>
                        </MobileUserInfo>
                    </MobileUserProfile>
                    {showAssessment ? assessmentMenu : mainLinks}
                    <MobileLogoutButton>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </MobileLogoutButton>
                </MobileDrawer>
            )}
        </Nav>
    );
};

export default Navbar;