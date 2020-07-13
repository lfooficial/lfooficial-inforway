import React from 'react'

import {
    Container,
    TopSide,
    MenuButton,
    PackIcon,
    AntenaIcon,
    BotSide,
    ArrowLeftIcon,
} from './styles'

export default function NavBar() {
    return (
        <Container>
            <TopSide>
                <MenuButton>
                    <PackIcon />
                    <span>Planos de Acesso</span>
                </MenuButton>
                <MenuButton>
                    <AntenaIcon />
                    <span>Área de Cobertura</span>
                </MenuButton>
                
            </TopSide>
            <BotSide>
                <ArrowLeftIcon />
            </BotSide>
        </Container>
    )
}