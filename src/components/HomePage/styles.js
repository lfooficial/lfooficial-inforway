import styled from 'styled-components'

export const Container = styled.div`
  background: var(--white);
`
export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media(min-width: 500px){
      margin-top: 152px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--whiteGround);
  
  width: min(601px, 100%);
  @media (min-width: 500px) {
    border-left: 1px solid var(--gray);
    border-right: 1px solid var(--gray);
  }
`