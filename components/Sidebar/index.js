import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'
import * as S from './style'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    {/* <MenuLinks /> */}
  </S.SidebarWrapper>
)

export default Sidebar
