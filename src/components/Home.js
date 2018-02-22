import React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity, Keyboard} from 'react-native';

import {Router, Scene, Actions } from 'react-native-router-flux';

class Home extends React.Component{

    state = {
        name:''
    };

    render(){

            return(
                <View style={styles.view}>
                    <Text style={styles.title}>
                       Entre ton nom :
                    </Text>
                    <TextInput style={styles.input}
                    placeholder='Yohan Zenou'
                    onChangeText={(text)=>{
                        this.setState({
                            name:text,
                        });
                     }}
                   value={this.state.name}
                    />
                    <TouchableOpacity onPress={()=>{
                        //naviguer vers le 2 ecran en passant le nom
                        Keyboard.dismiss();
                        //alert(this.state.name);
                        Actions.chat({
                            names: this.state.name,
                        });

                    }} style={styles.button}>
                        <Text> Rejoindre le Chat ! </Text>
                    </TouchableOpacity>
                </View>
            )


    }

}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:20,
        paddingVertical:20
    },
    title:{
        marginTop:20,

        fontSize:20
    },
    input:{
        height:40,
        borderWidth:0,
        borderColor:'black',
        fontSize:18
    },button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginTop: 25
    }
});



export default Home;