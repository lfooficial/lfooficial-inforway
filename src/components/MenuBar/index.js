import React, {useState} from 'react'
import { 
    Container,
    MenusLink,
    MenuLink,
    MenuIcon,
    Menus,
    ArrowLeftIcon,
    HomeIcon,
    PlanosIcon,
    ChatIcon,
    AreaUserIcon,
 } from './styles'

export default function MenuBar() {
    const [state, setState] = useState(false)
    const [active, setActive] = useState(true)
    const [deactive, setDeactive] = useState(false)
    const activeMenu = () => {
        if(state){
            setActive(true)
            setDeactive(false)
        }else{
            setActive(false)
            setDeactive(true)
        }
        setState(!state)
    }

    return (
        <Container>
            <MenusLink>
                <MenuLink>
                    <Menus inline={[active, deactive]}>
                        <button className="active" onClick={activeMenu}><MenuIcon/></button>
                        <button className="deactive" onClick={activeMenu}><ArrowLeftIcon/></button>
                    </Menus>
                     </MenuLink>
                <MenuLink>
                    <HomeIcon />
                    <p>HOME</p>
                </MenuLink>
                <MenuLink>
                    <PlanosIcon />
                    <p>PLANOS</p>
                </MenuLink>
                <MenuLink>
                    <ChatIcon />
                    <p>ATENDIMENTO</p>
                </MenuLink>
                <MenuLink>
                    <AreaUserIcon />
                    <p>ÁREA DO CLIENTE</p>
                </MenuLink>
            </MenusLink>
        </Container>
    )
}