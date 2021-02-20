import styled from 'styled-components'

export const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 1366px;
  min-height: 100vh;
  background-color: #e5e5e5;
  color: white;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 7rem;

  &::before {
    content: '';
    display: 'block';
    background: linear-gradient(360deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
      url('img/background.jpg') no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
    gap: 5rem;
  }

  @media (max-width: 376px) {
    display: flex;
    padding: 2rem;
    gap: 0;
    background: linear-gradient(360deg, #130525 50%, rgba(105, 57, 153, 0) 100%),
      url('img/back-mobile.jpg') no-repeat center 0px;
  }
`
export const Content = styled.section`
  margin-top: 8.5rem;
  @media (max-width: 376px) {
    margin: auto;
    background: #faf5ff;
    border-radius: 0.5rem;
    width: 100%;
    text-align: center;
    height: 55vh;
  }
`

export const Form = styled.form`
  max-width: 16rem;
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    max-width: none;
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
`
export const FieldsContainer = styled.div`
  @media (max-width: 376px) {
    height: 12rem;
  }
`

export const Title = styled.h1`
  font-weight: 400;
  font-size: 2.5rem;
  color: #383e71;
  @media (max-width: 376px) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
`

export const Sub = styled.p`
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  font-size: 1rem;
  color: #989fdb;
  font-weight: 600;
  @media (max-width: 376px) {
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }
`
export const LostPass = styled.p`
  text-align: center;
  color: #989fdb;
  padding: 2rem 1rem;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  & > a {
    color: #9626ac;
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 376px) {
    color: #fff;
    & > a {
      color: #fff;
    }
  }
`
