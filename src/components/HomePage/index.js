import React from 'react'
import RoutesMain from '../../routes-main'

import MenuBar from '../MenuBar'
import Header from '../Header'
import NavBar from '../NavBar'

import {
    Container,
    Wrapper,
    Main,
} from './styles'


export default function HomePage() {
    return (
        <Container>
            <Header />
            <MenuBar />
            <Wrapper>
                <NavBar />
                <Main>
                   <RoutesMain />
                </Main>
            </Wrapper>
        </Container>
    )
}