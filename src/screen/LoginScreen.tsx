import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../assets/logo.png')}
          resizeMode="contain"
          style={styles.logoImage}
        />
        <Text style={styles.HeaderText}>Astro Chat</Text>
        <Text>Your Cosmic Companion</Text>
      </View>
      <View style={styles.LoginPane}>
        <Text style={styles.LoginHeaderText}>Welcome Back</Text>
        <Text style={styles.LoginText}>Sign in to continue your journey</Text>
        <View>
          {/* <IconButton icon="camera" size={30} /> */}
          <TextInput style={styles.Email}>E-mail</TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EDFE',
  },
  wrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
  },
  logo: {
    alignItems: 'center',
    margin: 10,
    padding: 3,
  },
  logoImage: {
    width: 250,
    height: 250,
  },
  HeaderText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  LoginPane: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#d7d7d7',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
  },
  LoginHeaderText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey',
    marginTop: 2,
  },
  LoginText: { marginTop: 10, color: 'grey' },
  Email: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#d7d7d7',
    color: 'grey',
    borderRadius: 10,
  },
});

export default LoginScreen;
