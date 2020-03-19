import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #222;
`;

export const AlbumHeader = styled.View`
  padding: 0 0 5px;
  align-items: center;
`;

export const BackImage = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 320px;
  opacity: 0.2;
`;

export const Image = styled.Image`
  width: 225px;
  height: 225px;
  margin-top: 30px;
  border-radius: 8px;
`;

export const RandonBtn = styled.TouchableOpacity`
  background: #42b883;
  height: 50px;
  margin: 30px 40px;
  border-radius: 25px;

  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const ContentArea = styled.ScrollView``;

export const Song = styled.TouchableOpacity`
  margin-top: 5px;
  padding: 5px 20px;
`;

export const SongName = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const SongStatus = styled.View`
  flex-direction: row;
  margin-top: 3px;
  align-items: center;
`;

export const Author = styled.Text`
  color: #999;
`;

export const Explicit = styled.Text`
  background-color: #999;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 3px;
  padding: 0 3px;
  margin-right: 5px;
`;
