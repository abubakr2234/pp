import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute } from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="expertise">OUR EXPERTISE</SidebarLink>
                    <SidebarLink to="sustain">SUSTAINABILITY & IMPACT</SidebarLink>
                    <SidebarLink to="portfolio">PORTFOLIO</SidebarLink>
                    <SidebarLink to="media">MEDIA CENTER</SidebarLink>
                    <SidebarLink to="contact">CONTACT US</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
