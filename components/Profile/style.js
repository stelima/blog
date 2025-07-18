import styled from 'styled-components'

export const Profile = styled.div`
  .avatar {
    border: 4px solid #BD91DE;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: auto;
    transition: .5s;

      &:hover {
      transform: scale(1.1);
      }

      img {
        border-radius: 50%;
        width: 100%;
        object-fit: cover;
      }
  }

  h1 {
    margin-bottom: 0;
  }

  p {
    font-size: 20px;
    font-family: 'Faustina', serif;
    margin: 10px 0;
  }
`
