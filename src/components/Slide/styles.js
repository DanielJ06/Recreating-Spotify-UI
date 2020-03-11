import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
`;

export const SlideScroll = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})``;
