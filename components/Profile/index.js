import Image from 'next/image'
import photo from '../../public/photo.png'
import * as S from './style'

const Profile = () => {
  return (
    <S.Profile>
      <div className='avatar'>
        <Image src={photo} alt='imagem' className='aaa' width={150} height={150}/>
      </div>
      <h1>Stefanie Lima</h1>
      <p>Front-end Developer</p>
    </S.Profile>
  )
}

export default Profile
