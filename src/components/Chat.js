import React from 'react';
import {View, Text, } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat'

class Chat extends React.Component{

    state = {
        messages : [],

    };

    render(){

        return(
            <View>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => {
                        //send to backend
                    }}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        )


    }

}


Chat.defaultProps = {
    names: 'User',
};

export default Chat;