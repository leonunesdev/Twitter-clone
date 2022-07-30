import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButtom,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';

export function MenuBar() {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButtom>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButtom>

        <MenuButtom>
          <BellIcon />
          <span>Notificaçôes</span>
        </MenuButtom>

        <MenuButtom>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButtom>

        <MenuButtom>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButtom>

        <MenuButtom className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButtom>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Leandro Nunes</strong>
          <span>@Leandro Nunes</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  )
}