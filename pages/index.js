import styled from 'styled-components'

import Sidebar from '../components/Sidebar'

export default function Home () {
  return (
    <>
      {/* <Title>My page</Title> */}
      <Sidebar/>
    </>
  )
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
