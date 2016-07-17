import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }
  handlePress() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
        <View>
        <Text>Clicked {this.state.count} times</Text>
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Counter
