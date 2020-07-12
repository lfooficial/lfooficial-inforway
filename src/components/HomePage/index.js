import React from 'react'

import MenuBar from '../MenuBar'

import {
    Container,
    Wrapper
} from './styles'

export default function HomePage() {
    return (
        <Container>
            <Wrapper>
                <MenuBar />
            </Wrapper>
        </Container>
    )
}