import styled from 'styled-components'

export const Profile = styled.div`
.avatar {
  border: 4px solid #BD91DE;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  margin: auto;
  transition: .5s;
    &:hover {
    transform: scale(1.1);
    }
    img {
      border-radius: 50%;
    }
}
`
