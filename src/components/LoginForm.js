import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            autoCorrect={false}
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })} />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            autoCorrect={false}
            secureTextEntry
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })} />
        </CardSection>

        <CardSection>
          <Button buttonText={'Log In'}/>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
