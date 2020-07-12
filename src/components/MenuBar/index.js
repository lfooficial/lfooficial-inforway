import React from 'react'
import { 
    Container,
    MenusLink,
    MenuLink,
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
                    <HomeIcon />
                    HOME
                </MenuLink>
                <MenuLink>
                    <PlanosIcon />
                    PLANOS
                </MenuLink>
                <MenuLink>
                    <ChatIcon />
                    ATENDIMENTO
                </MenuLink>
                <MenuLink>
                    <AreaUserIcon />
                    ÁREA DO CLIENTE
                </MenuLink>
            </MenusLink>
        </Container>
    )
}