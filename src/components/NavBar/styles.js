import styled, { css } from 'styled-components'
import {
    PackageIcon,
    SettingsInputAntenna
} from '../../styles/Icon'

export const Container = styled.div`
  width: 100%;
  display: ${props => props.status ? "inline": "none"};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 110px;
  left: 0;
  z-index: 1;
  padding: 9px 19px 20px;
  max-height: 100vh;
  overflow-y: auto; 
  background: var(--whiteGround);
@media(min-width: 500px){
    width: unset;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: unset;
}
`


export const TopSide = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-items: flex-start;
a{
  text-decoration: none;
  list-style: none;
  color: var(--black);
}

@media(min-width: 1280px){
  align-items: flex-start;
}
`
export const MenuButton = styled.div`
display:  flex;
align-items: center;
flex-shrink: 0;
span{
  display: ${props => props.status ? "inline": "none"};
  margin-left: 19px;
    font-weight: bold;
  font-size: 19px;
}
@media(min-width: 1280px){
  span{
    display:  inline;
    
  }
  padding-right: 15px;
}
padding: 8.25px 0;
outline: 0;
& + button{
  margin-top: 16.5px;
}
cursor: pointer;
border-radius: 25px;
&:hover, 
&:active{
  span, 
  svg{
    color: var(--site);
    fill: var(--site);
  }
}
`




const iconCSS = css`
flex-shrink: 0;
width: 30px;
height: 30px;
color: var(--black);
`

export const PackIcon = styled(PackageIcon)`${iconCSS}`

export const AntenaIcon = styled(SettingsInputAntenna)`${iconCSS}`