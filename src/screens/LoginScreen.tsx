import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Logo = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  margin: 8px 0;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  margin: 16px 0;
  border-radius: 8px;
  background-color: #007bff;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Usuário:', username);
    console.log('Senha:', password);
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Image source={require('../../assets/pets.png')} style={{ width: 200, height: 200 }} />
      <Logo>Pet Geolocalização</Logo>
      <Input
        placeholder="Nome de usuário"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </Button>
      <TouchableOpacity>
        <Text>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Cadastre-se</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default LoginScreen;
