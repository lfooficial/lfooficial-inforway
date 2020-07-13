import React, { useState } from 'react'
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

    const [state, setState] = useState(false)
    const [active, setActive] = useState(true)
    const [deactive, setDeactive] = useState(false)


    const activeMenu = () => {

        if (state) {
            setActive(true)
            setDeactive(false)
        } else {
            setActive(false)
            setDeactive(true)
        }
        setState(!state)
    }

    return (
        <Container>
            <Header />
            <MenuBar
                active={active}
                deactive={deactive}
                activeMenu={(state) => activeMenu(state)}
            />
            <Wrapper>
                <NavBar
                    status={deactive}
                    activeMenu={(state) => activeMenu(state)}
                />
                <Main>
                    <RoutesMain />
                </Main>
            </Wrapper>
        </Container>
    )
}