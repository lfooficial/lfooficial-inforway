import React from 'react'

import { 
    Container,
    MenusLink,
    MenuLink,
    MenuIcon,
    Menus,
    ArrowLeftIcon,
    HomeIcon,
    PlanosIcon,
    ChatIcon,
    AreaUserIcon,
 } from './styles'

export default function MenuBar(props) {

    return (
        <Container>
            <MenusLink>
                <MenuLink>
                    <Menus inline={[props.active, props.deactive]}>
                        <button className="active" onClick={props.activeMenu}><MenuIcon/></button>
                        <button className="deactive" onClick={props.activeMenu}><ArrowLeftIcon/></button>
                    </Menus>
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