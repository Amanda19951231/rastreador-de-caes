import { Feather } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const BottomTab = styled.View`
  position: absolute;
  bottom: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #007bff;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleQRCodeRecognition = () => {
    navigation.navigate('QRCodeRecognition');
  };

  return (
    <Container>
      <Text>Olá, usuário!</Text>
      <BottomTab>
        <AddButton onPress={handleQRCodeRecognition}>
          <Feather name="plus" size={32} color="#fff" />
        </AddButton>
      </BottomTab>
    </Container>
  );
};

export default HomeScreen;