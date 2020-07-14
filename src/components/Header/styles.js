import styled, {css} from 'styled-components'

import {
  Search,
  User
} from '../../styles/Icon'

export const Container = styled.div`
position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
width: 100%;
height: 110px;
background: var(--whiteGround);
display: flex;
justify-content: space-around;
align-items: center;
border-bottom: 1px solid var(--gray);
`

export const Head = styled.div`
display: flex;
justify-content: center;
`


export const Logo = styled.div`

img{
    padding: 10px;
    width: 156px;
}
`
export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  max-height: 57px;
  position: relative;
  display: flex;
  align-items: center;
  a{
      list-style: none;
      text-decoration: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px  0 52px;
  border-radius:  19.5px;
  background: var(--site-light-hover);
  &::placeholder{
    color: var(--black);
  }
  z-index: 1;
  transition: 180ms ease-in-out;
  outline: 0;
  &:focus{
    border: 1px solid var(--black);
    svg{
      fill: var(--site);
    }
  }
`;
  
export const SearchIcon = styled(Search)`
position: absolute;
top: 17px;
left: 33px;
z-index: 2;
width: 27px;
height: 27px;
fill: var(--black);
`;
    


export const MenuLink = styled.div`
display: none;
@media(min-width: 500px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    p{
      display: inline;
      color: var(--black);
      font-size: 16px;
      margin-left: 4px;
    }
    cursor: pointer;
    &:hover,
    &.active {
        border:1px solid var(--site);
        border-radius: 19.5px;
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
  width: 50px;
  height: 50px;
  fill: var(--black);
  &:hover,
    &.active {
        fill: var(--site-dark-hover);
    }
`;

export const AreaUserIcon = styled(User)`${iconCSS}`