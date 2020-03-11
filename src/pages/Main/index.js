import React from 'react';

import {Container, SlideView} from './styles';
import Slide from '../../components/Slide';

import {loadContent} from '../../services/api';

const Slides = loadContent();

export default function Main() {
  return (
    <Container>
      <SlideView>
        {Slides.map(slide => (
          <Slide key={slide.title} data={slide} />
        ))}
      </SlideView>
    </Container>
  );
}
