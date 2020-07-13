import React from 'react'
import { 
    Container,
    MenusLink,
    MenuLink,
    MenuIcon,
    HomeIcon,
    PlanosIcon,
    ChatIcon,
    AreaUserIcon,
 } from './styles'

export default function MenuBar() {
    return (
        <Container>
            <MenusLink>
                <MenuLink>
                    <MenuIcon />
                </MenuLink>
                <MenuLink>
                    <HomeIcon />
                    <p>HOME</p>
                </MenuLink>
                <MenuLink>
                    <PlanosIcon />
                    <p>PLANOS</p>
                </MenuLink>
                <MenuLink>
                    <ChatIcon />
                    <p>ATENDIMENTO</p>
                </MenuLink>
                <MenuLink>
                    <AreaUserIcon />
                    <p>ÁREA DO CLIENTE</p>
                </MenuLink>
            </MenusLink>
        </Container>
    )
}