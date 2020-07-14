import styled from 'styled-components'

export const Container = styled.div`
display: none;
@media(min-width: 1000px){
  display:  flex;
  flex-direction:  column;
  width: min(399px, 100%);
  background: var(--whiteGround);
  position: relative;
}
`;
  
export const Body = styled.div`
  display:  flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;
  img{
      width: 100%;
  }
`;