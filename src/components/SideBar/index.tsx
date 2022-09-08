import StickyBox from 'react-sticky-box';

import { List } from '../List';
import { FollowSuggestion } from '../FollowSuggestion';
import { News } from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';


export function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Ricardo Nunes"
                nickname="@ricardonunes"
              />,
              <FollowSuggestion
                name="Wanderson Nunes"
                nickname="@wandersonnunes"
              />,
              <FollowSuggestion
                name="Alexandre Nunes"
                nickname="@alexandrenunes"
              />
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}