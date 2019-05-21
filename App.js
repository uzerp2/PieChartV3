// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });









////////////////////////////////////////////////////////////////////////////////////////////////////////
// итог

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import PieChart from './src/PieChartSrc/PieChart';

export default class App extends React.Component {
  state = {
    data: [
      { value: 12, color: '#2196F3' },
      { value: 12, color: '#8BC34A' },
      { value: 8, color: '#f44336' },
      { value: 4, color: '#FF9800' },
    ],
  };

  randomize = () => {
    const { data } = this.state;

    this.setState({
      data: data.map(slice => ({
        value: Math.random() + 0.1,
        color: slice.color,
      })),
    });
  };

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <PieChart
          style={styles.chart}
          strokeColor={'white'}
          strokeWidth={4}
          data={data}
        />
        <Button title="Press to randomize" onPress={this.randomize} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});
