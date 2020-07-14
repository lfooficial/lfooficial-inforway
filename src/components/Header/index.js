import React from 'react'
import {
    Container,
    Head,
    Logo,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    MenuLink,
    AreaUserIcon,
    } from './styles'

export default function Header() {
    return (
        <Container>
            <Head>
                <Logo>
                <img src="http://www.inforwaynet.com.br/mkfiles/logo.jpg" alt="" />
                </Logo>
            </Head>
            <SearchWrapper>
                <SearchInput placeholder="buscar na inforway" />
                <SearchIcon />
                <a href="http://www.inforwaynet.com.br/central/login.php"><MenuLink>
                    <AreaUserIcon />
                    <p>ÁREA DO CLIENTE</p>
                </MenuLink></a>
            </SearchWrapper>
        </Container>
    )
}
