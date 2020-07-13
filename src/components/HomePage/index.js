import React from 'react'

import MenuBar from '../MenuBar'
import Header from '../Header'

import {
    Container,
    Wrapper
} from './styles'

export default function HomePage() {
    return (
        <Container>
            <Wrapper>
                <Header />
                <MenuBar />
            </Wrapper>
        </Container>
    )
}