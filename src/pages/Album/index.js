import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BackImage,
  Image,
  AlbumHeader,
  RandonBtn,
  BtnText,
  ContentArea,
  Song,
  SongName,
  SongStatus,
  Author,
  Explicit,
} from './styles';

export default function Album() {
  return (
    <Container>
      <AlbumHeader>
        <BackImage
          blurRadius={2}
          source={{
            uri:
              'https://images.squarespace-cdn.com/content/v1/5c59e40aca525b64b679f4da/1554101775167-44XROIIQCQ9RER67ZL26/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Talking+Feds_Square+Podcast+Thumbnail.png?format=300w',
          }}
        />
        <Image
          source={{
            uri:
              'https://images.squarespace-cdn.com/content/v1/5c59e40aca525b64b679f4da/1554101775167-44XROIIQCQ9RER67ZL26/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/Talking+Feds_Square+Podcast+Thumbnail.png?format=300w',
          }}
        />

        <RandonBtn>
          <BtnText>Shuffle play</BtnText>
        </RandonBtn>
      </AlbumHeader>
      <ContentArea>
        <Song>
          <SongName>Yeah rigth</SongName>
          <SongStatus>
            <Icon color="#42b883" name="play-for-work" size={15} />
            <Author>JOJI</Author>
          </SongStatus>
        </Song>
        <Song>
          <SongName>Circles</SongName>
          <SongStatus>
            <Icon color="#42b883" name="play-for-work" size={15} />
            <Author>Post Malone</Author>
          </SongStatus>
        </Song>
        <Song>
          <SongName>No option</SongName>
          <SongStatus explicit>
            <Explicit>explicit</Explicit>
            <Icon color="#42b883" name="play-for-work" size={15} />
            <Author>Post Malone</Author>
          </SongStatus>
        </Song>
        <Song>
          <SongName>R U Mine</SongName>
          <SongStatus>
            <Icon color="#42b883" name="play-for-work" size={15} />
            <Author>Arctic Monkeys</Author>
          </SongStatus>
        </Song>
      </ContentArea>
    </Container>
  );
}
