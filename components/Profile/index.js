import Image from 'next/image'
import photo from '../../public/photo.png'
import * as S from './style'

const Profile = () => {
  return (
    <S.Profile>
      <div className='avatar'>
        <Image src={photo} alt='imagem' className='aaa' width={130} height={130}/>
      </div>
      <h1>Stefanie Lima</h1>
      <h2>Front-end Developer</h2>
    </S.Profile>
  )
}

export default Profile
