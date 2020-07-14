import styled from 'styled-components'

export const Container = styled.div`
  background: var(--whiteGround);
`
export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  @media(min-width: 500px){
      margin-top: 110px;
  }
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: var(--whiteGround);
  margin-top: 110px;
  width: min(601px, 100%);
  @media (min-width: 500px) {
    margin-top: unset;
    border-left: 1px solid var(--gray);
    border-right: 1px solid var(--gray);
  }
`