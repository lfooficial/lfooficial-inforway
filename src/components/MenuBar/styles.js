import styled, { css } from 'styled-components'

import {
    Home,
    BookOpen,
    Chat,
    User,
    Menu
} from '../../styles/Icon'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: var(--whiteGround);
  width: 100%;
  border-top: 1px solid var(--outline);
  @media(min-width: 500px){
      bottom: unset;
      top: 110px;
  }
`

export const MenusLink = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));
  @media(min-width: 500px){
      &:first-child{
          margin-left: 10px;
      }
      &:last-child{
          margin-right: 10px;
      }
  }
`


export const MenuLink = styled.div`
p{
    display: none;
}
@media(min-width: 500px){
    &:first-child{
        display: none;
    }
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p{
      display: inline;
      color: var(--black);
      font-size: 13px;
      margin-left: 4px;
    }
    cursor: pointer;
    &:hover,
    &.active {
        p{
          color: var(--site-dark-hover);
        }
        svg{
            fill: var(--site-dark-hover);
        }
    }
}
@media(min-width: 750px){
    p{font-size: 18px;}
}

@media(min-width: 1000px){
    p{font-size: 25px;}
}
`;

const iconCSS = css`
  width: 25px;
  height: 25px;
  fill: var(--black);
  &:hover,
    &.active {
        fill: var(--site-dark-hover);
    }
`;
export const MenuIcon = styled(Menu)`${iconCSS}`

export const HomeIcon = styled(Home)`${iconCSS}`

export const PlanosIcon = styled(BookOpen)`${iconCSS}`

export const ChatIcon = styled(Chat)`${iconCSS}`

export const AreaUserIcon = styled(User)`${iconCSS}`
