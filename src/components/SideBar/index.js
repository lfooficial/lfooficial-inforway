import React from 'react'
import StickyBox from 'react-sticky-box'
import ImgTesteSpeed from '../../assets/img/speedtest.jpg'

import {
    Container,
    Body,
} from './styles'

export default function SideBar() {
    return (
        <Container>
            <StickyBox>
                <Body>
                    <img src={ImgTesteSpeed} alt=""/>
                </Body>
            </StickyBox>
        </Container>
    )
}