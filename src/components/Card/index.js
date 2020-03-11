import React from 'react';

import {Container, Banner, Title, Desc, DescContainer} from './styles';

export default function Card({data}) {
  return (
    <Container>
      <Banner source={{uri: data.photo}} />
      <DescContainer>
        <Title>{data.subtitle.title}</Title>
        <Desc>{data.subtitle.description}</Desc>
      </DescContainer>
    </Container>
  );
}
