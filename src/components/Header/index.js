import React from 'react'
import {
    Container,
    Head,
    Logo,
    } from './styles'

export default function Header() {
    return (
        <Container>
            <Head>
                <Logo>
                <img src="http://www.inforwaynet.com.br/mkfiles/logo.jpg" alt="" />
                </Logo>
            </Head>
        </Container>
    )
}
