import React from 'react'
import {Link} from 'react-router-dom'

import {
    Container,
    TopSide,
    MenuButton,
    PackIcon,
    AntenaIcon,
} from './styles'

export default function NavBar(props) {
    return (
        <Container status={props.status}>
            <TopSide>
                <Link><MenuButton
                status={props.status}
                >
                    <PackIcon />
                    <span>Planos de Acesso</span>
                </MenuButton></Link>
                <Link><MenuButton
                status={props.status}
                >
                    <AntenaIcon />
                    <span>Área de Cobertura</span>
                </MenuButton></Link>
            </TopSide>
        </Container>
    )
}