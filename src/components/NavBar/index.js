import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'

import {
    Container,
    TopSide,
    MenuButton,
    HomeIcon,
    ChatIcon,
    PackIcon,
    AntenaIcon,
} from './styles'

export default function NavBar(props) {

    let { url } = useRouteMatch()

    return (
        <Container status={props.status}>
            <TopSide>
                <button>
                    <Link to={url}>
                        <MenuButton status={props.status}>
                            <HomeIcon />
                            <span>Página Inicial</span>
                        </MenuButton>
                    </Link>
                </button>

                <button>
                    <Link to={url}>
                        <MenuButton status={props.status}>
                            <PackIcon />
                            <span>Planos de Acesso</span>
                        </MenuButton>
                    </Link>
                </button>

                <button>
                    <Link to={url}>
                        <MenuButton status={props.status}>
                            <ChatIcon />
                            <span>Atendimento</span>
                        </MenuButton>
                    </Link>
                </button>



                <button onClick={props.activeMenu}>
                    <Link>
                        <MenuButton status={props.status}>
                            <AntenaIcon />
                            <span>Área de Cobertura</span>
                        </MenuButton>
                    </Link>
                </button>



            </TopSide>
        </Container>
    )
}