import styled from 'styled-components/native';

export const Container = styled.View`
  background: #333;
  height: 70px;
  border-top-width: 1px;
  border-top-color: #fff;
`;

export const SubContainer = styled.View`
  flex-direction: row;
`;

export const ScreenGroup = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
`;

export const ScreenName = styled.Text`
  color: #fff;
  font-size: 12px;
`;
