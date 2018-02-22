import React from 'react';
import { StyleSheet, Text, View, AppRegistry,StatusBar, Platform} from 'react-native';
import Home from './src/components/Home';
import Chat from './src/components/Chat';

import {Router, Scene} from 'react-native-router-flux';


export default class App extends React.Component {
  render() {
    return (
        <View style={styles.flex }>
            <StatusBar hidden={true}/>
             <Router>
                 <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
                     <Scene key='home' component={Home} title='Home'  titleStyle={{alignSelf: 'center'}} />
                     <Scene key='chat' component={Chat} title='Chat'/>
                 </Scene>
             </Router>
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
    flex:{
        flex:1,
        backgroundColor: '#fff',
    }
});
