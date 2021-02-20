import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 25px #cf99db;
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  @media (max-width: 376px) {
    margin: auto;
    margin-top: 1.5rem;
    width: 50%;
    box-shadow: none;
  }
`
