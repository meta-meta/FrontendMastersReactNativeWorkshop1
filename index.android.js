/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';

class ReactNativeTest1 extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodoVal: ''
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {
    this.setState({
      todos: [...this.state.todos, this.state.newTodoVal],
      newTodoVal: ''
    });
    Vibration.vibrate(10);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.newTodoVal}
                   style={styles.input}
                   onSubmitEditing={this.handleAddTodo}
                   blurOnSubmit={false}
                   returnKeyType="next"
                   placeholder="todo:"
                   onChangeText={txt => this.setState({newTodoVal: txt})}/>
        <TouchableOpacity onPress={this.handleAddTodo}
                            activeOpacity={1}
        >
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
        {this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    fontSize: 20,
    textAlign: 'left',
    width: 300,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    width: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeTest1', () => ReactNativeTest1);
