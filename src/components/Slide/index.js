import React from 'react';

import {Container, Title, SlideScroll} from './styles';
import Card from '../Card';

export default function Slide({data}) {
  return (
    <>
      <Container>
        <Title>{data.title}</Title>
        <SlideScroll>
          {data.itens.map(item => (
            <Card key={item.photo} data={item} />
          ))}
        </SlideScroll>
      </Container>
    </>
  );
}
