import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavBarElements';
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>THUSO</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu> 
                        <NavItem>
                            <NavLinks to='about'>ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='expertise'>OUR EXPERTISE</NavLinks>
                        </NavItem>
                        <NavLinks to='sustain'>SUSTAINABILITY & IMPACT</NavLinks>
                        <NavItem>
                            <NavLinks to='portfolio'>PORTFOLIO</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='media'>MEDIA CENTER</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>CONTACT US</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
