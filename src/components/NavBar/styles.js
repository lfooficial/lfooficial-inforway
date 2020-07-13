import styled, {css} from 'styled-components'
import {
    PackageIcon,
    SettingsInputAntenna,
    ArrowLeft
}from '../../styles/Icon'

export const Container = styled.div`
display: none;
@media(min-width: 500px){
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  padding: 9px 19px 20px;
  max-height: 100vh;
  overflow-y: auto; 
  background: var(--whiteGround);
}
`


export const TopSide = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media(min-width: 1280px){
  align-items: flex-start;
}
`
export const MenuButton = styled.div`
display:  flex;
align-items: center;
flex-shrink: 0;
>span{
  display: none;
}
@media(min-width: 1280px){
  >span{
    display:  inline;
    margin-left: 19px;
    font-weight: bold;
    font-size: 19px;
  }
  padding-right: 15px;
}
padding: 8.25px 0;
outline: 0;
& + button{
  margin-top: 16.5px;
}
& + button:last-child{
  margin-top: 33px;
  width: 40px;
  height: 40px;
  >span{
    display: none;
  }
  @media(min-width: 1280px){
    width: 100%;
    height: unset;
    >span{
      display: inline;
    }
  }
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


export const BotSide = styled.div`
margin-top: 20px;
display:  flex;
align-items: center;
`

const iconCSS = css`
flex-shrink: 0;
width: 30px;
height: 30px;
color: var(--black);
`
    
export const PackIcon = styled(PackageIcon)`${iconCSS}`
    
export const AntenaIcon = styled(SettingsInputAntenna)`${iconCSS}`
    
export const ArrowLeftIcon = styled(ArrowLeft)`
display: none;
@media(max-width: 500px){
  display: inline-block;
  width: 25px;
  height: 25px;
  color: var(--white);
  margin-left: 30px;
  cursor: pointer;
  &:hover{
    >path{
      color: var(--like);
    }
  }
}
`
    