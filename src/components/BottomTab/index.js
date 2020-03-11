import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {Container, ScreenGroup, ScreenName, SubContainer} from './styles';

export default function BottomTab() {
  const [iconPreset] = useState({
    color: '#fff',
    size: 23,
  });

  return (
    <Container>
      <SubContainer>
        <ScreenGroup>
          <Icon name="home" {...iconPreset} />
          <ScreenName>Home</ScreenName>
        </ScreenGroup>
        <ScreenGroup>
          <Icon name="search" {...iconPreset} />
          <ScreenName>Search</ScreenName>
        </ScreenGroup>
        <ScreenGroup>
          <Icon name="book-open" {...iconPreset} />
          <ScreenName>Your Library</ScreenName>
        </ScreenGroup>
      </SubContainer>
    </Container>
  );
}
