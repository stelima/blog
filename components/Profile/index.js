import Image from 'next/image'
import photo from '../../public/profile_photo.jpg'
import * as S from './style'

const Profile = () => {
  return (
    <S.Profile>
      <div className='avatar'>
        <Image src={photo} alt='imagem' width='100%' height={150}/>
      </div>
      <h1>Stefanie Lima</h1>
      <p>Front-end Developer</p>
    </S.Profile>
  )
}

export default Profile
