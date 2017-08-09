import  React, { Component } from 'react';
import { View } from 'react-native';
import { firebase } from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  ComponentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDs0rhZD83vkNmnsqwie3zQ36Vj7UNgPBo",
      authDomain: "auth-react-native-1b5e1.firebaseapp.com",
      databaseURL: "https://auth-react-native-1b5e1.firebaseio.com",
      projectId: "auth-react-native-1b5e1",
      storageBucket: "auth-react-native-1b5e1.appspot.com",
      messagingSenderId: "939225684598"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
