import styled from 'styled-components'
import {
  Search
} from '../../styles/Icon'

export const Container = styled.div`
display: none;
@media(min-width: 1000px){
  display:  flex;
  flex-direction:  column;
  width: min(399px, 100%);
  background: var(--whiteGround);
}
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  position: relative;
  top: 0;
  z-index: 1;
  max-height: 57px;
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
    border: 1px solid var(--site);
    svg{
      fill: var(--site);
    }
  }
`;
  
export const SearchIcon = styled(Search)`
width: 27px;
height: 27px;
fill: var(--gray);
`;
  
export const Body = styled.div`
  display:  flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;
  div + div{
    margin-top: 15px;
  }
`;