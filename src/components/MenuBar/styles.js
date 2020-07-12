import styled, { css } from 'styled-components'

import {
    Home,
    Notifications,
    Chat,
} from '../../styles/Icon'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: var(--black);
  width: 100%;
  border-top: 2px solid var(--outline);
  @media(min-width: 500px){
      bottom: unset;
      top: 0;
  }
`

export const MenusLink = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));
  p{
      display: none;

  }
  @media(min-width: 500px){
      &:first-child{
          margin-left: 50px;
      }
      &:last-child{
          margin-right: 50px;
      }
  }
`


export const MenuLink = styled.div`
@media(min-width: 500px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
      display: inline;
      color: var(--site);
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
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  fill: var(--site);
`;

export const HomeIcon = styled(Home)`${iconCSS}`


export const PlanosIcon = styled(Notifications)`${iconCSS}`


export const ChatIcon = styled(Chat)`${iconCSS}`


export const AreaUserIcon = styled(Home)`${iconCSS}`
