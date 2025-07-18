import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'
import Skills from '../Skills'
import * as S from './style'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <Skills />
  </S.SidebarWrapper>
)

export default Sidebar
