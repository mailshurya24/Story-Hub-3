import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity><Text>Read a book</Text></TouchableOpacity>
        </View>
      );
    }
  }
