import React from 'react'
import StickyBox from 'react-sticky-box'

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles'

export default function SideBar() {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="buscar no twitter" />
                <SearchIcon />
            </SearchWrapper>
            <StickyBox>
                <Body>


                </Body>
            </StickyBox>
        </Container>
    )
}