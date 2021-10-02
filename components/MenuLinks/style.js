import styled from 'styled-components'

export const MenuLinksWrapper = styled.nav`
  margin-top: 50px;
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #BD91DE;
  }
`

export const MenuLinksLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #BD91DE;
  }
`
