import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

export function ProfilePage() {
  return (
    <div>
      <Container>
        <Banner>
          <Avatar />
        </Banner>

        <ProfileData>
          <EditButton outlined>Editar perfil</EditButton>
          <h1>Leandro Nunes</h1>
          <h2>@Leandro</h2>

          <p>
            Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              Salvador, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 04 de novembro de 1999
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong>10</strong>
            </span>
            <span>
              <strong>25 </strong> seguidores
            </span>
          </Followage>
        </ProfileData>
      </Container>
    </div>
  )
}

