import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;

    display: flex;
    align-items: center;
    justify-content: center;

    
  `

export const Content = styled.div`
 
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  min-height: 350px;
  box-shadow: 12px 12px 12px 12px rgba(148, 148, 148, 0.7);
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

`

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

`